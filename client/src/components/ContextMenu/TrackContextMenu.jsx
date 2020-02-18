import React from 'react';
import { Menu, Item, Separator } from 'react-contexify';

const TrackContextMenu = () => (
  <Menu id="trackMenu">
    <Item>add track</Item>
    <Item>add clip</Item>
    <Separator />
    <Item>remove track</Item>
    <Item>remove clip</Item>
  </Menu>
);

export default TrackContextMenu;
