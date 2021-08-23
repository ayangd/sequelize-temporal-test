import React from 'react';
import { createUseStyles } from 'react-jss';
import ModelTable from './ModelTable';
import TabContainer from './tab/Container';

const useStyles = createUseStyles({
    MiddlePanel: {
        flexGrow: '1',
        maxWidth: 'calc(100% - 200px)',
    },
});

function MiddlePanel() {
    const classes = useStyles();
    const tabs: Record<string, React.ReactNode> = {
        Models: <ModelTable />,
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
