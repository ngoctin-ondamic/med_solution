import '../Home/home.service.style.scss'
import { useEffect , useState} from 'react'

const HomeService = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize)
    }, [])
    

    if(width >= 400 && width <= 1199){
        return (
            <div className='home__services'>
                <div className='home__services__content' >
                    <p>Sản phẩm  & Dịch vụ</p>
                    <h3>Tại MedSolution, chúng tôi sử dụng các giải pháp SASS : </h3>
                    <div className='home__services__content__text'>
                        <small>+ MEDLOYALTY: Cung cấp dịch vụ dành cho khách hàng thân thiết</small><br/>
                        <small>+ MEDDMS: Cung cấp dịch vụ về quản lý kênh phân phối ngành dược phẩm</small><br/>
                        <small>+ MEDDIGITAL: Cung cấp các chiến dịch, sản phẩm Marketing số</small><br/>
                        <small>+ MEDTELE: Dịch vụ tiếp thị qua điện thoại
                        để cung cấp các dịch vụ liên quan đến sàn thương mại điện tử bán sỉ ngành dược phẩm thông qua việc liên kết các nhà máy, nhà phân phối ,
                            nhà thuốc , bệnh viện toàn quốc với sự đa dạng từ tây y đến đông y.</small><br/>
                    </div>
                    <small>Một số sản phẩm tiêu biểu như : Medofa.vn , MedDeal.vn, ... </small><br/>
                </div>
                <div className='home__services__imgs'>
                    <img src='img\10.png' />
                    <img src='img\11.png' />
                    <img src="img\09.png" alt="" />
                </div>
                <a href='/' > Xem thêm </a>
            </div>
        )
    }else{
        return (
            <div className='home__services'>
                <div className='home__services__imgs'>
                    <img src='img\10.png' />
                    <img src='img\11.png' />
                    <img src="img\09.png" alt="" />
                </div>
                <div className='home__services__content' >
                    <p>Sản phẩm <br /> & Dịch vụ</p>
                    <h3>Tại MedSolution, chúng tôi sử dụng các giải pháp SASS : </h3>
                    <div className='home__services__content__text'>
                        <small>+ MEDLOYALTY: Cung cấp dịch vụ dành cho khách hàng thân thiết</small><br/>
                        <small>+ MEDDMS: Cung cấp dịch vụ về quản lý kênh phân phối ngành dược phẩm</small><br/>
                        <small>+ MEDDIGITAL: Cung cấp các chiến dịch, sản phẩm Marketing số</small><br/>
                        <small>+ MEDTELE: Dịch vụ tiếp thị qua điện thoại
                        để cung cấp các dịch vụ liên quan đến sàn thương mại điện tử bán sỉ ngành dược phẩm thông qua việc liên kết các nhà máy, nhà phân phối ,
                            nhà thuốc , bệnh viện toàn quốc với sự đa dạng từ tây y đến đông y.</small><br/>
                    </div>
                    <small>Một số sản phẩm tiêu biểu như : Medofa.vn , MedDeal.vn, ... </small><br/>
                    <a href='/' > Xem thêm </a>
                </div>
            </div>
        )
    }

}

export default HomeService