import React from 'react'
import Link from 'gatsby-link'
import { FaTwitter, FaGithub } from 'react-icons/fa';

const HomeNav = ({ isHome }) =>
    <nav className="site-nav">
        <div className="site-nav-left">
            <ul className="nav" role="menu">
                <li role="menuitem">
                    <Link to="/">
                        Ana Sayfa
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to="/about">
                        Hakkımda
                    </Link>
                </li>
                <li role="menuitem">
                    <Link to="/tags">
                        Kategoriler
                    </Link>
                </li>
            </ul>
        </div>
        <div className="site-nav-right">
            <a className="social-logo" style={{color:'#FFFFFF'}} href="https://twitter.com/eminfedar" >
                <FaTwitter />
            </a>
            <a className="social-logo" style={{color:'#FFFFFF'}} href="https://github.com/eminfedar" >
                <FaGithub />
            </a>
        </div>
    </nav>

export default HomeNav