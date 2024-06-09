import React from 'react';

interface Blog {
  date: string;
  title: string;
  category?: string;
}

const BlogItem: React.FC<Blog> = ({ date, title, category }) => {
  return (
    <div className='grid py-8 sm:grid-cols-4'>
      <div className='mb-4 sm:mb-0'>
        <div className='space-y-1 text-xs font-semibold tracking-wide uppercase'>
          <a
            href='/blog'
            className={`head transition-colors duration-200 ${
              category ? 'text-deep-purple-accent-400 hover:text-deep-purple-800' : 'text-white'
            }`}
            aria-label='Category'
          >
            {category || 'Blog'}
          </a>
          <p className='text-white'>{date}</p>
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
              {title}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogList: React.FC = () => {
  const blogs: Blog[] = [
    {
      date: '5 Jan 2020',
      title: 'Healing Hands: A Doctor\'s Journey in Nigeria',
      category: 'Blog',
    },
    {
      date: '15 Sep 2020',
      title: 'Prescribing Wellness: Insights from a Nigerian Physician',
    },
    {
      date: '08 Jan 2024',
      title: 'Rx for Life: Health Tips and Tales from Nigeria',
      category: 'Trends',
    },
  ];

  return (
    <div className='mb-10 border-b divide-y'>
      {blogs.map((blog, index) => (
        <BlogItem key={index} date={blog.date} title={blog.title} category={blog.category} />
      ))}
      <div className='text-center'>
        <a
          href='/blog'
          aria-label=''
          className='inline-flex items-center text-white head font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
        >
          See all articles
          <svg className='inline-block w-3 ml-2' fill='currentColor' viewBox='0 0 12 12'>
            <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Blogs: React.FC = () => {
  return (
    <div className='px-4 bg-black py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <span className='flex py-6 md:py-20 items-center'>
        <span className='head text-3xl text-white'>Blog</span>
      </span>
      <BlogList />
    </div>
  );
};

export default Blogs;
