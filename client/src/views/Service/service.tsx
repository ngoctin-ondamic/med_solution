import Header from '../../components/Header/header.component';
import ServiceTarget from './service.target';
import ServiceList from './service.list'
import ServiceContact from './service.contact';
import ServiceBlog from './service.blog'
import ServiceTeams from './service.teams'
import '../Service/service.style.scss'
import Footer from '../../components/Footer/footer.component';
const Service = () => {

    return (
        <div className='service'>
            <Header/>
            <ServiceTarget/>
            <ServiceList/>
            <ServiceContact/>
            <ServiceBlog/>
            <ServiceTeams/>
            <Footer/>
        </div>
    )
}

export default Service