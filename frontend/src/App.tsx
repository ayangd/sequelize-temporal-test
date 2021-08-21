import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  App: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      
    </div>
  );
}

export default App;
