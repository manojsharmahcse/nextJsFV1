import type { ButtonHTMLAttributes } from "react";

export default function Button({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-md bg-black px-4 py-2 text-white hover:opacity-90 disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
