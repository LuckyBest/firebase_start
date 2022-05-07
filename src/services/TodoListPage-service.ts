import { useDispatch } from "react-redux";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { setError } from "../store/actions/errorMessagesActions";
import { setTodos } from "../store/actions/todoListPageActions";
import { TodoListT } from "../store/reducers/TodoListPageReducer";
import { firebase, firebaseDatabase } from "../utils/firebase";
import { uuid } from "../utils/uuid";

export class TodoListService {
  private dispatch = useDispatch();
  private db = firebaseDatabase.collection("todos").orderBy("event_date");
  private firestoreDB: any = null;

  public loadTodoList(): void {
    let todoList: Array<TodoListT | any> = [];

    this.firestoreDB = this.db.onSnapshot((collection) => {
      collection.forEach((document) => {
        todoList.push(document.data());
      });

      if (todoList.length > 0) {
        this.dispatch(setTodos(todoList));

        todoList = [];
      } else {
        this.dispatch(setError("There is not any todos..."));
      }
    });
  }

  public async addTodo(text: string) {
    const db = getFirestore();

    const todoId: string = uuid(16);

    const payload: TodoListT = {
      id: todoId,
      text,
      isCompleted: false,
      event_date: Date.now(),
    };

    const collectionRef = collection(db, "todos");

    try {
      await addDoc(collectionRef, payload);
    } catch (e: any) {
      this.dispatch(setError(e?.message));
    }
    firebase.database().ref().off();
  }

  public closeFirebaseConnection(): void {
    firebase.database().ref().off();
    if (!!this.firestoreDB) this.firestoreDB();
  }
}
