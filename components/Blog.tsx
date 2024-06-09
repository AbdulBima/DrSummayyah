const Blog = () => {
	return (
		<div className='px-4 bg-black py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
			<div className='mb-10  border-b divide-y'>
				<div className='grid py-8 sm:grid-cols-4'>
					<div className='mb-4 sm:mb-0'>
						<div className='space-y-1 text-xs font-semibold tracking-wide uppercase'>
							<a
								href='/blog'
								className='head transition-colors duration-200 text-white hover:text-deep-purple-800'
								aria-label='Category'
							>
								Blog
							</a>
							<p className='text-white'>
								5 Jan 2020
							</p>
						</div>
					</div>
					<div className='sm:col-span-3 lg:col-span-2'>
						<div className='mb-3'>
							<a
								href='/blog'
								aria-label='Article'
								className='inline-block text-black transition-colors duration-200 hover:text-orange-300'
							>
								<p className='head mt-2 text-2xl text-white md:hover:text-orange-300 font-extrabold leading-none sm:text-4xl xl:text-4xl'>
									Healing Hands: A
									Doctor&apos;s Journey in
									Nigeria
								</p>
							</a>
						</div>
					</div>
				</div>
				<div className='grid py-8 sm:grid-cols-4'>
					<div className='mb-4 sm:mb-0'>
						<div className='space-y-1 text-xs font-semibold tracking-wide uppercase'>
							<a
								href='/blog'
								className='text-white head transition-colors duration-200  hover:text-deep-purple-800'
								aria-label='Category'
							></a>
							<p className='text-white'>
								15 Sep 2020
							</p>
						</div>
					</div>
					<div className='sm:col-span-3 lg:col-span-2'>
						<div className='mb-3'>
							<a
								href='/blog'
								aria-label='Article'
								className='inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700'
							>
								<p className='head text-2xl md:hover:text-orange-300 text-white font-extrabold leading-none sm:text-4xl xl:text-4xl'>
									Prescribing Wellness:
									Insights from a Nigerian
									Physician
								</p>
							</a>
						</div>
					</div>
				</div>
				<div className='grid py-8 sm:grid-cols-4'>
					<div className='mb-4 sm:mb-0'>
						<div className='space-y-1 text-xs font-semibold tracking-wide uppercase'>
							<a
								href='/blog'
								className='transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
								aria-label='Category'
							>
								Trends
							</a>
							<p className='text-white'>
								08 Jan 2024
							</p>
						</div>
					</div>
					<div className='sm:col-span-3 lg:col-span-2'>
						<div className='mb-3'>
							<a
								href='/blog'
								aria-label='Article'
								className='inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700'
							>
								<p className='head text-2xl md:hover:text-orange-300 text-white font-extrabold leading-none sm:text-4xl xl:text-4xl'>
									Rx for Life: Health Tips
									and Tales from Nigeria
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='text-center'>
				<a
					href='/blogs'
					aria-label=''
					className='inline-flex items-center text-white head font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
				>
					See all articles
					<svg
						className='inline-block w-3 ml-2'
						fill='currentColor'
						viewBox='0 0 12 12'
					>
						<path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
					</svg>
				</a>
			</div>
		</div>
	);
};

export default Blog;
