import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('MLD | Molad e Konsult - Send us a message')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('first_name', firstName)
        fData.append('last_name', lastName)
        fData.append('email', email)
        fData.append('phone_number', phone)
        fData.append('message', message)

        axios({
            method: "post",
            url: process.env.REACT_APP_CONTACT_API,
            data: fData,
            headers: {
                'Content-Type':  'multipart/form-data'
            }
        })
        .then(function (response) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            clearInput()
            //handle success
            Notiflix.Report.success(
                'Success',
                response.data.message,
                'Okay',
            );
        })
        .catch(function (error) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            //handle error
            const { response } = error;
            if(response.status === 500) {
                Notiflix.Report.failure(
                    'An error occurred',
                    response.data.message,
                    'Okay',
                );
            }
            if(response.data.errors !== null) {
                setErrors(response.data.errors)
            }
            
        });
    }
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className='bg-[#80808029] py-[100px]'>
            <div className='lg:max-w-[1440px] m-auto px-[20px]'>
                <div className='text-center'>
                    <h1 className='text-[55px] font-bold font-lato text-custome border-b border-white inline-block'>Contact Us</h1>
                </div>
                <div>
                    <div className='flex  lg:flex-row flex-wrap justify-center mt-[50px] gap-[25px] md:gap-[15px]'>
                        <div className='lg:w-[30%] md:w-[48%] w-[100%] bg-custome flex flex-col gap-[15px] items-center py-[50px] rounded-[5px] border-[1px] border-white'>
                            <span className='text-[45px] text-white'><i class="fa fa-telegram" aria-hidden="true"></i></span>
                        </div>

                        <div className='lg:w-[30%] md:w-[48%] w-[100%] bg-custome flex flex-col gap-[15px] items-center py-[50px] rounded-[5px] border-[1px] border-white'>
                            <span className='text-[45px] text-white'><i class="fa fa-skype" aria-hidden="true"></i></span>
                            <p className='text-white font-lato text-[22px]'>CODENST@123</p>
                        </div>

                        <div className='lg:w-[30%] md:w-[100%] w-[100%] bg-custome flex flex-col gap-[15px] items-center py-[50px] rounded-[5px] border-[1px] border-white'>
                            <span className='text-[45px] text-white'><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                            <p className='text-white font-lato text-[22px]'>info@codenst.com</p>
                        </div>
                    </div>

                    <div className='mt-[80px] bg-custome lg:p-[50px] p-[30px] border-[1px] border-black rounded-[10px]'>
                        <from>
                            <div className='flex md:gap-[15px] md:flex-row flex-col'>
                                <input type='text' placeholder='Enter Name' className='outline-none from_input w-[100%]'/>
                                <input type='text' placeholder='Enter Email' className='outline-none from_input w-[100%]'/>
                            </div>
                            <div className='flex md:gap-[15px] md:flex-row flex-col'>
                                <input type='Number' placeholder='Enter Number' className='outline-none from_input w-[100%]'/>
                                <input type='text' placeholder='Enter Subject' className='outline-none from_input w-[100%]'/>
                            </div>

                            <div>
                                <textarea className='w-[100%] from_input outline-none' placeholder='Enter Message' cols={8} rows={9}/>
                            </div>

                            <div className='text-center'>
                                <button className='text-[23px] font-lato bg-primary text-white px-[35px] py-[12px] rounded-[25px]'>Submit</button>
                            </div>
                        </from>
                    </div>
                </div>
            </div>
        </div>
            <Footer />
        </>


    )
}

export default Contact;