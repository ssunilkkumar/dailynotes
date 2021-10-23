import moment from 'moment'
import React from 'react'
import styles from "./Card.module.css"

export const Card = ({id, title, date, body,time}) => {
    console.log(title, body)
    return (
        <div className={styles.card}>
            <div className={styles.flex}>
                <main>
                    <div>Title:</div>
                    <div>{title}</div>
                </main>
                <main>
                    <div>Date:</div>
                    <div>{moment(date).format('Do MMM YYYY')}</div>
                </main>
            </div>
            <div className={styles.body}>
                <main>Content:</main>
                <div>{body}</div>
            </div>
        </div>
    )
}
