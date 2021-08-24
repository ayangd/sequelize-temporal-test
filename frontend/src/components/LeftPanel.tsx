import { createUseStyles } from 'react-jss';
import AddModelPanel from './AddModelPanel';
import EditModelPanel from './EditModelPanel';
import PanelContainer from './panel/Container';
import TabContainer from './tab/Container';

const useStyles = createUseStyles({
    LeftPanel: {
        position: 'relative',
        left: '0',
        boxShadow: '2px 0 4px #aaa',
        height: '100%',
        width: '300px',
        gap: '8px',
        overflowX: 'auto',
        resize: 'horizontal',
    },
});

function LeftPanel() {
    const classes = useStyles();

    return (
        <PanelContainer className={classes.LeftPanel}>
            <TabContainer titles={['Add Model', 'Edit Model']} sideTab>
                <AddModelPanel />
                <EditModelPanel />
            </TabContainer>
        </PanelContainer>
    );
}

export default LeftPanel;
