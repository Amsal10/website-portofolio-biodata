import React from 'react'
import Button from './Button'

function AboutMe() {
    return (
        <div className='section'>
            <div className='row align-items-center'>
                <div className='col-md-6 col-sm-12 text-center'>
                    <img
                        className='fotoprofil'
                        src='https://media-exp1.licdn.com/dms/image/C5603AQHfk5GlXzxufA/profile-displayphoto-shrink_800_800/0/1644830244803?e=1666224000&v=beta&t=TN2alWZDd83WvdLyBl4K5pOsjiHBadCA24t-GOT_r2c' />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <h1>AboutMe</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <Button
                        text="Download CV"
                        warna="warning"
                        link="https://www.facebook.com/amsal.wahyudi.73" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe