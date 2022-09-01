import {
  Link,
  useNavigate,
} from 'react-router-dom';
import {
  useState,
  useEffect,
} from 'react';
import {
  Button,
  Tabs,
  Tab,
  Box,
} from '@mui/material';

const Navbar = (props) => {

  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <div id='navbar'>
        <Tabs value={false} onChange={handleChange} centered>
          <Tab component={Link} to='/' label="Home"/>
          <Tab component={Link} to='/creditcards' label="Credit Cards"/>
          <Tab component={Link} to='/crypto' label="Crypto" />
          {/*<Tab component={Link} to='/loans_banking' label="Loans And Banking" />*/}
          <Tab component={Link} to='/feedback' label="Feedback And Comments" />
          <Tab component={Link} to='/about' label="About" />
          {/*<Tab component={Link} to='/cryptonews' label="Crypto News (coming soon!)" />*/}
        </Tabs>
        </div>

      </Box>
    </div>
  )
}

export default Navbar;
