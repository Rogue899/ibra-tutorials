import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import  styled  from '@emotion/styled';

const StyledCard = styled(Card)`
padding: ${({ theme }) => theme.spacing(4)};
  text-align: center;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const StyledCardContent = styled(CardContent)`
  min-height: 120px;
  display:flex;
align-content:center;
align-items:center;
align-self:center;
`;

const TestimonialText = styled(Typography)`
  font-style: italic;
`;

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Jane Doe',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat ligula nec facilisis consectetur.',
        },
        {
            name: 'John Smith',
            text: 'Vestibulum et ligula vitae mi interdum tempor. Fusce facilisis, justo id mollis volutpat, sapien dui sodales libero.',
        },
    ];

    return (
        <Grid container alignContent={'center'} alignItems='center' justifyItems={'center'}justifyContent='center' spacing={2}>
            {testimonials.map((testimonial, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <StyledCard>
                        <StyledCardContent>
                            <TestimonialText>{testimonial.text}</TestimonialText>
                            <Typography variant="h6" component="h3">
                                {testimonial.author}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {testimonial.position}
                            </Typography>
                        </StyledCardContent>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default Testimonials;