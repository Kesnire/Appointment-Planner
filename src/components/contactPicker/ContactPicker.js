import React from "react";

export const ContactPicker = ({contacts, setContact}) => {
  return (
    <select onChange={(e)=>{setContact(e.target.value)}} required>
      <option value='no one' key='default' selected='selected'>----</option>
      {contacts.map((element, index) =>{
        return <option value={element.name} key='index'>{element.name}</option>
      })}
    </select>
  );
};
