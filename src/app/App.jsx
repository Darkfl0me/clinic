import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import './App.css';
import DefaultLayout from 'common/components/DefaultLayout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d126ba'
    },
    background: {
      default: "#45467"
    }
  }
})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="App">
            <DefaultLayout />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
