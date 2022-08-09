import styled from 'styled-components';


export const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 25px;
    padding: ${({ theme }) => theme.spacing}px;
`;

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: center;
`;

export const Title = styled.p`
    font-size: ${({ theme }) => theme.fonts.large}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.details};
`;

export const ContentContainer = styled.div``;