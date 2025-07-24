import React from "react";
import Card from '../components/Card';
import uiIcon from '../assets/icon.png';
import Icon2 from '../assets/icon2 (1).png';
import Icon3 from '../assets/icon3.png';
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import dotdot from '../assets/dotdot.png'


const App = () => {
  return (
    
       <section className="py-[220px] relative">
         <Image className={'absolute left-[5%] top-[350px]'} src={dotdot}/>
         <Container>
            <div className="items-center flex flex-col pb-[40px]">
                <p className="text-[18px] font-voll font-medium text-secondary">MY SERVICES</p>
                <h2 className="text-[50px] font-voll font-medium text-primary w-[517px] text-center">Provide Wide Range of Digital Services</h2>
            </div>
            <Flex className={'gap-[30px]'}>
                <div className="">
                        <Card
                            icon={uiIcon}
                            title="Ui/Ux Design"
                            description="Dolor repellendus tempo ribus aue quibusdam officiis debitis rerum na aliquid minima veniam."
                        />
                </div>
                    
                <div className="">
                        <Card
                            icon={Icon2}
                            title="Mobile App Design"
                            description="Dolor repellendus tempo ribus aue quibusdam officiis debitis rerum na aliquid minima veniam."
                        />
                </div>


                <div className="">
                        <Card
                            icon={Icon3}
                            title="Web Design"
                            description="Dolor repellendus tempo ribus aue quibusdam officiis debitis rerum na aliquid minima veniam."
                        />
                </div>
            

            </Flex>
            
        </Container>

       </section>

  
  );
};

export default App;








// src/components/Card.jsx
// import React from "react";

// const Card = ({ title, image, description, children }) => {
//   return (
//     <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
//       {image && (<img className="w-full h-48 object-cover rounded-xl" src={image} alt={title} />)}
//       <div className="py-4">
//         <h2 className="text-xl font-bold mb-2">{title}</h2>
//         <p className="text-gray-700 text-base">{description}</p>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Card;






// src/App.jsx
// import React from "react";
// import Card from "./components/Card";
// import Container from './../components/Container';
// import Flex from './../components/Flex';

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       <Card
//         title="Beautiful Sunset"
//         image="https://source.unsplash.com/random/400x200?sunset"
//         description="A calming view of the evening sun."
//       >
//         <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//           Read More
//         </button>
//       </Card>

     
//     </div>
//   );
// };

// export default App;
