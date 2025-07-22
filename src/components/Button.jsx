import React from 'react'

const Button = ({btntext,className}) => {
  return (
    <button className={`'relative bg-secondary w-[198px] h-[64px] font-jost text-[22px] font-medium py-[26px] ml-[5px] px-[44px] flex justify-center items-center after:content-[""] after:absolute after:top-2px after:left-2.5px after:w-[188px] after:h-[54px] after:border after:border-white' ${className}`}>{btntext}</button>
  )
}

export default Button