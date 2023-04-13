import React from 'react'
import styles from '../style'

const Hero = () => (
  
  <section id='home' className={`  ${styles.paddingY} `}>
     
      <h1 className=' font-poppins font-semibold  text-[70px]
      text-white text-center line-height-[82px]
      '>
      <span className='text-[#12BADF]'>MAKE</span> <span className='text-gradient3'>YOUR</span> <span className='text-gradient'>DREAM</span> <br />
      <span className='text-[#12BADF]'>WEBSITE</span> <span className='text-gradient4'>STAND</span> <span className='text-gradient1'>OUT</span> <br />
      <span className='text-[#12BADF]'>IN</span> <span className='text-[#17C7C0]'>A</span> <span className='text-gradient2'>CROWD</span>
      </h1>

      
      <div>
      <div className='absolute z-[0] w-[345px] h-[514px] top-[-75.95px]  left-[974px] rounded-[200px] pink__gradient'/>
      {/* <div className='absolute z-[0] w-[345px] h-[514px] top-0 right-0 blue__gradient'/> */}
      </div>
  </section>
  
)

export default Hero