import "../assets/wrappers/ErrorPage";
import img from '../assets/images/not-found.svg'
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
        <img src={img} alt="eroor" />
        <h2>Oooh! Nothing Here!!</h2>
        <Link to='/'>Go Home</Link>
    </div>
  )
}
export default Error