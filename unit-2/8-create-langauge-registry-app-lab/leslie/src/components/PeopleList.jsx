import React, { useEffect } from "react";
import styles from "./App.module.css";
import AddPeople from "./AddPeople";
import { useAddPerson, useDeletePerson, usePeopleListData, useUpdatePerson } from "../services/dataService";
import PeopleCard from "./PeopleCard";

const PeopleList = () => {
  const [peopleList, setPeopleList] = usePeopleListData();
  const addPerson = useAddPerson();
  const deletePerson = useDeletePerson();
  const updatePerson = useUpdatePerson();

  useEffect(() => {
    setPeopleList();
  }, [addPerson.isAdded, deletePerson.isDeleted, updatePerson.isUpdated]);

  const softCheckIfPersonExist = (newPerson) => {
    switch (true) {
      case !newPerson.name:
        return "Name is required.";
      case peopleList.some(
        (person) =>
          person.name === newPerson.name &&
          `${person.age}` === `${newPerson.age}` &&
          person.country === newPerson.country,
      ):
        return "Person with exact details already exist.";
    }
    return "";
  };

  const handleAdd = (newPerson) => {
    addPerson.addDataRequest(newPerson);
  };

  const handleDelete = (personId) => {
    deletePerson.deleteDataRequest(personId);
  };

  const handleUpdate = (updateData) => {
    updatePerson.patchDataRequest(updateData);
  };

  return (
    <div className="row">
      <h2>Current Users</h2>
      <div className={`row ${styles.listing}`}>
        {peopleList.map((person, idx) => (
          <PeopleCard
            id={person.id}
            name={person.name}
            age={person.age}
            country={person.country}
            key={idx}
            handleDelete={handleDelete}
            check={softCheckIfPersonExist}
            handleUpdate={handleUpdate}
          />
        ))}
        <AddPeople handleAdd={handleAdd} check={softCheckIfPersonExist} />
      </div>
    </div>
  );
};

export default PeopleList;
