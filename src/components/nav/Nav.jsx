/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {FaTasks} from 'react-icons/fa'
// import {FaTasks} from 'react-icons/md'
import { useState } from 'react'
import logo from '../../assets/single_logo.svg'

const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}><BiBook/></a>
      <a href="#" onClick={()=>setActiveNav('#')}  className={activeNav==='#'?'active':''}>
      <img src={logo} alt="logo" height={'20rem'} width={'20rem'}/>
      </a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio'?'active':''}><FaTasks/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav