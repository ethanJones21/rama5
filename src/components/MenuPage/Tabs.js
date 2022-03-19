import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import MenuProducts from './MenuProducts';

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
        // <Box sx={{ p: 3 }}>
        <Box>
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

export default function ThreeTabs({ allProducts }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 4, borderColor: 'divider', marginLeft: 4 }}>
          <Tabs
            TabIndicatorProps={{
              style: {
                backgroundColor: '#FF004E',
              },
            }}
            textColor="inherit"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab style={{ textTransform: 'none' }} label="Transferida" {...a11yProps(0)} />
            <Tab style={{ textTransform: 'none' }} label="En proceso" {...a11yProps(1)} />
            <Tab style={{ textTransform: 'none' }} label="Entregado" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MenuProducts productsFilter={allProducts} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MenuProducts productsFilter={allProducts} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MenuProducts productsFilter={allProducts} />
        </TabPanel>
      </Box>
    </div>
  );
}
