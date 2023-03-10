import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({contacts,title,setTitle,contact,setContact,date,setDate,time,setTime,handleSubmit}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
        <input type='text' value={title} onChange={(e) =>{setTitle(e.target.value)}} required />
      <label>Contact</label>
        <ContactPicker contacts={contacts} setContact={setContact} />
      <label>Date</label>
        <input type='date' value={date} min={getTodayString()} onChange={(e) =>{setDate(e.target.value)}} required />
      <label>Time</label>
        <input type='time' value={time} onChange={(e) =>{setTime(e.target.value)}} required />
        <input type='submit' value='Create Appointment'/>
    </form>
  );
};
