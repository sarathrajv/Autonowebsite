//rafce
import React from 'react' //imrc


const MainHeader = () => { //ffc
  return (
    <div className='navbar'>
    <div className='nav1'>
      <input className='mainhead' type="button" value="AUTONO" />
      </div>
      <div className='spacediv'>

      </div>
      <div className='nav2'>
        <input className='mainhead1' type="button" value="Home" />
        <input className='mainhead1' type="button" value="Features" />
        <input className='mainhead1' type="button" value="Blog" />
        <input className='mainhead1' type="button" value="Shop" />
     
      </div>
      <div className='spacediv'>

      </div>
      <div className='nav3'>
        <input className='mainhead2' type="button" value="Sign In" />
        <input className='mainhead2' type="button" value="Sign Up" />
      </div>

    </div>
  )
}

export default MainHeader

