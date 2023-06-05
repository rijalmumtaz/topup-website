import Image from "next/image";
import { ReactNode } from "react";
import cx from "classnames";

interface HeaderProps {
  image: string;
  children: ReactNode;
  category: "Desktop" | "Mobile";
  status: "Pending" | "Success" | "Failed";
}

export default function Header(props: HeaderProps) {
  const { image, children, category, status } = props;

  const statusClass = cx({
    "fw-medium text-center label m-0 rounded-pill": true,
    pending: status === "Pending",
    success: status === "Success",
    failed: status === "Failed",
  });

  return (
    <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
      <div className="game-checkout d-flex flex-row align-items-center">
        <div className="pe-4">
          <div className="cropped">
            <Image
              src={`/img/${image}.png`}
              width={200}
              height={130}
              className="img-fluid"
              alt="Game Thumb"
            />
          </div>
        </div>
        <div>
          <p className="fw-bold text-xl color-palette-1 mb-10">{children}</p>
          <p className="color-palette-2 m-0">Category: {category}</p>
        </div>
      </div>
      <div>
        <p className={statusClass}>{status}</p>
      </div>
    </div>
  );
}
