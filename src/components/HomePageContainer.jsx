// components/HomePageContainer.jsx

import { styled } from '@mui/system';

const HomePageContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: theme.spacing(2),
}));

export default HomePageContainer;
