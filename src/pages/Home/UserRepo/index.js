import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import cx from "classnames";
import moment from "moment";

import { styles } from "./styles";

const UserRepo = ({ classes, description, name, html_url, license, language, created_at, onLogout }) => (
  <Card key={name} className={classes.cardContainer}>
    <Typography className={cx(classes.repoFont, classes.repoTitle)}>{name}</Typography>
    <Typography className={cx(classes.repoDescription, classes.repoFont)}>{description}</Typography>
    <Typography className={cx(classes.repoFont, classes.repoCreatedDate)}>{moment(created_at).format("LL")}</Typography>
    <a href={html_url} target="_blank" className={classes.repoLink} rel="noopener noreferrer">
      <IconButton onClick={onLogout}>
        <Icon>link</Icon>
      </IconButton>
    </a>
  </Card>
);

export default withStyles(styles)(UserRepo);
