import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    TabContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    TabContainerTabs: {
        backgroundColor: '#eee',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
    },
    TabContainerTab: {
        backgroundColor: '#ddd',
        padding: '8px 24px',
        cursor: 'pointer',
    },
    TabContainerTabActive: {
        backgroundColor: '#fff',
    },
    TabContainerBody: {
        flexGrow: '1',
    },
});

export type TabContainerProps = {
    className?: string;
    children?: React.ReactNode[];
    titles?: string[];
};

function TabContainer(props: TabContainerProps) {
    const classes = useStyles();
    const className = [props.className, classes.TabContainer]
        .filter((x) => x)
        .join(' ');
    const [tab, setTab] = useState(0);

    const tabs = [];
    if (props.titles !== undefined) {
        for (let i = 0; i < props.titles.length; i++) {
            const tabClassName = [
                tab === i ? classes.TabContainerTabActive : undefined,
                classes.TabContainerTab,
            ]
                .filter((x) => x)
                .join(' ');

            tabs.push(
                <div className={tabClassName} onClick={() => setTab(i)}>
                    {props.titles[i]}
                </div>
            );
        }
    }

    return (
        <div className={className}>
            <div className={classes.TabContainerTabs}>{tabs}</div>
            <div className={classes.TabContainerBody}>
                {props?.children?.[tab]}
            </div>
        </div>
    );
}

export default TabContainer;
