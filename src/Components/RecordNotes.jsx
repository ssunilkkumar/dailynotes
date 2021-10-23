import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Moment from 'react-moment';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import {v4 as uuid} from "uuid"
import { addNoteSuccess } from '../redux/todo/action';



export const RecordNotes = () => {
    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();

   

    const handleAdd = () => {
        const payload = {
            id: uuid(),
            title: title,
            body: body,
            date
        }
        const addAction= addNoteSuccess(payload)
        dispatch(addAction)
        //setTitle("")
        //setBody("")
    }

    return (
        <div>
            <Calendar
                onChange={setDate}
                value={date}
                minDate={new Date()}
            />
            <div>{moment(date).format("Do MMM YYYY")}</div>
            <Moment format="Do MMM YYYY">{date}</Moment> 
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input 
                type="text" 
                value={body} 
                onChange={(e) => setBody(e.target.value)}
                placeholder="Body"
            />
            <input onClick={handleAdd} type="submit" value="Submit" />     
        </div>
    )
}
