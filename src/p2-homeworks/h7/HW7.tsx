import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import s from "./common/c5-SuperSelect/SuperSelect.module.css"
import styles from "../../p1-main/m1-ui/u1-app/App.module.css"


function HW7() {
    const arr = ["x", "y", "z"];
    const [value, onChangeOption] = useState('x');
    // const [value, setValue] = useState(arr[1]);

    // const onChangeOption = () => {
    //     onChangeOption(value)
    // }

    return (
        <div className={styles.containerForHW}>
            <hr className={styles.classForHr}/>
            homeworks 7

            <div className={s.SuperSelectWrapper}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

           </div>
    );
}

export default HW7;
