import React, { useState } from "react";
import styles from "./App.module.css";
import EditPeople from "./EditPeople";

const PeopleCard = (props) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = () => {
    props.handleDelete(props.id);
    setIsDelete(false);
  };

  const handleEnableEdit = () => {
    setIsEdit(true);
  };

  const handleUpdate = (updateData) => {
    setIsEdit(false);
    props.handleUpdate(updateData);
  };

  return (
    <div className={styles.card}>
      {isEdit ? (
        <EditPeople
          id={props.id}
          name={props.name}
          age={props.age}
          country={props.country}
          check={props.check}
          handleUpdate={handleUpdate}
          handleCancel={() => setIsEdit(false)}
        />
      ) : (
        <>
          <div className={styles.title}>{props.name}</div>
          <div className={styles.sub}>{`Age: ${props.age}`}</div>
          <div className={styles.sub}>{`Country: ${props.country}`}</div>
          <div className={styles.actions}>
            {!isDelete ? (
              <>
                <div>Actions: </div>
                <button onClick={handleEnableEdit}>EDIT</button>
                <button onClick={() => setIsDelete(true)}>DELETE</button>
              </>
            ) : (
              <>
                <div>Delete?</div>
                <button onClick={handleDelete}>CONFIRM</button>
                <button onClick={() => setIsDelete(false)}>CANCEL</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PeopleCard;
