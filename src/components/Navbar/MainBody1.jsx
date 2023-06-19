import React from 'react'
import frontimage from './firstimage.webp'
const MainBody1 = () => {
  return (
    <div className='mainbody'>
        <img width="100%" className='frontimage' src={frontimage} alt="" />
        <div className='frontfontset'>
        <h1 className='frontimagetext'>THE FUTURE OF <br />
MOBILITY IS HERE</h1>
<h3 className='discoverselfdriving'>Discover the safest self-driving experience with Autono.</h3>
</div>
<div className='emptydiv'>

</div>



    </div>
  )
}

export default MainBody1