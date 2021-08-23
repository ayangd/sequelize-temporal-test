import axios from 'axios';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { DataModelAttributes } from '../dbmodels';
import { getSelectedDataModelId, updateModelTable } from './ModelTable';
import PanelCaption from './panel/Caption';
import PanelContainer from './panel/Container';
import PanelTitle from './panel/Title';

const useStyles = createUseStyles({
    AddModelPanel: {
        width: '100%',
        gap: '8px',
    },
});

function AddModelPanel() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const addDataModel = () => {
        (async () => {
            const response = await axios.post<DataModelAttributes>(
                '/api/datamodel',
                {
                    name,
                    description,
                }
            );
            if (response.status === 200) {
                updateModelTable();
                setName('');
                setDescription('');
            }
        })();
    };

    return (
        <PanelContainer className={classes.AddModelPanel}>
            <PanelTitle text="Add Model" />
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
            <button onClick={addDataModel}>Add Model</button>
        </PanelContainer>
    );
}

export default AddModelPanel;
