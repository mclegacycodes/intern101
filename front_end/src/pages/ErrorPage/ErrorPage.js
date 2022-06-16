import React from 'react'
import errorvector from "../../assets/error-404-page.webp";
import "./ErrorPage.css"

export default function ErrorPage() {
  return (
    <div className='error'>
        <img src={errorvector} alt='page not found'/>
    </div>
  )
}
