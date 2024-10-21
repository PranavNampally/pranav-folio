import React from 'react'

const AboutSection = () => {
  return (
    <div className='bg-gray-dark-50 px-4 py-16 flex flex-col gap-6'>
      <div className='bg-gray-dark-200 self-center px-[20px] py-1 rounded-xl'><span className='text-gray-dark-600'>About me</span></div>
      <div className='mt-6 flex flex-col gap-12'>
        <div className='h-[380px] bg-black'/> {/* Image */}
        <div className='flex flex-col gap-4'>
          <div className='text-gray-dark-900 font-semibold text-2xl'>heading</div>
          <div className='text-gray-dark-600 text-base'>content block</div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
