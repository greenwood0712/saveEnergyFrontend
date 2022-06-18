import React from 'react'
import Layout from '../components/Layout'
import CountDown from '../components/Network/CountDown'
import Enterprise from '../components/Network/Enterprise'
import Events from '../components/Network/Events'
import Featured from '../components/Network/Featured'
import NetworkHeader from '../components/Network/NetworkHeader'
import New from '../components/Network/New'
import Podcasts from '../components/Network/Podcasts'
import Resource from '../components/Network/Resource'
import SecondNav from '../components/Network/SecondNav'

function Network() {
  return (
    <Layout status={false}>
      <NetworkHeader />
      <div className='bg-black md:flex md:justify-between p-20 text-left text-white'>
        <div className='w-full'>
          <p className='text-5xl font-bold'>Discover More Network</p>
          <p className='text-2xl pt-4'>Explore. Uncover. Engage.</p>
        </div>
        <div className='w-full text-xl'>
          Our exclusive network features original series, podcasts, news and events – brought to you by HPE. We’re focused on emerging technologies and the smartest thinking about digital transformation. Discover more as you gain insights to help move your business forward in today’s increasingly digital world.
        </div>
      </div>
      <CountDown />
      <div className='bg-gray-300 px-20 py-2 flex text-xs text-gray-700'>
        <a href='/'>HOME</a>
        <p className='px-1'> / DISCOVER MORE NETWORK</p>
      </div>
      <div className='relative'>
        <SecondNav />
        <Featured />
        <New />
        <Events />
        <Podcasts/>
        <Enterprise />
      </div>
      <Resource />
    </Layout>
  )
}

export default Network
