import React from 'react'
import { footerContent } from '../utils/content'
export default function Footer() {
  return (
    <footer>
    <div className="footer">
    <h3>
        {
            footerContent.sale
        }
    </h3>
  </div>
  <hr />
  <div className='footer mid_part'>
    <div className='brand_title'>
        <img src="/imgfiles/logo@2x-free-img.png" alt="" className='brand_logo_02'/>
        <h4>
            {footerContent.look}
        </h4>
    </div>
    <div>

    </div>
    <div>

    </div>
    <div className='subs'>
        <h2>{footerContent.subs}
        </h2>
        <input type="email" name="email" id="" placeholder='Your email address...' />
        <span>{footerContent.subs}</span>
    </div>

  </div>
  <hr/>
  <div className='footer end_part'>

  </div>
  </footer>

    )
}
