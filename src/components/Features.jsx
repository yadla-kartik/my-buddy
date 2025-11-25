import React from 'react'
import FeatureBox from './FeatureBox'
import HeroMessage from './HeroMessage'

function Features() {
  return (
    <section>
            <HeroMessage/>
        <h1 className='mt-[50px] text-center poppins font-bold text-[34px]'>FEATURES</h1>
        <FeatureBox/>
    </section>
  )
}

export default Features