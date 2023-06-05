import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SideBarProps {
  activeMenu: "overview" | "settings" | "transactions";
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            href="/member"
            img="overview"
            title="Overview"
            active={activeMenu === "overview"}
          />
          <MenuItem
            href="/member/transactions"
            img="transaction"
            title="Transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem
            href="/member"
            img="messages"
            title="Messages"
          />
          <MenuItem
            href="/member"
            img="card"
            title="Card"
          />
          <MenuItem
            href="/member"
            img="rewards"
            title="Rewards"
          />
          <MenuItem
            href="/member/edit-profile"
            img="setting"
            title="Settings"
            active={activeMenu === "settings"}
          />
          <MenuItem
            href="/member/sign-in"
            img="log-out"
            title="Log Out"
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
