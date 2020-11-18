import React from "react";
import Slider from "@material-ui/core/Slider";
import s from "../c7-SuperRange/SuperRange.module.css";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {

    const handleChange = (e: any, values:any) => {
        onChangeRange(values)
    }

    return (
        <>
<div className={s.doubleSuperRange}>
    <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
    />
  </div>

        </>
    );
}

export default SuperDoubleRange;
