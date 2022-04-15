import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../AboutUs/about.us.solution.style.scss'

const AboutUsSolution = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize)
  }, [])

  if (width >= 400 && width <= 1199) {
    return (
      <div className='aboutUs__solution' >
        <div className='aboutUs__solution__content' >
          <p>Công ty giải pháp hàng đầu châu Á</p>
          <p></p>
          <p></p>
          <small>
            Chúng tôi cung cấp các giải pháp công nghệ
            cho sự phát triển của doanh nghiệp.
          </small>
          
        </div>
        <div className='aboutUs__solution__img' >
          <img src='img\au_solution_01.jpg' />
          <img src='img\au_solution_01.jpg' />
          <img src='img\au_solution_01.jpg' />
          
        </div>
        <Link to="#">Tìm hiểu thêm</Link> 
      </div>
    )
  } else {
    return (
      <div className='aboutUs__solution' >
        <div className='aboutUs__solution__content' >
          <p>Công ty </p>
          <p>giải pháp</p>
          <p>hàng đầu châu Á</p>
          <small>
            Chúng tôi cung cấp các giải pháp công nghệ
            cho sự phát triển của doanh nghiệp.
          </small>
          <Link to="#">Tìm hiểu thêm</Link>
        </div>
        <div className='aboutUs__solution__img' >
          <div className='aboutUs__solution__img__lineOne'>
            <img src='img\au_solution_01.jpg' />
          </div>
          <div className='aboutUs__solution__img__lineTwo'>
            <img src='img\au_solution_02.jpg' />
            <img src='img\au_solution_03.jpg' />
          </div>
        </div>
      </div>
    )
  }

}

export default AboutUsSolution