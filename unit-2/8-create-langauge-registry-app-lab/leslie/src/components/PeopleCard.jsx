import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import EditPeople from "./EditPeople";
import { usePersonLanguageListData } from "../services/dataService";
import AddPersonLanguage from "./AddPersonLanguage";

const PeopleCard = (props) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [personLanguageList, setPersonLanguageList] = usePersonLanguageListData();
  const [isAddLanguage, setIsAddLanguage] = useState(false);
  const [isDeleteLanguage, setIsDeleteLanguage] = useState(false);

  useEffect(() => {
    setPersonLanguageList(props.id);
  }, [isAddLanguage]);

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

  const handleAddLanguage = (newLanguage) => {
    setIsAddLanguage(false);
    props.handleAddLanguage(props.id, newLanguage);
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
                <div>Profile Actions:</div>
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
          <div className={styles.break}></div>
          <div className={styles.sub}>Known Languages:</div>
          <>
            {personLanguageList.map((language, idx) => (
              <div className={styles.sub} key={idx}>{`${idx + 1}. ${language}`}</div>
            ))}
          </>
          <div className={styles.actions}>
            {isAddLanguage && (
              <>
                <div>Add?</div>
                <AddPersonLanguage
                  languageList={props.languageList}
                  personLanguageList={personLanguageList}
                  handleAdd={handleAddLanguage}
                  handleCancel={() => setIsAddLanguage(false)}
                />
              </>
            )}
            {!isAddLanguage && !isDeleteLanguage && (
              <>
                <div>Language Actions:</div>
                <button onClick={() => setIsAddLanguage(true)}>ADD</button>
                <button>REMOVE</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PeopleCard;
