import { Grid, Typography } from '@mui/material';
import { useStyles } from './styles';
import printerSkeleton from '../../../assets/PrinterRightImage.png';
import { CyanButton } from '../../../shared';

export const RightImagedHero = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.heroGridMain}>
      <Grid
        flex={3}
        item
        container
        justifyContent="center"
        direction="column"
        gap={5}
        ml={{ lg: 24, xs: 8, md: 12 }}
      >
        <Grid item>
          <Typography fontFamily="Quicksand" variant="h6">
            Small Header
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="h2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Typography>
        </Grid>

        <Grid item>
          <Typography fontFamily="Quicksand" variant="h5">
            Something else
          </Typography>
          <Typography fontFamily="Quicksand" variant="h5">
            Something more else
          </Typography>
        </Grid>

        <Grid item>
          <CyanButton buttonText="Book For Call" handleClick={() => {}} />
        </Grid>
      </Grid>
      <Grid flex={1} item height="100%" overflow="hidden">
        <Grid
          component="img"
          src={printerSkeleton} // TODO: Needs .src
          sx={{ objectFit: 'cover' }}
          height="100%"
        />
        {/* <Image src={printerSkeleton} alt='printer-skeleton' height={700} /> */}
      </Grid>
    </Grid>
  );
};
