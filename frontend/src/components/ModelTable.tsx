import axios from 'axios';
import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { DataModelAttributes } from '../dbmodels';
import { clearEditModel, setEditModel } from './EditModelPanel';
import Table from './Table';

let update: (() => void) | undefined = undefined;
export function updateModelTable() {
    if (update !== undefined) {
        clearEditModel();
        update();
    }
}

let selectedId: number | null = null;
export function getSelectedDataModelId() {
    return selectedId;
}

const useStyles = createUseStyles({
    deselect: {
        marginBottom: '12px',
    },
});

function ModelTable() {
    const classes = useStyles();
    const [data, setData] = useState<DataModelAttributes[]>([]);
    const [selection, setSelection] = useState(-1);

    useEffect(() => {
        selectedId = selection;
        if (selectedId !== -1) {
            setEditModel(data.filter((x) => x.id === selectedId)[0]);
        } else {
            clearEditModel();
        }
    }, [selection, data]);

    useEffect(() => {
        let mounted = true;

        // Store update for external call
        update = () => {
            (async () => {
                const response = await axios.get<DataModelAttributes[]>(
                    '/api/datamodel'
                );
                if (mounted) {
                    setSelection(-1);
                    setData(response.data);
                }
            })();
        };
        update();

        return () => {
            update = undefined;
            selectedId = null;
            mounted = false;
        };
    }, []);

    return (
        <div>
            <button
                className={classes.deselect}
                onClick={() => setSelection(-1)}
            >
                Deselect
            </button>
            <Table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                {data.map((dataModel) => (
                    <tr
                        onClick={() => setSelection(dataModel.id)}
                        className={selection === dataModel.id ? 'active' : ''}
                    >
                        <td>{dataModel.id}</td>
                        <td
                            onDoubleClick={() => {
                                alert('hi');
                            }}
                        >
                            {dataModel.name}
                        </td>
                        <td>{dataModel.description}</td>
                    </tr>
                ))}
            </Table>
        </div>
    );
}

export default ModelTable;
