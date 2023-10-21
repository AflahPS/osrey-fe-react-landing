import {
  Divider, Grid, IconButton, Input, Typography
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Grid container direction="column">
    <Grid item container direction="row">
      <Grid item>Logo</Grid>
      <Grid item container direction="column">
        <Grid item container gap={3} justifyContent="center">
          <Grid item>
            <Link to="#1">
              <Typography>Terms of use</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="#1">
              <Typography>Terms of use</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="#1">
              <Typography>Terms of use</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="#1">
              <Typography>Terms of use</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to="#1">
              <Typography>Terms of use</Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="column">
        <Grid item>
          <Typography>SubScribe</Typography>
        </Grid>
        <Grid item container>
          <Input />
          <Grid item>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Divider variant="fullWidth" />
    <Grid item container justifyContent="space-between">
      {' '}
      {/* copyright */}
      <Grid item>
        <Typography>(c) Osprey Technology PVT LTD. All rights reserved</Typography>
      </Grid>
      <Grid item container justifyContent="space-between">
        <Grid item>
          <Link to="#1">
            <Typography>Terms of use</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="#1">
            <Typography>Privacy policy</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Footer;
