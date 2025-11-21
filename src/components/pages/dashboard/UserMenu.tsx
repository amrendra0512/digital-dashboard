import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const user = useSelector((s) => s.auth?.user);
  console.log("user", user);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="user-menu" ref={menuRef}>
      {/* Avatar Box */}
      <div className="user-avatar" onClick={() => setOpen((prev) => !prev)}>
        {user?.name?.[0]?.toUpperCase() || "U"}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="user-dropdown">
          <div className="dropdown-header">
            <div className="dropdown-name">{user?.name}</div>
            {/* <div className="dropdown-email">{user?.email}</div> */}
          </div>

          <div className="dropdown-item">Profile</div>

          <div
            className="dropdown-item logout"
            onClick={logoutHandler}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
