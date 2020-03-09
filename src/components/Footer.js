import React from 'react'
import Link from 'gatsby-link'

const Footer = () =>
    <footer className="site-footer outer">
        <div className="site-footer-content inner">
            <section className="copyright">
                <Link to="/">eminfedar.com</Link> | 2020
            </section>
            <a href="https://github.com/Harrison1/unrealcpp">Gatsby theme: unrealcpp</a>
        </div>
    </footer>

export default Footer;

