import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className='pt-[20%] px-12 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl'>{title}</h1>
      <p className='w-1/4 py-6'>{overview}</p>
      <div className='flex'>
        <button className='bg-white text-black p-2 px-10 text-lg font-semibold hover:opacity-80 rounded-md flex items-center'>
          <FaPlay className='mr-2' /> Play
        </button>
        <button className='bg-white text-black p-2 px-10 ml-4 text-lg font-semibold hover:opacity-80 rounded-md flex items-center'>
          <FiInfo className='mr-2' /> More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
