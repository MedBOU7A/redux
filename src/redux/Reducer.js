

import { ADD_ARTICLE, SEARCH, SUPP_ARTICLE, TOGGLE, } from "./ActionType";

 const init ={
    toDo : [
        {
            id : Math.random(),
            describtion : "learn redux" ,
            isDone : true
        },
        {
            id : Math.random(),
            describtion : "learn css" ,
            isDone : true
        }, 
        {
            id : Math.random(),
            describtion : "learn API" ,
            isDone : false
        },
    ]
}

const Reducer =(state = init, {type,payload})=>{
    switch (type) {
        case SEARCH :
            return {
             ...state ,toDo : [...state.toDo.filter(toDo=> toDo.describtion.toLowerCase()
             .includes(payload.toLocaleLowerCase().trim()) )]
            }
        case ADD_ARTICLE :    
           return {
             ...state,toDo : [...state.toDo,payload]
           }   
                      case SUPP_ARTICLE :
               return{
                 ...state,toDo:  [...state.toDo.filter(el => el.id !== payload)]
               }
               case TOGGLE :
                   return{
                       ...state,toDo : [...state.toDo.map(el =>(el.id === payload  ?{...el,isDone: !el.isDone }:el))]
                   }
           
        default:
            return state ;
    }
}


export default Reducer;