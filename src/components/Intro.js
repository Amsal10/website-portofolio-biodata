import React from 'react'
import Button from './Button'

function Intro() {
  return (
    <div className='section text-light intro'>
      <div className='container text-center'>
        <img
          className='fotoprofil'
          src='https://media-exp1.licdn.com/dms/image/C5603AQHfk5GlXzxufA/profile-displayphoto-shrink_800_800/0/1644830244803?e=1666224000&v=beta&t=TN2alWZDd83WvdLyBl4K5pOsjiHBadCA24t-GOT_r2c' />
        <h1>Amsal Wahyudi</h1>
        <p>haiiiii</p>
        <a target='_blank' href='https://www.facebook.com/amsal.wahyudi.73' className='social-media'>
          <i class="bi bi-facebook"></i>
        </a>
        <a target='_blank' href='https://www.facebook.com/amsal.wahyudi.73' className='social-media'>
          <i class="bi bi-instagram"></i>
        </a>
        <a target='_blank' href='https://www.facebook.com/amsal.wahyudi.73' className='social-media'>
          <i class="bi bi-github"></i>
        </a>
        <div className='row'>
          <div className='col'>
            <Button
              text="Hire Me"
              warna="primary"
              link="https://www.facebook.com/amsal.wahyudi.73" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro