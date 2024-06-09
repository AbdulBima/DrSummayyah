import Image from "next/image";
import React from "react";

const DeskLanding = () => {
	return (
		<div className='hidden md:flex'>
			<div className="relative flex flex-col justify-center items-center h-[70vh] w-full bg-[url('/images/f55.jpg')] bg-cover bg-center md:bg-top bg-no-repeat">
				<div className='absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent  '></div>
				<div className='absolute z-10 top-0 left-0 w-full h-full opacity-80 bg-gradient-to-b from-black to-transparent  '></div>

				<div className=' z-20'>
					<h2 className='landingText md:hover:text-orange-200 text-6xl z-20 text-white mt-10 pr-6  text-center '>
						Medicine, Updates & Motivation{" "}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default DeskLanding;
