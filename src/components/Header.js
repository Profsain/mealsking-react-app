import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const backToHome = () => navigate('/');
  return (
    <header className='Header-container'>
      <img src='brand-logo.png' alt='brand-logo' className='Brand-logo' onClick={backToHome}/>
      <form className="Search-form">
        <input type="text" placeholder="Search over 1000 meals" />
      </form>
    </header>
  )
};

export default Header;