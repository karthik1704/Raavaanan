import { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import Routes from './routes/Routes';

import { useSelector, useDispatch } from 'react-redux';

import useDarkTheme from './hooks/useDarkTheme';

import Loader from './components/Loader/Loader';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import NewFooter from './components/NewFooter/NewFooter';
import useTopLoader from './hooks/useTopLoader';
// import { dark, light } from './theme';

import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import {store} from './data/store';
import Logo from './asserts/raavanan logo.png';
import axios from 'axios';
import { toggleAppLoading } from './data/actions/appAction';
import { logoutUser } from './data/actions/loginActions';
import { useStyles } from './AppStyle';



function App() {
  const classes = useStyles();
  const [theme] = useDarkTheme();
  const { loading } = useSelector((state) => state.appUi);
  //const { dispatch } = useDispatch();
  const {dispatch} = store;

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      primary: {
         main: green[600],
        // main: '#8bc34a'
      },
    },
  });

  useEffect(() => {
    const self = this;
    
    //console.log(self.props);
    axios.interceptors.request.use(function (config) {
      // spinning start to show
      //self.props.loading(true)
      //dispatch(appUi(true))    
      
      dispatch(toggleAppLoading(true));
      //useTopLoader(true)
      return config
     }, function (error) {
       return Promise.reject(error);
     });
 
     axios.interceptors.response.use(function (response) {
      // spinning hide
      // self.props.loading(false)
      
      dispatch(toggleAppLoading(false));
      return response;
    }, function (error) {
      if(error.response.data.code == "token_not_valid"){
    
      localStorage.setItem("app_token", '');
      axios.defaults.headers.common['Authorization'] = '';
      //Promise.reject(error);
      dispatch(logoutUser(''));
    <Redirect to="/" />
    
      //window.location.href = '/login'
      return Promise.reject(error);
      
      
    }
      return Promise.reject(error);
    });
  }, []);

  useEffect(() => {
    ReactGA.initialize('G-LH9KB8TXPW');
    ReactGA.pageview(window.location.pathname + window.location.search);
    
  }, []);



  return (
    <>
      <Helmet>
        <title>இராவணன் அங்காடி | முகப்பு</title>
        <meta
          name="keywords"
          content="ravanan,raavanan, ravanan store, raavanan store, phone case,photo frame,mugs,cups,stickers,tamil Dhesiyam, ntk, naam tzhamilar, seeman,valluvar, raavananstore "
        />
        <meta property="og:title" content="Raavanan Store , இராவணன் அங்காடி" />
        <meta property="og:image" content={Logo} />
        <meta
          property="og:description"
          content="Raavanan Store , இராவணன் அங்காடி"
        />
        
      </Helmet>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Router>
          <Paper>
            {loading && <Loader />}
            <Navbar />
            <Container className={classes.root}>
              <Routes />
            </Container>
            <NewFooter />
          </Paper>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
