import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title="get in" subtitle="touch" />
            <div className={styles.center}>
                <form className={styles.form} action="https://formspree.io/mrikeorl@gmail.com" method="POST">
                <div>
                    <input type="text" name="name" id="name" className={styles.formControl} placeholder="Name"/>
                </div>
                <div>
                    <input type="email" name="email" id="email" className={styles.formControl} placeholder="Email"/>
                </div>
                <div>
                    <textarea name="message" id="message" rows="10" className={styles.formControl} placeholder="Your message" />

                </div>
                <div>
                    <input type="submit" value="Submit" className={styles.submit}/>
                </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
