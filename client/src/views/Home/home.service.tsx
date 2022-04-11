import '../Home/home.service.style.scss'

const HomeService = () => {
  return (
    <div className='home__services'>
                <div className='home__services__imgs'>
                    <img src='img\10.png' />
                    <img src='img\11.png' />
                    <img src="img\09.png" alt="" />
                </div>
                <div className='home__services__content' >
                    <p>Sản phẩm & Dịch vụ</p>
                    <small>Tại MedSolution, chúng tôi sử dụng các giải pháp SASS : </small>
                    <small>+ MEDLOYALTY: Cung cấp dịch vụ dành cho khách hàng thân thiết</small>
                    <small>+ MEDDMS: Cung cấp dịch vụ về quản lý kênh phân phối ngành dược phẩm</small>
                    <small>+ MEDDIGITAL: Cung cấp các chiến dịch, sản phẩm Marketing số</small>
                    <small>+ MEDTELE: Dịch vụ tiếp thị qua điện thoại</small>
                    <small>để cung cấp các dịch vụ liên quan đến sàn thương mại điện tử bán sỉ ngành dược phẩm thông qua việc liên kết các nhà máy, nhà phân phối ,
                        nhà thuốc , bệnh viện toàn quốc với <br/> sự đa dạng từ tây y đến đông y.</small>
                    <small>Một số sản phẩm tiêu biểu như : Medofa.vn , MedDeal.vn, ... </small>
                    <a href='/' > Xem thêm </a>
                </div>
            </div>
  )
}

export default HomeService