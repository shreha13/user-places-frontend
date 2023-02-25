import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Backdrop from '../../UIElements/Backdrop/Backdrop'
import MainHeader from '../MainHeader/MainHeader'
import NavLinks from '../NavLink/NavLinks'
import SideDrawer from '../SideDrawer/SideDrawer'

import './MainNavigation.css'

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerIsOpen(prevDrawerState => !prevDrawerState)
  }

  return (
    <>
      {drawerIsOpen && (
      <Backdrop onClick={toggleDrawer}/> )}
      <SideDrawer show={drawerIsOpen} onClick={toggleDrawer}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className='main-navigation__menu-btn' onClick={toggleDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/'>Your Places</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  )
}

export default MainNavigation