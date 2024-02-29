import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const fromRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_v9qrvym',
      'template_nv313nf',
      {
        from_name: form.name,
        to_name: 'Alivia',
        from_email: form.email,
        to_email: 'aliviaxuanthomas@gmail.com',
        message: form.message,
      },
      'UlWl96jHPGVxSbwKK'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will return your message as soon as possible!');
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert('Something went wrong! I can be manually reached at AliviaXuanThomas@gmail.com.')

      }
      )
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75 bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={fromRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <lable className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='What is your name?'
              className='bg-tertiary py-4 px-6 placeholder:text-[#B095B9] text-white rounded-lg outlined-none border-none font-medium'
            />
          </lable>
          <lable className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='What is your email?'
              className='bg-tertiary py-4 px-6 placeholder:text-[#B095B9] text-white rounded-lg outlined-none border-none font-medium'
            />
          </lable>
          <lable className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Write a message </span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-[#B095B9] text-white rounded-lg outlined-none border-none font-medium'
            />
          </lable>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-[#B095B9] font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')