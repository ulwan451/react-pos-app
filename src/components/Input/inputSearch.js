import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  input: {
    marginLeft: theme.spacing(3)
  }
}));

export default function InputSearch(props) {
  const classes = useStyles();

  return (
    <Paper component="form">
      <InputBase
        className={classes.input}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
