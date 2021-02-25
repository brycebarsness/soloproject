import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Menu,
  MenuItem,
  Button,
  makeStyles,
  Checkbox,
  Grid,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  ButtonGroup,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "50vw",
    },
  },
}));
function WallInput(props) {
  const newJob = useSelector((state) => state.setOneJobReducer);
  const classes = useStyles();
  const [wallToAdd, setWallToAdd] = useState({
    job_id: newJob.job_id,
    length: "",
  });

  function handleWallSubmit(event) {
    const dispatch = useDispatch();
    if (wallToAdd.length) {
      event.preventDefault();
      dispatch({
        type: "POST_NEW_WALL",
        payload: { ...wallToAdd },
      });
      setWallToAdd({
        length: "",
      });
    } else {
      alert("Please select wall length");
    }
  }

  const handleWallChange = (key) => (event) => {
    setWallToAdd({ ...wallToAdd, [key]: event.target.value });
  };

  return (
    <div>
      <p>Enter Wall Info Below</p>
      <form
        className={classes.root}
        onSubmit={handleWallSubmit}
        autoComplete="off"
      >
        <TextField
          variant="outlined"
          label="length"
          onChange={handleWallChange("length")}
          value={wallToAdd.length}
        />
        <Button variant="outlined" type="submit" color="error">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default WallInput;
