import { INPUT_VALUE } from "../constant";

export const inputValue = (data) =>{

    return{
        type: INPUT_VALUE,
        data: data
    }
}