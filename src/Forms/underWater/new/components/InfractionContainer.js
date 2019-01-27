import React from 'react';
import { connect } from 'react-redux';
import Field from '../../../../Components/Field'
class InfractionContainer extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={column:[]}

    }
  
    render(){
        let typeFields=[];
        let selectedTypes=this.props.types.filter(itm=>itm.isChecked).map(k=>k.accessor);
        console.log('kkkkkkk',selectedTypes);
       
        if(selectedTypes.length>0)
        typeFields=  this.props.fields.filter(a=>selectedTypes.indexOf(a.group)!=-1).map(itm=>({...itm,value:this.props.item[itm.accessor]}));
         return(<div className='form-contents'>
                  {typeFields.map((a,index)=><Field key={index} {...a} storeIndex='UnderWater' ></Field>)}
                </div>
             )
         
       
    }
}
const mapStateToProps=(state)=>(
    console.log('fractiontype',state.item['UnderWater']['infractionTypes']),{
   item:state.item['UnderWater'],
   types:state.types['UnderWater']
})
export default connect(mapStateToProps)(InfractionContainer)