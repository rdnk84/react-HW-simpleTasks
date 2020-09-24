import React from "react";
import s from "./Message.module.css"
import Message from "./Message";


const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Artem",
    message: "some text",
    time: "22:00",
};

const HW1 = () => {
    return (
        <div className={s.Hw1Block}>
            {/*<hr/>*/}
            {/*homeworks 1*/}

            {/*should work (должно работать)*/}
<div>
    <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
    />

</div>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            {/*<hr/>*/}
        </div>
    );
}
 //
 // const Message = (props: any) => {
 //    return <div>
 //        <div className={s.Avatar}>{props.avatar}</div>
 //        <div>{props.name}</div>
 //         <div>{props.message}</div>
 //         <div className={s.Time}>{props.time}</div>
 //    </div>
 // }



export default HW1;
