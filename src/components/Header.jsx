import React from 'react'


const Header = ({header,alt,className}) => {
  return (
    <div>
        <img className={className} src={header} alt={alt}/>
    </div>
  )
}

export default Header