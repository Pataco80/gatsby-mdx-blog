import React from 'react'
import Links from '../constants/links'
import Categories from '../components/Categories'
import { IoMdClose } from 'react-icons/io'

const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'showSidebar' : ''}`}>
      <button className='close-btn' onClick={toggleMenu}>
        <IoMdClose />
      </button>
      <Links styleClass='sidebar-links' />
    </aside>
  )
}

export default Sidebar
