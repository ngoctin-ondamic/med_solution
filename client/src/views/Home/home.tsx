
import Header from '../../components/Header/header.component'
import '../Home/home.style.scss'
import Footer from '../../components/Footer/footer.component';
import HomeIntroduction from './home.introduction';
import HomeAbout from './home.about';
import HomeAchievement from './home.achievement';
import HomeReason from './home.reason';
import HomeService from './home.service';
import HomeFeedback from './home.feedback';
import HomeContact from './home.contact';
import { useEffect , useState} from 'react'

const Home = () => {


    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize)
    }, [])

    if(width >= 400 && width <= 1199){
        return (
            <div className='home'>
                <Header />
                <HomeIntroduction />
                <img className='home__cooperation' src='img\companies.png' />
                <HomeAbout/>
                <HomeAchievement/>
                <HomeReason/>
                <HomeService/>
                <HomeFeedback/>
                <HomeContact/>
                <Footer />
            </div>
        )
    }else{
        return (
            <div className='home'>
                <Header />
                <HomeIntroduction />
                <img className='home__cooperation' src='img\companies.png' />
                <HomeAbout/>
                <HomeAchievement/>
                <HomeReason/>
                <HomeService/>
                <HomeFeedback/>
                <HomeContact/>
                <Footer />
            </div>
        )
    }
}

export default Home