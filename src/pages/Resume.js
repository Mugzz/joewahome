import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import data from '../utils/data'

import '../assets/css/Resume.css'
const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_text'>About Me 👋</h6>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body2' className='about_text'>
            {data.about}
          </Typography>
        </Grid>
      </Grid>
      {/* certification */}



    </>
  )
}

export default Resume
