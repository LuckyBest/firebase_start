import { useDispatch } from "react-redux";
import { setError } from "../store/actions/errorMessagesActions";
import { setTodos } from "../store/actions/todoListPageActions";
import { TodoListT } from "../store/reducers/TodoListPageReducer";
import { firebase } from "../utils/firebase";

export class TodoListService {
  private dispatch = useDispatch();
  private db = firebase.firestore().collection("todos");

  public loadTodoList(): void {
    const todoList: Array<TodoListT | any> = [];

    this.db.onSnapshot((collection) => {
      collection.forEach((document) => {
        todoList.push({ ...document.data() });
      });

      if (todoList.length > 0) {
        this.dispatch(setTodos(todoList));
      } else {
        this.dispatch(setError("There is not any todos..."));
      }
    });
  }

  public async addTodo() {}
}
