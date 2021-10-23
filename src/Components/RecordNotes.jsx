import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import {v4 as uuid} from "uuid"
import { addNoteSuccess } from '../redux/todo/action';
import styles from "./Record.module.css"

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
            date: moment(date).format("MM/DD/YYYY"),
            time: moment(new Date()).format("h:mm:ss A")
        }
        const addAction= addNoteSuccess(payload)
        dispatch(addAction)
        setTitle("")
        setBody("")
        setDate(new Date())
    }

    return (
        <div className={styles.sidebar}>
            <main>
                <h3>Select date from Calendar</h3>
                <Calendar
                    onChange={setDate}
                    value={date}
                    minDate={new Date()}
                />
            </main>
            <div className={styles.body}>
                <main>
                    <div>Date: </div>
                    <div>{moment(date).format("Do MMM YYYY")}</div>
                </main>
                <main>Title:</main>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <main>Content:</main>
                <textarea 
                    type="text" 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Body"
                    rows="4" 
                    cols="50"
                />
                <button onClick={handleAdd}>Submit</button>    
            </div>     
        </div>
    )
}
