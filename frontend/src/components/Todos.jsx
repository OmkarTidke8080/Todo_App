// todos = [
//   {
//     title:"got to gym",
//     description: "go to gym"
//   }
// ]

export function Todos({todos}) {
  return (
    <>
      {/* <h1>Go to Gym</h1>
      <h2>You need to go to gym</h2>
      <button>Mark as Completed</button> */}

      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed === true ? "completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Todos;
