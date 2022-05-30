import { ADD_ARTICLE, SEARCH, SUPP_ARTICLE, TOGGLE } from "./ActionType"




export const search =newDes=>{
    return {
        type :SEARCH,
        payload : newDes
    }
} ;

export const addTask = newTask => {
    return {
        type: ADD_ARTICLE,
        payload: newTask
    }
}

export const supp =index=>{
    return {
        type :SUPP_ARTICLE,
        payload :index,
        
    }

        
}

export const modifier =index =>{
    return {
        type :TOGGLE,
        payload: index
    }

}

    
