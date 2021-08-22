import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    PanelTitle: {
        width: '100%',
        fontSize: '1.2rem',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif',
        ],
    },
});

export type PanelTitleProps = {
    text: string;
};

function PanelTitle(props: PanelTitleProps) {
    const classes = useStyles();

    return <div className={classes.PanelTitle}>{props.text}</div>;
}

export default PanelTitle;
