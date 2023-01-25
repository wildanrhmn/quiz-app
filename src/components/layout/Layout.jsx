import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../header/header'

 const Layout = ({children}) => {
    const { pathname } = useLocation()
  return (
    <>
        {pathname !=="/" ? <Header /> : null}
        <div>{children}</div>
    </>
  )
} 

export default Layout