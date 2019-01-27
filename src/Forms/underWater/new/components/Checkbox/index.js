
import React from 'react';
import {connect} from 'react-redux';
import {checkedTypes, setFieldValue} from '../../../../../store/action';

class Checkbox extends React.Component
{
    constructor(props){
      super(props);
    }
    handleChange=(e)=>{

      const internalName= e.target.name;
      const isChecked = e.target.checked;
      this.props.dispatch(checkedTypes(this.props.storeIndex,isChecked,internalName));

      let valueStr= this.props.selectedTypes.map(a=>(a.Header)).join(',');
      this.props.dispatch(setFieldValue(this.props.container,valueStr,this.props.storeIndex));
    //this.setState(prevState => ({ checkedItems: prevState.checkedColumns.set(item, isChecked) }));
      
    }
  
    render(){
             return (<input 
                     name={this.props.accessor}
                      type='checkbox'
                  
                     onChange={this.handleChange} 

                     value={this.props.isChecked}
                  />)
            }
  
  
}
const mapStateToProps=(state,props)=>({
  types:state.types[props.storeIndex],
   selectedTypes:state.types[props.storeIndex].filter(a=>a.isChecked)
})
  export default connect(mapStateToProps)(Checkbox);
  