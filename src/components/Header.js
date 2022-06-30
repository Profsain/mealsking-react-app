import "../styles/Header.css";

const Header = () => {
  return (
    <header className='Header-container'>
      <img src='brand-logo.png' alt='brand-logo' className='Brand-logo' />
      <form className="Search-form">
        <input type="text" placeholder="Search over 1000 meals" />
      </form>
      {/* <nav className='Nav-menu'>
        <ul className='Menu-link'>
          <li className='Menu-item'>Breaksfast</li>
          <li className='Menu-item'>Seafood</li>
          <li className='Menu-item'>Vegan</li>
          <li className='Menu-item'>Pasta</li>
          <li className='Menu-item'>Dessert</li>
          <li className='Menu-item'>Side</li>
          <li className='Menu-item'>Chicken</li>
          <li className='Menu-item'>Beef</li>
        </ul>
      </nav> */}
    </header>
  )
};

export default Header;