import React from "react";
import {
  Grid,
  AppBar,
  Button,
  ButtonGroup
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import InfoIcon from '@material-ui/icons/InfoOutlined';
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
      paddingBottom: '25px',
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
    gridBarTop: {
      width: '100%',
      padding: 0,
      margin: 0,
    },
    gridBarBottom: {
      width: '100%',
      bottom: 0,
      position: 'absolute',
      padding: 0,
      margin: 0,
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
    buttonGroup: {
      width: '100%',
    },
    topButton: {
      color: '#fff',
      textDecoration: 'none',
      width: '100%',
    },
    button: {
      color: '#fff',
      textDecoration: 'none',
      width: '33%',
    },
    pagelink: {
      color: '#fff',
      textDecoration: 'none',
      underline: 'none',
      width: '100%',
      textAlign: 'right',
      float: 'right',
    },
    openIcon: {
      color: "#fff"
    },
    demoContainer: {
      paddingTop: '17px',
    },
    githubIcon: {
      color: "#fff"
    },
    githubContainer: {
      paddingTop: '15px',
    },
    infoIcon: {
      color: "#fff",
      width: '1.25em',
      height: '1.25em',
    },
    infoContainer: {
      paddingTop: '15px',
    }
  }));
  var classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position={'relative'} className={classes.appBar} >
        <PageTitle />
      </AppBar>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3} className={classes.grid}>
        {projects.map((project) => (
          <Grid item xl={4} lg={4} md={4} sm={4} xs={12} key={project.img} className={classes.item} >
              <div className={classes.gridImg} style={{
                backgroundImage: 'url(' + project.img + ')'
              }}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3} className={classes.gridBarTop}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <ButtonGroup className={classes.buttonGroup} variant="text" color="primary" aria-label="text primary button group">
                      <Button
                        href={project.demo}
                        target="_blank"
                        className={classes.topButton}
                      >
                        {project.title}
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3} className={classes.gridBarBottom}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <ButtonGroup className={classes.buttonGroup} variant="text" color="primary" aria-label="text primary button group">
                      <Button
                        href={project.demo}
                        target="_blank"
                        className={classes.button}
                        startIcon={<OpenInNewIcon />}
                      >
                        Demo
                      </Button>
                      <Button
                        href={project.info}
                        target="_blank"
                        className={classes.button}
                        startIcon={<InfoIcon />}
                      >
                        Info
                      </Button>
                      <Button
                        href={project.code}
                        target="_blank"
                        className={classes.button}
                        startIcon={<GitHubIcon />}
                      >
                        Source
                      </Button>
                    </ButtonGroup>
                  </Grid>
                  {/* <Grid item xl={4} lg={4} md={4} sm={4} xs={4} >
                    <Link className={classes.pagelink} href={project.demo} target="_blank" rel="noopener noreferrer">
                      <div className={classes.demoContainer} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span><h3 className={classes.gridTitle}>View Demo</h3></span>
                        <OpenInNewIcon className={classes.openIcon}/>
                      </div>  
                    </Link>
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4} >
                    <Link className={classes.pagelink} href={project.info} target="_blank" rel="noopener noreferrer">
                      <div className={classes.infoContainer} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span><h3 className={classes.gridTitle}>More Info</h3></span>
                        <InfoIcon className={classes.infoIcon}/>
                      </div>  
                    </Link>
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={4} >
                    <Link className={classes.pagelink} href={project.code} target="_blank" rel="noopener noreferrer">
                      <div className={classes.githubContainer} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span><h3 className={classes.gridTitle}>View Source</h3></span>
                        <GitHubIcon className={classes.githubIcon}/>
                      </div>  
                    </Link>
                  </Grid> */}
                </Grid>
              </div>
          </Grid>
        ))}
      </Grid>
      <AppBar position={'fixed'} className={classes.bottomBar} >
        <Link className={classes.githublink} href="https://github.com/RecklessTechnology/rt_home_page" target="_blank" rel="noopener noreferrer">View page source. <GitHubIcon /></Link>
      </AppBar>
    </div>
  );
}