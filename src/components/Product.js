import React from 'react'

export default function Product(props) {
    const {image,title,category,price} = props.item
  return (
    <div className='prod'>
        <img src={image} alt="" className='pro_img cursor'/>
        <h2 className='cursor'>{title}</h2>
        <h4>{category}</h4>
        <span className='extra_prod'>${price*10}{" "}</span>
        <span>${price*7}</span>
    </div>
  )
}
