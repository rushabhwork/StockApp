import React from 'react'
import {  Container,Paper,Box,Tabs,Tab,Typography } from '@mui/material';
import PropTypes from 'prop-types';
import StockPriceGraph from '../../feature/graphs/StockPriceGraph'

// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }



// -------------------------------------MAIN FUNCTION -------------------------------


export default function Tabmiddle() {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
        <Box sx={{ width: '100%'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                    <Tab label="Overview" {...a11yProps(0)} variant="scrollable  "/>
                    <Tab label="Item Two" {...a11yProps(1)} variant="scrollable  "/>
                    <Tab label="Item Three" {...a11yProps(2)} variant="scrollable  "    />
                    </Tabs>

                  {/* --------TAB CONTENT-------- */}
                  
                    <TabPanel value={value} index={0}>
                       <StockPriceGraph></StockPriceGraph>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      Item Twobgfffffffffffff
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      Item Threebnghggggggggggggggg
                    </TabPanel>
                </Box>
                
        </Box>
    </>
  )
}
