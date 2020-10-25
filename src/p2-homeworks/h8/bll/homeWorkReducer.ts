import {PeopleType} from "../HW8";

export const SORT = "homeworks/HW8/SORT";
export const CHECKEIGHTEEN = "homeworks/HW8/CHECK";

export type SortActionType = {
    type: typeof SORT
    payload: string
}
export type CheckActionType = {
    type: typeof  CHECKEIGHTEEN
    payload: string
}
 type ActionsType = SortActionType | CheckActionType

export const homeWorkReducer = (state: Array<PeopleType>, action: ActionsType): Array<PeopleType> => {
        switch (action.type) {
            case SORT: {
                let newState = [...state];
                let sortedNewState = newState.sort((a, b) => (a.name > b.name)
                    ? 1
                    : ((b.name > a.name)
                        ? -1
                        : 0)
                )
                if (action.payload === 'down') {
                    return sortedNewState

                } else if (action.payload === 'up') {

                    return sortedNewState.reverse()
                }
                return state
            }
            case CHECKEIGHTEEN: return state.filter(o => o.age >= 18)

            default:
                return state


        }



    };