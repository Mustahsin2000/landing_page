import React from 'react'
import styles from '../style'

const Button = () => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient 
    font-poppins font-medium text-[18px] text-black outline-none rounded-[10px] mt-[48px] w-[170px] h-[64px] ${styles}
    `}>
      Get Started
    </button>
  )
}

export default Button