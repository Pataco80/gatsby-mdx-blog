import React from 'react'
import Links from '../constants/links'
import Categories from '../components/Categories'
import { IoMdClose } from 'react-icons/io'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <button className='close-btn'>
        <IoMdClose />
      </button>
      <Links styleClass='sidebar-links' />
    </aside>
  )
}

export default Sidebar
