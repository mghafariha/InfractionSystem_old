import React from 'react';
import {connect}from 'react-redux';
import {Ezafe,AdamNasb,Mansubat,EnteghalAb,KafShekani,AdamTamdid,AbForoushi,TaghirKarbari,Plumb,Maslub} from './steps';
import {updateItem} from '../../../api';

import Field from '../../../Components/Field';
import { setItem } from '../../../store/action';
import Loader from '../../../Components/Loader'

class UnderWaterWorkflow extends React.Component{
     constructor(props){
         super(props);
         this.state={loading:true}
     }
     handleSubmit=(e)=>{
        this.state.loading=true;
          e.preventDefault();
          console.log('saveWorkFlow',this.props.item);
          updateItem(this.props.item,this.props.storeIndex).then((response)=>{
        //    this.props.dispatch(changeItem(this.props.item,this.props.storeIndex));
           this.setState({loading:false});
          alert('اطلاعات با موفقیت بروزرسانی شد');
          this.props.dispatch(setItem({},this.props.storeIndex));
          if (!this.props.closeAfterSave) {
           this.props.closeAfterSave();
         }
          }).catch(error=>console.log('error :',error))
    }
     componentDidMount=(e)=>{
        // let itmId=getUrlVars()['ID'];
        this.props.dispatch(setItem(this.props.storeIndex,{}));

       
          
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
         console.log('fffff',steps);
          return(!this.state.loading? <form onSubmit={this.handleSubmit} ><div className='warper-form'>

              {steps.map((step,index)=><div key={step.Header} className="row-items" >
                  <div>{step.Header}</div>
                  <div>{step.Fields.map((field,index)=><Field
                                                        key={field.accessor}
                                                        storeIndex={this.props.storeIndex}
                                                        value={this.props.item[field.accessor]}
                                                       {...field}
                                                        formName='New'
                                                        />)}</div>
                 </div>)}
                    
                     
                 </div>
                 <button type='submit'>ذخیره</button>
                 </form>:<div className='sweet-loading'>
                            <Loader
                            
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={this.state.loading}
                            />
                        </div>)
         }

 }
 const mapStateToProps=(state,props)=>({
     item:state.item[props.storeIndex],
     
 })
 export default connect(mapStateToProps)(UnderWaterWorkflow)