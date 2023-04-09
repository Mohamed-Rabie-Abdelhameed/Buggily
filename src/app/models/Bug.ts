export class Bug{
    id?: string;
    title!: string;
    description!: string;
    status!: string;
    createdDate!: Date;
    assignedTo!: string;
    resolvedDate!: Date;
}