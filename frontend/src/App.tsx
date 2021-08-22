import { createUseStyles } from 'react-jss';
import InputPanel from './components/InputPanel';

const useStyles = createUseStyles({
    App: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    },
});

function App() {
    const classes = useStyles();

    return (
        <div className={classes.App}>
            <InputPanel />
        </div>
    );
}

export default App;
