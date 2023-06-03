import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

interface MenuItemProps {
  title: string;
  href: string;
  img:
    | "overview"
    | "transaction"
    | "messages"
    | "card"
    | "rewards"
    | "setting"
    | "log-out";
  active?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, href = "/member", img, active } = props;

  const classMenuItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });

  return (
    <div className={classMenuItem}>
      <div className="icon me-3">
        <Image
          src={`/icon/ic-menu-${img}.svg`}
          width={25}
          height={25}
          alt="overview"
        />
      </div>
      <p className="item-title m-0">
        <Link
          legacyBehavior
          href={href}
        >
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
