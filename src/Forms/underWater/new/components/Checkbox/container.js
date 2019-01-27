import React from 'react';
import {connect} from 'react-redux';
import Checkbox from '.';
import { setFieldValue } from '../../../../../store/action';
import '../../../fields';


class CheckboxContainer extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
    console.log('types', this.props.types);
      return (
        <div className='check-box-items'>
        
          {
            this.props.types.map(item => (
              <div className='check-item' key={item.accessor}>
              {item.Header}
              <Checkbox  accessor={item.accessor}  storeIndex={this.props.storeIndex} isChecked={item.isChecked} container={this.props.accessor} />
               </div> 
            ))
          }
         
        </div>
      );
    }
  }
  const mapStateToProps=(state,props)=>(console.log('fjjfd',state.types[props.storeIndex]),{
     types:state.types[props.storeIndex]
  })
  export default connect(mapStateToProps)(CheckboxContainer);