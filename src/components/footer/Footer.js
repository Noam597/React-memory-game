import React from 'react'
import styles from "./footer.module.css"
import { FaFacebook,FaInstagramSquare,FaTwitter } from 'react-icons/fa';
export const Footer = () => {
  return (
    <div className={styles.footer}>
        <h4>Created by Noam</h4>
        <p>A Special Thanks to the team at unsplash.com & the photographers </p>
        <ul>
        <li><a href='https://www.facebook.com'><FaFacebook/></a></li>
        <li><a href='https://www.instagram.com'><FaInstagramSquare/></a></li>
        <li><a href='https://www.twitter.com'><FaTwitter/></a></li>
        </ul>
    </div>
  )}