import React from 'react';
import img1 from '../../assets/img/video-bg.jpg';
import Play from '../playbutton/Play';

const UnderCarosal = () => {
    return (
        <div className=' w-4/6 relative z-10 mx-auto'>
            <div className='bg-[#0078D7]  text-white flex items-center justify-between '>
<div className='p-6'>
    <h1 className='text-2xl leading-9'>
Write Search Keyword & Press Enter SEARCH Mission Provide <span className='font-bold'>best industrial</span> solution for everyone.</h1>
    <h3 className=''>Maintains a highly trained, qualified and experienced workforce.
</h3>
</div>
<div  style={{
        backgroundImage: `url(${img1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover'
       
      }} className='w-80 h-48 flex justify-center items-center'>

<Play></Play>
</div>
            </div>
        </div>
    );
};

export default UnderCarosal;