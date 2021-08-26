import "./NewExpanse.css";

import ExpanseForm from "./ExpanseForm";
import { useState } from "react";

function NewExpanse(props) {
  const [isEditing, setIsEditing] = useState(false);
  function getNewExpanseHandler(passedData) {
    const expanseData = {
      ...passedData,
      id: Math.random().toString(),
    };
    props.onAddNewExpanse(expanseData);
    setIsEditing(false);
  }
  function isEditingHandler(){
      setIsEditing(true)
  }
  function isEditingCancelHandler(){
      setIsEditing(false)
  }
  return (
    <div className="new-expanse">
        {!isEditing &&
        <button onClick={isEditingHandler}>Add New Expanse</button>}
      {isEditing && <ExpanseForm onCancel={isEditingCancelHandler} onGetNewExpanse={getNewExpanseHandler} />
      }
    </div>
  );
}

export default NewExpanse;
