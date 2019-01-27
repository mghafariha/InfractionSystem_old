import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import '../../../styles/style.css';
import {AllowedViolations,NotAllowedViolations,wellTypes,infractionTypesLegal,infractionTypesIllegal} from '../fields';
import Field from '../../../Components/Field';
import CheckboxContainer from './components/Checkbox/container';
import { setFieldValue, setTypes, setItem } from '../../../store/action';
import {saveItem} from '../../../api'
import InfractionContainer from './components/InfractionContainer';

class UnderWaterNew extends React.Component
{
    constructor(props){
        super(props);
        this.state={showCommonFields:false,commonFields:[],fields:[],wellType:'',isSave:false,formName:'New'}
    }

    
    handleChangeType=(e)=>{
       if (e.target.value!=null)
       {
        this.setState({showCommonFields:true,wellType:e.target.value}) ;
        e.target.value=='legal'?this.setState({commonFields:AllowedViolations.filter(a=>a.group=='Moshtarak'),checkBoxTypes:infractionTypesLegal,fields:AllowedViolations.filter(a=>a.group!='Moshtarak')}):this.setState({commonFields:NotAllowedViolations.filter(a=>a.group=='MoshtarakGhair'),checkBoxTypes:infractionTypesIllegal,fields:NotAllowedViolations.filter(a=>a.group!='MoshtarakGhair')});
        this.props.dispatch(setTypes('UnderWater', e.target.value=='legal'?infractionTypesLegal:infractionTypesIllegal));
       }
      }
      handleSubmit=(e)=>{

        this.setState({loading:true})
        e.preventDefault();
        // let fields = this.checkRequired()
       console.log('saveItem',this.props.item);
       console.log('infractionType',this.props.infractionTypes);
        
        // if (this.hasError(fields)) {
        // alert('در  اطلاعات وارد شده خطا وجود دارد.')
        //  this.setState({loading:false})
        // } else {
           // let lookupFields= fields.filter(field=>field.type=='Lookup');
            let saveItm=Object.keys(this.props.item).reduce((result,key)=>{if(typeof(this.props.item[key])!='object') result[key]=this.props.item[key] ;return result;},{});
            saveItm={...saveItm,'InfractionType':this.props.infractionTypes};
        if(!this.props.item['ID'])
        {   
        //    let saveItm=Object.keys(this.props.item).reduce((result,key)=>{result[key]=(lookupFields.find(itm=>itm.accessor==key)?{ID:this.props.item[key].option[value]}:this.props.item[key]); return result;},{})
     
           //console.log('saveItem',saveItm);
      
            console.log('item',this.props.item)

      
            saveItem(saveItm, this.state.wellType=='legal'?'AllowedViolations':'NotAllowedViolations').then((response)=>{
            alert('آیتم جدید با موفقیت ذخیره شد');
            this.setState({isSave:true});
            this.props.dispatch(setItem('UnderWater',{}));
          }).catch((error)=>console.log(error));
        }
      
    }
    render()
    {
        if (this.state.isSave) {
            return <Redirect to='/Home' />;
          }
        console.log('welltypes',wellTypes);
        // let commonFields=fields.filter(a=>a.group=='');
        return (<form onSubmit={this.handleSubmit}>
                     <h1></h1>
              <div className='leg-head-form'>
               <div className='labale-form myrow '> نوع چاه </div> 
               <div className='cod-input myrow'><select onChange={this.handleChangeType}  >              
                    {wellTypes.map((opt,index)=>(<option key={opt.key} value={opt.key}>{opt.value}</option>))} 
                </select> </div></div>

           
             {/* <div><Field field={accessor:'WellType', type:'Select' Options="چاه مجاز , چاه غیر مجاز" Header='نوع چاه' onChange={this.WellTypeChange} ></Field></div> */}
             {this.state.showCommonFields?<div> <div className='form-contents'>{this.state.commonFields.map((a,index)=><Field  key={index}
                                                                                                                              {...a}
                                                                                                                                formName={this.props.formName} storeIndex='UnderWater'></Field>)}</div>
                                                <div> نوع تخلف
                                                <CheckboxContainer  storeIndex='UnderWater' accessor='InfractionType'/>
                                                </div>
                                                    <InfractionContainer fields={this.state.fields} formName='New'/>
                                                    <button type='submit'>ذخیره</button>
                                                </div> :null}
                                         
                                          
                                            {/* <div >
                                            {this.state.fields.filter(a=>a.group.indexOf(this.props.infractionTypes)!=-1).map((a,index)=><Field key={index} {...a} storeIndex='UnderWater'></Field>)}
                                            </div> */}
                                               </form>);
    }
    
}
const mapStateToProps=(state,props)=>({
    item:state.item['UnderWater'],
    infractionTypes:state.types['UnderWater'].filter(a=>a.isChecked).map(a=>(a.Header)).join(',')
 })

export default connect(mapStateToProps)(UnderWaterNew);
