const TodoList = () => {
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
          <tr>
            <td>Cy Ganderton</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
