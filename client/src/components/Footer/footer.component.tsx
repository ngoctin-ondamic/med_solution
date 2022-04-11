import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../Footer/footer.style.scss'
import Logo from '../Logo/logo.component'

const Footer = () => {

  const [scrollBtnToggle, setScrollBtnToggle] = useState<Boolean>(false);
  function handleOnClick(event:React.MouseEvent) {
    const scrollButton = document.getElementById('scrollToTopBtn');
    if(event.currentTarget.getAttribute('id') === 'scrollToTopBtn'){
      if(scrollBtnToggle){
        window.scrollTo({
          top : 0,
          behavior: 'smooth',
        });
        if(scrollButton){
          scrollButton.style.transform = "rotate(180deg)";
        }
        setScrollBtnToggle(!scrollBtnToggle);
      }else{
        window.scrollTo({
          top : 5224,
          behavior: 'smooth',
        });
        if(scrollButton){
          scrollButton.style.transform = "rotate(360deg)";
        }
        setScrollBtnToggle(!scrollBtnToggle);
      }
    }
  }

  window.addEventListener('scroll',()=>{
    const currentScroll = window.scrollY;
    if(currentScroll > 812){
      setScrollBtnToggle(true);
      const scrollButton = document.getElementById('scrollToTopBtn');
      if(scrollButton){
        scrollButton.style.transform = "rotate(180deg)";
      }
    }else{
      setScrollBtnToggle(false);
      const scrollButton = document.getElementById('scrollToTopBtn');
      if(scrollButton){
        scrollButton.style.transform = "rotate(360deg)";
      }
    }
  })


  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__container__sectionOne'>
          <Logo color='#FFFFFF' />
          <p>Là thương hiệu trực thuộc Công ty TNHH Rocklin <br />
            Mã số thuế: 0316560590 <br />
            Địa chỉ: 231 Lý Tự Trọng, P. Bến Thành, Q1, TPHCM <br />
            Sđt: 0902000153</p>
        </div>
        <div className='footer__container__sectionTwo'>
          <p>Công ty</p>
          <Link to="/">Trang chủ</Link>
          <Link to="/about-us">Giới thiệu</Link>
          <Link to="/service">Sản phẩm <br />& Dịch vụ</Link>
          <Link to="/team">Đội ngũ</Link>
          <Link to="#">Cơ hội <br />& nghề nghiệp</Link>
        </div>
        <div className='footer__container__sectionThree'>
          <p>Khác</p>
          <Link to="/contact">Liên hệ</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Báo giá</Link>
          <Link to="#">Hỗ trợ trực tuyến</Link>
        </div>
        <div className='footer__container__sectionFour'>
          <p>Yêu cầu cuộc gọi <br/> tư vấn</p>
          <input type="text" placeholder='SĐT của bạn' />
          <button>Nhận tư vấn</button>
        </div>
      </div>
      <button className='footer__container__pageUp' id='scrollToTopBtn' onClick={handleOnClick} >
          &#8595;
      </button>
      <div className='footer__copyright' >
          <p>© Bản quyền 2021 bởi Công ty TNHH Rocklin - Đã đăng ký.</p>
          <Link to="#">Điều khoản sử dụng</Link>
          <p>|</p>
          <Link to="#">Chính sách bảo mật</Link>
      </div>
    </div>
  )
}

export default Footer