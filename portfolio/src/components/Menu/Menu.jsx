import React from "react";
import "./Menu.css";

const Menu = () => {
    const menus = ["HOME", "ABOUT", "EXPERIENCE"];
    return (
        <div className="menu">
            {menus.map((entry) => (
                <div className="menu-icons">{}entry</div>
            ))}
        </div>
    );
};

export default Menu;
