import * as types from "../actions/types";

const createEmptyLocale = () => ({
    lang: localStorage.getItem("lang") || "en" ,
});

export const locale = (state = createEmptyLocale(), action: any) => {
    switch (action.type) {
        case types.SETLOCALE: {
            return handleSetLocaleCompleted(state, action);
        }

        default:
            return state;
    }
};

const handleSetLocaleCompleted = (state = createEmptyLocale(), payload: any) => {
    return {
        lang: payload.lang,
    };
};
