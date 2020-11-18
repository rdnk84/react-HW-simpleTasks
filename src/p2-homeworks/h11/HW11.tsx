import React, {ChangeEvent, useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import styles from "../../p1-main/m1-ui/u1-app/App.module.css"

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeRange1 = (e: ChangeEvent<HTMLInputElement>) => {
        setValue1(+e.target.value)
    }

    const onChangeRange2 = (values: number[]) => {

        setValue1(values[0])
        setValue2(values[1])
    }


    return (
        <div className={styles.containerForHW}>
            <hr className={styles.classForHr}/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    value={value1}
                    onChange={onChangeRange1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeRange2}

                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}

        </div>
    );
}

export default HW11;
