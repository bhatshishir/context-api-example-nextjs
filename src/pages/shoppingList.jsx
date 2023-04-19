"useClient";
import React from "react";
// import Navbar from "@/components/navbar";
import { useContext } from "react";
import { useRef } from "react";
import cartQuantity from "@/components/cartContext";
const Shopping = () => {
  const { items,setItems } = useContext(cartQuantity);
  const ref=useRef(null);
  function handleAdd(){
    setItems([
        ...items,
        {
            id:items.length+1,
            name:ref.current.value,
            count:1
        }
     ] )
     ref.current.value=''
  }
  return (
    <div>
      {/* <Navbar /> */}
      <h2>Welcome to shopping page!</h2>
      <div>
        <input type="text" placeholder="Add item" ref={ref}/>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}
              &nbsp;
              {item.count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shopping;
