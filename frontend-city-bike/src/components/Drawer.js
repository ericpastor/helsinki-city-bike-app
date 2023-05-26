import React, { useState } from 'react'

import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { StyledLink } from '../styledComponents/StyledLink'

function DrawerComponent () {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <StyledLink to='/'>Home</StyledLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <StyledLink to='/trips'>Trips</StyledLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <StyledLink to='/stations'>Stations</StyledLink>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <StyledLink to='/stations'>Stations</StyledLink>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  )
}
export default DrawerComponent
