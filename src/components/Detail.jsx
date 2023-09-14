import React from 'react'
import { useLocation } from 'react-router-dom'

const Detail = () => {
    const location = useLocation();
    const allData = location.state;
    console.log("alldata",allData)
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col-lg-8">
    <div className="card mb-3">
  <img src={allData.product.image} className="card-img-top" alt="..." />
  <div className="card-body">
  <p className="card-text">{allData.product.rating.rate}</p>
    <h5 className="card-title">{allData.product.title}</h5>
    <p className="card-text">{allData.product.price}</p>
 
    
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>

        </div>
        <div className="col-lg-4">
        <p className="card-text">{allData.product.description}</p>
        </div>
    </div>
</div>

    </div>
  )
}

export default Detail;