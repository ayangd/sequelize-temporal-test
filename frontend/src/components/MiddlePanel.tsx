import React from 'react';
import { createUseStyles } from 'react-jss';
import TabContainer from './tab/Container';

const useStyles = createUseStyles({
    MiddlePanel: {
        flexGrow: '1',
        maxWidth: 'calc(100% - 200px)',
    },
    Table: {
        borderCollapse: 'collapse',
        width: '100%',
        '& td, & th': {
            border: '1px solid black',
            padding: '8px',
        },
    },
});

function MiddlePanel() {
    const classes = useStyles();
    const tabs: Record<string, React.ReactNode> = {
        Models: 'yes',
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
