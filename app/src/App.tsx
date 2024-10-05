import './App.css';
import DataTable from './components/DataTable';
import { useTheme } from './components/themes/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Button } from '@mui/material';

function App() {

  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{margin: "20px"}}>
        <Button variant="contained" onClick={toggleTheme}>
          Switch to {theme.palette.mode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
        <div className={`app ${theme.palette.mode}`}>
          <DataTable />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;