import { Link } from "react-router-dom";
import './service.blog.style.scss'
const ServiceBlog = () => {
    return (
        <div className='service-blog'>
            <div className='service-blog-content'>
                <strong>BLOG</strong>
                <p>Tin Tức Mới</p>
                <small>Các thông tin được cập nhập thường xuyên và chính xác</small>
            </div>
            <div className='service-blog-list'>
                <div className='service-blog-list-item'>
                    <p>Tin Tức</p>
                    <img src='./img/services10.jpg' />
                    <strong>Apple đã thay đổi</strong>
                    <br />
                    <small>
                        Apple từng có lúc bỏ ngoài tai những nhu cầu của người dùng.
                        Bằng chứng là hãng đã thay thế những tính năng tiện dụng như khe cắm thẻ nhớ SD,
                        cổng HDMI và bàn phím laptop truyền thống bằng cổng USB-C và một bàn phím cánh
                        bướm với thanh touch bar kệch cỡm trên MacBook. Táo khuyết thậm chí còn
                        sản xuất một chiếc “thùng rác” Mac Pro vừa tốn điện năng, vừa khó sửa chữa.

                        Nhưng tại sự kiện Peek Performance vừa qua, hãng công nghệ Mỹ đã công bố
                        chiếc Mac Studio và một màn hình rời Studio Display. Hai thiết bị này sở hữu
                        nhiều cổng kết nối kèm với mức giá phải chăng cho người dùng. Cây bút Jon Porter
                        của The Verge nhận định cuối cùng Apple cũng đã lắng nghe ý kiến để mang đến những
                        tính năng thân thiện với người dùng.
                    </small>
                    <br />
                    <Link to='#'>Xem thêm</Link>
                </div>

                <div className='service-blog-list-item'>
                    <p>Công Nghệ</p>
                    <img src='./img/services12.jpg' />
                    <strong>Dấu hiệu tích cực cho blockchain ở Việt Nam</strong>
                    <br />
                    <small>
                        Gần đây, các dự án blockchain Việt Nam nhận được sự quan tâm của nhiều quỹ đầu
                        tư quốc tế. Sau Axie Infinity, những dự án như Coin98, Ancient8, Summoner Arena
                        được các quỹ đầu tư tiền số lớn như Binance Labs, Dragonfly, Coinbase rót vốn.

                        Đây là thông tin tích cực cho lĩnh vực blockchain Việt Nam khi nhiều dự án GameFi
                        lừa đảo liên tục xuất hiện vào cuối năm 2021, gây mất niềm tin ở nhà đầu tư trong
                        nước và quốc tế.

                        Ngày 5/1, quỹ đầu tư Binance Labs thông báo rót vốn vào Coin98. Đây là nền tảng tài
                        chính phi tập trung (DeFi) với các sản phẩm như ví không lưu ký Coin98 Wallet, sàn giao
                        dịch phi tập trung Coin98 Exchange và cổng giao dịch đa chuỗi Space Gate.

                    </small>
                    <br />
                    <Link to='#'>Xem thêm</Link>
                </div>

                <div className='service-blog-list-item'>
                    <p>Doanh Nghiệp</p>
                    <img src='./img/services11.jpg' />
                    <strong>The Holiday Ha Long bắt nhịp thị hiếu của nhà đầu tư</strong>
                    <br />
                    <small>
                        Vàng, chứng khoán, bất động sản hay gửi tiền ngân hàng vốn là danh mục truyền thống
                        của nhiều nhà đầu tư. Song, biến động của Covid-19 đã làm thay đổi kịch bản của nền kinh tế,
                        tạo ra nhiều nhân tố ảnh hưởng đến thứ tự ưu tiên trong danh mục đầu tư này.

                        Trong khi gửi tiết kiệm ngân hàng có mức lãi suất không cao như kỳ vọng của nhiều đầu tư,
                        thị trường vàng tuy liên tục tăng trong đầu năm nay nhưng phụ thuộc nhiều vào tình hình
                        kinh tế thế giới. Chứng khoán cũng được đánh giá có nhiều biến động và rủi ro.

                    </small>
                    <br />
                    <Link to='#'>Xem thêm</Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceBlog;