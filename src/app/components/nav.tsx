'use client'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const useCurrentPath = (path: string) => {
    return usePathname() === path ? {color: '#609EA2'} : {}
  }

  const usePageOptions = () => {
    if (usePathname() === '/') {
      return (<>
        <li>
          <a className="md:p-4 py-2 block" href="#about">About</a>
        </li>
        <hr />
        <li>
          <a className="md:p-4 py-2 block" href="#skills">Skills</a>
        </li>
        <hr />
      </>)
    }
  }
  return (<header id="nav-header">
    <nav
       className="
         flex flex-wrap
         items-center
         justify-between
         w-full py-4
         md:py-0 px-4
         text-lg
       "
     >
      <div className="text-4xl">Justin Cucuzza</div>
      <button id="menu-button" onClick={toggleMenu} className="md:hidden">
      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 md:hidden block cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      </button>
      <div className={"w-full md:flex md:items-center md:w-auto " + (menuOpen ? 'hidden' : '')}  id="menu">
          <ul id="menu-list"
            className="
              text-xl
              pt-4
              md:flex
              md:justify-between
              "
          >
            <li>
              <a className="md:p-4 py-2 block" style={useCurrentPath('/')}  href="/"
                >Home</a
              >
            </li>
            <hr />
            {usePageOptions()}
            <li>
              <a className="md:p-4 py-2 block" style={useCurrentPath('/projects')} href="/projects"
                >Projects</a
              >
            </li>
            <hr />
            <li>
              <a className="md:p-4 py-2 block" href="/blog"
                >Blog(?)</a
              >
            </li>
            <hr />
          </ul>
        </div>
   </nav>
 </header>)
}