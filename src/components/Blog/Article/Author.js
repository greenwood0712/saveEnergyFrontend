import React from 'react'
import author from '../../../assets/blog/aurthor (4).jpeg'

function Author() {
  return (
    <div className='my-5 bg-white p-10 md:flex'>
        <div className='md:w-1/3'>
            <img src={author} alt="author" className="rounded-full" />
        </div>
        <div className="md:ml-5">
            <a href="https://www.hpe.com/us/en/insights/contributors/laura-mccamy.html" className="font-semibold text-xl">Laura McCamy</a>
            <p className="text-base py-1">Freelance writer | 4 publications</p>
            <p className="text-xl pt-2 font-light">
                Laura McCamy is a freelance writer based in the San Francisco Bay Area. Her work has appeared in Business Insider, GreenBiz, New America Media, Momentum Magazine, and local news publications. She also works with nonprofits and businesses to create compelling narratives that motivate and inspire.
            </p>
        </div>
    </div>
  )
}

export default Author