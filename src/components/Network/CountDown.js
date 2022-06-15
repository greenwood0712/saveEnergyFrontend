import React from 'react'

function CountDown() {
  return (
    <div className='flex flex-col justify-center text-center text-white p-20 bg-countdown'>
      <p className='text-2xl font-semibold'>Countdown to</p>
      <h1 className='text-8xl font-black py-10 text-color-transparent'>HPE DISCOVER 2022</h1>
      <div className='border-2 border-blue-400 p-10 w-fit'>
        <p className='text-5xl'>12 : 19 : 45 : 28</p>
        <p className='text-3xl py-5'>D H M S</p>
      </div>
    </div>
  )
}

export default CountDown
