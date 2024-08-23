import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { logo } from "./Images/Images";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 md:col-span-2">
              <div className="">
                <h3 className="font-bold text-[18px] text-custome "><img src={logo} /></h3>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-2 ml-7 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-3 lg:col-span-2 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">
                WE ACCEPT PAYMENTS
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    BTC
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    ETH
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    BNB
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    USDT-ERC20
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    USDT-TRC20
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    USDT-BEP20
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-3 lg:col-span-2 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">
                OUR SERVICES
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Domain and Hosting
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    General IT Consultations
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
              <div className="text-xl mb-6">Social Media Links.</div>

              <div className="text-md font-medium mb-6">
                Follow us on social media.
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li className="flex flex-col gap-[15px]">
                    <div className="flex items-center gap-[10px]">
                      <Link
                        to="#"
                        className="flex justify-center items-center text-[40px] text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="Twitter"
                      >
                        <i class="fa fa-telegram" aria-hidden="true"></i>
                      </Link>
                      <p className="text-black">Our Channel</p>
                    </div>

                    <div className="flex items-center gap-[10px]">
                      <Link
                        to="#"
                        className="flex justify-center items-center text-[40px] text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="Twitter"
                      >
                        <i class="fa fa-telegram" aria-hidden="true"></i>
                      </Link>
                      <p className="text-black">Our Group</p>
                    </div>

                    
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Molad e Konsult
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div> */}
        </div>
      </footer>
    </>
  );
};
export default Footer;
