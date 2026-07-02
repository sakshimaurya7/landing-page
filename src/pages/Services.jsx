import React from 'react'

const Services = () => {
  return (
    <>
    <div className='flex justify-around items-center bg-gradient-to-r from-slate-100 to-blue-200'>
      <div className='w-full m-8'>
        <span className="text-blue-600 font-bold bg-blue-200 hover:text-white hover:bg-blue-600 py-3 px-4 rounded-lg">OUR SERVICES</span>
        <h1 className='font-extrabold text-6xl font-serif my-7'>We Provide Services That Drive Results</h1>
        <p className='text-lg' >We offer a wide range of digital services to help businesses grow, innovate, and succeed in the digital world.</p>
        <button className='bg-blue-600 text-white hover:bg-blue-200 hover:text-blue-600 font-bold text-lg my-4 py-3 px-4 rounded-lg'>Get Started  &rarr;</button>
      </div>

      <div className='m-6 w-full'>
        <img src='./src/assets/service.png' alt='services' className='bg-blue-200 w-auto mx-auto min-h-72 border-2 border-blue-500 p-2 rounded-lg'/>
      </div>
    </div>

    <div className='m-5'> 
      <b className='bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-4 rounded-lg mx-auto'>WHAT WE DO</b>
      <h1 className='font-bold text-5xl text-center my-4'>Our Services</h1>

      <div className='grid grid-cols-3 gap-5'>
        <section className='flex justify-around shadow-md shadow-slate-900 rounded-lg'>
          <span>
            <img src="" alt="" />
          </span>
          <div>
            <h2 className='font-bold text-2xl '>Web Design</h2>
            <p className='text-slate-800 text-lg my-2'>We create modern, responsive, and user-friendly websites that leave a lasting impression.</p>
            <p className='text-blue-600 mt-2 font-bold text-lg'>Learn More &rarr;</p>
          </div>
        </section>

        <section className='flex justify-around shadow-md shadow-slate-900 rounded-lg'>
          <span>
            <img src="" alt="" />
          </span>
          <div>
            <h2 className='font-bold text-2xl'>Web Development</h2>
            <p className='text-slate-800 text-lg my-2'>We build fast, secure, and scalable web applications tailored to your business needs.</p>
            <p className='text-blue-600 mt-2 font-bold text-lg'>Learn More &rarr;</p>
          </div>
        </section>

        <section className='flex justify-around shadow-md shadow-slate-900 rounded-lg'>
          <span>
            <img src="" alt="" />
          </span>
          <div>
            <h2 className='font-bold text-2xl '>Mobile App Development</h2>
            <p className='text-slate-800 text-lg my-2'>We develop high-performance mobile apps for iOS and Android that users love.</p>
            <p className='text-blue-600 mt-2 font-bold text-lg'>Learn More &rarr;</p>
          </div>
        </section> 

        <section className='flex justify-around shadow-md shadow-slate-900 rounded-lg'>
          <span>
            <img src="" alt="" />
          </span>
          <div>
            <h2 className='font-bold text-2xl '>UI/UX Design</h2>
            <p className='text-slate-800 text-lg my-2'>We design intuitions and engaging user experiences that drive customer satisfaction.</p>
            <p className='text-blue-600 mt-2 font-bold text-lg'>Learn More &rarr;</p>
          </div>
        </section>

        <section className='flex justify-around shadow-md shadow-slate-900 rounded-lg'>
          <span>
            <img src="" alt="" />
          </span>
          <div>
            <h2 className='font-bold text-2xl '>Digital Marketing</h2>
            <p className='text-slate-800 text-lg my-2'>We help you reach your audience, increase engagement, and grow your brand online.</p>
            <p className='text-blue-600 mt-2 font-bold text-lg'>Learn More &rarr;</p>
          </div>
        </section>

        <section className='flex justify-around shadow-md shadow-slate-900 rounded-lg'>
          <span>
            <img src="" alt="" />
          </span>
          <div>
            <h2 className='font-bold text-2xl '>SEO Optimization</h2>
            <p className='text-slate-800 text-lg my-2'>We improve your website's visibility on search engines and drive organic traffic.</p>
            <p className='text-blue-600 mt-2 font-bold text-lg'>Learn More &rarr;</p>
          </div>
        </section>

      </div>
    </div>
    </>
  )
}

export default Services