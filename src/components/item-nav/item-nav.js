import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { withStyles, useTheme } from '@material-ui/core/styles';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

export default function ItemNav({ className, id }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const editItem = (idx) => {
    console.log(`Edit item ${idx}`);
  };

  const deleteItem = (idx) => {
    console.log(`Delete item ${idx}`);
  };

  const theme = useTheme();
  const isMediaXs = useMediaQuery(theme.breakpoints.up('xs'));

  return (
    <>
      <IconButton
        className={className}
        aria-label="Open menu"
        aria-controls={`card-menu-${id}`}
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        size={isMediaXs ? 'small' : 'medium'}
      >
        <MoreVertIcon/>
      </IconButton>
      <StyledMenu
        id={`card-menu-${id}`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClick={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => editItem(id)}>
          <ListItemIcon><EditIcon fontSize="small"/></ListItemIcon>
          <ListItemText primary="Edit"/>
        </MenuItem>
        <MenuItem onClick={() => deleteItem(id)}>
          <ListItemIcon><DeleteIcon fontSize="small"/></ListItemIcon>
          <ListItemText primary="Delete"/>
        </MenuItem>
      </StyledMenu>
    </>
  );
}
