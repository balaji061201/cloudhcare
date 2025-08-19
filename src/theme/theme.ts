import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E90FF', // Cloudhcare Blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#EB9846', // Cloudhcare Orange
      contrastText: '#ffffff',
    },
    text: {
      primary: '#0A2E4D', // Cloudhcare Navy
      secondary: '#6b7280',
    },
    background: {
      default: '#ffffff',
      paper: '#F4F6F7', // Cloudhcare Grey
    },
    grey: {
      50: '#F4F6F7',
      100: '#E5E7EB',
      200: '#D1D5DB',
      300: '#9CA3AF',
      400: '#6B7280',
      500: '#4B5563',
      600: '#374151',
      700: '#1F2937',
      800: '#111827',
      900: '#0A2E4D',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Lato', 'Open Sans', system-ui, -apple-system, sans-serif",
    h1: {
      fontSize: '3rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
      color: '#0A2E4D',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
      color: '#0A2E4D',
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#0A2E4D',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#0A2E4D',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#0A2E4D',
    },
    body1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.7,
      color: '#6b7280',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          padding: '12px 24px',
          borderRadius: '8px',
        },
        containedPrimary: {
          backgroundColor: '#1E90FF',
          '&:hover': {
            backgroundColor: '#1674CC',
          },
        },
        containedSecondary: {
          backgroundColor: '#EB9846',
          '&:hover': {
            backgroundColor: '#D4853A',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          borderRadius: '12px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
  },
});

export default theme;