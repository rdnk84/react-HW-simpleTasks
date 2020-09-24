import React from "react";
import s from  "./Affairs.module.css"
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    id: number
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
    name: string
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.id)
    };

    return (
        <div className={s.AffairWrapper}>
            {props.name}
            <button className={s.deleteBtn} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
