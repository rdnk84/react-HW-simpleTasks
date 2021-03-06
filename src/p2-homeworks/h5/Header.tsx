import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./pages/pages.module.css"
import {PATH} from "./Routes";


function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onPanelClick =() =>{
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <div className={s.headerWrapper}>

            <div className={menuIsOpen ? s.itemsWrapperShow: s.itemsWrapperHidden}>
                <div className={s.item}><NavLink to={"/pre-junior"} activeClassName={s.active}>PreJunior</NavLink></div>
                <div className={s.item}><NavLink to={PATH.JUNIOR} activeClassName={s.active}>Junior</NavLink></div>
                <div className={s.item}><NavLink to={"/juniorPlus"} activeClassName={s.active}>Junior+</NavLink></div>
                <div className={s.item}><NavLink to={"/blabla"} activeClassName={s.active}>nothing to see</NavLink></div>
                {/*add NavLinks*/}
            </div>
            <button onClick={onPanelClick} className={s.panelToClick}> Menu </button>
        </div>

    );
}

export default Header;
