import Heroimg from '../../assets/Illustration.png'

function Hero() {
  return (
    <header className=" bg-silver py-10">
      <section className='container mx-auto flex items-center justify-between gap-4'>
        <div className='w-full basis-[65%] flex flex-col items-start gap-4'>
          <h1 className='text-[64px] font-bold leading-[76px]'>
            Lesson and insights <br /><span className='text-primary'>from 8 years</span>
          </h1>
          <p className='text-gray'>Where to grow your business as a photographer: site or social media?</p>
          <a href="#" className="text-white block bg-primary rounded-md px-4 py-2">Register</a>
        </div>
        <div className='w-full basis-[35%] flex items-center justify-center'>
          <img src={Heroimg} alt="heroimg" className='w-full'/>
        </div>
      </section>
    </header>
  )
}

export default Hero