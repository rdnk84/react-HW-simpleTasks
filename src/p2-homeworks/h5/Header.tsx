import React from "react";
import {NavLink} from "react-router-dom";
import s from "./pages/pages.module.css"


function Header() {
    return (
        <div className={s.headerWrapper}>
            <div className={s.item}><NavLink to={"/pre-junior"} activeClassName={s.active}>PreJunior</NavLink></div>
            <div className={s.item}><NavLink to={"/junior"} activeClassName={s.active}>Junior</NavLink></div>
            <div className={s.item}><NavLink to={"/juniorPlus"} activeClassName={s.active}>Junior+</NavLink></div>
            <div className={s.item}><NavLink to={"/blabla"} activeClassName={s.active}>nothing to see</NavLink></div>
            {/*add NavLinks*/}
        </div>
    );
}

export default Header;
