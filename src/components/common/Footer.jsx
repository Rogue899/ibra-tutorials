import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles((theme) => (console.log(theme),{
  root: {
    backgroundColor: theme.palette.grey[100],
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  footerText: {
    color: theme.palette.grey[600],
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  socialMediaIcon: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Company</Typography>
            <Typography className={classes.footerText} variant="body2">
              About Us
            </Typography>
            <Typography className={classes.footerText} variant="body2">
              Careers
            </Typography>
            <Typography className={classes.footerText} variant="body2">
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Terms of Service</Typography>
            <Typography className={classes.footerText} variant="body2">
              Privacy Policy
            </Typography>
            <Typography className={classes.footerText} variant="body2">
              Cookie Policy
            </Typography>
            <Typography className={classes.footerText} variant="body2">
              Disclaimer
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Follow Us</Typography>
            <Box>
              <IconButton
                className={classes.socialMediaIcon}
                color="primary"
                aria-label="Facebook"
                component={Link}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                className={classes.socialMediaIcon}
                color="primary"
                aria-label="Twitter"
                component={Link}
                href="https://twitter.com/"
                target="_blank"
                rel="noopener"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                className={classes.socialMediaIcon}
                color="primary"
                aria-label="Instagram"
                component={Link}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
