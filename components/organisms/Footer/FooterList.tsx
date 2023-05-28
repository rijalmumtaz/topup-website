import { list } from "postcss";
import FooterLink from "./FooterLink";

interface FooterListProps {
  isLast: boolean;
  isSecond: boolean;
}
export default function FooterList(props: Partial<FooterListProps>) {
  const { isLast, isSecond } = props;
  if (isLast) {
    return (
      <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
        <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
        <ul className="list-unstyled">
          <FooterLink
            href="mailto: hi@store.gg"
            desc="hi@store.gg"
          />
          <FooterLink
            href="mailto: team@store.gg"
            desc="team@store.gg"
          />
          <FooterLink
            href="http://maps.google.com/?q=Pasific 12,
            Jakarta Selatan"
            desc="Pasific 12, Jakarta Selatan"
          />
          <FooterLink
            href="tel: 02111229090"
            desc="021 - 1122 - 9090"
          />
        </ul>
      </div>
    );
  }
  if (isSecond) {
    return (
      <div className="col-md-4 col-6 mb-lg-0 mb-25">
        <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
        <ul className="list-unstyled">
          <FooterLink
            href=""
            desc="Refund Policy"
          />
          <FooterLink
            href=""
            desc="Unlock Rewards"
          />
          <FooterLink
            href=""
            desc="Live Chatting"
          />
        </ul>
      </div>
    );
  }
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
      <ul className="list-unstyled">
        <FooterLink
          href=""
          desc="About Us"
        />
        <FooterLink
          href=""
          desc="Press Release"
        />
        <FooterLink
          href=""
          desc="Terms of Use"
        />
        <FooterLink
          href=""
          desc="Privacy & Policy"
        />
      </ul>
    </div>
  );
}
