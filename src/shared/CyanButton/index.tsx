import { Button, Typography } from '@mui/material';
import { useStyles } from './styles';

interface Props {
  buttonText: string;
  handleClick: () => void;
}

export const CyanButton = (props: Props) => {
  const { buttonText, handleClick } = props;
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={handleClick}
    >
      <Typography
        fontFamily="Quicksand"
        fontWeight={900}
        fontSize={14}
      >
        {buttonText}
      </Typography>
    </Button>
  );
};
