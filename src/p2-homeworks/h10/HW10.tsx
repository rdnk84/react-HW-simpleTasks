import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import preloader from "../../p1-main/assets/loading.gif"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import { loadingAC } from "./bll/loadingReducer";
import styles from "../../p1-main/m1-ui/u1-app/App.module.css"

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.load);
    const dispatch = useDispatch();

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)

        console.log("loading...");
    };

    return (
        <div className={styles.containerForHW}>
            <hr className={styles.classForHr}/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img src={preloader}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}

        </div>
    );
}

export default HW10;
