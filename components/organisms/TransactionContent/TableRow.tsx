import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface TableRowProps {
  image: string;
  title: string;
  category: "Mobile" | "Desktop";
  item: number;
  price: number;
  status: "Pending" | "Success" | "Failed";
}

export default function TableRow(props: TableRowProps) {
  const { image, title, category, item, price, status } = props;

  const statusClass = cx({
    "float-start": true,
    "icon-status": true,
    pending: status === "Pending",
    failed: status === "Failed",
    success: status === "Success",
  });

  return (
    <tr
      data-category="pending"
      className="align-middle"
    >
      <th scope="row">
        <Image
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width={80}
          height={60}
          alt="game thumb"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">Rp {price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <Link
          legacyBehavior
          href="/member/transactions/detail"
        >
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
      </td>
    </tr>
  );
}
