import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: string) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            id={a._id}
            affair={a}
            name={a.name}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")};
    const setHigh = () => {props.setFilter("high")};
    const setMiddle = () => {props.setFilter("middle")};
    const setLow = () => {props.setFilter("low")};

    const classForAllBtn = props.filter === "all" ? s.forActiveBtn : "";
    const classForHighBtn = props.filter === "high" ? s.forActiveBtn : "";
    const classForMiddleBtn = props.filter === "middle" ? s.forActiveBtn : "";
    const classForLowBtn = props.filter === "low" ? s.forActiveBtn : "";

    return (
        <div className={s.AffairsWrapper}>

            {mappedAffairs}

<div className={s.btnWrapper}>
    <button className={classForAllBtn} onClick={setAll}>All</button>
    <button className={classForHighBtn} onClick={setHigh}>High</button>
    <button className={classForMiddleBtn} onClick={setMiddle}>Middle</button>
    <button className={classForLowBtn} onClick={setLow}>Low</button>
</div>
        </div>
    );
}

export default Affairs;
