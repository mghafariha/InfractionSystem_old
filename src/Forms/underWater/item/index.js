import React from 'react';
import { connect } from 'react-redux';
import ItemForm from '../../../Components/ItemForm';
import {AllowedViolations,NotAllowedViolations}  from '../fields'
import { setFieldsItem } from '../../../store/action';

class UnderWaterItem extends React.Component{

    constructor(props){
        super(props);
    }
   
    render(){
        return (<div>
                <ItemForm  {...this.props}  />
              
                </div>
        )
    }
}
const mapStateToProps =(state,props)=>({

    item:state.item[props.storeIndex]
})
export default connect(mapStateToProps)(UnderWaterItem)