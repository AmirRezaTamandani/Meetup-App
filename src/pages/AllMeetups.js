import { useState, useEffect } from "react";
import MeetupList from "../components/MeetupList";
// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "NARUTO",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfDGGdpycsDfVYOfwPTpwvCNxKdtImn9kUg&usqp=CAU",
//     address: "konaha vilage",
//     description:
//       "an imageneri story of betrayls and kids that can quit lovin nor hatin",
//   },
//   {
//     id: "m2",
//     title: "STEINS;GATE",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1R9bb4dcwSj7IrUvGfxlof2e5j8Bshgak7w&usqp=CAU",
//     address: "Somwhere in tokyo",
//     description:
//       "a compelling story of a virgin doc that stays virgin untill very end and end up ploting to bang an ai or the GIRL duplication in another universe",
//   },
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5500/getall")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
          setLoadedMeetups(meetups);
        }

        setIsLoading(false);
        setLoadedMeetups(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ze data , plz have paations</p>
      </section>
    );
  }

  return (
    <section>
      <div>All Meet Ups : </div>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
export default AllMeetupsPage;
