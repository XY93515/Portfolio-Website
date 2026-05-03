import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' }
];

const mobileNavVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'tween', duration: 0.3 } },
  exit: { x: '100%', transition: { type: 'tween', duration: 0.3 } }
};

function NavLinks({ onClick, extraClass = "" }) {
  return navItems.map((item, index) => (
    <NavLink
      key={index}
      to={item.path}
      className={({ isActive }) =>
        `navbar-link${isActive ? ' navbar-link-active' : ''} ${extraClass}`
      }
      onClick={onClick}
    >
      {item.label}
    </NavLink>
  ));
}

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(open => !open);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        className={`navbar-container${scrolled ? ' navbar-scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="navbar-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          &lt; Paridhi Gupta /&gt;
        </motion.div>

        <div className="navbar-links">
          <NavLinks />
        </div>

        <div
          className={`navbar-mobile-toggle${mobileMenuOpen ? ' open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          tabIndex={0}
          role="button"
          onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && toggleMobileMenu()}
        >
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <NavLinks onClick={closeMobileMenu} extraClass="navbar-link-mobile" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 