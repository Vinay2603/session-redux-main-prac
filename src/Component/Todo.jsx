import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/Todo/action";

export const Todo = () => {
  const [text, setText] = useState("");
  const Todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()
  return (
    <>
      <h1>Todo </h1>
      <input value={text} type="text"
      onChange={(e)=>setText(e.target.value)}   
         placeholder="Enter Tasks" />
      <button
       onClick={()=>{
         dispatch(addTodo(text))
       }}
       > ADD</button>
      {Todos.map((e)=>(<div>{e}</div>))}
    </>
  );
};
