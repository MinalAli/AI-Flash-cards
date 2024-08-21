import Image from "next/image";
import { Container, Box, AppBar, Toolbar, Typography, Button, Grid } from "@mui/material";
import Head from "next/head";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Paper from '@mui/material/Paper';

export default function Home() {
  return (
    <Container maxWidth="lg">

<AppBar position="static">
  <Toolbar>
    <Typography variant="h6" style={{flexGrow: 1}}>
      Flashcard SaaS
    </Typography>
    <SignedOut>
      <Button color="inherit" href="/sign-in">Login</Button>
      <Button color="inherit" href="/sign-up">Sign Up</Button>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </Toolbar>
</AppBar>

<Box sx={{textAlign: 'center', my: 4}}>
  <Typography variant="h2" component="h1" gutterBottom>
    Welcome to Flashcard SaaS
  </Typography>
  <Typography variant="h5" component="h2" gutterBottom>
    The easiest way to create flashcards from your text.
  </Typography>
  <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
    Get Started
  </Button>
  <Button variant="outlined" color="primary" sx={{mt: 2}}>
    Learn More
  </Button>
</Box>
<Box sx={{my: 6}}>
  <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
  <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="h3" gutterBottom>
            Easy Text Input
          </Typography>
          <Typography variant="body1">
            Simply insert text and let our software do the rest, flashcards have never been easier.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Typography variant="h6" component="h3" gutterBottom>
        Smart Study
          </Typography>
          <Typography variant="body1">
          AI-powered algorithm tailors study sessions to your learning style and pace, ensuring maximum efficiency.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Typography variant="h6" component="h3" gutterBottom>
        Access Anywhere 
          </Typography>
          <Typography variant="body1">
          Access your flashcards and study materials anytime, anywhere with our mobile-optimized platform.
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{my: 6, textAlign: 'center'}}>
  <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
  <Grid container spacing={4} justifyContent="center">
    {/* Pricing plans */}
    <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Basic
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              $5/month
            </Typography>
            <Typography variant="body1">
              * Feature 1
            </Typography>
            <Button variant="contained" fullWidth>
              Choose Plan
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Standard
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              $15/month
            </Typography>
            <Typography variant="body1">
              * Feature 1
              * Feature 2
            </Typography>
            <Button variant="contained" fullWidth>
              Choose Plan
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Premium
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              $25/month
            </Typography>
            <Typography variant="body1">
              * Feature 1
              * Feature 2
              * Feature 3
            </Typography>
            <Button variant="contained" fullWidth>
              Choose Plan
            </Button>
          </Paper>
        </Grid>
  </Grid>
</Box>
</Box>
</Container>
  );
}
