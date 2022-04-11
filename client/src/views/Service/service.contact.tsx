import { Link } from 'react-router-dom';
import './service.contact.style.scss'
const ServiceContact = () => {
    return (
        <div className = 'service-contact'>
            <div className = 'service-contact-title'>
                <p>Liên Lạc Ngay Bây Giờ</p>
                <small>Bạn đang cần một giải pháp cho công ty
                    <br />hay bạn đang cần một kế hoạch cho 
                    <br/> sự phát triển ứng dụng của mình.
                    <br />Hãy liên hệ ngay với chung tôi.</small>
                <Link to="#">Liên hệ</Link>
            </div>
                <img src='img\04.png' />
        </div>
    )
}
export default ServiceContact;