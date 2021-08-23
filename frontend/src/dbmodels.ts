export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface DataModelAttributes {
    id: number;
    name: string;
    description?: string;
}

export interface DataModelCreationAttributes
    extends Optional<DataModelAttributes, 'id'> {}

export interface DataModelColumnAttributes {
    dataModelId: number;
    name: string;
    type: string;
}
