import { Link } from 'react-router-dom';
import './team.contact.style.scss'
const TeamContact = () => {
    return (
        <div className="team-contact">
            <img src ='./img/team12.jpg' />
            <p>Những thú vị khi sử dụng dịch vụ tốt nhất của chúng tôi</p>
            <Link to='#'>Liên hệ ngay</Link>
        </div>
    )
}
export default TeamContact;