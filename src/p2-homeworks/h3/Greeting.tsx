import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: (name: string) => void
    error: string | ""
    totalUsers: number
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPress} // деструктуризация пропсов
) => {
    const inputClass = s.error;
return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPress}
                   className={error ? inputClass : ""}/>
            {error && <div className={s.errorMessage}>{error}</div>}
            <button  onClick={() => {addUser(name)}}>add</button>
            <div className={s.totalUsersResult}>Total friends  {totalUsers}</div>
        </div>
    );
}

export default Greeting;
