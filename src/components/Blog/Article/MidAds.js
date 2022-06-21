import React from 'react'
import midAdImage from '../../../assets/blog/image (9).jpg'

function MidAds() {
  return (
    <div className="my-5 p-5 bg-[#0D5265] flex text-white">
        <div className="w-1/3">
            <img src={midAdImage} alt="midAdImage" />
        </div>
        <div className="w-2/3 ml-3">
            <div className="font-bold">Discover More Network: Transform your work and business with ideas from HPE's original series. Be inspired.</div>
            <div className="my-3">
                <button className="px-5 py-2 w-fit outline-none outline-offset-0 border-2 border-white rounded-md hover:outline-2 hover:outline-white">
                    Discover more
                </button>
            </div>
        </div>
    </div>
  )
}

export default MidAds
