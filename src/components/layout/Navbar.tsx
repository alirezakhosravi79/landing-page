import Logo from "../../assets/Logo.png"
import Button from "../ui/Button"

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
        {/* <a href="#" className="flex items-center gap-3 px-4 py-2 bg-transparent text-primary rounded-md text-center">Login</a> */}

          <Button variant="outline">Login</Button>
          <Button>Sign up</Button>
        </div>
      </section>
    </nav>
  )
}

export default Navbar