import React from 'react'

const Header = (props) => {
  return (
    <h1 style={{paddingTop:'3rem', paddingBottom:'3rem'}}>{props.title}</h1>
  )
}

export default Header