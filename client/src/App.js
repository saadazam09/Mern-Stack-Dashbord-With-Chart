import logo from './logo.svg';
import './App.css';
import { CssBaseline , ThemeProvider, } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { themeSettings } from './Them';
import { BrowserRouter, Navigate, Route, Router } from 'react-router-dom';
import { Dashboard } from './scene/dashboard';
import layout from './Layout/index.jsx';
const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
   <BrowserRouter>
   <ThemeProvider theme={theme}>
          <CssBaseline/> 
          <Router>
            <Route element={<layout/>} />
            <Route path='/' element={<Navigate to="/dashbord" replace />}/>
            <Route path= "/dashboard" element={<Dashboard/>}/>
          </Router>
      </ThemeProvider>
   </BrowserRouter>
      
  );
};

export default App;
