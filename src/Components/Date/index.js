import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment-jalaali';
import { setFieldValue } from '../../store/action'
import { isMoment } from 'moment-jalaali';
//import { Calendar, DatePicker } from 'react-persian-datepicker';
import {DatePicker} from "react-advance-jalaali-datepicker";
//import {Datepicker} from 'react-jalaali-datepicker';
//import './calender.css'
import '../../styles/style.css'


class Date extends React.Component {
    constructor(props)
    {
        super(props); 
      
          this.state = {
            renderWrappedComponent: false,
            date : this.props.value,
            isDisabled:false
          }
    }
    // componentDidUpdate(oldProps) {
      
    //   if(oldProps.step !== this.props.step) {
       
    //     this.setState = {
    //               renderWrappedComponent: true,
    //               date : this.props.value,
    //               isDisabled:false
    //               }
        
    //   }
     
    // }
    // 

   
// componentWillReceiveProps(nextProps,prevState) {
//       const { step } = prevState;
//       if (nextProps.step !== step) {
//         setTimeout(() => {
//         this.setState = {
//           renderWrappedComponent: false,
//           date : nextProps.value,
//           isDisabled:false
//         }
//       },5000);
//       }
//     }
    componentDidMount() {
     
      this.setState({renderWrappedComponent: true})
      setTimeout(() => {
        
         this.setState({date:this.props.value,step:this.props.step,renderWrappedComponent: true,isDisabled:this.props.isDisabled})
      }, 1000
       );
    }
   
    onChange=(unix, formatted)=>{
      
       console.log('unix',unix) // returns timestamp of the selected value, for example.
       this.props.dispatch(setFieldValue(this.props.internalName,moment(formatted,'jYYYY/jMM/jDD').toISOString(),this.props.storeIndex));
        // console.log('formatted',formatted) // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
        this.setState({date:formatted})
    }
    render() {
      const { renderWrappedComponent } = this.state;
      let date=this.props.date;
           return renderWrappedComponent?  <DatePicker
           containerClass={this.props.isDisabled?'disabled' :''}
                preSelected={this.state.date}
                  onChange={this.onChange}
                 
                   inputClassName="datepicker-input"
                 //  placeholder="Enter new date"
                   dir="auto"
                   format="jYYYY/jMM/jDD"
                 
                   /> : <div>Loading...</div>
                  //  return renderWrappedComponent?  <DatePicker
                  //  value={this.state.value}
                       
                  //         onChange={this.onChange}
                         
                  //          inputClassName="datepicker-input"
                  //        //  placeholder="Enter new date"
                  //          dir="auto"
                  //          inputFormat="jYYYY/jMM/jDD"
                         
                  //          /> : <div>Loading...</div>
    }
}
const mapStateToProps =(state,props)=> 
(
  console.log('props',props.value),
 {
   item:state.item[props.storeIndex],
   
})

export default connect(mapStateToProps)(Date)