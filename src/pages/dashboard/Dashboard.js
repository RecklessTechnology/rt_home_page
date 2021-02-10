import React from "react";
import {
  Grid,
  AppBar,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';

import PageTitle from "../../components/PageTitle";

import projects from '../../config/projects'

export default function Dashboard(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#fff',
      minHeight: '100%',
    },
    grid: {
      width: '100%',
      height: 'auto',
    },
    item: {
      overflow: 'hidden',
      height: 300,
    },
    gridImg: {
      height: '100%',
      width: 'auto',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      position: 'relative',
    },
    gridBar: {
      width: '100%',
      bottom: 0,
      position: 'absolute',
      padding: '0',
    },
    gridTitle: {
      textDecoration: 'none',
      color: '#FFF',
      padding: '5px 15px',
    },
    appBar: {
      backgroundColor: '#fff',
      boxShadow: 'none',
    },
    bottomBar: {
      top: 'auto',
      bottom: 0,
      backgroundColor: '#fff',
      boxShadow: 'none',
      padding: '15px 30px',
    },
    githublink: {
      color: '#000',
      textDecoration: 'none',
      underline: 'none',
      width: '100%',
      textAlign: 'right',
    },
  }));
  var classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position={'relative'} className={classes.appBar} >
        <PageTitle/>
      </AppBar>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3} className={classes.grid}>
        {projects.map((project) => (
          <Grid item xl={4} lg={4} md={4} sm={4} xs={12} key={project.img} className={classes.item} >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className={classes.gridImg} style={{
                backgroundImage: 'url(' + project.img + ')'
              }}>
                <div className={classes.gridBar}><h5 className={classes.gridTitle}>{project.title}</h5></div>
              </div>
            </a>
          </Grid>
        ))}
      </Grid>
      <AppBar position={'fixed'} className={classes.bottomBar} >
        <a className={classes.githublink} href="https://github.com/RecklessTechnology/rt_home_page" target="_blank" rel="noopener noreferrer">View page source. <GitHubIcon /></a>
      </AppBar>
    </div>
  );
}