import { Request, Response } from 'express';
import { DataModel } from '../models';
import { DataModelAttributes } from '../models/datamodel';

export function create(
    req: Request<{}, {}, Partial<DataModelAttributes>>,
    res: Response
) {
    const { name, description } = req.body;
    if (name === undefined) {
        res.status(400).send('name should not be undefined.');
        return;
    }
    DataModel.create({
        name,
        description,
    })
        .then((dataModel) => {
            res.send({
                id: dataModel.id,
                name: dataModel.name,
                description: dataModel.description,
            });
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}

export function getAll(req: Request, res: Response) {
    DataModel.findAll()
        .then((dataModels) => {
            res.send(
                dataModels.map((dataModel) => ({
                    id: dataModel.id,
                    name: dataModel.name,
                    description: dataModel.description,
                }))
            );
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}

export function get(req: Request<{ id?: string }>, res: Response) {
    const { id } = req.params;
    if (id === undefined) {
        res.status(400).send('id should not be undefined.');
        return;
    }
    const idNumber = parseInt(id);
    if (isNaN(idNumber)) {
        res.status(400).send('id should be a number.');
        return;
    }
    DataModel.findAll({ where: { id: idNumber } })
        .then((dataModels) => {
            res.send(
                dataModels.map((dataModel) => ({
                    id: dataModel.id,
                    name: dataModel.name,
                    description: dataModel.description,
                }))
            );
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}

export function remove(req: Request<{ id?: string }>, res: Response) {
    const { id } = req.params;
    if (id === undefined) {
        res.status(400).send('id should not be null.');
    }
    DataModel.destroy({ where: { id: id } })
        .then(() => res.send())
        .catch((err) => {
            res.status(500).send(err.message);
        });
}

export function update(
    req: Request<{ id?: string }, {}, Partial<DataModelAttributes>>,
    res: Response
) {
    const { id } = req.params;
    if (id === undefined) {
        res.status(400).send('id should not be undefined.');
        return;
    }
    const { name, description } = req.body;
    DataModel.update({ name, description }, { where: { id } })
        .then((num) => {
            if (num[0] > 0) {
                res.send();
            } else {
                res.status(500).send('No data updated.');
            }
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}
