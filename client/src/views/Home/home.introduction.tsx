import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../Home/home.introduction.style.scss'
const HomeIntroduction = () => {
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
                    {/* <img src='https://lh3.googleusercontent.com/ut0--h9_c0MY2X5oiuSFCRyDRtqggeY5myuyiLe8Kg9oV45vnZ1554Mzo8rDz45yUeKghhRmUIeYzVZantBbq5uT250nuZ17DRosNgXXA4c4vK0067fjPwhjcp3EGiDe53xR0W3WpbSeEfiw0Y224cyS_G34KytEE8NckUub-7zeLvaLC_IRot9fXEUaX2KEpCOjhngpldrI3iPR3xz5ZA2tg83RsFA1SiowSVFs3uKAay3MJr-rq4ViUnVJAR0lGvfCRGphgUV434LdZBeDFpRjXhEv5jxEECtH4GJNoRKAqWH7KWE00GccMmaAN1mWY-HXzqg2ZOIIc41KJGzuWbu54LAHL2MS-McngLmNQVFLbF-JhDd1nFbSHVmdEiYq9qbt1NRxXpkv1gVBgbYlJH0xo3woMliaDqEbQbPHITDQ1Ke9jEGGLHtjvca5ghu8jupuwkaDN92SQt5zmWyVp42AGcJ2J9ENqOikdxHLiDICnX_E0b3SUWUsCs8ef-M4IyeHXXVViaiZ-SQa0RzDO0MU2VtXYqkykBlAGR1P8Zlx9OTxZgYQbOYwpzUZqU_z5OT1sZvHdg-z65kK26zKpqxaDNV60A08h23R0qw3pGhYhIbuyLkpu6Vr2QGnE1OK2MnONFWaVbYAABdicLuS5-GEwgrlClBjubCNMTgJmgkP_nZpdDj_WqzsOZPqRPK1L2dZN7igbiiXa4-8I5RcmWI=w451-h677-no?authuser=0' /> */}
                    <img src='img\home-01.jpg' />
                    <div className='home__introduction__left--shadow'></div>
                </div>
            </div>
  )
}

export default HomeIntroduction