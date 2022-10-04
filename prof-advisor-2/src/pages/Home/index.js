import "./style.css"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

export function HomePage() {
    return (
        <div>
        <h1 className="title">Prof Advisor</h1>
        <h2 className="title">Judge your Prof</h2>
        <div className="full-content">
        <List>
            {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary="Prof. Alessandro Merola" />
            </ListItemButton>
          </ListItem>
        );
      })}
        </List>
        </div>
    </div>
    )
}