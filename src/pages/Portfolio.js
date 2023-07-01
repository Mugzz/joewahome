import {
  Grid,
  Typography,
  Tabs,
  Tab,
  Grow,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CardActionArea,
} from '@material-ui/core';
import React, { useState } from 'react';
import '../assets/css/Profile.css';
import data from '../utils/data';

const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <Grid container spacing={1} className='section pb_45 pt_45'>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {data.projects.map((project) => (
            <React.Fragment key={project.title}>
              {tabValue === project.tag || tabValue === 'All' ? (
                <Grid item xs={12} sm={6} md={6}>
                  <Grow in timeout={1000}>
                    <Card className='custom_card' onClick={() => setCurrentVideoIndex(data.projects.indexOf(project))}>
                      <CardActionArea>
                        <CardMedia className='card_img'>
                          <video width='100%' height='240' autoPlay muted controls>
                            <source src={project.image[currentVideoIndex]} />
                          </video>
                        </CardMedia>

                      </CardActionArea>
            
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
