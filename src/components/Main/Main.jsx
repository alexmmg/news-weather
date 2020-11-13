import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Main = () => {
  return (
      <div>
        <div>
          {/*className={classes.root}*/}
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Paper>xs=12</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
  );
};

export default Main;