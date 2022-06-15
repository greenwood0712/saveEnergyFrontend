import React from 'react'
import Layout from '../components/Layout'
import CountDown from '../components/Network/CountDown'
import NetworkHeader from '../components/Network/NetworkHeader'

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
    </Layout>
  )
}

export default Network
