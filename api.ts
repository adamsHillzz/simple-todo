import { ITask } from "./tasks";

export default class ApiController {
    _baseUrl:string = "http://localhost:3001";

    async getAllTodos():Promise<ITask[]> {    
        const res = await fetch(`${this._baseUrl}/tasks`, {cache: "no-store"});
        const todos = res.json();
        return todos; 
    }
}

