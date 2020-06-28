import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Chip, Icon } from "@material-ui/core";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const TimeItem = ({ launch }) => {
  const styles = useStyles();
  const {
    mission_name,
    details,
    links,
    launch_date_utc,
    rocket,
    launch_success,
  } = launch;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot>
          <Avatar alt='Remy Sharp' src={links.mission_patch} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={styles.paper}>
          <Typography variant='body2' color='textSecondary'>
            <Moment format='YYYY-MM-DD HH:mm'>{launch_date_utc}</Moment>
          </Typography>
          <Typography variant='h6' component='h1'>
            Mission: {mission_name}{" "}
          </Typography>
          {launch_success ? (
            <Chip size='small' label='Success' color='primary' />
          ) : (
            <Chip size='small' label='Failure' color='secondary' />
          )}
          <Typography>Rocket: {rocket.rocket_name}</Typography>
          <Typography variant='body1' color='textSecondary'>
            {details}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimeItem;
