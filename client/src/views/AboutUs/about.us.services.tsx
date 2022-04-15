import { Link } from 'react-router-dom'
import './about.us.services.style.scss'

const AboutUsService = () => {
    return (
        <div className='aboutUs__service' >
            <div className='aboutUs__service__content'>
                <small>Các Dịch Vụ</small>
                <p>Dịch Vụ CNTT<br /> Chất Lượng Tốt</p>
            </div>
            <div className='aboutUs__service__content'>
                <div className='aboutUs__service__content__pictures'>
                    <img src='img\au_service01.PNG' />
                    <img src='img\au_service02.PNG' />
                    <img src='img\au_service03.PNG' />
                </div>
            </div>
            <Link to="#" >Xem thêm &rarr; </Link>
            {/*  */}
        </div>
    )
}

export default AboutUsService