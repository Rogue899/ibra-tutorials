import HomeContainer from "./containers/HomeConainer";
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from "@mui/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <HomeContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;