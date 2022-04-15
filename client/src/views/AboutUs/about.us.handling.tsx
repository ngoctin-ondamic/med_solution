import '../AboutUs/about.us.handling.style.scss'
import AboutUsHandlingBox from './about.us.handling.box'
import React, { useState, useEffect } from 'react';
const AboutUsHandling = () => {

  const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize)
    }, [])

  return (
    <div className='aboutUs__handling' >
        <p> Chúng tôi phát triển dự án như thế nào? </p>
        <small>Trách nhiệm - Kiến thức - Nhiệt Huyết </small>
        <div className='aboutUs__handling__content' >
          <AboutUsHandlingBox 
          image='img\au_handling_01.png'
          title='Nghiên Cứu'
          desc='Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy'
          />
          <AboutUsHandlingBox 
          image='img\au_handling_02.png'
          title='Phân tích'
          desc='Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy'
          />
          <AboutUsHandlingBox 
          image='img\au_handling_03.png'
          title='Phát Triển'
          desc='Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy'
          />
        </div>
    </div>
  )
}

export default AboutUsHandling