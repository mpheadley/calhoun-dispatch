#!/usr/bin/env python3
"""
gt-image.py — Green Tomato image generator with mandatory pre-flight validation.

Wraps ~/Developer/webdev/tools/generate-image.py and refuses to generate if the
prompt fails GT's required aesthetic, trademark, or diversity checks.

Usage:
  python3 scripts/gt-image.py "Small-town newspaper photograph. ..."
  python3 scripts/gt-image.py "..." --model gpt --output public/images/articles/slug/

Options mirror generate-image.py. Model defaults to gpt (GT standard).

Exit codes:
  0 — generated successfully
  1 — validation failed (prompt printed with issues annotated)
  2 — downstream generator error
"""

import argparse
import re
import subprocess
import sys
from pathlib import Path


# ---------------------------------------------------------------------------
# Check 1: Required aesthetic markers
# All three must appear in every GT article image prompt.
# ---------------------------------------------------------------------------

REQUIRED_MARKERS = [
    (
        r"wire[\s-]service\s+photograph|small[\s-]town\s+newspaper\s+photograph",
        '"Wire service photograph" or "Small-town newspaper photograph"',
    ),
    (
        r"photojournalistic\s+grain",
        '"Photojournalistic grain"',
    ),
    (
        r"blown[\s-]out\s+highlights",
        '"Slightly blown-out highlights" (or "blown-out highlights")',
    ),
]

# ---------------------------------------------------------------------------
# Check 2: Forbidden real brand names
# These must always be altered before use in a prompt.
# ---------------------------------------------------------------------------

REAL_BRANDS = [
    ("Dollar General", "Dolla General"),
    ("Walmart", "Wal-Mart Supercenter (partially obscured)"),
    ("Wal-Mart", "Wal-Mart Supercenter (partially obscured)"),
    ("McDonald's", "McDonalds (misspelled)"),
    ("Chick-fil-A", "Chik-Fil-A"),
    ("Chick fil A", "Chik-Fil-A"),
    ("NASCAR", "NASKAR"),
    ("Waffle House", "Waffle Haus"),
    ("Dollar Tree", "Dolla Tree"),
    ("Family Dollar", "Family Dolla"),
    ("Home Depot", "Home Depo"),
    ("Lowe's", "Lowes Hardware"),
    ("AutoZone", "Auto Zone (generic)"),
    ("CVS", "CVS Pharmcy"),
    ("Walgreens", "Walgreen's (misspelled)"),
    ("Wendy's", "Wendys (misspelled)"),
    ("Burger King", "Burger Kng"),
    ("Subway", "Sub Way"),
    ("Applebee's", "Applebees"),
    ("Cracker Barrel", "Cracker Barrell"),
    ("Starbucks", "Starbux"),
]

# ---------------------------------------------------------------------------
# Check 3: Non-GPT model warning
# Flux and Imagen are allowed but trigger a warning.
# ---------------------------------------------------------------------------

GT_STANDARD_MODEL = "gpt"


def check_aesthetic_markers(prompt: str) -> list[str]:
    errors = []
    for pattern, label in REQUIRED_MARKERS:
        if not re.search(pattern, prompt, re.IGNORECASE):
            errors.append(f"  MISSING: {label}")
    return errors


def check_trademarks(prompt: str) -> list[str]:
    errors = []
    for brand, replacement in REAL_BRANDS:
        if re.search(re.escape(brand), prompt, re.IGNORECASE):
            errors.append(f'  REAL BRAND: "{brand}" → use "{replacement}" instead')
    return errors


def check_model(model: str) -> list[str]:
    if model != GT_STANDARD_MODEL:
        return [
            f"  NON-STANDARD MODEL: --model {model} (GT standard is gpt). "
            "Proceed only if this is an intentional experiment."
        ]
    return []


def validate(prompt: str, model: str, skip_model_check: bool = False) -> tuple[bool, list[str]]:
    issues: list[str] = []

    aesthetic_errors = check_aesthetic_markers(prompt)
    if aesthetic_errors:
        issues.append("AESTHETIC MARKERS — all three are required in every GT prompt:")
        issues.extend(aesthetic_errors)

    trademark_errors = check_trademarks(prompt)
    if trademark_errors:
        issues.append("TRADEMARK VIOLATIONS — alter these before generating:")
        issues.extend(trademark_errors)

    if not skip_model_check:
        model_warnings = check_model(model)
        if model_warnings:
            issues.append("MODEL WARNING:")
            issues.extend(model_warnings)

    # Aesthetic + trademark failures are hard blocks. Model is a soft warning.
    hard_failures = bool(aesthetic_errors or trademark_errors)
    return (not hard_failures), issues


def main():
    parser = argparse.ArgumentParser(
        description="GT-validated image generator. Wraps tools/generate-image.py."
    )
    parser.add_argument("prompt", help="Image prompt (must pass GT aesthetic + trademark checks)")
    parser.add_argument("--model", "-m", default=GT_STANDARD_MODEL,
                        choices=["gpt", "flux", "imagen", "mspaint"],
                        help="Model (default: gpt — GT standard)")
    parser.add_argument("--output", "-o", default=None,
                        help="Output directory (passed through to generate-image.py)")
    parser.add_argument("--width", "-W", type=int, default=1024)
    parser.add_argument("--height", "-H", type=int, default=1024)
    parser.add_argument("--image", "-i", default=None, help="Reference image path (GPT only)")
    parser.add_argument("--skip-model-check", action="store_true",
                        help="Suppress the non-GPT model warning")
    parser.add_argument("--force", action="store_true",
                        help="Skip validation and generate anyway (use only if you know why)")
    args = parser.parse_args()

    if not args.force:
        passed, issues = validate(args.prompt, args.model, args.skip_model_check)

        if issues:
            print("\n" + "=" * 60)
            print("GT IMAGE PRE-FLIGHT FAILED")
            print("=" * 60)
            for line in issues:
                print(line)
            print()
            print("Prompt received:")
            print(f"  {args.prompt}")
            print()
            if not passed:
                print("Fix the issues above, then re-run.")
                print("(Use --force to bypass — only if you understand the risk.)")
                sys.exit(1)
            else:
                # Soft warnings only — ask before continuing
                print("These are warnings, not hard blocks.")
                answer = input("Continue anyway? [y/N] ").strip().lower()
                if answer != "y":
                    print("Aborted.")
                    sys.exit(0)

    generator = Path(__file__).parent.parent.parent / "tools" / "generate-image.py"
    if not generator.exists():
        # Try the absolute path from the global install location
        generator = Path.home() / "Developer" / "webdev" / "tools" / "generate-image.py"
    if not generator.exists():
        print(f"Error: generate-image.py not found at {generator}")
        sys.exit(2)

    cmd = [sys.executable, str(generator), args.prompt, "--model", args.model,
           "--width", str(args.width), "--height", str(args.height)]
    if args.output:
        cmd += ["--output", args.output]
    if args.image:
        cmd += ["--image", args.image]

    result = subprocess.run(cmd)
    sys.exit(result.returncode)


if __name__ == "__main__":
    main()
