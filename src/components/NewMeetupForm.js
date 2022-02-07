import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../UI/Card";
function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlfor="title" className={classes.label}>
            Meetup title
          </label>
          <input
            type="text"
            className={classes.input}
            required
            id="title"
            ref={titleInputRef}
          />
        </div>

        <div className={classes.contorl}>
          <label htmlfor="image" className={classes.label}>
            Image
          </label>
          <input
            type="url"
            className={classes.input}
            required
            id="image"
            ref={imageInputRef}
          />
        </div>

        <div className={classes.contorl}>
          <label htmlfor="address" className={classes.label}>
            Address
          </label>
          <input
            type="text"
            className={classes.input}
            required
            id="address"
            ref={addressInputRef}
          />
        </div>

        <div className={classes.contorl}>
          <label htmlfor="description" className={classes.label}>
            Meetup title
          </label>
          <textarea
            className={classes.textarea}
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Add ze data</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
