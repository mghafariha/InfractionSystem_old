import React from 'react';
import {connect} from 'react-redux';
import Table from '../../Components/DataGrid/Table';
import {getAllItem} from '../../api';
import {setAllItems, setFieldsItem} from '../../store/action';
import UnderWaterItem from './item'
import { AllowedViolations,NotAllowedViolations } from './fields';
import UnderWaterWorkflow from './Workflow';
import Base from './Workflow/Base';
class DataGrid extends React.Component{
        constructor(props){
            super(props);
        }
        componentDidMount(){
          
         //   http://localhost:45420/api/AllowedViolations?$filter=substringof('آب فروشی',InfractionType)
           getAllItem(this.props.table+"?$filter=substringof('"+ this.props.type+"',InfractionType)").then((response)=>{
               this.props.dispatch(setAllItems('UnderWater',response.data));
           });
         
          if( this.props.table=='AllowedViolations')
            {
                let fields= AllowedViolations.filter(a=>a.group=='Moshtarak' || a.group==this.props.infractionType )
            this.props.dispatch(setFieldsItem('UnderWater',fields ));
            }
            else if(this.props.table=='NotAllowedViolations')
            {
                let fields= NotAllowedViolations.filter(a=>a.group=='MoshtarakGhair' || a.group==this.props.infractionType )
                this.props.dispatch(setFieldsItem('UnderWater',fields ));
            }
          
        }
    render(){
        return(<div>
           <Table   storeIndex='UnderWater' {...this.props}  showNew={true} workFlow={Base} itemIndex={UnderWaterItem}  />  
        </div>)
    }
}
const mapStateToProps=(state)=>({
    items:state.items['UnderWater'],
    fieldsItem:state.fieldsItem['UnderWater']
})
export default connect(mapStateToProps)(DataGrid)