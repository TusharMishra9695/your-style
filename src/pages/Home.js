import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home_p1'>
      <div className='home_p2'>
        <div className='child1_p2'>
         {/* <img src="../../public/imgfiles/logo1-free-img.png" alt="" /> */}
            <ul className='CHILD1_P2_ul'>
            <li>
                <Link className='CHILD1_P2_D1_A'>EVERYTHING</Link>
              </li>
              <li>
                <Link className='CHILD1_P2_D1_A'>WOMEN</Link>
              </li>
              <li>
                <Link className='CHILD1_P2_D1_A'>MEN</Link>
              </li>
              <li>
                <Link className='CHILD1_P2_D1_A'>ACCESSORIES</Link>
              </li>
            </ul>
          <ul className='CHILD1_P2_ul2'>
            <li>
              <Link className='CHILD2_P2_D1_A'>ABOUT</Link>
            </li>
            <li>
              <Link className='CHILD2_P2_D1_A'>CONTACT US</Link>
            </li>
            <li>
              <Link className='CHILD2_P2_D1_A'>$0.00</Link>
            </li>
          </ul>
        </div>
        <div className='home_p3'>
        <div className='child1_p3'>
          <span className='child1_p3_t1'>Raining Offers For Hot Summer!</span>
        </div>
        <div className='child1_p3'>
          <span className='child1_p3_t2'>25% Off On All Products</span>
        </div>
        <div className='child1_p3'>
          <span className='child1_p3_t3'>shop now</span>
          <span className='child1_p3_t4'>find more</span>

        </div>
      </div>
   
      </div>
      <div className='home_section1'>
        <div className='inside_img'>
          <img src="imgfiles/women-fashion-free-img.jpg" alt="loadng..." className='section_img'/>
          <h1 className='img_text'>jhju</h1>
        </div>
      </div>
    </div>
  )
}
