import React from "react";
import Clock from "./Clock";
import s from "../../p1-main/m1-ui/u1-app/App.module.css"

function HW9() {
    return (
        <div className={s.containerForHW}>
            <hr className={s.classForHr}/>
            homeworks 9

            {/*should work (должно работать)*/}
            <Clock/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}

        </div>
    );
}

export default HW9;
