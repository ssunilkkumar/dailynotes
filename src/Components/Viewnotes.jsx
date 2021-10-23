import React from 'react'
import { useSelector } from 'react-redux';
import { Card } from './Card';
import styles from "./View.module.css"


export const Viewnotes = () => {
    const data = useSelector((state) => state.note)

    return (
        <div className={styles.view}>
            <main>My Notes</main>
            {
                data
                .sort((a, b) => {
                    console.log(a.date, a.time, b.date, b.time)
                    const aDate = new Date(a.date + ' ' + a.time)
                    const bDate = new Date(b.date + ' ' + b.time)
                    return bDate.getTime() - aDate.getTime()
                })
                .map(item => (
                    <Card key={item.id} {...item} />
                ))
            }
        </div>
    )
}
