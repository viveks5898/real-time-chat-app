import React from 'react'

const Array = () => {
    const Array = ["a", "b" ,"b" ,"c" ,"d" , "a", "ram" , "abc" ,"abc" ,"vivek"]
    const newArray = [...new Set(Array)];
  return (
    <>
    <div>{Array.join(',', )}</div>
    <div>{newArray.join(',', )}</div>

    
    </>
  )
}

export default Array