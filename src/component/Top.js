import React from 'react'
import { Header, Icon, Button } from 'semantic-ui-react'
import Navigation from "./Navigation"

export default function Top(){
    return(
    <div>
        <div style={{textAlign:'center'}}>
            <Header as='h2' icon>
                <Icon/>
                    LAW Previous Problems
                <Header.Subheader>
                    당신의 법학 능력을 키워줄 간단한 문제풀이 사이트입니다.
                </Header.Subheader>
            </Header>
            <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
        </div>
        <Navigation />
    </div>
    )
}