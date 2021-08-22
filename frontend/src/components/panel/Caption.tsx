import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    PanelCaption: {
        fontSize: '0.8rem',
        color: '#0009',
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

export type PanelCaptionProps = {
    text: string;
};

function PanelCaption(props: PanelCaptionProps) {
    const classes = useStyles();

    return <div className={classes.PanelCaption}>{props.text}</div>;
}

export default PanelCaption;
