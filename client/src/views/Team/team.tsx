import React, { useState } from 'react'
import '../Home/home.style.scss';


import Header from '../../components/Header/header.component';
import Footer from '../../components/Footer/footer.component';
import TeamChat from './team.chat';
import TeamTarget from './team.tartget';
import TeamProfessional from './team.professional';
import TeamChart from './team.chart';
import TeamContact from './team.contact';
const Teams = () => {
    return(
        <div className='team'>
            <Header/>
            <TeamTarget/>
            <TeamChat/>
            <TeamProfessional/>
            <TeamChart/>
            <TeamContact/>
            <Footer/>
            
        </div>
    )
    
    
}

export default Teams