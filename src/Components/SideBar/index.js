import React from 'react';
import { Link } from 'react-router-dom';

 class SideBar extends React.Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar" >
                    
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">منو اصلی</li>
                        <li className="treeview">
                            <a href="#">
                              
                                <span className="label label-primary pull-left">10</span>
                                <span className="pull-right-container ">
                                <span className="text-right-container" >مجاز</span>
                                <i className="fa fa-th"></i>
                                {/* <i className="fa fa-files-o"></i> */}
                              
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                   
                                    <li><Link to="/DataTableAbForoushi"><i className="fa fa-circle-o"></i>آب فروشی </Link></li>
                                    <li><Link to="/DataTableEzafeh"><i className="fa fa-circle-o"></i>اضافه برداشت </Link></li>
                                    <li><Link to="/DataTableAdamNasb"><i className="fa fa-circle-o"></i>عدم نصب کنتور</Link></li> 
                                    <li><Link to="/DataTableMansubat"><i className="fa fa-circle-o"></i>منصوبات غیر مجاز</Link></li> 
                                    <li><Link to="/DataTableEnteghalAb"><i className="fa fa-circle-o"></i>انتقال آب</Link></li> 
                                    <li><Link to="/DataTableKafShekani"><i className="fa fa-circle-o"></i>کف شکنی</Link></li> 
                                    <li><Link to="/DataTableTaghirKarbari"><i className="fa fa-circle-o"></i>تغییر کاربری</Link></li> 
                                    <li><Link to="/DataTableAdamTamdid"><i className="fa fa-circle-o"></i>عدم تمدید پروانه</Link></li> 
                                    <li><Link to="/DataTableTaghirMahal"><i className="fa fa-circle-o"></i>تغییر محل</Link></li> 
                                    <li><Link to="/DataTableAbShirin"><i className="fa fa-circle-o"></i>آب شیرین کن</Link></li> 
                                   
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                              
                                <span className="label label-primary pull-left">2</span>
                                <span className="pull-right-container ">
                                <span className="text-right-container">غیر مجاز</span>
                                <i className="fa fa-th"></i>
                                {/* <i className="fa fa-files-o"></i> */}
                              
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                    <li><Link to="/DataGridPlumb"><i className="fa fa-circle-o"></i>پلمپ </Link></li>
                                    <li><Link to="/DataTableMasloub"><i className="fa fa-circle-o"></i>پر و مسلوب المنفعه بودن </Link></li>
                                
                            </ul>

                            
                        </li>
                        
                    </ul>
                    <button className='btn-default'>  <Link  to="/UnderWaterNew"><i className="fa fa-circle-o"></i>ثبت تخلف</Link></button>
                </section>
                
            </aside> 
        )
    }
}
export default SideBar