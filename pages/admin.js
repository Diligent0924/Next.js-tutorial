import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Admin(){
/*     function signUp(){
        window.open("signup.js","회원가입","width=400, height=300, left=100, top=50")
        }
 */
    const router = useRouter();
    function login(){
        axios.post('/api/isLogin',{ID: "Park"})
        .then(response => {
            console.log(response.data.ID);
        }).catch((Error) => {
            console.log(Error);
        })
    }

    return(
    <div style={{padding:"100px 0", textAlign:"center"}}>
        <Form action="" method="POST" style={{display:"inline-block"}}>
            <Form.Field>
            <label>ID</label>
            <input placeholder='ID' />
            </Form.Field>
            <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
            </Form.Field>
        </Form>
        <div style={{padding:"30px 0"}}>
                <Button onClick={login}>로그인</Button>
                <Button secondary>회원가입</Button>
        </div>
    </div>
    )
}