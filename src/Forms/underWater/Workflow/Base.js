import React from 'react';
import {connect}from 'react-redux';

import {Ezafe,AdamNasb,Mansubat,EnteghalAb,KafShekani,AdamTamdid,AbForoushi,TaghirKarbari,Plumb,Maslub} from './steps';
import {updateItem,saveItem} from '../../../api';
import Step from './Step';
import Field from '../../../Components/Field';
import { setItem } from '../../../store/action';
import Loader from '../../../Components/Loader';
import {getAllItem} from '../../../api';


class Base extends React.Component{
     constructor(props){
         super(props);
         this.state={loading:true,step:{},showStep:false,currentItem:{},stepItems:[]}
     }

     onShowClick=(e,step)=>{
        this.setState({ showStep:false});
        e.preventDefault();
      
        this.props.dispatch(setItem(this.props.storeIndex,{}));
        
        this.setState({step:step,currentItem:this.state.stepItems.find(a=>a.Step==step.accessor)});
        
        this.props.dispatch(setItem(this.props.storeIndex,this.state.stepItems.find(a=>a.Step==step.accessor)));
         this.setState({loading:false,showStep:true})
           
        }
     componentDidMount=(e)=>{
        getAllItem(this.props.table +"Workflow?$filter=ViolationId eq " + this.props.selectedItem.ID).then((result)=>{
           this.setState({stepItems:result.data})
         })
          this.props.dispatch(setItem(this.props.storeIndex,{}));
        // let itmId=getUrlVars()['ID'];
 
         this.setState({loading:false})
         
     }
     render(){
        let steps=[];
    
        switch(this.props.infractionType){
            case 'Ezafe':
                 steps=Ezafe;
                 break;
            case 'AdamNasb':
                 steps=AdamNasb;
                 break;
            case  'Mansubat':
                 steps=Mansubat;
                 break;
            case 'EnteghalAb':
                 steps=EnteghalAb;
                 break;
            case 'KafShekani':
                 steps=KafShekani;
                 break;
             case 'AdamTamdid':
                 steps=AdamTamdid;
                 break;
             case 'AbForoushi':
                 steps=AbForoushi;
                 break;
             case 'TaghirKarbari':
                 steps=TaghirKarbari;
                 break;
             case 'Plumb':
                  steps=Plumb;
                  break;
             case 'Maslub':
                  steps=Maslub;
                  break;
                  default :
                  steps=[];
             

        }
         
          return(<div className='warper-form'>
                      <div className="row-items">
                                {steps.map((step,index)=><input  key={step.Header} type='button' onClick={event => this.onShowClick(event,step)} value={step.Header}/>)}
                      </div>
                      <div className="row-items">
                      {this.state.showStep ?    <Step  lookupId={this.props.selectedItem.ID} table={this.props.table} storeIndex={this.props.storeIndex} type={this.props.type}  step={this.state.step} index={this.props.selectedItem.Index} currentItem={this.state.currentItem} />:<div>loading</div>}
                      </div>
                 </div>)
           
         }

 }
 const mapStateToProps=(state,props)=>({
     item:state.item[props.storeIndex],
     
 })
 export default connect(mapStateToProps)(Base)