import { useDispatch } from "react-redux";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { setError } from "../store/actions/errorMessagesActions";
import {
  setTodoLoaderActivity,
  setTodos,
} from "../store/actions/todoListPageActions";
import { TodoListT } from "../store/reducers/TodoListPageReducer";
import { firebase, firebaseDatabase, firestoreDb } from "../utils/firebase";
import { uuid } from "../utils/uuid";

export class TodoListService {
  private dispatch = useDispatch();
  private db = firebaseDatabase.collection("todos").orderBy("event_date");
  private firebaseDB: any = null;

  public loadTodoList(): void {
    let todoList: Array<TodoListT | any> = [];
    this.dispatch(setTodoLoaderActivity(true));

    this.firebaseDB = this.db.onSnapshot((collection) => {
      collection.forEach((document) => {
        todoList.push(document.data());
      });
      if (todoList.length > 0) {
        this.dispatch(setTodos(todoList));
        todoList = [];
      } else {
        this.dispatch(setError("There is not any todos..."));
        this.dispatch(setTodos(todoList));
      }

      this.dispatch(setTodoLoaderActivity(false));
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

  public async deleteTodo(id: string) {
    const collectionRef = collection(firestoreDb, "todos");
    const queryData = query(collectionRef, where("id", "==", id));
    const snapShot = await getDocs(queryData);
    const results = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    results.forEach(async (result) => {
      const resultRef = doc(firestoreDb, "todos", result.id);
      await deleteDoc(resultRef);
    });
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

  public closeFirebaseConnection(): void {
    firebase.database().ref().off();
    if (!!this.firebaseDB) this.firebaseDB();
  }
}
