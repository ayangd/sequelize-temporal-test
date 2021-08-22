import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    PanelContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
});

export type PanelContainerProps = {
    children?: React.ReactNode[];
    className?: string;
};

function PanelContainer(props: PanelContainerProps) {
    const classes = useStyles();
    const className = [props.className, classes.PanelContainer]
        .filter((x) => x)
        .join(' ');

    return <div className={className}>{props.children}</div>;
}

export default PanelContainer;
