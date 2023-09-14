import React, { useEffect, useState } from 'react'
import image1 from '../images/1.jpg'
import image2 from '../images/3.jpg'
import image3 from '../images/cover.jpeg'
import {Link} from "react-router-dom";
import Detail from './Detail';

const Home = () => {

    const [data, setData] = useState();

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
    },[])
    console.log("data",data)
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

            </div>
        </div>
    </div>


    <div className="container">
        <div className="row">
         
                {data!=undefined?data.map((product) => (
   <div className="col-lg-4 mt-5">
                         <div className="card" style={{width: '18rem', height:'70vh'}}>
                         <img src={product.image} className="card-img-top" alt="..."  style={{height:'50vh'}}/>
                         <div className="card-body">
                           <h5 className="card-title fw-2">${product.price}</h5>
                          
                           <Link to="/detail" state={{ product}} className="btn btn-primary mt-2">Read More </Link>
                         </div>
                       </div>
                       </div>
                )):""}
 

          
        </div>
    </div>
    
    
    </>
  )
}

export default Home;