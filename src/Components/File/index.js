import React from 'react';
import {connect} from 'react-redux';
 import {setFieldValue} from '../../store/action';
import ReactFileReader from 'react-file-reader';
import {URL,uploadFile,deleteFile} from '../../api';
// import $ from 'jquery';
import Loader from '../Loader';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

//import ReactUploadFile from 'react-upload-file';
let fileReader;
class File extends React.Component{
  
  constructor(props){
        super(props); 
        this.state={loading:false,files:'',filesShow:[] , renderWrappedComponent: false}
    }
    componentWillReceiveProps(nextProps,prevState) {
      if(nextProps.step == prevState.step){
        return;
      }else {
        this.setState({files:nextProps.value, filesShow:nextProps.value?nextProps.value.split('|').map(a=>({path:a,FileName:a.substring(a.lastIndexOf('/')+1)})):[]  ,path:nextProps.path,renderWrappedComponent: true,isDisabled:nextProps.isDisabled})
      }
    }
    onDeleteClick=(file)=>{
            this.setState({loading:true})
          //  e.preventDefault();
            //let fileAddress=this.state.files;
            deleteFile(file.path).then( d=>{
             this.setState({filesShow:this.state.filesShow.filter(a=>a.FileName!=file.FileName),files:this.state.files.replace(file.path+"|",'').slice(0,-1)})
              this.props.dispatch(setFieldValue(this.props.accessor,this.state.files,this.props.storeIndex))
           
             this.setState({loading:false})
            }).catch((error)=>console.log('error',error));
     
      // confirmAlert({
      //   title: 'تایید حذف',
      //   message: 'آیا از حذف فایل مطمئن هستید؟',
      //   buttons: [
      //     {
      //       label: 'بله',
      //       onClick: () => {

             
      //       }
      //     },
      //     {
      //       label: 'خیر',
      //       onClick: () => alert('خیر')
      //     }
      //   ]
      // })

      }
    
    componentDidMount=()=>{
      setTimeout(() => {
        
        this.setState({files:this.props.value, step:this.props.step,filesShow:this.props.value?this.props.value.split('|').map(a=>({path:a,FileName:a.substring(a.lastIndexOf('/')+1)})):[]  ,path:this.props.path,renderWrappedComponent: true,isDisabled:this.props.isDisabled})
        }, 500
         );
     }
    
    handleChange=(e) => {
      this.setState({loading:true});
      let path =this.props.path;
      let fileSave=[];
      let value='';
      let files= (e.fileList);
     if(this.props.IsMulti)
     {
        for(var i=0;i<files.length;i++){
          let Title = files[i].name.substring(0,files[i].name.lastIndexOf('.'));
          let fileExtention = files[i].name.substring(files[i].name.lastIndexOf('.')+1, files[i].name.length) || Title;
          let FileName =Title+ '.' + fileExtention
          let Content=e.base64[i].split('base64,')[1];
            fileSave.push({FileName,Title,Content,Path:path});
            
            }
       }
        else {
          let Title = files[0].name.substring(0,files[0].name.lastIndexOf('.'));
            let fileExtention = files[0].name.substring(files[0].name.lastIndexOf('.')+1, files[0].name.length) || Title;
            let FileName =Title+ '.' + fileExtention
            let Content=e.base64.split('base64,')[1];
              fileSave.push({FileName,Title,Content,Path:path});
        }
      
    uploadFile(fileSave).then((result)=>{
                    
                      value=fileSave.reduce((acc,itm)=>{return acc+ "/uploadedFiles/" +(this.props.path? this.props.path:'temp')+"/"+itm.FileName + "|"},'')
                      value=value.slice(0,-1);
                    
                      this.props.dispatch(setFieldValue(this.props.accessor,value,this.props.storeIndex));
                 
                      this.setState({files:value,filesShow:fileSave.map(itm=>({...itm,path: "/uploadedFiles/"+(this.props.path? this.props.path:'temp')+"/"+itm.FileName }))})
                      this.setState({loading:false})
                   }).catch((error)=>console.log('error',error));

      
    }
   
    render(){
  
      const { renderWrappedComponent } = this.state;
      return( renderWrappedComponent? <div>
        <ReactFileReader  base64={true} multipleFiles={this.props.IsMulti} handleFiles={this.handleChange}>
          <input type='button' value='آپلود'/>
        </ReactFileReader>
              { this.state.files!=''? 
              <div>
                <ul>
                    {
                     this.state.filesShow.map((file,index)=><div key={index}>
                                                     <a href={file.path}    target='_blank' >{file.FileName}</a>
                                                     <input type='button' onClick={event => this.onDeleteClick(file)} value='حذف'/>
                                                     </div>)
                    
                    }
                  </ul>
               
              </div>:''} 
         </div>:<div>Loading...</div>
     
     )
    }
}
const handleFileRead = (e) => {
  const content = FileReader.result;
  console.log(content);
  // … do something with the 'content' …
};
// const getFileBuffer = data => {
//   var deferred = $.Deferred();
//   var reader = new FileReader();
//   reader.onloadend = function (e) {
//       deferred.resolve(e.target.result);
//   }
//   reader.onerror = function (e) {
//       deferred.reject(e.target.error);
//   }
//   reader.readAsDataURL(data);
//   return deferred.promise();
// }

const mapStateToProps=(state,props)=>( 
  console.log('file',state.item[props.storeIndex][props.accessor]),{
 
  item:state.item[props.storeIndex],
  value:state.item[props.storeIndex][props.accessor]
})
   
export default connect(mapStateToProps)(File);


