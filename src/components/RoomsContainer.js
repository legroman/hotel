import React from "react";
import RoomFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import {withRoomConsumer} from "../Context";
import Loading from "./Loading";

function RoomsContainer({context}) {
    const {loading, sortedRooms, rooms} = context;
    if (loading) {
        return <Loading/>
    }
    return (
        <div>
            <RoomFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
}

export default withRoomConsumer(RoomsContainer);

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value;
//                     if (loading) {
//                         return <Loading/>
//                     }
//                     return (
//                         <div>
//                             Hello from rooms container
//                             <RoomFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }