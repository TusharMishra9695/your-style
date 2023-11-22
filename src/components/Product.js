import React from 'react'

export default function Product(props) {
    const {thumbnail,title,category,price,discountPercentage} = props.item
  return (
    <div className='prod'>
        <img src={thumbnail} alt="" className='pro_img cursor'/>
        <h2 className='cursor'>{title}</h2>
        <h4>{category}</h4>
        <span className='extra_prod'>${price*80}{" "}</span>
        <span>${price*70}</span>
    </div>
  )
}
