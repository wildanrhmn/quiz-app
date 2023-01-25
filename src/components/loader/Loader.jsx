import React from 'react'
import { Bars } from 'react-loader-spinner'

const Loader = ({isVisible}) => {
  
  return (
    <>
    <Bars
    height="150"
    width="150"
    color="#fff"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={isVisible} />
    </>
  )
}

export default Loader