
import React from 'react';
import { Route } from 'react-router-dom';
import DataTable from '../../Forms/underWater/DataGrid';
import UnderWaterNew from '../../Forms/underWater/new';
import Home from '../../Home';
import {AbForoushi,Ezafe,AdamNasb,Mansubat,EnteghalAb,KafShekani,TaghirKarbari,AdamTamdid,TaghirMahal,AbShirin,Plumb,Masloub} from '../../Forms/underWater/fields'
// import Profile from '../../Forms/Well/Profile';
// import Visit from '../../Forms/Well/Visit';
// import VisitWithoutProfile from '../../Forms/Well/VisitWithoutProfile';
// import Home from '../../Home';
// import Violation from '../../Forms/Well/Violation';

class Content extends React.Component {
    constructor(props){
        super();  
    }
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    {/* <h3 className="box-title">Monthly Recap Report</h3> */}
                                </div>
                                <div className="box-body">
                                
                                    <div className="row">
                                        <div className="col-md-10">
                         
                                                    <Route path="/DataTableAbForoushi" component={() => <DataTable type='آب فروشی' fields={AbForoushi} table='AllowedViolations' infractionType='AbForoushi' />} />
                                                    <Route path="/DataTableEzafeh" component={() => <DataTable type='اضافه برداشت' fields={Ezafe} table='AllowedViolations'  infractionType='Ezafe'  />} />
                                                    <Route path="/DataTableAdamNasb" component={() => <DataTable type='عدم نصب' fields={AdamNasb} table='AllowedViolations'  infractionType='AdamNasb' />} />
                                                    <Route path="/DataTableMansubat" component={() => <DataTable type='منصوبات' fields={Mansubat} table='AllowedViolations'  infractionType='Mansubat' />} />
                                                    <Route path="/DataTableEnteghalAb" component={() => <DataTable type='انتقال آب' fields={EnteghalAb} table='AllowedViolations'  infractionType='EnteghalAb' />} />
                                                    <Route path="/DataTableKafShekani" component={() => <DataTable type='کف شکنی' fields={KafShekani}  table='AllowedViolations'  infractionType='KafShekani' />} />
                                                    <Route path="/DataTableTaghirKarbari" component={() => <DataTable type='تغییر کاربری' fields={TaghirKarbari} table='AllowedViolations'  infractionType='TaghirKarbari' />} />
                                                    <Route path="/DataTableAdamTamdid" component={() => <DataTable type='عدم تمدید' fields={AdamTamdid} table='AllowedViolations'  infractionType='AdamTamdid' />  }/>
                                                    <Route path="/DataTableTaghirMahal" component={() => <DataTable type='تغییر محل' fields={TaghirMahal} table='AllowedViolations'  infractionType='TaghirMahal' />} />
                                                    <Route path="/DataTableAbShirin" component={() => <DataTable type='آب شیرین کن' fields={AbShirin} table='AllowedViolations'  infractionType='AbShirin' />  }/>
                                                    
                                                    <Route path="/DataGridPlumb" component={()=><DataTable type='پلمپ' fields={Plumb} table='NotAllowedViolations' infractionType='Plumb'/>  }/>
                                                    <Route path="/DataTableMasloub" component={()=><DataTable type='پر و مسلوب المنفعه بودن' fields={Masloub} table='NotAllowedViolations' infractionType='Masloub'/>  }/>
                                                    <Route path="/UnderWaterNew" component={UnderWaterNew}  />
                                                    <Route path="/Home" component={Home} />
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </section>
               
            </div>
        )
    }
}
export default Content