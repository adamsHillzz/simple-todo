import { ITask } from "../../tasks";

interface ITodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<ITodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.text}</td>
              <td>some</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
