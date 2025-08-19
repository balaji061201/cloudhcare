import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Container, 
  Fab, 
  Zoom, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, useEffect } from 'react';
import logo from '../assets/images/cloudhcare-logo.png';
import { useStyles } from '../styles/style';

export function Header() {
  const classes = useStyles();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false); // close drawer after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // track scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero'; 
      for (const item of menuItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= 120) {
            current = item.id;
            break;
          }
        }
      }
      setActiveSection(current);
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.72)',
          backdropFilter: 'blur(6px)',
          transition: 'box-shadow 0.3s ease',
          boxShadow: isScrolled ? '0 2px 6px rgba(0,0,0,0.15)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <img 
              src={logo} 
              className={classes.logo} 
              onClick={() => scrollToSection('hero')}
              alt="cloudhcarelogo" 
              style={{ cursor: 'pointer' }}
            />

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${classes.menubutton} ${
                    activeSection === item.id ? classes.activeMenu : ''
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* CTA (Desktop only) */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button
                variant="contained"
                onClick={() => scrollToSection('contact')}
                className={classes.primarybutton}
              >
                Get Started
              </Button>
            </Box>

            {/* Hamburger (Mobile only) */}
            <IconButton 
              sx={{ display: { xs: 'block', md: 'none' } }} 
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 240, p: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.id)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Floating Up Arrow */}
      <Zoom in={isScrolled}>
        <Fab 
          color="primary" 
          onClick={scrollToTop} 
          sx={{ 
            position: 'fixed', 
            bottom: 24, 
            right: 24, 
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)' 
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </>
  );
}
