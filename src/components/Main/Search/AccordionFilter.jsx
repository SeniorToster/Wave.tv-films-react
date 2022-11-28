import React from 'react';
import { styled } from '@mui/material/styles';
import { IoChevronDown } from 'react-icons/io5';
import MuiAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Filters from './Filters/Filters';

export default React.memo(function AccordionFilter({ filtersHandle }) {
  const Accordion = styled(MuiAccordion)(({ theme }) => ({
    backgroundColor: '#1d3557',
    '&:last-of-type': {
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
    },
    '&:first-of-type': {
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
  }));

  const AccordionSummary = styled(props => (
    <MuiAccordionSummary expandIcon={<IoChevronDown />} {...props} />
  ))(({ theme }) => ({
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
    flexDirection: 'column',
    '&.Mui-expanded': {
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
      color: '#f1faee',
      '& > svg': {
        height: '20px',
        width: '20px',
      },
    },
    '& .MuiAccordionSummary-content': {
      margin: '8px 0 0 0',
      fontSize: '22px',
      fontWeight: '700',
      color: '#f1faee',
    },
  }));
  console.log('render');
  return (
    <Accordion>
      <AccordionSummary aria-controls='panel1a-content' id='panel1a-header'>
        фильтры
      </AccordionSummary>
      <AccordionDetails>
        <Filters filtersHandle={filtersHandle} />
      </AccordionDetails>
    </Accordion>
  );
});
