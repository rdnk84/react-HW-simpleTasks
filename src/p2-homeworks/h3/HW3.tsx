import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import s from "./Greeting.module.css"

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        let newUser = {_id: v1(), name: name}
        setUsers([...users, newUser]);
    }

    return (
        <div className={s.hw3Wrapper}>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <div className={s.greetingContainerWrapper}>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
