import React from 'react'
import tree from '../images/tree.jpg'
import download from '../images/download.jpg'
import { useState,useEffect } from 'react';
import "./Home.css";
import misha from "../images/misha.jpg"
import srk from "../images/srk.jpg"
import shr from "../images/shr.jpg"
import sonu from "../images/sonu.jpg"
import gopu from "../images/gopu.jpg"
import profile from "../images/profile.jpg"


// import AutoScrollList from './AutoScrollList'; // Assuming the AutoScrollList component is in a separate file




export default function Home() {



  const [scrollIndex, setScrollIndex] = useState(0);

  const manualData = [
    'Item 1 - District',
    'Item 2 - College',
    'Item 3 - Broken Heart',
    'Item 4 - Winning Trophy',
    // Add more items as needed
    'Item 1 - District',
    'Item 2 - College',
    'Item 3 - Broken Heart',
    'Item 4 - Winning Trophy',
  ];



  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update scroll index to simulate scrolling
      setScrollIndex((prevIndex) => (prevIndex + 1) % manualData.length);
    }, 2500); // Adjust the interval as needed (here, it's set to 2 seconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [manualData]);



  const CarouselComponent = () => {
    const [carouselItems, setCarouselItems] = useState([]);
  
    useEffect(() => {
      // Fetch carousel items from the backend
      fetch('/api/carousel/items')
        .then(response => response.json())
        .then(data => setCarouselItems(data))
        .catch(error => console.error('Error fetching carousel items:', error));
    }, []);
  }

  return (
    <> 
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={tree} height="600" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={download} height="600"className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={tree} height="600" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div style={{display:"flex", justifyContent:"space-between"}}>
<div className="scroll" style={{width:"450px", height:"200px", border:"1px solid black" ,overflowY: 'scroll'}}>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0', transition: 'transform 0.5s ease', transform: `translateY(-${scrollIndex * 50}px)` }}>
        {manualData.map((item, index) => (
          <li key={index} style={{ height: '40px', borderBottom: '1px solid #eee', padding: '10px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="scroll" style={{width:"450px", height:"200px" ,border:"1px solid black",overflowY: 'scroll'}}>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0', transition: 'transform 0.5s ease', transform: `translateY(-${scrollIndex * 50}px)` }}>
        {manualData.map((item, index) => (
          <li key={index} style={{ height: '40px', borderBottom: '1px solid #eee', padding: '10px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="scroll" style={{width:"450px", height:"200px",border:"1px solid black",overflowY: 'scroll'}}>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0', transition: 'transform 0.5s ease', transform: `translateY(-${scrollIndex * 40}px)` }}>
        {manualData.map((item, index) => (
          <li key={index} style={{ height: '40px', borderBottom: '1px solid #eee', padding: '10px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    </div>
    <div className='images' style={{height:"630px" ,margin:'5px', backgroundColor:"blue"}}>
<div className='firstRow 'style={{display:"flex",justifyContent:"space-between"}}>
<img className="social" src={profile} alt="ig" style={{height:"300px",width:"440px", margin:"5px"}}/>
<img className="social" src={shr} alt="ig" style={{height:"300px",width:"440px", margin:"5px"}}/>
<img className="social" src={srk} alt="ig" style={{height:"300px",width:"440px", margin:"5px"}}/>
</div>
<div className='firstRow 'style={{display:"flex",justifyContent:"space-between"}}>
<img className="social" src={misha} alt="ig" style={{height:"300px",width:"440px", margin:"5px"}}/>
<img className="social" src={sonu} alt="ig" style={{height:"300px",width:"440px", margin:"5px"}}/>
<img className="social" src={gopu} alt="ig" style={{height:"300px",width:"440px", margin:"5px"}}/>
</div>
    </div>
    </>
  )
}
