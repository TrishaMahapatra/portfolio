import React, { useRef, useState } from 'react'
import { FaMobile, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSubmitting(true);
        setError('');
        
        emailjs
        .sendForm('service_uo7ll3m', 'template_z3v5vwy', form.current, {
            publicKey: '2paxr913Fl6RJ8uop',
        })
        .then(
            () => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Reset submission status after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
        
        // }, 1500);
    };

  return (
    <Element name='contact' className='w-full h-90 bg-slate-100 shadow-lg flex justify-between'>
        <div class="absolute bg-[#393a3f] w-full h-93 [clip-path:polygon(60%_0,100%_0,100%_100%,40%_100%)]"/>
            <div className='w-2/5 p-10 h-93 z-10 flex flex-col gap-5'>
                <div className='flex gap-3 items-center'>
                    <div className='bg-white shadow-lg p-2 rounded-full'>
                        <FaMobile size={20} className='text-blue-500'/>
                    </div>
                    <p className='font-alice text-lg text-[#393a3f]'>+91 8964536765</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className='bg-white shadow-lg p-2 rounded-full'>
                        <IoMdMail size={20} className='text-blue-500'/>
                    </div>
                    <a href='mailto:hello@sofezza.com' className='font-alice text-lg text-[#393a3f] hover:underline'>trishamahapatra5@gmail.com</a>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className='bg-white shadow-lg p-2 rounded-full'>
                        <FaLinkedin size={20} className='text-blue-500'/>
                    </div>
                    <a target='_blank' href='https://www.linkedin.com/in/trisha-mahapatra-64605b302' className='font-alice text-lg text-[#393a3f] hover:underline'>www.linkedin.com/in/trisha-mahapatra-64605b302</a>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className='bg-white shadow-lg p-2 rounded-full'>
                        <IoLocation size={20} className='text-blue-500'/>
                    </div>
                    <p className='font-alice text-lg text-[#393a3f] hover:underline'>Medinipur</p>
                </div>
            </div>
            <form ref={form} method='post' className='w-2/5 p-5 h-93 z-10 flex flex-col justify-center items-center'>
                <p className='text-white mb-3 font-alice'>Have you any query? Please DM me.</p>
                <input type="text" name="name" id="name" placeholder='Name' value={formData.name} onChange={handleChange} className='bg-white w-2/3 p-2 rounded outline-0' />
                <input type="text" name="email" id="email" placeholder='Email' value={formData.email} onChange={handleChange} className='bg-white w-2/3 p-2 rounded outline-0 mt-2' />
                <input type="text" name="subject" id="subject" placeholder='Subject' value={formData.subject} onChange={handleChange} className='bg-white w-2/3 p-2 rounded outline-0 mt-2' />
                <textarea type="text" name="message" id="message" rows={3} placeholder='Message' className='bg-white w-2/3 p-2 rounded outline-0 mt-2' value={formData.message} onChange={handleChange}/>
                {/* <br /> */}
                <div className='text-center w-2/3 mt-3'>
                    <button type="button" onClick={handleSubmit} className='bg-amber-400 px-10 py-2 rounded cursor-pointer'>Send</button>
                </div>
            </form>
    </Element>
  )
}

export default Contact