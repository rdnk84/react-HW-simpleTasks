type initStateType = {
    load: boolean
}

const initState = {
    load: false
};

export const loadingReducer = (state = initState, action: any): initStateType => { // fix any
    switch (action.type) {
        case "loading": {
            return {
                ...state,
                load: action.loading
            };
        }
        default: return state;
    }
};


type loadingACType = {
    type: string
    loading: boolean
}
export const loadingAC = (loading: boolean): loadingACType => {
return {type: "loading", loading}
}; // fix any