import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/orders", label: "Orders" },
  { href: "/dashboard/profile", label: "Profile" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-56 border-r p-4">
      <nav className="flex flex-col gap-2">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="rounded px-3 py-2 hover:bg-gray-100">
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
