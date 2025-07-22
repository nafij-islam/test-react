import React from 'react'

const List = ({listitem,className}) => {
  return (
     <li className={`'text-[18px] font-normal list-none text-primary hover:text-secondary  cursor-pointer inline-block' ${className}`} >{listitem}</li>
  )
}

export default List
