import { createUseStyles } from 'react-jss';
import LeftPanel from './components/LeftPanel';
import MiddlePanel from './components/MiddlePanel';

const useStyles = createUseStyles({
    App: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
    },
});

function App() {
    const classes = useStyles();

    return (
        <div className={classes.App}>
            <LeftPanel />
            <MiddlePanel />
        </div>
    );
}

export default App;
