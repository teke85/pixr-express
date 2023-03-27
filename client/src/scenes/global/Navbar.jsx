import { useDispatch, useSelector } from 'react-redux';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { shades } from '../../theme';
import React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/icons-material/Badge';
import IconButton from '@material-ui/core/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutline from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import { setIsCartOpen } from '../../state';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Box className="Box">
      <Box className="Box-inner">
        <Box
          className="logo"
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' } }}
          color={shades.secondary[500]}
        >
          PIXREXPRESS
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: 'black' }}>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton sx={{ color: 'black' }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length}
            sx={{
              '& .MuiBadge-badge': {
                right: 5,
                top: 5,
                padding: '0 4px',
                height: '14px',
                minWidth: '13px',
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: 'black' }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: 'black' }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
