import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../Home/home.introduction.style.scss'
import React, { useState, useEffect } from 'react';
import { IEmail, initialEmail } from '../../models/email.model';
import { initialUserContact, IUserContact } from '../../models/user.model';
import applicationService from '../../services/application.service';
import { ValidateUtil } from '../../utils/ValidateUtil';
import userService from '../../services/user.service';
const HomeIntroduction = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [userContact, setUserContact] = useState<IUserContact>({ ...initialUserContact, typeContact: 0 });

    const [email, setEmail] = useState<IEmail>(initialEmail);

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        var id = event.currentTarget.getAttribute("id");
        if (id === 'phoneNumber') {
            setUserContact({ ...userContact, phoneNumber: event.currentTarget.value })
        }
    }

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        const fetchData = async () => {
            var response: IEmail | null = await applicationService.getInUseEmail();
            if (response) {
                console.log(response.userId)
                setEmail(response);
            }
        }
        fetchData().catch(console.error);
        window.addEventListener('resize', handleResize)
    }, [])

    async function onClickHandler(event: React.MouseEvent) {
        event.preventDefault();
        if (ValidateUtil.validatePhoneNumber(userContact.phoneNumber)) {
            var responseCreateNewUserContact = await userService.createNewUserContact(userContact);
            var respponseEmail = await userService.sendEmail(userContact, email);
            console.log(`respponseEmail : ${respponseEmail}`)
            if (responseCreateNewUserContact === true
                && respponseEmail === true) {
                    console.log("here")
                setUserContact({ ...initialUserContact, typeContact: 0 });
            } else {

            }

        }
    }
    
    function onChangeHanlder(event: React.ChangeEvent<HTMLInputElement>) {
        var id = event.currentTarget.getAttribute("id");
        if (id === 'phoneNumber') {
            setUserContact({ ...userContact, phoneNumber: event.currentTarget.value })
        }
    }
    

    if (width > 400 && width <= 1199) {
        return (
            <div className='home__introduction' >
                <div className='home__introduction__right'>
                    <p>L???a ch???n gi???i ph??p IT cho t????ng lai </p>
                    <small>T?? v???n v?? cung c???p c??c gi???i ph??p li??n quan ?????n c??ng ngh??? <br /> cho m???c ????ch ph??t tri???n doanh nghi???p.</small>
                    <div className='home__introduction__contactbox'>
                        <input id="phoneNumber" value={userContact.phoneNumber} onChange={onChangeHanlder} placeholder='Vui l??ng ????? l???i ??i???n tho???i' />
                        <button onClick={onClickHandler} >Li??n h???</button >
                    </div>
                </div>
                <div className='home__introduction__left'>
                    <div className='home__introduction__left__trust' >
                        <img src='img\stars.png' />
                        <div className='home__introduction__left__trust__texts'>
                            <p>5.000+</p>
                            <p>Company Trust <CheckCircleIcon /> </p>
                        </div>
                    </div>
                    <div className='home__introduction__left__countries'>
                        <p>H??n 20 qu???c gia</p>
                        <p>IT-tech ???????c ng??nh c??ng ngh??? <br /> th??ng tin to??n c???u bi???t ?????n.</p>
                        <div className='home__introduction__left__countries_flags'>
                            <img src='img\united-states.png' />
                            <img src='img\canada.png' />
                            <img src='img\japan.png' />
                            <img src='img\switzerland.png' />
                            <img src='img\germany.png' />
                            <a href='#'>+ more</a>
                        </div>
                    </div>
                    <img src='img\home-01.jpg' />
                    <div className='home__introduction__left--shadow'></div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='home__introduction' >
                <div className='home__introduction__right'>
                    <p>L???a ch???n<br /> gi???i ph??p <br /> IT cho t????ng lai </p>
                    <small>T?? v???n v?? cung c???p c??c gi???i ph??p li??n quan ?????n c??ng ngh??? <br /> cho m???c ????ch ph??t tri???n doanh nghi???p.</small>
                    <div className='home__introduction__contactbox'>
                        <input id="phoneNumber" value={userContact.phoneNumber} onChange={onChangeHanlder} placeholder='Vui l??ng ????? l???i ??i???n tho???i' />
                        <button onClick={onClickHandler} >Li??n h???</button >
                    </div>
                </div>
                <div className='home__introduction__left'>
                    <div className='home__introduction__left__trust' >
                        <img src='img\stars.png' />
                        <div className='home__introduction__left__trust__texts'>
                            <p>5.000+</p>
                            <p>Company Trust <CheckCircleIcon /> </p>
                        </div>
                    </div>
                    <div className='home__introduction__left__countries'>
                        <p>H??n 20 qu???c gia</p>
                        <p>IT-tech ???????c ng??nh c??ng ngh??? <br /> th??ng tin to??n c???u bi???t ?????n.</p>
                        <div  className='home__introduction__left__countries_flags'>
                            <img src='img\united-states.png' />
                            <img src='img\canada.png' />
                            <img src='img\japan.png' />
                            <img src='img\switzerland.png' />
                            <img src='img\germany.png' />
                            <a href='#'>+ more</a>
                        </div>
                    </div>
                    <img src='img\home-01.jpg' />
                </div>
            </div>
        )
    }
}

export default HomeIntroduction