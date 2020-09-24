import React from "react";
import s from "./Message.module.css"

type messageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = (props:messageDataPropsType) => {
    return (
        <div className={s.MessageWindow}>
            <div className={s.Avatar}> <img src={props.avatar}/></div>
            <div className={ s.TxtWindow}>
                <div className={s.Name}>{props.name}</div>
                <div className={s.Message}>{props.message}</div>
                <div className={s.Time}>{props.time}</div>
            </div>

        </div>
    );
}

export default Message;
