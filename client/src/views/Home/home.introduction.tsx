import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../Home/home.introduction.style.scss'
import React, {useState,useEffect} from 'react';
const HomeIntroduction = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize)
    }, [])

    if(width > 400 && width <= 1199){
        return (
            <div className='home__introduction' >
                        <div className='home__introduction__right'>
                            <p>Lựa chọn giải pháp IT cho tương lai </p>
                            <small>Tư vấn và cung cấp các giải pháp liên quan đến công nghệ <br /> cho mục đích phát triển doanh nghiệp.</small>
                            <div className='home__introduction__contactbox'>
                                <input placeholder='Vui lòng để lại điện thoại' />
                                <button>Liên hệ</button >
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
                                <p>Hơn 20 quốc gia</p>
                                <p>IT-tech được ngành công nghệ <br /> thông tin toàn cầu biết đến.</p>
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
    }else{
        return (
            <div className='home__introduction' >
                        <div className='home__introduction__right'>
                            <p>Lựa chọn<br /> giải pháp <br /> IT cho tương lai </p>
                            <small>Tư vấn và cung cấp các giải pháp liên quan đến công nghệ <br /> cho mục đích phát triển doanh nghiệp.</small>
                            <div className='home__introduction__contactbox'>
                                <input placeholder='Vui lòng để lại điện thoại' />
                                <button>Liên hệ</button >
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
                                <p>Hơn 20 quốc gia</p>
                                <p>IT-tech được ngành công nghệ <br /> thông tin toàn cầu biết đến.</p>
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
    }
}

export default HomeIntroduction