import React from 'react'

export default function Specialist(props) {
    const {image,heading,para} = props.item
  return (
    <div className='inside_specialist'>
        <img src={image} alt="loading..." className='inside_specialist_img' />
        <h5>{heading}
        </h5>
        <p>{para}
        </p>
    </div>
  )
}
