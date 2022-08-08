import styled from 'styled-components';

export const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    border-radius: 25px;
    padding: ${({ theme }) => theme.spacing}px;
`;