import React from "react";
import {
  Grid,
  // GridList,
  // GridListTile,
  // GridListTileBar,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from "react-router-dom";

// styles
// import useStyles from "./styles";


// components
// import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";

import projects from '../../config/projects'

export default function Dashboard(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      minHeight: '100%',
    },
    grid: {
      width: '100%',
      height: 'auto',
    },
    item: {
      overflow: 'hidden',
      height: 300,
      justifyContent: 'center',
    },
    gridImg: {
      height: '100%',
      width: 'auto',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      position: 'relative',
    },
    gridTitle: {
      width: '100%',
      bottom: 0,
      position: 'absolute',
      padding: '0 15px',
      textDecoration: 'none',
      color: '#FFF',
    }
  }));
  var classes = useStyles();
  
  return (
    <div className={classes.root}>
      
      <PageTitle/>
      <Grid container spacing={3} className={classes.grid}>
        {projects.map((project) => (
          
          <Grid item
          xl={4}
          lg={4} // ipad (large)
          md={4} // ipad (small)
          sm={4} // 800x600
          xs={12} // iphone
          key={project.img}
          className={classes.item}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className={classes.gridImg} style={{
                backgroundImage: 'url(' + project.img + ')'
              }}>
                <div className={classes.gridTitle}><h5>{project.title}</h5></div>
              </div>
            </a>
          </Grid>
          
        ))}
      </Grid>
    </div>
  );
}