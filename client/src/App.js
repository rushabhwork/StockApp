import logo from './logo.svg';
import './App.css';
import {Typography,Stack } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {store} from "./redux/store/store"
import { Provider } from 'react-redux';

import Home from './pages/home/Home'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home></Home>
      </div>
     </Provider>
  );
}

export default App;
