import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useInView } from 'react-intersection-observer';
import { BEP20Token, Crowdfunding, Exchange, Exchangess, ico, ido, ieo, IGO, nft, NFTMarketplace, P2PCrypto, PitchDeck, STO, Token, TRCToken, web, WhitePaper } from './Images/Images';
import { motion } from 'framer-motion';
const Services = () => {
  const servicesData = [
  {
    category: 'Blockchain Development',
    services: [
      {
        id: 1,
        image: Token,
        title: 'Token Development',
      },
      {
        id: 8,
        image: WhitePaper,
        title: 'White Paper Development',
      },
      {
        id: 2,
        image: PitchDeck,
        title: 'Pitch Deck Development',
      },
      {
        id: 3,
        image: STO,
        title: 'STO Development',
      },
      {
        id: 4,
        image: BEP20Token,
        title: 'BEP20 Token Development',
      },
      // {
      //   id: 5,
      //   image: RealEstate,
      //   title: 'Real Estate Tokenization',
      // },
      {
        id: 6,
        image: nft,
        title: 'NFT Development',
      },
      {
        id: 7,
        image: Exchange,
        title: 'Exchange Development',
      },
      
      {
        id: 9,
        image: ico,
        title: 'ICO Development',
      },
      {
        id: 10,
        image: TRCToken,
        title: 'TRC Token Development',
      },
      {
        id: 11,
        image: ico,
        title: 'ICO Explainer Video',
      },
      {
        id: 12,
        image: P2PCrypto,
        title: 'P2P Crypto Exchange Development',
      },
      {
        id: 13,
        image: NFTMarketplace,
        title: 'NFT Marketplace Development',
      },
    ],
  },
  
  {
    category: 'Usecase',
    services: [
      {
        id: 1,
        title: 'Game',
      },
      {
        id: 1,
        title: 'NFT',
      },
      {
        id: 1,
        title: 'Comp.wallat',
      },
      {
        id: 1,
        title: 'BAAS any services',
      },
      {
        id: 1,
        title: 'E-commerce Development',
      },
      {
        id: 2,
        title: 'WooCommerce Development',
      },
      {
        id: 3,
        title: 'Magento Development',
      },
    ],
  },
  {
    category: 'Blockchain Marketing',
    services: [
      {
        id: 1,
        image: nft,
        title: 'Crypto Marketing',
      },
      {
        id: 2,
        image: ido,
        title: 'IDO Marketing',
      },
      {
        id: 3,
        image: ieo,
        title: 'IEO Marketing',
      },
      {
        id: 4,
        image: IGO,
        title: 'ITO Marketing',
      },
      {
        id: 5,
        image: Exchangess,
        title: 'Exchange Marketing',
      },
      {
        id: 6,
        image: ico,
        title: 'ICO Marketing',
      },
      {
        id: 7,
        image: STO,
        title: 'STO Marketing',
      },
      {
        id: 8,
        image: nft,
        title: 'NFT Marketing',
      },
      {
        id: 9,
        image: web,
        title: 'Web 3.0 Marketing',
      },
      {
        id: 10,
        image: Crowdfunding,
        title: 'Crowdfunding Marketing',
      },
    ],
  },
  {
    category: 'Internet Marketing',
    services: [
      {
        id: 1,
        title: 'Global SEO Services',
      },
      {
        id: 2,
        title: 'Onpage SEO Services',
      },
      {
        id: 3,
        title: 'Content Marketing Services',
      },
      {
        id: 4,
        title: 'PPC Services',
      },
      {
        id: 5,
        title: 'App Marketing',
      },
      {
        id: 6,
        title: 'Marketing Strategy',
      },
      {
        id: 7,
        title: 'Local SEO Services',
      },
      {
        id: 8,
        title: 'Online Branding Services',
      },
      {
        id: 9,
        title: 'SMO Services',
      },
      {
        id: 10,
        title: 'ASO Services',
      },
      {
        id: 11,
        title: 'Email Marketing',
      },
    ],
  },
  {
    category: 'Designing Services',
    services: [
      {
        id: 1,
        title: 'Web Design',
      },
      {
        id: 2,
        title: 'Responsive Design',
      },
      {
        id: 3,
        title: 'Infographic Design',
      },
      {
        id: 4,
        title: 'Graphics Design',
      },
      {
        id: 5,
        title: 'Mobile UI Design',
      },
    ],
  },
  {
    category: 'Development Services',
    services: [
      {
        id: 1,
        title: 'Python Development',
      },
      {
        id: 2,
        title: 'AngularJS Development',
      },
      {
        id: 3,
        title: 'PHP Development',
      },
      {
        id: 4,
        title: 'Wordpress Development',
      },
      {
        id: 5,
        title: 'CMS Development',
      },
      {
        id: 6,
        title: 'NodeJS Development',
      },
      {
        id: 7,
        title: 'Web Development',
      },
      {
        id: 8,
        title: 'Laravel Development',
      },
      {
        id: 9,
        title: 'Java Development',
      },
    ],
  },
  {
    category: 'Application Services',
    services: [
      {
        id: 1,
        title: 'Mobile App Development',
      },
      {
        id: 2,
        title: 'Android App Development',
      },
      {
        id: 3,
        title: 'Native App Development',
      },
      {
        id: 4,
        title: 'Food Delivery App Development',
      },
      {
        id: 5,
        title: 'iPhone App Development',
      },
      {
        id: 6,
        title: 'iPad App Development',
      },
      {
        id: 7,
        title: 'React Native Development',
      },
    ],
  },
];
  return (
    <div className='bg-white py-[50px]'>
      <div className='lg:max-w-[1440px] m-auto px-[20px]'>
        <div className='text-center'>
          <h1 className='text-center font-lato lg:text-[65px] text-[45px] inline-block border-b-[2px] border-b-secondary text-black'>Services</h1>
        </div>

        <Tabs className="mt-[50px]">
          <TabList className="flex items-center justify-center gap-[15px] flex-wrap">
            {servicesData.map((category, index) => (
              <Tab key={index}>{category.category}</Tab>
            ))}
          </TabList>

          {servicesData.map((category, index) => (
            <TabPanel key={index}>
              <div className='flex flex-wrap lg:gap-[30px] lg:mt-[80px] mt-[30px] justify-center gap-[15px]'>
                {category.services.map((service, serviceIndex) => (
                  <ServiceCard key={service.id} service={service} index={serviceIndex} />
                ))}
              </div>
            </TabPanel>
          ))}

        </Tabs>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className='lg:w-[18%] md:w-[31%] w-[100%] flex flex-col bg-white items-center py-[15px] gap-[15px] rounded-[5px] border-[2px] border-black'
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.3, ease: 'easeOut' }}
    >
      {service.image && (
        <div>
          <img src={service.image} alt={service.title} className='w-[70px] h-[70px] m-auto' />
        </div>
      )}
      <div>
        <p className='font-lato font-bold text-[18px] text-center'>{service.title}</p>
      </div>
    </motion.div>
  );
};

export default Services;
