import Image from "next/image";
import React from "react";

const Landing = () => {
	return (
		<div className=' flex md:hidden'>
			<div className="relative  h-[50vh] w-full bg-[url('/images/f55.jpg')] bg-cover bg-center md:bg-center bg-no-repeat">
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent  '></div>
				<div className='absolute top-0 left-0 w-full h-full opacity-80 bg-gradient-to-b from-black to-transparent  '></div>
				<div className='absolute top-0 left-0 w-full h-full opacity-80 bg-gradient-to-b from-black to-transparent  '></div>

				<div className='head left-36 text-orange-600 text-lg font-bold text-center absolute bottom-40'>
					<span>Dr Summayyah</span>
				</div>
				<div className=' left-4 absolute bottom-20 mt-2 '>
					<a href='/blog'>
						<h2 className='landingText text-4xl  text-white mt-10 pr-6  text-center '>
							Medicine, Updates & Motivation
						</h2>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Landing;
