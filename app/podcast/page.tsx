import React from "react";

interface PodcastItem {
	date: string;
	title: string;
}

const PodcastItem: React.FC<PodcastItem> = ({
	date,
	title,
}) => {
	return (
		<div className='grid py-8 sm:grid-cols-4'>
			<div className='mb-4 sm:mb-0'>
				<div className='space-y-1 text-xs font-semibold tracking-wide uppercase'>
					<a
						href='/'
						className='transition-colors text-orange-600 duration-200 hover:text-deep-purple-800'
						aria-label='Category'
					>
						Audio
					</a>
					<p className='text-white'>{date}</p>
				</div>
			</div>
			<div className='sm:col-span-3 lg:col-span-2'>
				<div className='mb-3'>
					<a
						href='/'
						aria-label='Article'
						className='inline-block transition-colors duration-200 hover:text-deep-purple-accent-700'
					>
						<p className='md:hover:text-orange-300 head mt-2 text-2xl text-white font-extrabold leading-none sm:text-4xl xl:text-4xl'>
							{title}
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};

const Podcast: React.FC = () => {
	const podcastItems: PodcastItem[] = [
		{
			date: "5 Jan 2020",
			title: "Medical Musings: Reflections on Healing in Nigeria",
		},
		{
			date: "15 Sep 2020",
			title: "Medical Marvels: Stories from the Nigerian Healthcare Frontline",
		},
		{
			date: "08 Jan 2024",
			title: "Heartbeat of Healthcare",
		},
	];

	return (
		<div className='px-4 bg-black py-16 mx-auto mt-6 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
			<span className='flex items-center'>
				<span className='head text-white text-3xl'>
					Podcast
				</span>
			</span>
			<div className='mb-10 border-b divide-y'>
				{podcastItems.map((item, index) => (
					<PodcastItem
						key={index}
						date={item.date}
						title={item.title}
					/>
				))}
			</div>
			<div className='text-center'>
				<a
					href='/'
					aria-label=''
					className='inline-flex items-center text-white head font-semibold transition-colors duration-200 hover:text-deep-purple-800'
				>
					See all audio
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

export default Podcast;
