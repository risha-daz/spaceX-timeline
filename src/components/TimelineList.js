import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimeItem from "./TimeItem";
import { CircularProgress, Container } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  spinner: {
    alignText: "center",
    padding: 3,
  },
  timelineClassMob: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-80%",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "0%",
      align: "alternate",
    },
  },
}));

const TimelineList = ({ launches }) => {
  const theme = useTheme();

  const styles = useStyles();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Fragment>
      {launches ? (
        <Timeline
          align={smallScreen ? "left" : "alternate"}
          className={styles.timelineClassMob}
        >
          {launches.map((launch) => (
            <TimeItem key={launch.flight_number} launch={launch} />
          ))}
        </Timeline>
      ) : (
        <div style={{ textAlign: "center", paddingTop: "60px" }}>
          <CircularProgress />
        </div>
      )}
    </Fragment>
  );
};

export default TimelineList;
