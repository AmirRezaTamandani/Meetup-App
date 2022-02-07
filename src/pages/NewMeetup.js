import { useNavigate } from "react-router-dom";
import React from "react";
import NewMeetupForm from "../components/NewMeetupForm";
function NewMeetupPage() {
  const newNavigation = useNavigate();
  function addMeetupHandler(meetupdata) {
    fetch("http://localhost:5500/newmeetup", {
      method: "POST",
      body: JSON.stringify(meetupdata),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      console.log(newNavigation);
      newNavigation("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
