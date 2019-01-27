import {SET_FIELD_VALUE,CHECKED_TYPES,SET_TYPES,SET_ALL_ITEMS,SET_ITEM,SET_FIELDS_ITEM} from './constant';
export const item=(state={'UnderWater':{}},action)=>{
    switch(action.type){
        case SET_FIELD_VALUE:
        return {...state,[action.index]:{...state[action.index],[action.field.internalName]:action.field.value}}
        case SET_ITEM:
        return Object.assign({},state,{[action.index]:{...action.item}});
        default:
        return state;
    }
}
export const types=(state={'UnderWater':[]},action)=>{
    switch(action.type){
        case SET_TYPES:

          return Object.assign({},state,{[action.index]:action.types})

        case CHECKED_TYPES:
         
          return {...state,[action.index]:state[action.index].map((item)=>(item.accessor!=action.internalName)? item:{...item,isChecked:action.isChecked})}

        default:
          return state
    }
}
export const items=(state={'UnderWater':[]},action)=>{
    switch(action.type){
        case SET_ALL_ITEMS:
        return Object.assign({},state,{[action.index]:action.data})
       
        default :
        return state
    }
}
export const fieldsItem=(state={'UnderWater':[]},action)=>{
    switch(action.type){
        case SET_FIELDS_ITEM:
        return Object.assign({},state,{[action.index]:action.fields})
        default :
        return state;
    }

}