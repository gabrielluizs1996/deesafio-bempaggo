import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: var(--purple-100);
`

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: var(--background);
    
    @media (min-width: 488px) {
        max-height: 550px;
        max-width: 488px;
        border-radius: 15px;
    }
`