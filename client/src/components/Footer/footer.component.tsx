import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Footer/footer.style.scss'
import Logo from '../Logo/logo.component'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PhoneIcon from '@mui/icons-material/Phone';
import AppsIcon from '@mui/icons-material/Apps';
import { initialUserContact, IUserContact } from '../../models/user.model';
import { ValidateUtil } from '../../utils/ValidateUtil';
import userService from '../../services/user.service';
import { IEmail, initialEmail } from '../../models/email.model';
import applicationService from '../../services/application.service';

const Footer = () => {

  const [userContact, setUserContact] = useState<IUserContact>({ ...initialUserContact, typeContact: 0 });
  const [width, setWidth] = useState(window.innerWidth);
  const [email, setEmail] = useState<IEmail>(initialEmail);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    const fetchData = async () => {
      var response: IEmail | null = await applicationService.getInUseEmail();
      if (response != null) {
        console.log(`${response.userId}`)
        setEmail(response);
      }
    }
    fetchData().catch(console.error);
    window.addEventListener('resize', handleResize)
  }, [])

  const [scrollBtnToggle, setScrollBtnToggle] = useState<Boolean>(false);
  async function onClickHandler(event: React.MouseEvent) {
    const scrollButton = document.getElementById('scrollToTopBtn');
    if (event.currentTarget.getAttribute('id') === 'scrollToTopBtn') {
      if (scrollBtnToggle) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        if (scrollButton) {
          scrollButton.style.transform = "rotate(180deg)";
        }
        setScrollBtnToggle(!scrollBtnToggle);
      } else {
        window.scrollTo({
          top: 5224,
          behavior: 'smooth',
        });
        if (scrollButton) {
          scrollButton.style.transform = "rotate(360deg)";
        }
        setScrollBtnToggle(!scrollBtnToggle);
      }
    } else if (event.currentTarget.getAttribute('id') === 'btnConsulting') {
      if (ValidateUtil.validatePhoneNumber(userContact.phoneNumber)) {
        var responseCreateNewUserContact = await userService.createNewUserContact(userContact);
        var respponseEmail = await userService.sendEmail(userContact, email);
        console.log(`responseCreateNewUserContact : ${responseCreateNewUserContact}`)
        console.log(`respponseEmail : ${respponseEmail}`)
        if (responseCreateNewUserContact === true
          && respponseEmail === true) {
          console.log("here")
          setUserContact({ ...initialUserContact, typeContact: 0 });
        } else {
        }
      }
    }
  }
  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    var id = event.currentTarget.getAttribute("id");
    if (id === 'phoneNumber') {
        setUserContact({ ...userContact, phoneNumber: event.currentTarget.value })
    }
}

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 812) {
      setScrollBtnToggle(true);
      const scrollButton = document.getElementById('scrollToTopBtn');
      if (scrollButton) {
        scrollButton.style.transform = "rotate(180deg)";
      }
    } else {
      setScrollBtnToggle(false);
      const scrollButton = document.getElementById('scrollToTopBtn');
      if (scrollButton) {
        scrollButton.style.transform = "rotate(360deg)";
      }
    }
  })


  if (width >= 400 && width <= 1199) {
    return (
      <div className='footer'>
        <div className='footer__container'>
          <div className='footer__container__sectionOne'>
            <Logo color='#FFFFFF' />
            <p>Là thương hiệu trực thuộc Công ty TNHH Rocklin <br /></p>
            <p>Mã số thuế: 0316560590 <br /></p>
            <p>Địa chỉ: 231 Lý Tự Trọng, <br />P. Bến Thành, Q1, TPHCM <br /></p>
            <p>Số điện thoại : 0902000153</p>
          </div>
          <div className='footer__container__sectionTwo'>
            <Dropdown className='footer__container__sectionTwo__dropdown'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <HomeWorkIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='/' >Trang chủ</Dropdown.Item>
                <Dropdown.Item href='/about-us' >Giới thiệu</Dropdown.Item>
                <Dropdown.Item href='/service' >Sản phẩm và dịch vụ</Dropdown.Item>
                <Dropdown.Item href='/team' >Đội ngũ</Dropdown.Item>
                <Dropdown.Item href='/#' >Cơ hội <br />& nghề nghiệp</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='footer__container__sectionTwo__dropdown'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <PhoneIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='/#' >Báo giá</Dropdown.Item>
                <Dropdown.Item href='/#' >Blog</Dropdown.Item>
                <Dropdown.Item href='/#' >Hỗ trợ trực tuyến</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='footer__container__sectionTwo__dropdown'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <AppsIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='/#' >Báo giá</Dropdown.Item>
                <Dropdown.Item href='/#' >Blog</Dropdown.Item>
                <Dropdown.Item href='/#' >Hỗ trợ trực tuyến</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='footer__container__sectionFour'>
            <p>Yêu cầu cuộc gọi tư vấn</p>
            <input id="phoneNumber" value={userContact.phoneNumber} onChange={onChangeHandler} type="text" placeholder='SĐT của bạn' />
            <button onClick={onClickHandler} id='btnConsulting' >Nhận tư vấn</button>
          </div>
          <button className='footer__container__pageUp' id='scrollToTopBtn' onClick={onClickHandler} >
            &#8595;
          </button>
          <div className='footer__copyright' >
            <p>© Bản quyền 2021 bởi Công ty TNHH Rocklin | Đã đăng ký.</p>
            <Link to="#">Điều khoản sử dụng</Link>
            <Link to="#">Chính sách bảo mật</Link>
          </div>
        </div>
        {/* 
         */}
      </div>
    )
  } else {
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
            <p>Yêu cầu cuộc gọi <br /> tư vấn</p>
            <input id="phoneNumber"  onChange={onChangeHandler} type="text" value={userContact.phoneNumber} placeholder='SĐT của bạn' />
            <button onClick={onClickHandler}  id='btnConsulting' >Nhận tư vấn</button>
          </div>
        </div>
        <button className='footer__container__pageUp' id='scrollToTopBtn' onClick={onClickHandler} >
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


}

export default Footer