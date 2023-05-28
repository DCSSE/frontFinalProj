import React from 'react'
import "./style.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='imdb-section'>
                <span>IMDB owns information</span>
                <ul>
                    <a href='https://www.instagram.com/imdb/'
                        target={"_blank"} rel="noreferrer">
                        <li><InstagramIcon /></li>
                    </a>
                    <a href='https://twitter.com/imdb'
                        target={"_blank"} rel="noreferrer">
                        <li><TwitterIcon /></li>
                    </a>
                    <a href='https://www.facebook.com/imdb'
                        target={"_blank"} rel="noreferrer">
                        <li><FacebookIcon /></li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Footer
