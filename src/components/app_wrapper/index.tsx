import { Link, Outlet, useLocation } from "react-router-dom";
import "./index.scss";
import { navdata } from "../../utils/datas.ts";

const AppWrapper = () => {
  const location = useLocation();
  return (
    <div className="app_wrapper">
      <div className="app_main">
        <Outlet />
      </div>

      {/* app navigation */}
      <nav className="bottom_nav_fixed">
        {navdata?.map((item: { url: string; icon: string }, idx: number) => {
          return (
            <Link
              key={idx}
              to={item?.url}
              className={location.pathname === item?.url ? "active" : ""}
            >
              <img src={item?.icon} alt="nav_icon" />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default AppWrapper;
