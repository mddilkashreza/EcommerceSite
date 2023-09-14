import React from 'react'

const Footer = () => {
  return (
    <>
<div className="container-fluid mt-5 bg-primary" style={{height:'8vh'}}>
    <div className="row">
        <div className="col-lg-6">
            <p className='text-light fw-bold mt-3'>Get Conneted with Us Social Media</p>
        </div>
        <div className="col-lg-6 mt-2">
            <div className="icons text-light fs-4 d-flex  text-end justify-content-end">
            <i class="bi bi-facebook me-3"></i>
            <i class="bi bi-facebook me-3"></i>
            <i class="bi bi-facebook me-3"></i>
            <i class="bi bi-facebook me-3"></i>
            <i class="bi bi-facebook me-3"></i>

            </div>
        </div>
    </div>

</div>

<div className="container-fluid bg-dark " style={{height:'45vh'}}>
    <div className="row ">

        <div className="col-lg-3 mt-4">
            <div className="company">
                <h3 className='text-light' style={{textDecoration:'underline'}}>MDR COMPANY</h3>
                <p className='text-light p-2 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis distinctio impedit mollitia. Aut, modi delectus explicabo tenetur labore incidunt porro vero mollitia doloremque. Molestiae, ipsam?</p>
            </div>
        </div>
        <div className="col-lg-3 mt-4">
            <div className="product">
                <h3 className='text-light' style={{textDecoration:'underline'}}>PRODUCTS</h3>
               <div className="pro text-light mt-5">
               <p>MDR Logo</p>
                <p>MDR Brand</p>
                <p>MDRFLOW</p>
                <p>MDR Angular</p>
               </div>
            </div>
        </div>
        <div className="col-lg-3 mt-4">

        <div className="Useful Links">
                <h3 className='text-light' style={{textDecoration:'underline'}}>Useful links</h3>
                <div className="user text-light mt-5">
                <p>MDR PROFILE</p>
                <p>Become Affiliate</p>
                <p>Shopping Rate</p>
                <p>Help</p>
                </div>
            </div>



        </div>

        <div className="col-lg-3 mt-4">
            
        <div className="Useful Links">
                <h3 className='text-light' style={{textDecoration:'underline'}}>Contacts</h3>
                <div className="user text-light mt-5">
                <p>Contact:987654321</p>
                <p>Email:abc@gmail.com</p>
                <p>Address:Kathmandu,Nepal</p>
                
                </div>
            </div>
        </div>
      
    </div>

</div>

    </>
  )
}

export default Footer