import { Link } from "react-router-dom"
import '../Home/home.contact.style.scss'

const HomeContact = () => {
  return (
    <div className='home__contact' >
                <p> Liên hệ <br />
                    với chúng tôi</p>
                <p>
                    Hãy lựa chọn cho mình một giải pháp kinh doanh riêng, <br/>
                    chúng tôi sẽ cùng đồng hành cùng bạn  <br/> 
                    với tất cả sự trách nhiệm và trân trọng !
                </p>
                <Link to="/contact"> Liên hệ </Link>
            </div>
  )
}

export default HomeContact