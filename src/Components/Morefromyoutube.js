import React from 'react'

function Morefromyoutube(props) {
  return (
    <div className='morefrom__youtube' style={{
        padding:'15px',
            cursor:'pointer',
        display:'flex',   
    height:'35px'
     }} >
  <img className='moreyb__images' alt={''} src={props.img} style={{
  height: '25px',
  borderRadius:'12px',
  marginRight:'35px'}} />
  <h6 className='moreyb__titles' style={{fontSize:'12px'}}>{props.titles}</h6>
  </div>
  )
}

export default Morefromyoutube;