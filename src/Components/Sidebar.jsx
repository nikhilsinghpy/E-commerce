import React, { useState } from 'react';

const Sidebar = () => {
  // State to manage collapse for each section
  const [isHomeOpen, setHomeOpen] = useState(true);
  const [isDashboardOpen, setDashboardOpen] = useState(true);
  const [isOrdersOpen, setOrdersOpen] = useState(true);
  const [isAccountOpen, setAccountOpen] = useState(true);

  return (
      <div className="flex-shrink-0 p-3 my-style sidebar-container">
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
        >
          <svg className="bi pe-none me-2" width="30" height="24">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-5 fw-semibold">Categories</span>
        </a>

        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
              onClick={() => setHomeOpen(!isHomeOpen)}
              aria-expanded={isHomeOpen}
            >
           <h3>Home</h3>   
            </button>
            <div className={`collapse ${isHomeOpen ? 'show' : ''}`} id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
              onClick={() => setDashboardOpen(!isDashboardOpen)}
              aria-expanded={isDashboardOpen}
            >
              <h3>Dashboard</h3>
            </button>
            <div className={`collapse ${isDashboardOpen ? 'show' : ''}`} id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Weekly
                  </a>
                </li>
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Monthly
                  </a>
                </li>
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Annually
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
              onClick={() => setOrdersOpen(!isOrdersOpen)}
              aria-expanded={isOrdersOpen}
            >
             <h3>Orders</h3> 
            </button>
            <div className={`collapse ${isOrdersOpen ? 'show' : ''}`} id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    New
                  </a>
                </li>
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Processed
                  </a>
                </li>
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Shipped
                  </a>
                </li>
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Returned
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="border-top my-3"></li>

          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
              onClick={() => setAccountOpen(!isAccountOpen)}
              aria-expanded={isAccountOpen}
            >
              <h3>Account</h3>
            </button>
            <div className={`collapse ${isAccountOpen ? 'show' : ''}`} id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    New...
                  </a>
                </li>
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
  );
};

export default Sidebar;
