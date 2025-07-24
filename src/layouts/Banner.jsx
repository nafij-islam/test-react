import React from 'react'
import Image from './../components/Image';
import Container from './../components/Container';
import Button from '../components/Button'
import Shapeimg from '../assets/shape.svg'
// import Bannerimg from '../assets/bannerimg.png'


const Banner = () => {
  return (
    <section className='group bg-primary py-[221px] relative overflow-hidden'>
        <Image className={'absolute top-[20px] left-[0px]' } src={Shapeimg}/>
        
        <div className='group-hover:right-0 duration-500 w-[48%] h-full bg-bannerimg absolute top-0 -right-[48%] bg-no-repeat bg-cover bg-center '>
          
        </div>
       

        <Container>
            <h1 className='relative z-10 leading-[110px] text-[100px] font-voll text-white font-bold '>Hello!
            <span className='block'>I’m Saharian Nafis</span></h1>
            <p className='relative z-10 pb-[50px] text-[20px] text-[#ffffff80] font-jost font-normal w-[670px]'>I’am freelance<span className='text-white font-bold'> UI/UX Desogner</span> based in Indonesia who loves to craft attractive design experiences for the web.</p>

            <Button className='ml-0 hover:bg-white duration-300' btntext={'Submit'}/>
            
        </Container>



    </section>
  )
}

export default Banner