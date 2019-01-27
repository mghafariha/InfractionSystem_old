import React from 'react';
import {connect} from 'react-redux';
import {setItem} from '../../store/action';
import Field from '../Field';
import Loader from '../Loader';

class ItemForm extends React.Component{

        constructor(props)
        {
            super(props);
            this.state={loading:true}
        }
        componentDidMount=(e)=>{
                                                                        
            this.props.dispatch(setItem(this.props.storeIndex,this.props.selectedItem));
         
           this.setState({loading:false});
            
        }
        render(){
            console.log('props',this.props);

            return(!this.state.loading?
            <form onSubmit={this.handleSubmit}>
                <h1></h1>
                <div className='form-contents'  >
                 { this.props.fieldsItem.map((field,index)=>(<Field  key={field.accessor} {...field}   formName={this.props.formName} storeIndex={this.props.storeIndex} />))
                    }
                      </div>
                    {this.props.formName!='Display'?  <button  type="submit">ذخیره</button>:null}
            </form>:<div className='sweet-loading'>
        <Loader
        
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
         </div> )
        }
}
const mapStateToProps=(state,props)=>({
                item:state.item[props.storeIndex],
                fieldsItem:state.fieldsItem[props.storeIndex],
                modal:true
});
export default connect(mapStateToProps)(ItemForm);