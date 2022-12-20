import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/10/633f155d0cd71_1200.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cnnespanol.cnn.com/wp-content/uploads/2022/07/de-paul_1440x810_wmk.jpeg?quality=100&strip=info" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://px.cdn.lanueva.com/122022/1671008586533.webp?cw=1121&ch=633&extw=jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel