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
            <p>L?? th????ng hi???u tr???c thu???c C??ng ty TNHH Rocklin <br /></p>
            <p>M?? s??? thu???: 0316560590 <br /></p>
            <p>?????a ch???: 231 L?? T??? Tr???ng, <br />P. B???n Th??nh, Q1, TPHCM <br /></p>
            <p>S???? ??i????n thoa??i : 0902000153</p>
          </div>
          <div className='footer__container__sectionTwo'>
            <Dropdown className='footer__container__sectionTwo__dropdown'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <HomeWorkIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='/' >Trang ch???</Dropdown.Item>
                <Dropdown.Item href='/about-us' >Gi???i thi???u</Dropdown.Item>
                <Dropdown.Item href='/service' >S???n ph???m v?? d???ch v???</Dropdown.Item>
                <Dropdown.Item href='/team' >?????i ng??</Dropdown.Item>
                <Dropdown.Item href='/#' >C?? h???i <br />& ngh??? nghi???p</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='footer__container__sectionTwo__dropdown'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <PhoneIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='/#' >Ba??o gia??</Dropdown.Item>
                <Dropdown.Item href='/#' >Blog</Dropdown.Item>
                <Dropdown.Item href='/#' >H???? tr???? tr????c tuy????n</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className='footer__container__sectionTwo__dropdown'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <AppsIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='/#' >Ba??o gia??</Dropdown.Item>
                <Dropdown.Item href='/#' >Blog</Dropdown.Item>
                <Dropdown.Item href='/#' >H???? tr???? tr????c tuy????n</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='footer__container__sectionFour'>
            <p>Y??u c???u cu???c g???i t?? v???n</p>
            <input id="phoneNumber" value={userContact.phoneNumber} onChange={onChangeHandler} type="text" placeholder='S??T c???a b???n' />
            <button onClick={onClickHandler} id='btnConsulting' >Nh???n t?? v???n</button>
          </div>
          <button className='footer__container__pageUp' id='scrollToTopBtn' onClick={onClickHandler} >
            &#8595;
          </button>
          <div className='footer__copyright' >
            <p>?? B???n quy???n 2021 b???i C??ng ty TNHH Rocklin | ???? ????ng k??.</p>
            <Link to="#">??i???u kho???n s??? d???ng</Link>
            <Link to="#">Ch??nh s??ch b???o m???t</Link>
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
            <p>L?? th????ng hi???u tr???c thu???c C??ng ty TNHH Rocklin <br />
              M?? s??? thu???: 0316560590 <br />
              ?????a ch???: 231 L?? T??? Tr???ng, P. B???n Th??nh, Q1, TPHCM <br />
              S??t: 0902000153</p>
          </div>
          <div className='footer__container__sectionTwo'>
            <p>C??ng ty</p>
            <Link to="/">Trang ch???</Link>
            <Link to="/about-us">Gi???i thi???u</Link>
            <Link to="/service">S???n ph???m <br />& D???ch v???</Link>
            <Link to="/team">?????i ng??</Link>
            <Link to="#">C?? h???i <br />& ngh??? nghi???p</Link>
          </div>
          <div className='footer__container__sectionThree'>
            <p>Kh??c</p>
            <Link to="/contact">Li??n h???</Link>
            <Link to="#">Blog</Link>
            <Link to="#">B??o gi??</Link>
            <Link to="#">H??? tr??? tr???c tuy???n</Link>
          </div>
          <div className='footer__container__sectionFour'>
            <p>Y??u c???u cu???c g???i <br /> t?? v???n</p>
            <input id="phoneNumber"  onChange={onChangeHandler} type="text" value={userContact.phoneNumber} placeholder='S??T c???a b???n' />
            <button onClick={onClickHandler}  id='btnConsulting' >Nh???n t?? v???n</button>
          </div>
        </div>
        <button className='footer__container__pageUp' id='scrollToTopBtn' onClick={onClickHandler} >
          &#8595;
        </button>
        <div className='footer__copyright' >
          <p>?? B???n quy???n 2021 b???i C??ng ty TNHH Rocklin - ???? ????ng k??.</p>
          <Link to="#">??i???u kho???n s??? d???ng</Link>
          <p>|</p>
          <Link to="#">Ch??nh s??ch b???o m???t</Link>
        </div>
      </div>
    )
  }


}

export default Footer