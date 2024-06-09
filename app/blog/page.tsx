import Image from "next/image";

const Blog = () => {
	return (
		<article
			className='px-4 mt-1 md:mt-16 py-16 mx-auto max-w-full bg-white'
			itemID='#'
			itemScope
			itemType='http://schema.org/BlogPosting'
		>
			<Header />

			<Content />

			<Footer />
		</article>
	);
};

const Header = () => {
	return (
		<div className='w-full mx-auto mb-12 text-center md:w-2/3'>
			<p className='head mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>
				Medicine
			</p>
			<h1
				className='mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl'
				itemProp='headline'
				title='Rise of Tailwind - A Utility First CSS Framework'
			>
				The Impact of Healthy Lifestyle on
				Preventive Care
			</h1>
			<Author />
		</div>
	);
};

const Author = () => {
	return (
		<p className='text-gray-700'>
			Written by{" "}
			<span
				className='byline mx-2 author vcard'
				itemProp='author'
				itemScope
				itemType='http://schema.org/Person'
			>
				<a
					href='#'
					target='_blank'
					itemProp='url'
					rel='author noopener noreferrer'
					className='text-primary hover:text-primary-dark'
				>
					<span itemProp='name'>
						Dr Summayyah
					</span>
				</a>
			</span>
			on{" "}
			<time
				itemProp='datePublished dateModified'
				dateTime='2010-08-07 11:11:03-0400'
			>
				Jun 02 2024
			</time>
		</p>
	);
};

const Content = () => {
	return (
		<div className='mx-auto head prose px-4 text-gray-600 md:text-gray-800 md:px-80 text-justify'>
			<p>
				As a healthcare professional, I&apos;ve
				witnessed firsthand the profound impact of
				lifestyle choices on preventive care.
				<br />
				<br />
				In this blog post, I aim to shed light on
				the importance of maintaining a healthy
				lifestyle for overall well-being.
				<br />
				<br />
				The daily decisions we make, such as our
				dietary habits, exercise routines, and
				stress management, play a pivotal role in
				preventing various health issues.
				<br />
				<br />
				It&apos;s not just about treating illnesses;
				it&apos;s about taking proactive measures to
				ensure a healthier and more fulfilling life.
				<br />
				<br />
				One of the key aspects of a healthy
				lifestyle is a balanced diet.
				<br />
				<br />
				Consuming a variety of nutrient-rich foods
				provides the body with essential vitamins
				and minerals, strengthening the immune
				system and reducing the risk of chronic
				diseases.
				<br />
				<br />
				Regular physical activity is another
				cornerstone of preventive care. Exercise not
				only helps maintain a healthy weight but
				also improves cardiovascular health,
				enhances mood, and boosts overall energy
				levels.
				<br />
				<br />
				Finding an activity you enjoy makes it
				easier to incorporate exercise into your
				daily routine. Stress management is often
				overlooked but is crucial for maintaining
				optimal health.
				<br />
				<br />
				Chronic stress can contribute to a range of
				health issues, from cardiovascular problems
				to weakened immune function.
				<br />
				<br />
				Incorporating relaxation techniques, such as
				mindfulness or meditation, can significantly
				reduce stress levels. In conclusion, the
				choices we make each day have a profound
				impact on our health.
				<br />
				<br />
				By prioritizing a healthy lifestyle, we can
				take significant strides towards preventive
				care, fostering a life of well-being and
				vitality.
			</p>
		</div>
	);
};

const Footer = () => {
	// Placeholder for any future footer content
	return null;
};

export default Blog;
