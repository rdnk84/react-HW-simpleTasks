import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";
import s from "./Greeting.module.css";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}


// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string | "">("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value &&  setError("")
        setName(e.currentTarget.value); // need to fix
    };
    const addUser = (name: string) => {
        if (name.trim() === "") {
            setError("enter correct name")
            // setName("enter correct name")
            return;
        } else {
            addUserCallback(name.trim())
            setName("")
        }
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value) { setError("enter correct name")
        return} else
        // setName(e.currentTarget.value);
        if (e.key ==="Enter") {
            setError("")
            addUserCallback(name.trim())
            setName("")
        }
    }

    //или так
    // const addUser = () => {
    //     if (name.trim() !== ""){
    //      addUserCallback(name.trim())
    //             setName("")
    //     }

    //     }

    const totalUsers = users.length;

    return (

        <div>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
                onKeyPress={onKeyPressHandler}
            />
            {users.map((u) => {
                return <p className={s.greetingWrapper}>Hello {u.name}!</p>
            })}
        </div>
    );
}

export default GreetingContainer;
