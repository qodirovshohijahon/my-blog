import React from 'react';
import './App.css';
import { 
  AppBar, 
  Toolbar, 
  Container, 
  IconButton, 
  Typography, 
  Box, 
  Button, 
  Paper,
  Grid
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPostion: "center"
  },
overlay: {
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundOverlay: "rgba(0,0,0, 0.3)"
},
mainFeaturesPostContent: {
  position: "relative",
  padding: theme.spacing(6),
  marginTop: theme.spacing(8)
}
}))

function App() {
  const classes = useStyles()

  return (
    <>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton color='inherit' aria-label='menu' edge='start' className={classes.menuButton}>
          <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Web Developer Blog
          </Typography>
           <Box mr={3}>   {/*margin: 3 */}
            <Button color='inherit' variant='outlined'>
              Log In
            </Button>
            <Button color='secondary' variant='contained'>
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar> 

    <main>
      <Paper className={classes.mainFeaturesPost} style={{ backgroundImage: `url(https://source.unsplash.com/random)`}}>
        <Container fixed>
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  Web developer blog
                </Typography>
                <Typography
                  variant="h5"
                  color="inherit"
                  paragraph
                >
                  Lorem Lorem dasdasdasdsfjdsfdsf Lorem Lorem dasdasdasdsfjdsfdsf
                  Lorem Lorem dasdasdasdsfjdsfdsf Lorem Lorem dasdasdasdsfjdsfdsf
                  Lorem Lorem dasdasdasdsfjdsfdsf
                </Typography>
                <Button variant="contained" color="secondary">
                  Leran More
                </Button>
              </div>
            </Grid>  
          </Grid>  
        </Container>    
      </Paper>
      <div className={classes.mainContent}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Web Developer Blog
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Lorem Lorem dasdasdasdsfjdsfdsf Lorem Lorem dasdasdasdsfjdsfdsf
                  Lorem Lorem dasdasdasdsfjdsfdsf Lorem Lorem dasdasdasdsfjdsfdsf
                  Lorem Lorem dasdasdasdsfjdsfdsf
          </Typography>
          <div className={classes.mainButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Start Now
                </Button>

              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Learn More
                </Button>
                
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </main>
    </>
  );
}

export default App;
