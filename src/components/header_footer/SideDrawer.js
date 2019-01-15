import React from 'react';
import {scroller} from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    const scrollToElement = (element)=>{
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth:true,
            offset:-150//adjust the distance of the scroll animation
        });
        props.onClose(false)//after scrolling, close the sidedrawer
    }
    return (
        <Drawer
            anchor="right"
            open={props.open}//open the sidedrawer
            onClose={()=> props.onClose(false)}//close the sidedrawer
        >
            <List component="nav">
                <ListItem button onClick={()=> scrollToElement('featured')}>
                    Event starts in
                </ListItem>
                <ListItem button onClick={()=> scrollToElement('venuenfo')}>
                    Venue NFO
                </ListItem>
                <ListItem button onClick={()=> scrollToElement('highlights')}>
                    Hightlights
                </ListItem>
                <ListItem button onClick={()=> scrollToElement('pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={()=> scrollToElement('location')}>
                    Location
                </ListItem>

            </List>
        </Drawer>
    );
};

export default SideDrawer;