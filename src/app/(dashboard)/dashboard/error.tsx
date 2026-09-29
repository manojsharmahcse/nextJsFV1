"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-6">
      <p>Something went wrong.</p>
      <button className="mt-2 underline" onClick={reset}>Try again</button>
    </div>
  );
}
