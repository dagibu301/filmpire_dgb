// Libs
import { Grid } from "@mui/material";
// Components
import Movie from "../Movie";
// Styles
import useStyles from "./styles";

const MovieList = ({ movies }) => {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, index) => (
        <Movie key={index} movie={movie} i={index} />
      ))}
    </Grid>
  );
};

export default MovieList;
