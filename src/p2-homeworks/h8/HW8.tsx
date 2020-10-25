import React, {useState} from "react";
import {CHECKEIGHTEEN, homeWorkReducer, SORT} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type PeopleType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<PeopleType> = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            <span>{p.name} </span>
            <span> -{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: SORT, payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: SORT, payload: "down"}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: CHECKEIGHTEEN, payload: "sortBy18"}))

    return (
        <div>
            <hr/>
            HW 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={check}>check 18</SuperButton></div>

            {/*check 18*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
