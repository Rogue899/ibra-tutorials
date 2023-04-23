import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
    Box,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Tooltip,
    Typography,
} from '@mui/material';
import { FilterList as FilterListIcon, FilterListOff as FilterListOffIcon, Sort as SortIcon } from '@mui/icons-material';
import SearchField from '../common/SearchField';

function FilterPanelHeading({ open, handleDrawer, results }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openSort = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
            <Stack direction="row" alignItems="center" spacing={1} width="95%">
                <Tooltip title="Filter">
                    <IconButton
                        onClick={handleDrawer}
                        color="primary"
                        className={classes.iconButton}
                        aria-label="filter"
                        size="large"
                        >
                        {open ? <FilterListOffIcon fontSize="inherit" /> : <FilterListIcon fontSize="inherit" />}
                    </IconButton>
                </Tooltip>
                <>
                    <Tooltip title="Sort">
                        <IconButton
                            color="primary"
                            className={classes.iconButton}
                            aria-label="sort"
                            size="large"
                            onClick={handleClick}
                            >
                            <SortIcon fontSize="inherit" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openSort}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        >
                        <MenuItem onClick={handleClose}>Most popular</MenuItem>
                        <MenuItem onClick={handleClose}>Highest Rated</MenuItem>
                        <MenuItem onClick={handleClose}>Newest</MenuItem>
                    </Menu>
                </>
                <Box sx={{ width: '100%' }}>
                    <SearchField />
                </Box>
            </Stack>
            <Box sx={{ width: '5%' }}>
                <Typography variant="body1">{results} Results</Typography>
            </Box>
                        </div>
        </div>
    );
}

FilterPanelHeading.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawer: PropTypes.func.isRequired,
};

export default memo(FilterPanelHeading);

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        minHeight: 64,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
    },
    container:{
        display: 'flex',
        alignItems: 'center',
        padding: '0px 10px',
        width: '100%',
    }
}));
