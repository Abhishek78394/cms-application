import React from 'react'
import './Cursor.css'

const Cursur = () => {
  window.addEventListener('mousemove', function(dats){
    document.querySelector('.circle').style.top = dats.clientY+'px';
    document.querySelector('.circle').style.left = dats.clientX+'px';
    })
  return (
    <div className="circle"><div className="dot"></div></div>
  )
}

export default Cursur
