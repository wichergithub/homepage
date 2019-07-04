import React from "react"
import {Link} from "gatsby"
import Layaout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
export default () => 
    (
    <Layaout>
        <SimpleHero >
            <Banner title="Modern and Tasteful" info="Classy feel with a modern touch and futuristic technology">
                <Link to="/projects" className='btn-white'>Show me more!</Link>
            </Banner>
        </SimpleHero>
        <About />
        <Services />
    </Layaout>
    )
