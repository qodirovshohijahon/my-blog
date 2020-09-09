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
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
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
      <Paper className={classes.mainFeaturesPost} styles={{backgroundImage: `url(https://source/unsplash.com/random)`}}>
        <Container fixed>
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography
                  component="h1"
                  color="inherit"
                  gutterBottom
                >
                  Web developer blog
                </Typography>
                <Typography
                  component="h5"
                  color="inherit"
                  paragraph
                >
                  Lorem Lorem dasdasdasdsfjdsfdsf
                  Lorem Lorem dasdasdasdsfjdsfdsf
                  Lorem Lorem dasdasdasdsfjdsfdsf
                  Lorem Lorem dasdasdasdsfjdsfdsf
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
    </main>
    </>
  );
}

export default App;
