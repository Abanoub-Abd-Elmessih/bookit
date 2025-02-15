import { Heading, RoomCard } from "@/components";
import rooms from "@/data/rooms.json";
import React from "react";

const Home = () => {
  return (
    <>
      <Heading title={"Available Rooms"} />
      {rooms.length > 0 ? (
        rooms.map((room, index) => (
          <React.Fragment key={index}>
            <RoomCard room={room} />
          </React.Fragment>
        ))
      ) : (
        <p>No Rooms available at the moment</p>
      )}
    </>
  );
};
export default Home;
