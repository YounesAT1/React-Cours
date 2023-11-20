export const FETCH_TASKS = "FETCH_TASKS";
export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = " DELETE_TASK";

export const fetchTasks = (tasks) => ({
  type: FETCH_TASKS,
  payload: tasks,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTask = (id, updatedTask) => ({
  type: UPDATE_TASK,
  payload: { id, updatedTask },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
