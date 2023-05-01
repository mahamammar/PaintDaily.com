import React, { useState } from 'react';
import Styled from './dashboard.module.css';
import Chart from "react-apexcharts";
import AdminNavbar from "../../Navbar/AdminNavbar";

function Dashboard() {
    const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
          }
        },
        series: [
          {
            name: "users",
            data: [3345, 2430, 8451, 2700, 4019, 4160, 7570, 10091]
          }
        ]
      })
    return (
        <React.Fragment>
                <main>
                    <AdminNavbar/>


                    <div className="row mb-3 d-flex justify-content-evenly">
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card h-100" style={{borderColor:'transparent',boxShadow:'0px 10px 15px -3px rgba(0,0,0,0.1)'}}>
                                <div className="card-body" >
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-uppercase mb-1">Orders</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">650</div>
                                            <div className="mt-2 mb-0 text-muted text-xs">
                                                <span className="text-success mr-2"><i className="fas fa-arrow-up"></i> 12%</span>
                                                <span>Since last years</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-shopping-cart fa-2x text-success"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card h-100" style={{borderColor:'transparent',boxShadow:'0px 10px 15px -3px rgba(0,0,0,0.1)'}}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-uppercase mb-1">Registered User</div>
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">366</div>
                                            <div className="mt-2 mb-0 text-muted text-xs">
                                                <span className="text-success mr-2"><i className="fas fa-arrow-up"></i> 20.4%</span>
                                                <span>Since last month</span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-users fa-2x text-info"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"row d-flex justify-content-center"} style={{marginLeft:"5%",marginTop:'5%' }}>
                                <div className="col-6"><Chart
                                    options={state.options}
                                    series={state.series}
                                    type="bar"
                                    width="100%"
                                    height={"350px"}
                                />
                        </div>
                    </div>
                    <footer className="sticky-footer bg-primary" style={{marginTop:'-3px',boxShadow:  "20px 20px 60px #bebebe -20px -20px 60px #ffffff", padding:'12px', height:'60px'}}>
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
            <span style={{color:'white'}}>Copyright &copy; {new Date().getFullYear()} - Developed by PaintDaily
            </span>
                            </div>
                        </div>
                    </footer>
                    {/*<h3 style={{fontSize:'1.6rem', fontWeight:'600', color:'#285742', marginTop:'9%', marginBottom:'4%', marginLeft:"5%"}}>Registered Users</h3>*/}
               </main>
        </React.Fragment>
    );
}

export default Dashboard;
