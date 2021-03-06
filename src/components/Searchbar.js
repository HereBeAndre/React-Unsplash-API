import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const classes = useStyles();

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onInputSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(searchValue);
  };
  console.log(searchValue);
  return (
    <div className={classes.root}>
      <form onSubmit={onInputSubmit}>
        <TextField
          id="outlined-margin-dense"
          placeholder="Start browsing..."
          className={classes.textField}
          margin="dense"
          variant="outlined"
          value={searchValue}
          onChange={onInputChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
