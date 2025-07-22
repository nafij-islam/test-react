import React from 'react'
import Container from './../components/Container';
import Flex from './../components/Flex';
import Image from './../components/Image';
import Logo from '../assets/logo.png'
import List from './../components/List';
import Button from './../components/Button';


const Navber = () => {
  return (
    <section className='py-[18px]'>
        <Container>
            <Flex className={"justify-between items-center"}>
                <div className='w-3/12'>
                    <Image className="w-[130px] cursor-pointer" src={Logo} alt="logoimg"/>
                </div>

                <div className='w-6/12'>
                    <ul className='flex gap-x-[48px]'>
                        <List className="text-[18px]" listitem="Home"/>
                        <List className="text-[18px]" listitem="Page"/>
                        <List className="text-[18px]" listitem="Service"/>
                        <List className="text-[18px]" listitem="Blog"/>
                        <List className="text-[18px]" listitem="Contact"/>
                    </ul>
                </div>

                <div className='w-3/12 flex justify-end'>
                    <Button className={"text-white text-[25px] hover:bg-primary duration-200 "} btntext={"Contact"}/>
                </div>
            
            </Flex>

        </Container>

    </section>
  )
}

export default Navber