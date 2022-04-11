import './service.list.style.scss'

const ServiceList = () => {
    return (
        <div className='service-list'>
            <div className='service-list-titleDesc'>
                <p>Đây Là Những Dịch Vụ Chúng Tôi Cung Cấp</p>
            </div>

            <div className='service-list-boxes'>
                <div className='service-list-boxOne'>
                    <img src='img\services6.png' />
                    <div className='service-list-boxOne-content'>
                        <p>Phát Triển Phần Mềm</p>
                        <small>Giúp xử lý dữ liệu nhanh và chính xác nhất.
                            <br />Giúp tiết kiệm thời gian lẫn chi phí.
                            <br />Giúp kinh doanh hiệu quả hơn</small>
                    </div>
                </div>
                <div className='service-list-boxTwo'>
                    <img src='img\services7.png' />
                    <div className='service-list-boxTwo-content'>
                        <p>Ứng Dụng Hệ Thống</p>
                        <small>Xây dựng một ứng dụng với giao diện thân thiện,
                            hài hòa và dễ sử dụng với mọi đối tượng.
                        </small>
                    </div>
                </div>
                <div className='service-list-boxThree'>
                    <img src='img\services8.png' />
                    <div className='service-list-boxThree-content'>
                        <p>Giải Pháp Mạng</p>
                        <small>
                            Một hệ thống mạng đơn giản,
                            <br />bảo mật và thông minh.
                        </small>
                    </div>
                </div>
                <div className='service-list-boxFour'>
                    <img src='img\services9.png' />
                    <div className='service-list-boxFour-content'>
                        <p>Website & Phát Triển Ứng Dụng</p>
                        <small>
                            Chúng tôi cũng có đầy đủ các framework mới nhất<br />
                            để phát triển chúng thành các ứng dụng<br />
                            đảm bảo hiệu suất, hiệu quả và tính thẩm mỹ.
                        </small>
                    </div>
                </div>
                <div className='service-list-boxFive'>
                    <img src='img\Saas-Icon.png' />
                    <div className='service-list-boxFive-content'>
                        <p>SAAS</p>
                        <small>
                            Cung cấp dịch vụ dành cho khách dành cho khách hàng thân thiết.
                            <br />Cung cấp dịch vụ về quản lý kênh phân phối ngành dược phẩm.
                            <br />Cung cấp các chiến dịch, sản phẩm Marketing số.
                            <br />Dịch vụ tiếp thị qua điện thoại.
                        </small>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ServiceList;