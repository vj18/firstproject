import React, { useEffect, useState } from 'react'
import Link from 'next/link'


  export const Menu=() =>{
    const[menuitem,setMenuItem]=useState('')

    useEffect(()=>{
         let pathname=window.location.pathname
         setMenuItem(pathname.slice(1) || 'home')
    },[])

    const fnclick=(eve)=>{
      setMenuItem(eve.target.id)
    }
    return (
          <ul className='menu'>
          
      <li>
        <Link href="/home" id='home' className={menuitem=='home' && 'active-menu'} onClick={fnclick}>Home</Link>
      </li>
      <li>
        <Link href="/about" id='about'className={menuitem=='about' && 'active-menu'} onClick={fnclick}>About Us</Link>
      </li>
      <li>
        <Link href="/content" id='content'className={menuitem=='content' && 'active-menu'} onClick={fnclick}>Contact</Link>
      </li>
    </ul>
    )
    

 }