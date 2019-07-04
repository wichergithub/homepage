import React from 'react'
import Title from "../Title"
import styles from "../../css/services.module.css"
import services from "../../constants/services"

const Services = () => {
    return (
        <section className={styles.services}>
            <Title title="Why" subtitle="me?" />
            <h4>What do I bring to the table except my coding skills that makes me stand out?</h4>
                <div className={styles.center}>
                    {services.map((item, index) => {
                        return (
                            <article key={index} className={styles.service}>
                                <span>{item.icon} </span>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </article>
                        )
                    })}

                </div>
            
        </section>
    )
}

export default Services
