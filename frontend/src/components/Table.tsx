import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    Table: {
        borderCollapse: 'collapse',
        width: '100%',
        '& th, & td': {
            border: '1px solid #ddd',
            padding: '8px',
            textAlign: 'left',
        },
        '& tr:nth-child(n+2)': {
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#bbb',
                '&.active': {
                    backgroundColor: '#aaa',
                },
            },
        },
        '& tr.active': {
            backgroundColor: '#aaa',
        },
    },
});

export interface TableProps
    extends Partial<React.Component<HTMLTableElement, {}>> {
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
}

function Table(props: TableProps) {
    const classes = useStyles();
    const className = [props.className, classes.Table]
        .filter((x) => x)
        .join(' ');

    return <table className={className}>{props.children}</table>;
}

export default Table;
