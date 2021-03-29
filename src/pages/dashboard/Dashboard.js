import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  ButtonGroup
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

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
      groupedTextPrimary: {
        borderColor: '#fff',
      }
    },
    topButton: {
      color: '#fff',
      textDecoration: 'none',
      width: '100%',
    },
    bottomButton: {
      color: '#000',
      textDecoration: 'none',
      width: '100%',
    },
    button: {
      color: '#fff',
      textDecoration: 'none',
      width: '33%',
    },
  }));
  var classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position={'relative'} className={classes.appBar} >
        <Toolbar>
          <PageTitle />
        </Toolbar>
      </AppBar>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3} className={classes.grid}>
        {projects.map((project) => (
          <Grid item xl={4} lg={4} md={4} sm={4} xs={12} key={project.img} className={classes.item} >
              <div className={classes.gridImg} style={{
                backgroundImage: 'url(' + project.img + ')'
              }}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={3} className={classes.gridBarTop}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                    <ButtonGroup className={classes.buttonGroup} variant="text" aria-label="text primary button group">
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
                    <ButtonGroup className={classes.buttonGroup} variant="text" aria-label="text primary button group">
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
                </Grid>
              </div>
          </Grid>
        ))}
      </Grid>
      <AppBar position={'fixed'} className={classes.bottomBar} >
      <ButtonGroup className={classes.buttonGroup} variant="text" aria-label="text primary button group">
        <Button
          href={"/"}
          className={classes.bottomButton}
        >
          RecklessTech
        </Button>
        <Button
          href={"https://github.com/RecklessTechnology/rt_home_page"}
          target="_blank"
          className={classes.bottomButton}
          startIcon={<GitHubIcon />}
        >
          Page Source
        </Button>
      </ButtonGroup>
      </AppBar>
    </div>
  );
}