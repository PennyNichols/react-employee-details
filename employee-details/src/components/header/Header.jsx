import React from 'react'

const Header = (props) => {
  return (
    <div className='h1 bg-dark text-white py-4'>
      {props.title}
    </div>
  )
}

export default Header
