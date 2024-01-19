import React from 'react'

function Logo(
    {
       width,
       height,
       classname,
      ...props
    }
  ) {
  return (
  
    <div
    class={`flex flex-wrep  ml-1.5  pl-10px ${width} ${height} ${props} ${classname}`}
    >
      <img src="http://res.cloudinary.com/dxnmbnxjh/image/upload/v1705239352/t886rz4iusayze4fpdqd.jpg" alt="logo" />
    </div>
  )
}

export default Logo
