import {SET_FIELD_VALUE,SET_TYPES,CHECKED_TYPES,SET_ALL_ITEMS,SET_ITEM,SET_FIELDS_ITEM} from './constant';
export const setFieldValue=(internalName,value,index)=>({

    type:SET_FIELD_VALUE,
    field:{internalName,value},
    index:index
})
export const setItem=(index,item)=>({
    type:SET_ITEM,
    index,item
})
export const setAllItems=(index,data)=>({
   type:SET_ALL_ITEMS,
   index,data
})
export const setTypes=(index,types)=>({
    type:SET_TYPES,
    index,types
})
export const checkedTypes=(index,isChecked,internalName)=>({

    type:CHECKED_TYPES,
    index,isChecked,internalName
})
export const setFieldsItem=(index,fields)=>({
    type:SET_FIELDS_ITEM,
    index,fields
})