import styled from 'styled-components';
import { RiArrowDropDownLine } from 'react-icons/ri';

interface IAccordionContainer {
    isOpen: boolean
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

export const TitleContainer = styled.div<IAccordionContainer>`
    display: flex;
    flex-direction: flex;
    padding: 0 ${({ theme }) => theme.spacing}px;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 90%;
    background-color: #fff;
    border-radius: ${({ isOpen }) => isOpen ? '8px 8px 0 0' : '8px'};
    cursor: pointer;
`;

export const Title = styled.span`
    font-size: ${({ theme }) => theme.fonts.medium}px;
`;

export const IconContainer = styled.div<IAccordionContainer>`
    background-color: ${({ theme, isOpen }) => isOpen ? theme.colors.details : theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 25px;
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DropDownArrowIcon = styled(RiArrowDropDownLine)<IAccordionContainer>`
    ${({ isOpen }) => isOpen && 'transform: rotate(180deg)'};
    transition-duration: .5s;
    color: ${({ theme, isOpen }) => isOpen ? theme.colors.primary : theme.colors.details};
`;


export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 ${({ theme }) => theme.spacing}px;
    background-color: #fff;
    width: 90%;
    height: 280px;
    border-radius: 0 0 8px 8px;
`;

export const HourContainer = styled.div`
    padding: 6px;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const HourText = styled.span`
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: bold;
`;

export const ClassContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    height: 30px;
`;

export const ClassText = styled.span`
    margin-left: 20px;

`;