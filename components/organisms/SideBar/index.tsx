import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        {/* kjasdlsajldjas */}
        <div className="menus">
          <MenuItem
            href="/member"
            img="overview"
            title="Overview"
            active
          />
          <MenuItem
            href="/member"
            img="transaction"
            title="Transactions"
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
            href="/member"
            img="setting"
            title="Settings"
          />
          <MenuItem
            href="/member"
            img="log-out"
            title="Log Out"
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
