import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import '../assets/wrappers/LandingPage.css'

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jopify logo" className='logo'/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>jop <span>tracking app</span></h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottel single-origin coffe chia. Aesthetic post ironic venom, 
            sadsad dsadasioj u ui i io pi9 i9 op iu iuu  poioi uo9i o  i 
            ppppxf +1 brunch
            narwhal.
                      </p>
                      <button className="btn btn-hero">
                        Login/Regester
                      </button>
        </div>
        <img src={main} alt="jop hunt" className="img" />
      </div>
    </main>
  )
}

export default Landing