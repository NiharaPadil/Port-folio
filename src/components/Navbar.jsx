import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaPlus, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Resume from "./UIVerse/Resume"


const Hoverable = ({ children, style = {} }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...style,
        transform: hover ? 'scale(1.3)' : 'scale(1)',
        transition: 'transform 0.3s',
        display: 'inline-block'
      }}
    >
      {children}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (hash) => {
    if (location.pathname === '/') {
      // Scroll to section if already on home page
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page then scroll
      navigate('/', { state: { scrollTo: hash } });
    }
    setIsOpen(false);
  };

  // Check for scroll target after navigation
  React.useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav style={styles.navContainer}>
      {/* Dropdown Section */}
      <div style={styles.dropdownWrapper}>
        <Hoverable style={styles.menuButton}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={styles.menuButtonInner}
          >
            <span style={styles.menuIcon}>
              {isOpen ? <FaTimes style={styles.rotateIcon} /> : <FaPlus style={styles.staticIcon} />}
            </span>
          </button>
        </Hoverable>

        {isOpen && (
          <div style={styles.dropdownMenu}>
            <div style={styles.menuItems}>
              <Hoverable style={styles.menuItemWrapper}>
                <a 
                  href="#home" 
                  style={styles.menuItem} 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('home');
                  }}
                >
                  Home
                </a>
              </Hoverable>
              <Hoverable style={styles.menuItemWrapper}>
                <a 
                  href="#about" 
                  style={styles.menuItem} 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('about');
                  }}
                >
                  About
                </a>
              </Hoverable>
              <Hoverable style={styles.menuItemWrapper}>
                <a 
                  href="#projects" 
                  style={styles.menuItem} 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('projects');
                  }}
                >
                  Projects
                </a>
              </Hoverable>
              <Hoverable style={styles.menuItemWrapper}>
                <a 
                  href="#contact" 
                  style={styles.menuItem} 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('contact');
                  }}
                >
                  Contact
                </a>
              </Hoverable>
            </div>
          </div>
        )}
      </div>

      {/* Social Links Section */}
      <div style={styles.socialLinks}>
        <Hoverable style={styles.socialIconWrapper}>
          <a href="https://www.linkedin.com/in/nihara-padil/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={styles.socialIcon} />
          </a>
        </Hoverable>
        <Hoverable style={styles.socialIconWrapper}>
          <a href="https://github.com/NiharaPadil" target="_blank" rel="noopener noreferrer">
            <FaGithub style={styles.socialIcon} />
          </a>
        </Hoverable>
        <Hoverable style={styles.socialIconWrapper}>
          <a href="https://www.instagram.com/nihahahahaa__?utm_source=qr&igsh=cTYweDZqdHlkNTZp" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={styles.socialIcon} />
          </a>
        </Hoverable>

        <h1 style={styles.separator}>|</h1>
        
        
        <Resume/>
       
      </div>
    </nav>
  );
};


// Style definitions
const styles = {
  navContainer: {
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem'
  },
  dropdownWrapper: {
    position: 'relative',
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center'
  },
  menuButton: {
    borderRadius: '0.375rem',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    paddingLeft: '2.5rem',
    paddingRight: '0.5rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    filter: 'drop-shadow(0 0 8px #00ffff)',
    display: 'inline-block'
  },
  menuButtonInner: {
  backgroundColor: '#000', // Your chosen background color
  borderRadius: '50%',     // Makes it circular
  width: '2rem',         // Ensure the button has a fixed width
  height: '2rem',        // Ensure the button has a fixed height
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer'
},

  menuIcon: {
    color: '#ffffff',
    fontSize: '1.2rem'
  },
  rotateIcon: {
    transition: 'transform 0.3s',
    transform: 'rotate(180deg)'
  },
  staticIcon: {
    transition: 'transform 0.3s'
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 100,
    marginTop: '-3rem',
    width: '8rem',
    backgroundColor: '#171717',
    border: '1px solid #404040',
    borderRadius: '1rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    zIndex: 50
  },
 menuItem: {
  display: 'block',
  padding: '0 1rem',  // removes vertical padding
  margin: '-10',        // remove any default margin if needed
  color: '#ffffff',
  transition: 'all 0.3s ease',
  textDecoration: 'none'
},


  menuItemWrapper: {
    display: 'block',
    padding: '0.2rem 1rem',
    transition: 'all 0.3s ease',
    filter: 'drop-shadow(0 0 8px #00ffff)',
    '&:hover': {
      backgroundColor: '#1f2937',
      color: '#00ffff'
    }
  },
  // menuItem: {
  //   display: 'block',
  //   padding: '0.5rem 1rem',
  //   color: '#ffffff',
  //   transition: 'all 0.3s ease',
  //   textDecoration: 'none'
  // },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '2rem',
    color: '#ffffff',
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
    paddingRight: '4.5rem'
  },
  socialIconWrapper: {
    display: 'inline-block'
  },
  socialIcon: {
    transition: 'transform 0.3s, filter 0.3s',
    filter: 'drop-shadow(0 0 8px #00ffff)'
  },
  separator: {
    margin: '0 0.25rem'
  },
  resumeLinkWrapper: {
    display: 'inline-block'
  },
  resumeLink: {
    transition: 'transform 0.3s',
    fontSize: '2rem',
    fontWeight: 'normal',
    filter: 'drop-shadow(0 0 8px #00ffff)'
  }
};

export default Navbar;
