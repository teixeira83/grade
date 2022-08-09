import styled from 'styled-components';

export const BodyContainer = styled.div`
    display: flex;
    padding: ${({ theme }) => theme.spacing}px;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
`;
