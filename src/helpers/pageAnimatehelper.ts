/* eslint-disable */
import cn from "classnames";
import type { SetPageAnimation } from "./types";

export const setPageAnimation:SetPageAnimation = (pageName, index, prev) => {
    const pageAnimClasses = cn(`page_wrap ${pageName}_page`, {
        // Используем classNames для условных классов
        "animate__animated animate__fadeInRightBig": index > prev,
        "animate__animated animate__fadeInLeftBig": index <= prev,
    })

    return pageAnimClasses;
}