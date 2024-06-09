import React from "react";

const Videos = () => {
	return (
		<div className='flex'>
			<section className='md:mt-40 mt-20'>
				<span className='flex ml-10 items-center'>
					<span className='head text-3xl text-white'>
						Videos
					</span>
					{/* <span className='h-px w-[80vw] ml-8 bg-white'></span> */}
				</span>
				<div className='flex relative bg-black items-center w-full px-10 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl'>
					<div className='grid grid-cols-1 col-span-2 gap-4 lg:grid-cols-3'>
						{Array.from({ length: 6 }).map(
							(_, index) => (
								<figure key={index}>
									<video
										className='object-cover'
										loop
										controls
										playsInline
										width='1310'
										height='873'
									>
										<source
											src='/videos/vox.mp4'
											type='video/mp4'
										/>
										Your browser does
										not support the
										video tag.
									</video>
								</figure>
							)
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Videos;
