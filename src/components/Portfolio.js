import React from 'react';
import { Link } from 'react-router-dom';
import { content, productmanagement, promotion, Seo, socialmedia, worldwide } from './Images/Images';

// Define the image data array
const portfolioItems = [
    {
        src: Seo,
        title: 'SEO',
        description: [
            'General SEO approach',
            'Targeting local markets',
            'Expanding reach globally',
            'On-site optimization',
            'Content strategy for blogs'
        ],
    },
    {
        src: socialmedia,
        title: 'Social Media & Public Relations',
        description: [
            'Facebook Page',
            'Instagram Page',
            'X Page',
            'Telegram Channel & Group',
            'Medium',
            'Discord',
            'YouTube Channel',
            'YouTube Video',
            'Whatsapp Community'
        ],
    },
    {
        src: worldwide,
        title: 'Worldwide Promotion',
        description: [
            'Worldwide Press Release',
            'Languages (English, Japanese, Chinese, Russian, German, Thai, Urdu)',
            'ICO Promotion Website',
            'MLM Promotion Website',
            'Investment Promotion Website',
            'HYIP Promotion'
        ],
    },
    {
        src: content,
        title: 'Content Updates',
        description: [
            'Graphics Banners',
            'Carousel Banners',
            'Regular Crypto News & Channel Updates',
            'Daily Blog Posting',
            'Daily Zoom Meetings',
            'Binance AMA',
            'Future of Crypto Insights'
        ],
    },
    {
        src: productmanagement,
        title: 'Product Development',
        description: [
            'NFT Launch',
            'Game Launch',
            'Company Launch',
            'Own Wallet (Buy, Sell, Deposit)',
            'Own Exchange',
            'Own Blockchain'
        ],
    },
    {
        src: promotion,
        title: 'Targeted Promotion',
        description: [
            'Target Country',
            'Focused market',
            'Target Audience',
            'Defined demographics',
            'Worldwide Promotion',
            'Global marketing strategy',
            'Community Buildup',
            'Building a strong community'
        ],
    },
];

const Portfolio = () => {
    return (
        <div className="my-4 py-4" id='portfolio'>
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Portfolio</h2>
            <div className='flex justify-center'>
                <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
            </div>

            <div className='my-4 py-4 p-5'>
                <p>Over the last 13+ years, CODENST has made a name for itself in the field of blockchain and complete web solutions. We understand that maintaining this reputation is a complex task, and we are committed to leaving no stone unturned. Throughout these years, we have consistently provided quality services, helping businesses create their unique online identities. Thousands of global clients have trusted us, and we are proud to say that we have never disappointed any of them. Here, we present some of the challenging projects we have successfully completed.
                </p>
            </div>
            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                <div className="flex flex-wrap justify-center gap-[25px]">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max lg:w-[30%] w-[100%] md:w-[48%]">
                            <img src={item.src} alt={item.title} className="w-full h-[250px] object-cover rounded-t-lg"/>
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{item.title}</h4>
                                <ul className="text-md font-medium leading-5 h-auto md:h-48 list-disc pl-5">
                                    {item.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                                {/* <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Schedule Demo
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
