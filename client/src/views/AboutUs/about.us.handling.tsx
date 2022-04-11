import '../AboutUs/about.us.handling.style.scss'
import AboutUsHandlingBox from './about.us.handling.box'
const AboutUsHandling = () => {
  return (
    <div className='aboutUs__handling' >
        <p> Chúng tôi phát triển dự án như thế nào? </p>
        <small>Trách nhiệm - Kiến thức - Nhiệt Huyết </small>
        <div className='aboutUs__handling__content' >
          <AboutUsHandlingBox 
          image='img\au_handling_01.png'
          title='Nghiên Cứu Tình Huống'
          desc='Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy'
          />
          <AboutUsHandlingBox 
          image='img\au_handling_02.png'
          title='Phân tích dự án'
          desc='Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy'
          />
          <AboutUsHandlingBox 
          image='img\au_handling_03.png'
          title='Phát Triển Hệ Thống'
          desc='Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy'
          />
        </div>
    </div>
  )
}

export default AboutUsHandling