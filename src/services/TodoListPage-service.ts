import { useDispatch } from "react-redux";
import { collection, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { setError } from "../store/actions/errorMessagesActions";
import { setTodos } from "../store/actions/todoListPageActions";
import { TodoListT } from "../store/reducers/TodoListPageReducer";
import { firebase, firebaseDatabase, firestoreDb } from "../utils/firebase";
import { uuid } from "../utils/uuid";

export class TodoListService {
  private dispatch = useDispatch();
  private db = firebaseDatabase.collection("todos").orderBy("event_date");
  private firebaseDB: any = null;

  public loadTodoList(): void {
    let todoList: Array<TodoListT | any> = [];

    this.firebaseDB = this.db.onSnapshot((collection) => {
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

  public async addTodo(text: string, event_date: number) {
    const todoId: string = uuid(16);

    const payload: TodoListT = {
      id: todoId,
      text,
      isCompleted: false,
      event_date,
    };

    const collectionRef = collection(firestoreDb, "todos");

    try {
      await addDoc(collectionRef, payload);
    } catch (e: any) {
      this.dispatch(setError(e?.message));
    }
    firebase.database().ref().off();
  }

  public closeFirebaseConnection(): void {
    firebase.database().ref().off();
    if (!!this.firebaseDB) this.firebaseDB();
  }

  public async deleteTodo(id: string) {
    console.log("id", id);

    await deleteDoc(doc(firebaseDatabase, "todos", id));
  }

  public async setTodoCompletion(
    id: string,
    text: string,
    isCompleted: boolean,
    event_date: number
  ) {
    const documentRef = doc(firestoreDb, "todos", id);
    const payload: TodoListT = { id, text, isCompleted, event_date };
    setDoc(documentRef, payload);
  }
}
