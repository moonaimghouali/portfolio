import React from 'react'
import Image from 'next/image'
import image from '../../../public/photo.jpg'

const page = () => {

    let  buttonStyle = (top, right) =>`shadow hover:shadow-lg z-50 absolute w-48 aspect-[3/4] top-[${top}] right-[${right}] bg-white rounded overflow-clip transition-all duration-100 ease-out`
    const imageStyle = 'h-full hover:h-[105%] object-cover transition-all duration-150 ease-out' 

  return (
    <main className="max-w-screen md:max-h-screen h-screen bg-neutral-950 p-3 md:p-6 relative">
        <button className={buttonStyle('45%','30%')}>
            <Image src={image} alt='image' className={imageStyle}/>
        </button>

        <button className={buttonStyle('12%','38%')}>
            <Image src={image} alt='image' className={imageStyle}/>
        </button>

        <button className={buttonStyle('10%','20%')}>
            <Image src={image} alt='image' className={imageStyle}/>
        </button>

        <button className={buttonStyle('20%','35%')}>
            <Image src={image} alt='image' className={imageStyle}/>
        </button>

        <button className={buttonStyle('25%','40%')}>
            <Image src={image} alt='image' className={imageStyle}/>
        </button>
    </main>
  )
}

export default page