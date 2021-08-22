import React from 'react';
import { createUseStyles } from 'react-jss';
import TabContainer from './tab/Container';

const useStyles = createUseStyles({
    MiddlePanel: {
        flexGrow: '1',
    },
});

function MiddlePanel() {
    const classes = useStyles();
    const tabs: Record<string, React.ReactNode> = {
        Models: <div>Yes</div>,
        Others: <div>No</div>,
    };

    return (
        <TabContainer
            className={classes.MiddlePanel}
            titles={Object.keys(tabs)}
        >
            {Object.values(tabs)}
        </TabContainer>
    );
}

export default MiddlePanel;
