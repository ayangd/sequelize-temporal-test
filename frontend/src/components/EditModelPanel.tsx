import axios from 'axios';
import { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { DataModelAttributes } from '../dbmodels';
import { getSelectedDataModelId, updateModelTable } from './ModelTable';
import PanelCaption from './panel/Caption';
import PanelContainer from './panel/Container';
import PanelTitle from './panel/Title';

let setmodel: ((model: DataModelAttributes) => void) | undefined = undefined;
export function setEditModel(model: DataModelAttributes) {
    setmodel?.(model);
}

let clearmodel: (() => void) | undefined = undefined;
export function clearEditModel() {
    clearmodel?.();
}

const useStyles = createUseStyles({
    EditModelPanel: {
        width: '100%',
        gap: '8px',
    },
});

function EditModelPanel() {
    const classes = useStyles();
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        let mounted = true;
        setmodel = (model: DataModelAttributes) => {
            if (mounted) {
                setId(model.id.toString());
                setName(model.name);
                setDescription(model.description ?? '');
            }
        };
        clearmodel = () => {
            if (mounted) {
                setId('');
                setName('');
                setDescription('');
            }
        };
        return () => {
            setmodel = undefined;
            clearmodel = undefined;
            mounted = false;
        };
    }, []);

    const editDataModel = () => {
        if (id.length !== 0) {
            (async () => {
                const response = await axios.put(`/api/datamodel/${id}`, {
                    name,
                    description,
                });
                if (response.status === 200) {
                    updateModelTable();
                }
            })();
        }
    };

    const deleteDataModel = () => {
        const selected = getSelectedDataModelId();
        if (selected === null || selected === -1) {
            return;
        }
        (async () => {
            const response = await axios.delete(`/api/datamodel/${selected}`);
            if (response.status === 200) {
                updateModelTable();
            }
        })();
    };

    return (
        <PanelContainer className={classes.EditModelPanel}>
            <PanelTitle text="Edit Model" />
            <PanelCaption text="Id" />
            <input type="text" value={id} readOnly />
            <PanelCaption text="Name" />
            <input
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                type="text"
            />
            <PanelCaption text="Description" />
            <textarea
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                style={{ resize: 'none' }}
            />
            <button onClick={editDataModel}>Save Model</button>
            <button onClick={deleteDataModel}>Delete Model</button>
        </PanelContainer>
    );
}

export default EditModelPanel;
