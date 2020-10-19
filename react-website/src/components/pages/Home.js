import React from 'react'
import { Router } from 'react-router-dom'
import '../../App.css'
import Form from '../Form'
import HeroSection from '../HeroSection'
function Home() {
    return(
        <>
         <HeroSection />
         <Form />
        </>
    )
}
export default Home