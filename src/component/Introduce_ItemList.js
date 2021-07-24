import React from 'react';
import { List } from 'semantic-ui-react'


export default function Introduce_ItemList(props){
    return(
        <List>
            <List.Item>
                <List.Content>
                    <List.Header>{props.List}</List.Header>
                    <List.Description>{props.List_description}</List.Description>
                </List.Content>
            </List.Item>
        </List>
    )
}