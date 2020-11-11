import React, { useState } from 'react';
import '../../src/style.css';
import logo from '../assets/logo.png';
import star from '../assets/star.png';
import history from './history';
import { IoIosArrowDown, IoIosCart, IoIosSearch, IoLogoAndroid } from 'react-icons/io';
import { 
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../components/materialUi/index';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

return (
  <>
  <div className="header">
      
      <div className="subHeader">
        <div className="logo">
          <a href="#" onClick={()=>history.push('/home')}>
            <img src={logo} className="logoimage" alt="" />
          </a>
          <a style={{ marginTop: '-10px' }}>
            <span className="exploreText">Explore</span>
            <span className="plusText">Plus</span>
          </a>
        </div>
        <div style={{
          padding: '0 10px'
        }}>
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={'search for products, brands and more'}
            />
            <div className="searchIconContainer">
              <IoIosSearch style={{
                color: '#2874f0'
              }} />
            </div>

          </div>
        </div>
        <div className="rightMenu">
          <DropdownMenu
            menu={
              <a className="loginButton" onClick={() => setLoginModal(true)}>
                Login
              </a>
            }
            menus={[
              { label: 'My Profile', href: '', icon: null },
              { label: 'Flipkart Plus Zone', href: '', icon: null },
              { label: 'Orders', href: '', icon: null },
              { label: 'Wishlist', href: '', icon: null },
              { label: 'Rewards', href: '', icon: null },
              { label: 'Gift Cards', href: '', icon: null },
            ]}
            firstMenu={
              <div className="firstmenu">
                <span>New Customer?</span>
                <a style={{ color: '#2874f0' }}>Sign Up</a>
              </div>
            }
          />
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: 'Notification Preference', href: '', icon: null },
              { label: 'Sell on flipkart', href: '', icon: null },
              { label: '24x7 Customer Care', href: '', icon: null },
              { label: 'Advertise', href: '', icon: null },
              { label: 'Download App', href: '', icon: null }
            ]}
          />
          <div>
            <a className="cart">
              <IoIosCart />
              <span style={{ margin: '0 10px' }}>Cart</span>
            </a>
          </div>
        </div>

      </div>
      <div className="category">
  

      
      <table>
        <tr>
          <th>
          <DropdownMenu
    menu={
      <a className="electronics" >
        <span>Electronics</span>
        <IoIosArrowDown />
      </a>
    }
    menus={[
      { label: <b onClick={() => history.push('/mobile-phone')}>Mobiles</b>, href: '', icon: null },
      { label: 'Redmi', href: '', icon: null },
      { label: 'Apple', href: '', icon: null },
      { label: 'Vivo', href: '', icon: null },
      { label: 'POCO', href: '', icon: null }
      ]}
  />
          </th>
        <th>
        <DropdownMenu
    menu={
      <a className="electronics" >
        <span>Electronics</span>
        <IoIosArrowDown />
      </a>
    }
    menus={[
      { label: <b onClick={() => history.push('/mobile-phone')}>Mobiles</b>, href: '', icon: null },
      { label: 'Redmi', href: '', icon: null },
      { label: 'Apple', href: '', icon: null },
      { label: 'Vivo', href: '', icon: null },
      { label: 'POCO', href: '', icon: null }
      ]}
  />
        </th>
        </tr>
        
       
        
      </table>
      </div>
    </div>
    </>
  )

}

export default Header