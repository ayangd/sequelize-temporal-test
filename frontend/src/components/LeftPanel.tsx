import { createUseStyles } from 'react-jss';
import PanelCaption from './panel/Caption';
import PanelContainer from './panel/Container';
import PanelTitle from './panel/Title';

const useStyles = createUseStyles({
    LeftPanel: {
        position: 'relative',
        left: '0',
        backgroundColor: '#ddd',
        boxShadow: '2px 0 4px #aaa',
        height: '100%',
        width: '200px',
        padding: '12px',
        gap: '8px',
    },
});

function LeftPanel() {
    const classes = useStyles();

    return (
        <PanelContainer className={classes.LeftPanel}>
            <PanelTitle text="Yes" />
            <PanelCaption text="Input this" />
            <input type="text" />
            <button>Test</button>
        </PanelContainer>
    );
}

export default LeftPanel;