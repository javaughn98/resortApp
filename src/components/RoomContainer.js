import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import { withRoomConsumer } from '../contex';
import Loading from './Loading';



function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms} = context;
    if(loading) {
        return <Loading />
    }
    return (
        <>
            <RoomsFilter rooms={rooms}></RoomsFilter>
            <RoomsList rooms={sortedRooms}></RoomsList>
        </>
    );
}

export default withRoomConsumer(RoomContainer);






/*import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import {RoomsConsumer} from '../contex';
import Loading from './Loading';

export default function RoomContainer() {
    return (
        <RoomsConsumer>
            {
                value => {
                    const {loading, sortedRooms, rooms} = value
                    if(loaing) {
                        return <Loading />
                    }

                    return (
                        <div>
                            Hello from rooms container
                            <RoomsFilter rooms={rooms}></RoomsFilter>
                            <RoomsList rooms={sortedRooms}></RoomsList>
                        </div>
                    );
                }
            }
        </RoomsConsumer>
       
    );
}
*/