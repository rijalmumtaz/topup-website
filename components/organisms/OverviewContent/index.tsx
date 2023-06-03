import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category
                nominal={18500000}
                icon="desktop"
              >
                Game
                <br />
                Desktop
              </Category>

              <Category
                nominal={18500000}
                icon="mobile"
              >
                Game
                <br />
                Mobile
              </Category>
              <Category
                nominal={18500000}
                icon="desktop"
              >
                Others
                <br />
                Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th
                    className="text-start"
                    scope="col"
                  >
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow />
                <tr className="align-middle text-center">
                  <th scope="row">
                    <img
                      className="float-start me-3 mb-lg-0 mb-3"
                      src="/img/overview-2.png"
                      width="80"
                      height="60"
                      alt=""
                    />
                    <div className="game-title-header">
                      <p className="game-title fw-medium text-start color-palette-1 m-0">
                        Call of Duty:Modern
                      </p>
                      <p className="text-xs fw-normal text-start color-palette-2 m-0">
                        Desktop
                      </p>
                    </div>
                  </th>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">
                      550 Gold
                    </p>
                  </td>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">
                      Rp 740.000
                    </p>
                  </td>
                  <td>
                    <div>
                      <span className="float-start icon-status success"></span>
                      <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        Success
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="align-middle text-center">
                  <th scope="row">
                    <img
                      className="float-start me-3 mb-lg-0 mb-3"
                      src="/img/overview-3.png"
                      width="80"
                      height="60"
                      alt=""
                    />
                    <div className="game-title-header">
                      <p className="game-title fw-medium text-start color-palette-1 m-0">
                        Clash of Clans
                      </p>
                      <p className="text-xs fw-normal text-start color-palette-2 m-0">
                        Mobile
                      </p>
                    </div>
                  </th>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">
                      100 Gold
                    </p>
                  </td>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">
                      Rp 120.000
                    </p>
                  </td>
                  <td>
                    <div>
                      <span className="float-start icon-status failed"></span>
                      <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        Failed
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="align-middle text-center">
                  <th scope="row">
                    <img
                      className="float-start me-3 mb-lg-0 mb-3"
                      src="/img/overview-4.png"
                      width="80"
                      height="60"
                      alt=""
                    />
                    <div className="game-title-header">
                      <p className="game-title fw-medium text-start color-palette-1 m-0">
                        The Royal Game
                      </p>
                      <p className="text-xs fw-normal text-start color-palette-2 m-0">
                        Mobile
                      </p>
                    </div>
                  </th>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">
                      225 Gold
                    </p>
                  </td>
                  <td>
                    <p className="fw-medium text-start color-palette-1 m-0">
                      Rp 200.000
                    </p>
                  </td>
                  <td>
                    <div>
                      <span className="float-start icon-status pending"></span>
                      <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        Pending
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
