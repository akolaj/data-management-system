import {useState} from 'react'
import { createTheme } from '@mui/material/styles';

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    localStorage.setItem('theme', themeMode === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};
