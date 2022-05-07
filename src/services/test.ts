import { TodoListT } from "./../store/reducers/TodoListPageReducer";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setError } from "../store/actions/errorMessagesActions";
import { uuid } from "../utils/uuid";

export const addTodo = async (text: string) => {
  const db = getFirestore();
  // const dispatch = useDispatch();
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
    //   dispatch(setError(e?.message));
  }
};
