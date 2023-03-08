export type TasksType = {
    _id?: string, 
    item: string,
    completed: boolean
}

export interface IResponseFunc {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
}