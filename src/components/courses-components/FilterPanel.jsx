import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Ratings from '../common/Ratings';

function FilterPanel({ open }) {
    const classes = useStyles();
    const filterOptionsArray = ['Ratings', 'Video duration', 'Topic', 'Level', 'Price'];
    const [expanded, setExpanded] = useState(["panel0"]);

    const in_array = (array, value) => {
        return array.indexOf(value) > -1;
    }
    const handleAccordionChange = (panel) => {
        let new_expanded = [...expanded]
        if (new_expanded.indexOf(panel) !== -1) {
            new_expanded.splice(new_expanded.indexOf(panel), 1)
        } else {
            new_expanded.push(panel);
        };
        setExpanded(new_expanded);
    };

    const accordionDetails = (mode) => {
        switch (mode) {
            case 0:
                return (
                    <>
                        <Ratings />
                    </>
                )
            case 1:
                return (
                    <>
                    </>
                )
            default:
                break;
        }
    }

    return (
        <div className={classes.accordionContainer} style={{ display: open === false && 'none' }} >
            {filterOptionsArray.map((k, i) => (
                <Accordion
                    key={i}
                    className='accordionWrapper'
                    square
                    expanded={in_array(expanded, `panel${i}`)}
                    onChange={() => handleAccordionChange(`panel${i}`)}
                    elevation={0}
                >
                    <AccordionSummary id={i} expandIcon={in_array(expanded, `panel${i}`) ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}>
                        <Typography className='accordionTitle' >{k}</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        {accordionDetails(i)}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    accordionContainer: {
        minWidth: 250,
        width: '17%',
        paddingTop: 5,
    }
}));

export default FilterPanel
