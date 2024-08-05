import React from 'react';
import Navbar from './assets/components/navbar';
import './index.css';
import { useEffect, useState } from 'react';
import Crousel from './assets/components/crousel';
import Iframe from 'react-iframe'
import Footer from './assets/components/footer';



function App() {
  return ( 
    <div>
      <Navbar/>
      <Crousel/>
      <div className='flex bg-black h-[90vh] my-16'>
        <div className='my-40'>
       <p className='text-white mx-10'>FEATURED VIDEO</p>
       <h1 className='mx-10 text-white text-4xl font-bold'>Turning Up the Heat</h1>
       <p className='mx-10 my-3 text-white max-w-[30vw]'>In the latest episode of Surprisingly STEM, shape memory metal engineer Othmane Benafan irons out the details of how he creates alloys that can bend, stretch, and twist when heat is applied, and how this technology is turning up the heat on what’s possible for NASA missions.</p>
       </div>
       <Iframe url="https://www.youtube.com/embed/hNa4hz-HP9M"
        width="800px"
        height="500px"
        id=""
        className="my-10"
        display="block"
        position="relative"/>
      </div>
      <h1 className='absolute my-60 mx-10 max-w-32 text-white text-8xl font-bold'>Earth Information Center</h1>
      <p className='absolute my-[45vw] mx-10 max-w-[50vw] text-white text-xl'>For more than 50 years, NASA satellites have provided data on Earth's land, water, air, temperature, and climate. NASA's Earth Information Center allows visitors to see how our planet is changing in six key areas: sea level rise and coastal impacts, health and air quality, wildfires, greenhouse gases, sustainable energy, and agriculture.</p>
      <img src='https://www.nasa.gov/wp-content/uploads/2024/07/ccfid-309003-eughtmileb-waus-lrg.jpg?resize=1536,1022'/>
      <div className='flex my-10'>
        <div className='w-[35vw]'>
          <h1 className='mx-5 text-5xl font-bold'>Image Of The Day</h1>
          <h1 className='mx-5 my-20 text-2xl font-bold'>Artemis II Core Stage Arrives at Kennedy</h1>
          <p className='mx-5 max-w-96'>Employees from NASA’s Kennedy Space Center in Florida watch as teams with Exploration Ground Systems transport the agency’s powerful SLS (Space Launch System) core stage to the spaceport’s Vehicle Assembly Building on Wednesday, July 24, 2024. The 212-foot-long rocket stage completed its journey from NASA’s Michoud Assembly Facility in New Orleans aboard the Pegasus barge the previous day. Once inside, SLS will be prepared for integration atop the mobile launcher ahead of the Artemis II launch.</p>
        </div>
        <div className='w-[65vw]'>
          <img className='h-[90vh]' src='https://www.nasa.gov/wp-content/uploads/2024/08/ksc-20240724-ph-kls02-0167orig.jpg?resize=1536,1024'/>
        </div>
      </div>
      <h1 className='absolute my-40 mx-10 max-w-[30vw] text-white text-6xl font-bold'>Explore the Universe from your Inbox</h1>
      <p className='absolute my-[30vw] mx-10 max-w-[40vw] text-white text-xl'>Stay up-to-date on the latest news from NASA–from Earth to the Moon, the Solar System and beyond.</p>
      <p className='absolute my-[35vw] mx-10 max-w-[50vw] text-white text-xl'>We will never share your email address.</p>
      <img className='h-[90vh] w-full mb-10' src='https://www.nasa.gov/wp-content/uploads/2023/01/webb-tarantula-neb.png?resize=1536,1199'/>
      <Footer/>
      </div>
   );
}

export default App;