import {React,useRef,useEffect} from 'react';

const Services = () => {
    const services = [
        {
            title: "Blockchain Development",
            description: "We offer comprehensive blockchain development services for businesses looking to harness the power of distributed ledger technology.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M12 0L1.602 6v12l10.398 6 10.398-6V6L12 0zm8.883 17.68l-8.302 4.792V9.208l3.5-2.02v4.019c.608-.355 1.272-.54 1.94-.545.574-.005 1.147.1 1.676.318.413.167.79.404 1.112.7.293.272.51.605.63.973s.178.762.083 1.143c-.095.381-.297.733-.589 1.014-.488.444-1.135.695-1.81.694-.562 0-1.115-.144-1.607-.411a2.608 2.608 0 01-1.138-1.125 1.003 1.003 0 01-.172-.835l.004-1.205-3.5-2.02V4.32l8.303-4.792L20.883 2v13.68zm-1.846 4.598L12 22.877v-4.019l8.302-4.792-3.265-1.882V9.208l3.5-2.02v11.09zm.04-11.09L12 13.273v4.019L3.758 9.208v-4.02L12 1.132v4.019l7.076 4.127zM8.5 8.24L4.758 6v2.637l3.742 2.165V8.24zm7 0v2.563l3.742-2.165V6L15.5 8.24z"/>
                </svg>
            ),
        },
        {
            title: "Blockchain Marketing",
            description: "Our blockchain marketing services help you effectively promote your blockchain-based products and services.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M4 4h8l3 3h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM6 16.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0zm8 1.5h3v-9H9.236l.264 1.211.524.242.52 1.327h.246l.176-.024.173.071.527-.239.245-.222.173.061.07.528.244.173-.173.062-.528-.239-.524-.242-.24.529-.244-.173-.174-.173h-.48l-.242-.244.173-.244.528-.239.241-.245.241-.528h-.241L9 7h8v11z"/>
                </svg>
            ),
        },
        {
            title: "Internet Marketing",
            description: "We provide tailored internet marketing strategies to increase your online visibility and drive traffic to your website.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M13 6l-1.69 2H9l2 2 1.69 1.5L9 15H5.06l-.15.91-.44.53H1.54L3 21h7l-1.69 2h6.29l4.69-3.5L13 6z"/>
                </svg>
            ),
        },
        {
            title: "Ecommerce Services",
            description: "Our ecommerce services cover everything from store setup to custom solutions and ongoing support.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M8 0H5C4.4 0 4 0.4 4 1v3h8V1c0-.6-.4-1-1-1H8zm-1 2H5V1h2v1zm11 2h-5v4h5V4zm-4 2h3v2h-3V6zm2 6H8V8h2v4h5v4h-1v3h-3v3h-2v-3H7v-3H6v-3h4v-3h1v-1zm8 3h-3v-5h2v3h1v-3h2v5h-2v-2zm-1 1v4h-1v-4h1z"/>
                </svg>
            ),
        },
        {
            title: "Designing Services",
            description: "We offer top-notch designing services, from website and app design to branding and print design.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M13 16V3l7 6.29-3.26 2.93-3.74-4L7 10.14V21h9V16h-3zm-2 0H9V11l2 1V16zm8-12h-5V2h5v2zm-7 8v4H6v-6l4 2h2v1z"/>
                </svg>
            ),
        },
        {
            title: "Development Services",
            description: "Our team excels in providing development services tailored to your business needs.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M21 3h-3.18C16.84 1.84 15.05 1 13 1S9.16 1.84 8.18 3H5C3.34 3 2 4.34 2 6v13c0 1.66 1.34 3 3 3h16c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3zM13 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 13h-2v-4h2v4zM10 17H8v-4h2v4zm7-6H7V9h10v2z"/>
                </svg>
            ),
        },
        {
            title: "Application Services",
            description: "We develop robust applications that scale with your business and deliver an exceptional user experience.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M3 2v20h6V2H3zm5 18H4V4h4v16zm9-2h6v-5h-6v5zm4-3v1h-2v-1h2zM12 4h6v8h-6V4zm2 6h2V6h-2v4zM4 5h2v5H4V5zm1 2h2v2H5V7zm7 7h2v3h-2v-3zm4 1h2v3h-2v-3z"/>
                </svg>
            ),
        },
        {
            title: "Crypto Marketing",
            description: "Our crypto marketing services ensure your cryptocurrency products reach the right audience.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M7.5 2C6.67 2 6 2.67 6 3.5V5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-2V3.5c0-.83-.67-1.5-1.5-1.5H7.5zM20 7v2h-2V7h2zm0 4v2h-2v-2h2zm-4-4v6h-2V7h2zm-3 2v2h-2V9h2zm-1 4v2h2v2h-2v2H7v-2H5v-2h2v-2H5v-2h2v-2h2v2H9v2h2zm4 4h2v2h-2v-2zm-5 0h2v2h-2v-2zm-7-6v2h2v-2H5z"/>
                </svg>
            ),
        },
        {
            title: "IDO Marketing",
            description: "We specialize in IDO marketing to ensure the success of your Initial DEX Offering campaigns.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zm0 18h-4v-3.5h-2.5V18H5V6h4V3.5h6V6h4v12z"/>
                </svg>
            ),
        },
        {
            title: "IEO Marketing",
            description: "Our IEO marketing services help you navigate the complexities of Initial Exchange Offerings.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M22.5 6H17.333L15 3.667V0h2v3.333h3.167L22.5 6zM16 4h-1.5v2H16V4zm-8 0H6.5v2H8V4zm10 7h-3v3h-2v-3H9v-2h4v-3h2v3h3v2zM6 13H4v-2h2v2zm2 4v2H2v-2h6zm8 0h6v2h-6v-2zm4-2v-2h2v2h-2z"/>
                </svg>
            ),
        },
        {
            title: "IGO Marketing",
            description: "We offer IGO marketing services to promote your Initial Game Offerings effectively.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8 0-1.2.3-2.4.8-3.4L8.4 14 4 14v-4l4.4 0 1.6-3.4c.5-1.1 1.7-1.7 2.8-1.4l4.2 1.2c1.1.3 1.7 1.6 1.3 2.7L15.6 14H20v4l-4.4-0-1.6 3.4c-.5 1.1-1.7 1.7-2.8 1.4l-4.2-1.2C5.3 18.3 5 17.2 5 16.2L12 20l1.5-2L8.2 15c.7-.5 1.7-.2 2.1.6l1.5 2.6L18.2 8c-.7.5-1.7.2-2.1-.6L13 4.2z"/>
                </svg>
            ),
        },
        {
            title: "Exchange Marketing",
            description: "Our exchange marketing services help you stand out in a crowded cryptocurrency exchange market.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M11 7H9v2h2V7zm2 4H9v2h4v-2zm0 4H9v2h4v-2zm6-4h-2v2h2v-2zm-8-4v2h8V7h-8zm8 4h-8v2h8v-2zm0 4h-8v2h8v-2zm4-4h-2v2h2v-2zm-4 8h4V4h-4V3H7v1H3v14h4v1h12v-1zM7 19v-2H5V5h2V3h10v2h2v12h-2v2H7z"/>
                </svg>
            ),
        },
        {
            title: "ICO Marketing",
            description: "We provide tailored ICO marketing services to maximize the success of your Initial Coin Offering.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.25 14.5L15 16c-.5-.5-1.11-.75-1.75-.75s-1.25.25-1.75.75l-1.25 1.25-1.25-1.25L12 11l2.75 5.5H16l.25 1zm.66-10.24c.55.31.74 1.07.43 1.62-.31.55-1.07.74-1.62.43-.55-.31-.74-1.07-.43-1.62.31-.55 1.07-.74 1.62-.43zm-8.62.43c.31.55.12 1.31-.43 1.62-.55.31-1.31.12-1.62-.43-.31-.55-.12-1.31.43-1.62.55-.31 1.31-.12 1.62.43zm1.11 5.06l.82.82c.28.28.28.73 0 1.01l-2.7 2.7-2.36-2.36 2.36-2.36 2.7 2.7c.28.28.28.73 0 1.01l-.82.82c-.39.39-1.02.39-1.41 0l-2.7-2.7c-.39-.39-.39-1.02 0-1.41l2.7-2.7c.39-.39 1.02-.39 1.41 0zm10.13 2.29c.27.45.08 1.01-.38 1.29L15.5 16l-1.11-.65L19 11l.93-.65c.45-.27 1.01-.08 1.29.38.28.45.08 1.01-.38 1.29z"/>
                </svg>
            ),
        },
        {
            title: "STO Marketing",
            description: "Our STO marketing services ensure your Security Token Offerings are fully compliant and well-promoted.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M11 3L2 6v2l9-3 9 3v8c0 4-2.6 7.6-6.5 8.9-3.9-1.3-6.5-4.9-6.5-8.9V9L3 12v2l9-3v6h2v-6l9 3v-2l-9-3v-3z"/>
                </svg>
            ),
        },
        {
            title: "NFT Marketing",
            description: "We offer NFT marketing services to help your non-fungible tokens gain visibility and value.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M12 1.74l-1.03.63L3 7.26v8.92l8 4.92 8-4.92V7.26l-7.97-4.89zM12 6.73l5.47 3.36-5.47 3.36-5.47-3.36L12 6.73zM5 8.82v6.44L10.47 18l5.53-3.73V8.82L12 12.27 5 8.82zm5.5 8.3l-4 2.7v-1.4L8.47 19l1.03-.88v-1.42z"/>
                </svg>
            ),
        },
        {
            title: "Web 3.0 Marketing",
            description: "Our Web 3.0 marketing services are designed to promote decentralized web applications and services.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M12 2C8.2 2 5 5.2 5 9c0 3.8 3.2 7 7 7s7-3.2 7-7c0-3.8-3.2-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM4 15c-.6 0-1 .4-1 1v2h2v-2c0-.6-.4-1-1-1zm16 0c-.6 0-1 .4-1 1v2h2v-2c0-.6-.4-1-1-1zM4 19c-.6 0-1 .4-1 1v2h2v-2c0-.6-.4-1-1-1zm16 0c-.6 0-1 .4-1 1v2h2v-2c0-.6-.4-1-1-1zM9.9 20.8L9 20l1.7-1.7c.4-.4.4-1.1 0-1.5-.4-.4-1.1-.4-1.5 0l-1.7 1.7-.9-.9V16.6c0-.5-.3-.9-.7-1l-1.2-.4.9.9c.4.4 1 .4 1.5 0 .4-.4.4-1 0-1.5L2.8 11.8c-.4-.4-1-.4-1.5 0-.4.4-.4 1 0 1.5l1.2 1.2c.5.5.8 1.2.8 1.8v3.2l-1.3 1.3c-.2.2-.2.6 0 .8l1.4 1.4c.2.2.6.2.8 0l1.4-1.4 3.2 3.2c.2.2.6.2.8 0l1.3-1.3c.2-.2.2-.6 0-.8l-1.3-1.3v-3.2c.1-.6-.3-1.3-.8-1.8L9.9 20.8zm3.4-.8l-1.3-1.3 3.2-3.2c.4-.4 1.1-.4 1.5 0 .4.4.4 1.1 0 1.5l-1.7 1.7 1 1 .7.7c.5-.2 1.1-.6 1.6-1.2l1.2-1.2.9.9c.4.4 1 .4 1.5 0 .4-.4.4-1 0-1.5L20.8 12l-1.5-1.5c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1.1 0 1.5l.9.9-1.2 1.2c-.4.4-.9.8-1.4 1L14.7 12l.9-.9c.4-.4.4-1 0-1.5-.4-.4-1-.4-1.5 0L9 11.7c-.4.4-1 .4-1.5 0-.4-.4-.4-1.1 0-1.5l3.2-3.2 1.3-1.3c.2-.2.2-.6 0-.8l-1.4-1.4c-.2-.2-.6-.2-.8 0l-1.3 1.3-3.2-3.2c-.2-.2-.6-.2-.8 0l-1.3 1.3c-.2.2-.2.6 0 .8l1.3 1.3v3.2c-.1.6.3 1.3.8 1.8l1.3 1.3-1.2.4c-.5.2-.8.5-.8 1v3.2l-1.3 1.3c-.2.2-.2.6 0 .8l1.4 1.4c.2.2.6.2.8 0l1.4-1.4 3.2 3.2c.2.2.6.2.8 0l1.3-1.3c.2-.2.2-.6 0-.8zm2.5-5.5L13.8 12c.4-.4 1.1-.4 1.5 0 .4.4.4 1.1 0 1.5z"/>
                </svg>
            ),
        },
        {
            title: "Crowdfunding Marketing",
            description: "We provide crowdfunding marketing strategies to help you achieve your funding goals.",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className="fill-current">
                    <path d="M20.75 2.5C19.33 2.5 18.75 3.5 18.75 5v4c0 1.5-.5 2.5-2.25 2.5-.67 0-1.25.67-1.25 1.5v2h-4v-2c0-.83-.58-1.5-1.25-1.5C7.5 11.5 7 10.5 7 9v-4c0-1.5-.58-2.5-2.25-2.5C4 2.5 2 4.5 2 5.5v13c0 2.5 1.67 4.5 3.75 4.5 1.42 0 2-.58 2.25-1.5 1.08-.58 3-1 3-2.5V19.5c1.92-.83 3-1.5 3-3.5v-2h3v2c0 1.5 2 2 3 2.5v1c1 .42 1.58 1.5 3 1.5 2.08 0 3.75-2 3.75-4.5v-13c0-1-2-3-3.75-3z"/>
                </svg>
            ),
        }
        // Add additional services similarly...
    ];
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollAmount = 0;
        const scrollStep = 2; // Amount to scroll per step

        const slide = () => {
            scrollAmount += scrollStep;
            if (scrollAmount >= slider.scrollWidth / 2) {
                scrollAmount = 0;
            }
            slider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
        };

        const interval = setInterval(slide, 30);

        // Handle mouse scroll
        const handleWheel = (event) => {
            event.preventDefault();
            slider.scrollBy({
                left: event.deltaY * 10, // Adjust scroll sensitivity
                behavior: 'smooth',
            });
        };

        slider.addEventListener('wheel', handleWheel);

        return () => {
            clearInterval(interval);
            slider.removeEventListener('wheel', handleWheel);
        };
    }, []);
    return (
        <div id="services" className="bg-gray-100 py-12 overflow-hidden">
        <section data-aos="zoom-in-down">
            <div className="my-4 py-4">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Services</h2>
                <div className="flex justify-center">
                    <div className="w-24 border-b-4 border-blue-900"></div>
                </div>
                <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                    We are deeply committed to the growth and success of our clients.
                </h2>
            </div>

            <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                <div
                    className="flex gap-5 overflow-hidden"
                    ref={sliderRef}
                >
                    {[...services, ...services].map((service, index) => (
                        <div
                            key={index}
                            className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group min-w-[250px]"
                        >
                            <div className="m-2 text-justify text-sm">
                                <div className="flex justify-center mb-4">
                                    {service.svg}
                                </div>
                                <h2 className="font-semibold my-4 text-2xl text-center">
                                    {service.title}
                                </h2>
                                <p className="text-md font-medium">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);
};

export default Services;