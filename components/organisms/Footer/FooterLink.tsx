import Link from "next/link";

interface FooterLinkProps {
  href: string;
  desc: string;
}
export default function FooterLink(props: FooterLinkProps) {
  const { href, desc } = props;
  return (
    <li className="mb-6">
      <Link
        legacyBehavior
        href={href}
      >
        <a className="text-lg color-palette-1 text-decoration-none">{desc}</a>
      </Link>
    </li>
  );
}
