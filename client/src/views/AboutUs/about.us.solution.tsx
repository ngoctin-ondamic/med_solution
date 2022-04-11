import React from 'react'
import { Link } from 'react-router-dom'
import '../AboutUs/about.us.solution.style.scss'

const AboutUsSolution = () => {
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
          <img src='img\au_solution_01.jpg'/>
          </div>
          <div className='aboutUs__solution__img__lineTwo'>
            <img src='img\au_solution_02.jpg' />
            <img src='img\au_solution_03.jpg' />
          </div>
        </div>
    </div>
  )
}

export default AboutUsSolution