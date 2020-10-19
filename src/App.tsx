import { CssBaseline} from '@material-ui/core';
import React from 'react';
import Navbar from './components/Navbar';
import PlateList from './components/PlateList';
import GlobalStyles from './styles/global'
import DataContextProvider from '../src/hooks/useContext'


function App() {
  
  return (
    <>
      <DataContextProvider>
        <Navbar />
        <CssBaseline />
        <PlateList />
        <GlobalStyles />
      </DataContextProvider>
      
    </>
  );
}

export default App;
