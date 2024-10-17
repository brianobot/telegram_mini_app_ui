import { Link, Outlet, useLocation } from "react-router-dom";
import "./index.scss";
import { navdata } from "../../utils/datas";

const AppWrapper = () => {
  const location = useLocation();
  return (
    <div className="app_wrapper">
      <Outlet />

      {/* app navigation */}
      <nav className="bottom_nav_fixed">
        {navdata?.map((item, idx) => {
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
