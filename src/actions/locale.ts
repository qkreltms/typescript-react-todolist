import { SETLOCALE } from "./types";

export const setLocale = (lang: string) => {
    return {
        lang,
        type: SETLOCALE,
    };
};
