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
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  Card
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import LayerIcon from '@material-ui/icons/Layers'
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
},
cardMedia: {
  paddingTop: "56.25%"
},
cardContent: {
  flexGrow: 1
},
cardGrid: {
  marginTop: theme.spacing(4)
}
}))

const cards = [1,2,3,4,5,6,7,8,9]
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
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia 
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="imageTitle"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h4" gutterBottom>
                    Blog Post
                  </Typography>
                  <Typography variant="h6" paragraph>
                    DescritionBlog Post DescritionBlog Post Descrition
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <LayerIcon />
                  <PlayCircleFilledIcon />
                  </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    </>
  );
}

export default App;
