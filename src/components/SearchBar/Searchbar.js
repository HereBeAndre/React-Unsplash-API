import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
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

  return (
    <div>
      <form className={classes.root} onSubmit={onInputSubmit}>
        <TextField
          id="outlined-margin-dense"
          className={classes.textField}
          placeholder="Start browsing..."
          margin="dense"
          variant="outlined"
          autoFocus={true}
          value={searchValue}
          onChange={onInputChange}
        />
        <Button type="submit" variant="contained" color="primary">
          <SearchIcon />
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
