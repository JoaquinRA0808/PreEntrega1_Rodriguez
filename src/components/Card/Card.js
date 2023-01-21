import React from 'react'

const Card = (props) => {
  const {titulo, descripcion,img,btnText,btnClassName} = props //es un objeto
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{descripcion}</p>
      <button btntext={btnText} btnclassname={btnClassName} />
      </div>
    </div>
  )
}

export default Card