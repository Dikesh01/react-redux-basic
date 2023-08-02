import { INCREASE, DECREASE, RESET } from "./actionTypes";

export const increase = (value = 1) =>{
    return (
        {
            type: INCREASE,
            payload:value
        }
    )
}
export const decrease = (value = 1) =>{
    return (
        {
            type: DECREASE,
            payload:value
        }
    )
}
export const reset = () =>{
    return {
        type: RESET
    }   
}