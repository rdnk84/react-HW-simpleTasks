import {PeopleType} from "../HW8";

export const SORT = "homeworks"
export type ActionType = {
    type: string
    payload: string | number
}

export const homeWorkReducer = (state: Array<PeopleType>, action: ActionType): Array<PeopleType> => {
        switch (action.type) {
            case 'sort': {
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
            case "check": return state.filter(o => o.age >= 18)

            default:
                return state


        }



    };