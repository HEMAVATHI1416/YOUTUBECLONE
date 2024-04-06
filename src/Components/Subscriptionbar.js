import React from 'react';

function Subscriptionbar(props) {
  return (
    <div className='sidebar_subscription' style={{
        padding:'15x',
            cursor:'pointer',
        display:'flex',   
    height:'35px'
     }}>
       
      <img className='channelLogo' src={props.img} alt={''} style={{ 
        height: '25px',
        borderRadius:'12px',
        marginRight:'15px'
     }} />
      <p className='channelName' style={{ 
        
         color:'rgb(65,65,65)',
         fontSize:'12px',
        fontWeight:'500',
        }}>{props.name}</p>
    </div> 


  );
}

export default Subscriptionbar;



  