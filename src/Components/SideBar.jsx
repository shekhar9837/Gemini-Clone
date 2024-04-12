import React from 'react';
import { useState } from 'react';
import { IoMenu ,IoSettingsOutline  } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { TiArrowSync } from "react-icons/ti";



const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="min-h-[100vh] inline-flex flex-col justify-between py-6 px-4">

        <div onClick={()=> setIsOpen(!isOpen)}>
            <IoMenu  size={25}/>
        </div>
        <div className="mt-2.5 inline-flex py-2.5 items-center gap-2.5 px-4 bg-bgPrimaryColor rounded-full text-md cursor-pointer">
            <GoPlus size={25} />
            {isOpen? <p>New Chat</p>: null}
        
        </div>

        <div>
            Recent
        </div>

        <div className='flex flex-col gap-4'>
            <span className='flex'> <IoIosHelpCircleOutline size={25}/> {isOpen? <p>Help</p>:null}</span>
            <span className='flex'><TiArrowSync  size={25}/>{isOpen? <p>Activity</p>:null}</span>
            <span className='flex'> <IoSettingsOutline  size={25} /> {isOpen? <p>Setting</p>:null}</span>
        </div>
     
    </div>
  );
};

export default SideBar;