import styled from 'styled-components';

export const BodyContainer = styled.div`
    display: flex;
    padding: ${({ theme }) => theme.spacing}px;
    background-color: ${({ theme }) => theme.colors.background};
`;
