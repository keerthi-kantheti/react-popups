// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" data-testid="hamburgerIconButton">
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <div>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  <IoMdClose />
                </button>
              </li>
              <li>
                <Link to="/">
                  <AiFillHome />
                  <h1>Home</h1>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <BsInfoCircleFill />
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)
export default Header
