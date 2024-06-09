import React from "react";

const Video: React.FC = () => {
	return (
		<div className='hidden md:flex'>
			<section className='mt-20'>
				<span className=' flex ml-10 items-center'>
					<span className='head text-3xl text-white'>
						Videos
					</span>
					<span className='h-px w-[80vw] ml-8 bg-white'></span>
				</span>
				<div className=' flex relative bg-black items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl'>
					<div className='grid grid-cols-2 col-span-2 gap-4 lg:grid-cols-3'>
						<figure>
							<video
								className='object-cover'
								autoPlay
								loop
								muted
								playsInline
								width='1310'
								height='873'
							>
								<source
									src='/videos/vox.mp4'
									type='video/mp4'
								/>
								Your browser does not
								support the video tag.
							</video>
						</figure>

						<figure>
							<video
								className='object-cover'
								autoPlay
								loop
								muted
								playsInline
								width='1310'
								height='873'
							>
								<source
									src='/videos/vox.mp4'
									type='video/mp4'
								/>
								Your browser does not
								support the video tag.
							</video>
						</figure>

						<figure>
							<video
								className='object-cover'
								autoPlay
								loop
								muted
								playsInline
								width='1310'
								height='873'
							>
								<source
									src='/videos/vox.mp4'
									type='video/mp4'
								/>
								Your browser does not
								support the video tag.
							</video>
						</figure>

						<figure>
							<video
								className='object-cover'
								autoPlay
								loop
								muted
								playsInline
								width='1310'
								height='873'
							>
								<source
									src='/videos/vox.mp4'
									type='video/mp4'
								/>
								Your browser does not
								support the video tag.
							</video>
						</figure>

						<figure>
							<video
								className='object-cover'
								autoPlay
								loop
								muted
								playsInline
								width='1310'
								height='873'
							>
								<source
									src='/videos/vox.mp4'
									type='video/mp4'
								/>
								Your browser does not
								support the video tag.
							</video>
						</figure>

						<figure>
							<video
								className='object-cover'
								autoPlay
								loop
								muted
								playsInline
								width='1310'
								height='873'
							>
								<source
									src='/videos/vox.mp4'
									type='video/mp4'
								/>
								Your browser does not
								support the video tag.
							</video>
						</figure>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Video;
