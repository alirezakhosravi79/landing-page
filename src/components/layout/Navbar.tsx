import Logo from "../../assets/Logo.png"

function Navbar() {
  return (
    <nav className="bg-silver py-4">
      <section className="container mx-auto flex items-center justify-between">
        <img src={Logo} alt="logo" className='w-[154px]' />
        <ul className="flex items-center gap-12">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Feature</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <a href="#" className="text-primary block bg-transparent rounded-md px-4 py-2">Login</a>
          <a href="#" className="text-white block bg-primary rounded-md px-4 py-2">Sign up</a>
        </div>
      </section>
    </nav>
  )
}

export default Navbar