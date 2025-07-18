import React, { useState } from 'react';
import { Paper, Box, Slider, Checkbox, useMediaQuery, Button } from '@mui/material';
import "./Home.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import Icon from '@mdi/react';
import { mdiPiggyBankOutline } from '@mdi/js';
import { Grid, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect } from "react";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import logo from './cargoz-logo.svg'
import logo from './NV.png'

function Home(){
    const [yearlyLease, setYearlyLease] = useState(0);
    const [storageArea, setStorageArea] = useState(0);
    const [cctvChecked, setCCTVChecked] = useState(false);
    const [acChecked, setACChecked] = useState(false);
    const [rackChecked, setRackChecked] = useState(false);
    const [annualSavings, setAnnualSavings] = useState(0);
    const theme = useTheme();
    const isLaptop = useMediaQuery(theme.breakpoints.up('lg'));
    const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    // const isMobile = useMediaQuery('(max-width:1000px)');

    useEffect(() => {
        calculateAnnualSavings();
      }, [yearlyLease, storageArea, cctvChecked, acChecked, rackChecked]);

    const table1Data = [
        { id: 1, col1: 'Data1-1', col2: 'Data1-2', col3: 'Data1-3' },
      ];
    
    const table2Data = [
        { id: 1, col1: 'Data2-1', col2: 'Data2-2', col3: 'Data2-3', col4: 'Data2-4' },
      ];
    
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        background: '#f0f0f0',
      };
    
    const logoStyle = {
        marginRight: 'auto', 
        fontWeight: 'bold',
      };
    
    const midStyle = {
        marginRight: 'auto', 
        fontWeight: 'bold',
      };
    
    const paperStyle1 = {
        padding: "10px",
        boxShadow: "0 0 7px -2px",
        width: "70%",
        justifyItems: "center",
        display: "inline-block",
        borderRadius: '20px',
      };
    
    const paperStyle2 = {
        width: "71%",
        justifyItems: "center",
        display: "inline-block",
      };
      
    const loginButtonStyle = {
        padding: '8px 16px',
        borderRadius: '5px',
        background: '#3c0bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        // marginLeft: isMobile ? '-180px' : ''
      };
    


    const calculateAnnualSavings = () => {
        console.log('yearlyLease', yearlyLease);
        console.log('storageArea', storageArea);
        console.log('cctvChecked', cctvChecked);
        console.log('acChecked', acChecked);
        console.log('rackChecked', rackChecked);
        let savings = 0;
        setAnnualSavings(savings);
    };
  
    const handleYearlyLeaseChange = (event, newValue) => {
      setYearlyLease(newValue);
    };
  
    const handleStorageAreaChange = (event, newValue) => {
      setStorageArea(newValue);
    };
  
    const handleCCTVChange = (event) => {
      setCCTVChecked(event.target.checked);
    };
  
    const handleACChange = (event) => {
      setACChecked(event.target.checked);
    };
  
    const handleRackChange = (event) => {
      setRackChecked(event.target.checked);
    };

    const handleLogin = () => {
        console.log('Login clicked');
    };

    return (
        <div>
        <header style={headerStyle}>
            {/* <div style={logoStyle}>Your Logo</div> */}
            <div style={{ ...logoStyle, display: 'flex', alignItems: 'center' }}> 
                <img src={logo} alt="Your Logo" style={{ width: '100px', height: 'auto' }} /> 
            </div>
            <div style={{
                textAlign: 'center',
                marginRight: "500px",
                display: "flex",
                gap: 40
            }}> {isMobile ? <></> :<>
                <div style={midStyle}>Locations</div>
                <div style={midStyle}>Why Choose Cargoz</div>
                <div style={midStyle}>Become an Affiliate</div>
                <div style={midStyle}>Become a Partner</div>
                </>
                }
            </div>
            {isMobile ? 
                <div style={{marginLeft: '-271px', display: 'flex'}}>
                <SearchOutlinedIcon/>
                <NotificationsActiveOutlinedIcon/>
                <AccountCircleOutlinedIcon/>
                </div> :       
            <Button style={loginButtonStyle} onClick={handleLogin}>
                <AccountCircleOutlinedIcon/>Log in
            </Button>}
        </header>
            <div style={{
                    marginLeft: isMobile ? '' : '260px',
                    textAlign: 'left',
                    // margin: 'center'
                }}>
            <div>
                <div>
                    <h1>On-Demand Warehouse Savings Calculator</h1>
                    <h3 style={{color: 'gray'}}>The calculator display and estimated savings* when you choose On-demand warehousing insteand of a yearly lease.</h3>
                    <h3>Set the slider to the annual lease amount and the corresponding storage area.</h3>
                </div>
                <div>
                    <Paper style={paperStyle1}>
                        <Box 
                        sx={{
                            display: isMobile ? 'flow': 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            padding: '20px',
                            borderRadius: '20px',
                        }}
                        >
                        <div style={{flex: isMobile ? 'none' : '1', marginRight: isMobile ? '0' : '40px'}}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Yearly Lease Amount</span>
                                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{yearlyLease}</span>
                                </div>
                                <Slider
                                    value={yearlyLease}
                                    min={0} 
                                    max={220000} 
                                    step={1000} 
                                    onChange={handleYearlyLeaseChange}
                                    style={{color: '#3c0bff'}}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                                <span>0</span>
                                <span>220000</span>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Storage Area</span>
                                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{storageArea}</span>
                                </div>
                                <Slider
                                    value={storageArea}
                                    min={0}
                                    max={22000}
                                    step={1000}
                                    onChange={handleStorageAreaChange}
                                    style={{color: '#3c0bff'}}
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                                <span>0</span>
                                <span>220000</span>
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                }}>
                                <Checkbox
                                    checked={cctvChecked}
                                    onChange={handleCCTVChange}
                                    style={{color: '#3c0bff'}}
                                />
                                <p>CCTV</p>
                                <Checkbox
                                    checked={acChecked}
                                    onChange={handleACChange}
                                    style={{color: '#3c0bff'}}
                                />
                                <p>A/C</p>
                                <Checkbox
                                    checked={rackChecked}
                                    onChange={handleRackChange}
                                    style={{color: '#3c0bff'}}
                                />
                                <p>Rack</p>
                            </div>
                        </div>
                        <div style={{
                            flex: isMobile ? 'none' : '1.5',
                            backgroundColor: '#3c0bff',
                            color: 'white',
                            borderRadius: '20px',
                            // marginLeft: "25px" 
                            }}>
                            <h2 style={{
                                textAlign: "left",
                                marginLeft: '30px'
                            }}>Annual Savings</h2>
                            <div style={{
                                display: isMobile ? 'flow' :'flex', 
                                justifyContent: 'space-between',
                                }}>
                                <h2 style={{
                                    textAlign: "left",
                                    marginLeft: isMobile ? "30px" : '200px',
                                    marginTop: '80px'
                                }}>AED
                                <span style={{fontSize: "50px",
                                }}>
                                    {annualSavings}
                                    {/* 117,400 */}
                                </span>
                                </h2>
                                <span style={{fontSize: "50px",
                                marginTop: '80px',
                                marginRight: isMobile ? "200px" : '30px',
                                color: "#92E8C8"
                                }}>44.45%</span>
                            </div>
                                                    
                        </div>
                        </Box>
                    </Paper>     

                </div>
            </div>
            <h2>Yearly Lease vs On-Demand Storage</h2>
            <Paper style={paperStyle2}>
            <Grid container spacing={3} sx={{display: isMobile ? 'flow' :'flex'}}>
                <Grid item xs={isMobile ? 14 : 6}>
                    <p style={{ fontWeight: 'bold' }}>Hidden Charges</p>
                    <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell sx={{color: '#3c0bff', textAlign: 'center' }}>Charges</TableCell>
                            <TableCell sx={{color: '#3c0bff', textAlign: 'center' }}>Yearly Leasing</TableCell>
                            <TableCell sx={{color: '#3c0bff', textAlign: 'center' }}>On-Demand Storage</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {table1Data.map((row) => (
                            <TableRow key={row.id}>
                            <TableCell style={{fontWeight: 'bold', textAlign: 'center'}}>{row.col1}</TableCell>
                            <TableCell align='center'>{row.col2}</TableCell>
                            <TableCell align='center'>
                                {/* {row.col3} */}
                                <CancelOutlinedIcon style={{color: '#57eeb5'}}/>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={isMobile ? 14 : 6}>
                    <p style={{ fontWeight: 'bold' }}>Price Break-up</p>
                    <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell align='center'></TableCell>
                            <TableCell sx={{color: '#3c0bff', textAlign: 'center'}}>Yearly leasing</TableCell>
                            <TableCell sx={{textAlign: 'center', backgroundColor: '#c4b5ff', color: '#3c0bff', 
                                borderTopLeftRadius: '20px', borderTopRightRadius: '20px', }}
                                >Cargoz</TableCell>
                            <TableCell sx={{color: '#3c0bff', textAlign: 'center' }}>Typical Occupancy %</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {table2Data.map((row) => (
                            <TableRow key={row.id}>
                            <TableCell style={{fontWeight: 'bold', textAlign: 'center'}}>{row.col1}</TableCell>
                            <TableCell align='center'>{row.col2}</TableCell>
                            <TableCell sx={{ textAlign: 'center', backgroundColor: '#c4b5ff', 
                                borderColor: '#3c0bff', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' 
                                }}>{row.col3}</TableCell>
                            <TableCell align='center'>{row.col4}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            <Grid container>
                <div style={{ marginLeft: '20px' }}>
                    <h2>Cargoz Benefits</h2>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <CheckCircleIcon style={{ color: '#c4b5ff' }} /> No hidden Charges
                    </h3>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <CheckCircleIcon style={{ color: '#c4b5ff' }} /> No upfront payments
                    </h3>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <CheckCircleIcon style={{ color: '#c4b5ff' }} /> Monthly service cost
                    </h3>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <CheckCircleIcon style={{ color: '#c4b5ff' }} /> Immediate storage
                    </h3>
                </div>
            </Grid>
            </Paper>
            </div>
        </div>
    )
}

export default Home;