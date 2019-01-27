import React from 'react';
import {connect} from 'react-redux';
import Field from '../../../Components/Field';
import Loader from '../../../Components/Loader';
import { setItem } from '../../../store/action';
import {saveItem} from '../../../api';
  class Step extends React.Component{
    constructor(props){

        super(props);
        this.state={ loading:true }
    }
    componentDidMount(){
      this.setState({loading:true})
     //   this.props.dispatch(setItem(this.props.storeIndex,this.props.currentItem));
      
        this.setState({loading:false})
     
    }
   
    handleSubmit=(e)=>{
        this.setState({loading:true})
          e.preventDefault();
          console.log('saveWorkFlow',this.props.item);
          let saveItm={...this.props.item,ViolationId:this.props.lookupId,Step:this.props.step.accessor};
          saveItem(saveItm,this.props.table + 'Workflow').then((response)=>{
        //    this.props.dispatch(changeItem(this.props.item,this.props.storeIndex));
        
          alert('اطلاعات با موفقیت ذخیره شد');
          this.props.dispatch(setItem(this.props.storeIndex,{}));
          this.setState({loading:false});
          if (!this.props.closeAfterSave) {
           this.props.closeAfterSave();
         }
          }).catch(error=>console.log('error :',error))
    }
   
    handleChange=(e)=>{

    //  this.setState({isChecked: !this.state.isChecked})
    }

    render(){
     let path=this.props.type +"/" +this.props.index+"/" + this.props.step.Header;
     let step=this.props.step;
     console.log('steps',this.props);
      return(!this.state.loading? <form onSubmit={this.handleSubmit}> {step.Header}
      <div>
       {step.Fields.map((field,index)=><Field
                                                        key={field.accessor}
                                                        accessor={field.accessor}
                                                        Header={field.Header}
                                                        type ={field.type}
                                                        storeIndex={this.props.storeIndex}
                                                       value={this.props.item[field.accessor]}
                                                         path={path}
                                                        formName='New' 
                                                        step={step.accessor}
                                                        />)}
         
           </div>   <button  type="submit">ذخیره</button>
            </form>:<div className='sweet-loading'>
        <Loader
        
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>  )
        
    }
  }
  const mapStateToProps=(state,props)=>({
  item:state.item[props.storeIndex]
  })
  export default connect(mapStateToProps)(Step)