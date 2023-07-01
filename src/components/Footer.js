import React from 'react'
import '../assets/css/Footer.css'
import data from '../utils/data'
import { Typography } from '@material-ui/core'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'>{data.name}</Typography>
      </div>
      <div className='footer_right'>
        
      </div>
    </div>
  )
}

export default Footer
