import { useState } from "react";
import api from "../../api/api";
const Reservations = () => {
const[room,setRoom] = useState('');
const[date,setDate] = useState('');
const [timeSlot,setTimeSlot] = useState('');
const handleRoom = (e) => setRoom(e.target.value);
const handleDate = (e) => setDate(e.target.value);
const handleTimeSlot = (e) => setTimeSlot(e.target.value);
const handleSubmit = async (e) => {
    e.preventDefault();

}
return(
    <form onSubmit={handleSubmit}>
         <label className="ml-2" htmlFor="roomId">Room:
        <input className="border border-solid border-black ml-5 my-2" id="roomId" type="text" value={room} onChange={handleRoom}/>
        </label>
         <label className="ml-2" htmlFor="date">Date:
        <input className="border border-solid border-black ml-5 my-2" id="date" type="text" value={date} onChange={handleDate}/>
        </label>
         <label className="ml-2" htmlFor="timeslot">Timeslot:
        <input className="border border-solid border-black ml-5 my-2" id="timeslot" type="text" value={timeSlot} onChange={handleTimeSlot}/>
        </label>


    </form>
)
}

export default Reservations;