import React from "react";
import s from "./pages.module.css"

function Error404() {
    return (
        <div className={s.notFoundPage}>
            <div>404</div>
            <div>Page not found!</div>
            <div className={s.kitty}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
