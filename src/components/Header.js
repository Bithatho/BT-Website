import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';

const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &.scrolled {
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  }

  &.transparent {
    background: transparent;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  position: relative;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .logo-icon {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.5rem;
    color: var(--dark-navy);
  }

  .logo-text {
    .name {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--white);
      line-height: 1;
    }
    .title {
      font-size: 0.8rem;
      color: var(--primary-gold);
      font-weight: 500;
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 968px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(motion.li)`
  position: relative;

  a {
    color: var(--white);
    font-weight: 500;
    font-size: 1rem;
    padding: 0.5rem 0;
    transition: color 0.3s ease;
    position: relative;

    &:hover {
      color: var(--primary-gold);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient-primary);
      transition: width 0.3s ease;
    }

    &:hover::after,
    &.active::after {
      width: 100%;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--white);
  font-size: 0.9rem;

  .icon {
    color: var(--primary-gold);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  color: var(--white);
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    color: var(--primary-gold);
  }

  @media (max-width: 968px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  text-align: center;
  
  li {
    margin: 2rem 0;
    
    a {
      color: var(--white);
      font-size: 2rem;
      font-weight: 600;
      transition: all 0.3s ease;
      
      &:hover {
        color: var(--primary-gold);
        transform: scale(1.1);
      }
    }
  }
`;

const MobileCloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  color: var(--white);
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    color: var(--primary-gold);
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    setActiveSection(href.replace('#', ''));
  };

  return (
    <>
      <HeaderWrapper
        className={isScrolled ? 'scrolled' : 'transparent'}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <HeaderContent>
            <Logo
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="logo-icon">BT</div>
              <div className="logo-text">
                <div className="name">Biji Thomas</div>
                <div className="title">CEO, Bettroi</div>
              </div>
            </Logo>

            <Navigation>
              <NavLinks>
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={item.href}
                      className={activeSection === item.href.replace('#', '') ? 'active' : ''}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.label}
                    </a>
                  </NavLink>
                ))}
              </NavLinks>

              <ContactInfo>
                <ContactItem>
                  <FiPhone className="icon" />
                  <span>+971 50 123 4567</span>
                </ContactItem>
                <ContactItem>
                  <FiMail className="icon" />
                  <span>info@bettroi.com</span>
                </ContactItem>
              </ContactInfo>
            </Navigation>

            <MobileMenuButton
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <FiMenu />
            </MobileMenuButton>
          </HeaderContent>
        </div>
      </HeaderWrapper>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileCloseButton
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiX />
            </MobileCloseButton>

            <MobileNavLinks>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </MobileNavLinks>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: '3rem' }}
            >
              <ContactInfo style={{ flexDirection: 'column', gap: '1rem', display: 'flex' }}>
                <ContactItem>
                  <FiPhone className="icon" />
                  <span>+971 50 123 4567</span>
                </ContactItem>
                <ContactItem>
                  <FiMail className="icon" />
                  <span>info@bettroi.com</span>
                </ContactItem>
              </ContactInfo>
            </motion.div>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;