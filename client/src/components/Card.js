import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ image, handleDislike, handleLike }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
      </CardActionArea>
      <CardActions>
        <Button
          onClick={handleDislike}
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<ThumbDownIcon/>}
        >
          Dislike
        </Button>
        {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
        <Button
          onClick={handleLike}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<ThumbUpAltIcon/>}
        >
          Like
        </Button>
      </CardActions>
    </Card>
  );
}
