import React from 'react'
import './PageCss/Home.css'
import UpperTitle from './homepage/UpperTitle'
import SearchBar from './homepage/SearchBar'



function Home() {
  return (
    <>
     
     <div className="Home">
      <UpperTitle/>
      <SearchBar/>
      
     </div>
    
     <div className='abhi'> 
        This is abhishek
     </div>

    </>
     
  )
}

export default Home