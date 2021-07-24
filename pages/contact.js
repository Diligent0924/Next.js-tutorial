import styles from '../pages/css/contact.module.css'
import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import router, { useRouter } from "next/router";

export default function Contact(){
    return(
        <div className={styles.contact}>
            <h1 className={styles.h1}>Get in Touch</h1><br/>
            <h3> If you wanna get in touch, Please talk to me whatever you want </h3>
            <h3>fill up the awesome form below or send an email to www.naver.com and ~let's talk.</h3>

            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Name' placeholder='Please answer your name' />
                    <Form.Input fluid label='E-mail' placeholder='Please answer your E-mail' />
                </Form.Group>
                <Form.TextArea label='context' placeholder='Tell us more about you...' />
                <Form.Checkbox label='I agree to send this comment' />
                <Form.Button onClick={() => router.push("/")}>Submit</Form.Button>
            </Form>
        </div>
    )
}