import React from "react";

const Card = ({ icon, title, description }) => {
  return (
    
    <div className="w-[370px] bg-white shadow-lg rounded-xl py-[50px] pl-[35px] pr-[95px] hover:shadow-xl transition">
      <div className=" mb-4">
        <img src={icon} alt="icon" className="h-12 w-12" />
      </div>
      <h3 className="text-[24px] font-voll  font-extrabold text-primary pt-[26px] pb-[15px]">{title}</h3>
      <p className="text-[16px] font-normal text-[#00413D] mb-[30px font-jost] w-[300px]">{description}</p>
      <div className="text-left text-green-900 text-[40px]">
        &rarr;
      </div>
    </div>
  );
};

export default Card;
