import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { ThemeProvider } from '@mui/styles';
import AllRoutes from './routes/AllRoutes';
import { theme } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AllRoutes />
    </ThemeProvider>
  );
}

export default App;
