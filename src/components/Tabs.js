import React from 'react'
import Home from './Home'
import About from './About'
import Features from './Features'

function Tabs() {
    return (
        <div className='tabs'>
            <Home/>
            <About/>
            <Features/>
            
        </div>
    )
}

export default Tabs