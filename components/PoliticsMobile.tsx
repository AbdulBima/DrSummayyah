import Image from "next/image";
import React from "react";
import Article from "./Article";

const PoliticsMobile = () => {
	return (
		<div className='flex flex-col mt-10 md:hidden bg-black py-4 h-[55vh]'>
			<span className=' flex  items-center'>
				<span className='head text-white text-3xl ml-4'>
					Videos
				</span>
				<span className='h-px w-[60vw] ml-4 mr-4 bg-white'></span>
			</span>
			<div className='w-[100vw] overflow-x-hidden'>
				<div className='carousel carousel-center max-w-md mt-6 p-4 space-x-4 bg-black '>
					<div className='head carousel-item w-[70vw]'>
						<Article
							imageUrl='/images/f55.jpg'
							date='2024-07-15'
							title='Beyond the Stethoscope: Life and Medicine in Nigeria'
						/>
					</div>

					<div className='head carousel-item w-[70vw]'>
						<Article
							imageUrl='/images/f66.jpg'
							date='2022-10-10'
							title='Dose of Hope: Inspiring Stories from a Nigerian Doctor'
						/>
					</div>

					<div className='head carousel-item w-[70vw]'>
						<Article
							imageUrl='/images/f44.jpg'
							date='2024-05-23'
							title="Wellness Chronicles: A Doctor's Diary in Nigeria"
						/>
					</div>
				</div>
			</div>
			{/* Other content */}
		</div>
	);
};

export default PoliticsMobile;
