import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    TabContainer: (sideTab: boolean) => ({
        height: sideTab ? '100%' : '',
        display: 'flex',
        flexDirection: sideTab ? 'row' : 'column',
    }),
    TabContainerTabs: (sideTab: boolean) => ({
        backgroundColor: '#eee',
        display: 'flex',
        flexDirection: sideTab ? 'row-reverse' : 'row',
        maxWidth: '100%',
        flexWrap: 'wrap-reverse',
        writingMode: sideTab ? 'sideways-lr' : '',
    }),
    TabContainerTab: (sideTab: boolean) => ({
        backgroundColor: '#ddd',
        padding: sideTab ? '24px 8px' : '8px 24px',
        cursor: 'pointer',
    }),
    TabContainerTabActive: {
        backgroundColor: '#fff !important',
    },
    TabContainerBody: (sideTab: boolean) => ({
        flexGrow: '1',
        padding: '16px',
        width: sideTab ? '0' : '',
    }),
});

export type TabContainerProps = {
    className?: string;
    children?: React.ReactNode[] | React.ReactNode;
    titles?: string[];
    sideTab?: boolean;
};

function TabContainer(props: TabContainerProps) {
    const classes = useStyles(props.sideTab ?? false);
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

    const containers = [];
    if (props.children !== undefined) {
        if (Array.isArray(props.children)) {
            for (let i = 0; i < props.children.length; i++) {
                containers.push(
                    <div style={{ display: tab === i ? '' : 'none' }}>
                        {props.children[i]}
                    </div>
                );
            }
        } else {
            containers.push(props.children);
        }
    }

    return (
        <div className={className}>
            <div className={classes.TabContainerTabs}>{tabs}</div>
            <div className={classes.TabContainerBody}>{containers}</div>
        </div>
    );
}

export default TabContainer;
