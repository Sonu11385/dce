import React from 'react'
import { Link } from 'react-router-dom'

export default function News() {
  return (
    <>
    <div className="card px-3 pt-3" style={{width :"32rem",display:"flex"}}>
  {/* <!-- News block --> */}
  <div>
    {/* <!-- Featured image --> */}
    <div className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light">
      <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="img-fluid" alt='' />
      <Link to="">
        <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
      </Link>
    </div>

    {/* <!-- Article data --> */}
    <div className="row mb-3">
      <div className="col-6">
        <Link to="" className="text-info">
          <i className="fas fa-plane"></i>
          Travels
        </Link>
      </div>

      <div className="col-6 text-end">
        <u> 15.07.2020</u>
      </div>
    </div>

    {/* <!-- Article title and description --> */}
    <Link to="" className="text-dark">
      <h5>This is title of the news</h5>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid. Sed
        id nihil magni, sint vero provident esse numquam perferendis ducimus dicta
        adipisci iusto nam temporibus modi animi laboriosam?
      </p>
    </Link>

    <hr />

    {/* <!-- News --> */}
    <Link to="" className="text-dark">
      <div className="row mb-4 border-bottom pb-2">
  

        <div className="col-9">
          <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
          <p>
            <u> 15.07.2020</u>
          </p>
        </div>
      </div>
    </Link>

    {/* <!-- News --> */}
    <Link to="" className="text-dark">
      <div className="row mb-4 border-bottom pb-2">
        <div className="col-3">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
            className="img-fluid shadow-1-strong rounded" alt="Palm Springs Road" />
        </div>

        <div className="col-9">
          <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
          <p>
            <u> 15.07.2020</u>
          </p>
        </div>
      </div>
    </Link>

    {/* <!-- News --> */}
    <Link to="" className="text-dark">
      <div className="row mb-4 border-bottom pb-2">
        <div className="col-3">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
            className="img-fluid shadow-1-strong rounded" alt="Los Angeles Skyscrapers" />
        </div>

        <div className="col-9">
          <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
          <p>
            <u> 15.07.2020</u>
          </p>
        </div>
      </div>
    </Link>

    {/* <!-- News --> */}
    <Link to="" className="text-dark">
      <div className="row mb-4 border-bottom pb-2">
        <div className="col-3">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
            className="img-fluid shadow-1-strong rounded" alt="Skyscrapers" />
        </div>

        <div className="col-9">
          <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
          <p>
            <u> 15.07.2020</u>
          </p>
        </div>
      </div>
    </Link>
  </div>
  {/* <!-- News block --> */}
</div>
<div className="card px-3 pt-3" style={{width :"32rem"}}>
  {/* <!-- News block --> */}
  <div>
    {/* <!-- Featured image --> */}
    <div className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light">
      <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="img-fluid" alt='' />
      <Link to="">
        <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
      </Link>
    </div>

    {/* <!-- Article data --> */}
    <div className="row mb-3">
      <div className="col-6">
        <Link to="" className="text-info">
          <i className="fas fa-plane"></i>
          Travels
        </Link>
      </div>

      <div className="col-6 text-end">
        <u> 15.07.2020</u>
      </div>
    </div>

    {/* <!-- Article title and description --> */}
    <Link to="" className="text-dark">
      <h5>This is title of the news</h5>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid. Sed
        id nihil magni, sint vero provident esse numquam perferendis ducimus dicta
        adipisci iusto nam temporibus modi animi laboriosam?
      </p>
    </Link>

    <hr />

    {/* <!-- News --> */}
    <Link to="" className="text-dark">
      <div className="row mb-4 border-bottom pb-2">
        <div className="col-3">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
            className="img-fluid shadow-1-strong rounded" alt="Hollywood Sign on The Hill" />
        </div>

        <div className="col-9">
          <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
          <p>
            <u> 15.07.2020</u>
          </p>
        </div>
      </div>
    </Link>

    {/* <!-- News --> */}
    <Link to="" className="text-dark">
      <div className="row mb-4 border-bottom pb-2">
        <div className="col-3">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
            className="img-fluid shadow-1-strong rounded" alt="Palm Springs Road" />
        </div>

        <div className="col-9">
          <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
          <p>
            <u> 15.07.2020</u>
          </p>
        </div>
      </div>
    </Link>

    {/* <!-- News --> */}
    <Link to="" className="text-dark">
      <div className="row mb-4 border-bottom pb-2">
        <div className="col-3">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
            className="img-fluid shadow-1-strong rounded" alt="Los Angeles Skyscrapers" />
        </div>

        <div className="col-9">
          <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
          <p>
            <u> 15.07.2020</u>
          </p>
        </div>
      </div>
    </Link>

    {/* <!-- News --> */}
    <Link to="" className="text-dark">
      <div className="row mb-4 border-bottom pb-2">
        <div className="col-3">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
            className="img-fluid shadow-1-strong rounded" alt="Skyscrapers" />
        </div>

        <div className="col-9">
          <p className="mb-2"><strong>Lorem ipsum dolor sit amet</strong></p>
          <p>
            <u> 15.07.2020</u>
          </p>
        </div>
      </div>
    </Link>
  </div>
  {/* <!-- News block --> */}
</div>
    </>
  )
}
