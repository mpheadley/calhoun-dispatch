"use client";

export default function EditionDate() {
  return (
    <span>
      {new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })}
    </span>
  );
}
