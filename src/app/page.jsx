import { Heading, RoomCard } from "@/components";
import React from "react";
import getAllRooms from "./actions/getAllRooms";

export default async function Home() {
  const rooms = await getAllRooms();
  return (
    <>
      <Heading title={"Available Rooms"} />
      {Array.isArray(rooms) && rooms.length > 0 ? (
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
}
