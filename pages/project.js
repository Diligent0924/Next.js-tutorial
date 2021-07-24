import React from 'react';
import Grid from '../src/component/project_grid';
import {Image, Divider} from 'semantic-ui-react'


export default function Project(){
    return(
        <div>
            <Grid visible = 'https://react.semantic-ui.com/images/wireframe/square-image.png' hidden = 'https://react.semantic-ui.com/images/avatar/large/ade.jpg' percent = '20'
             text = '1. This is '/>
            <Divider />
            <Grid visible = 'https://react.semantic-ui.com/images/wireframe/square-image.png' hidden = 'https://react.semantic-ui.com/images/avatar/large/ade.jpg' percent = '10'
             text = 'ddd'/>
            <Divider />
            <Grid visible = 'https://react.semantic-ui.com/images/wireframe/square-image.png' hidden = 'https://react.semantic-ui.com/images/avatar/large/ade.jpg' percent = '8'
             text = 'ddd'/>
        </div>
    )
}