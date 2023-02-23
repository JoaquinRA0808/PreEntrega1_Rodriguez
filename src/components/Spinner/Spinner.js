import React from 'react'

const Spinner = () => {
  return (
    <div style={{opacity:"0.9"}} className='position-absolute top=0 left=0 bg-secondary w-100 vh-100 d-flex justify-content-center align-items-center'>
        <div style={{width: "10rem", height: "10rem"}} className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Spinner