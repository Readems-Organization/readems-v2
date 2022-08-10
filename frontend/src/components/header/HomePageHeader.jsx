import React, { useState } from 'react';
import AppIcon from '../Icons/AppIcon';
import { Link } from 'react-router-dom';
import { StyledHeaderContainer } from './styles/HomePageHeader';
import HomePageNav from '../nav/Nav';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

const HomePageHeader = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(true);
  return (
    <StyledHeaderContainer>
      <HomePageNav toggleSidebar={toggleSidebar} />
      <AnimatePresence>
        {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </StyledHeaderContainer>
  );
};

export default HomePageHeader;
