// components/HomePageContainer.jsx

import { styled } from '@mui/system';

const HomePageContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(10),
}));

export default HomePageContainer;
