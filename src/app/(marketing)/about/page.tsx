import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn who we are and what we do.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us",
    description: "Learn who we are and what we do.",
    images: ["/og/about.jpg"],
  },
};
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">About</h1>
    </div>
  );
}
