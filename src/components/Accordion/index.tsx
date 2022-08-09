import React from 'react';

import { IAccordion } from '../../types/components/Accordion';

import {
  ClassContainer,
  ClassText,
  Container,
  ContentContainer,
  DropDownArrowIcon,
  HourContainer,
  HourText,
  IconContainer,
  Title,
  TitleContainer
} from './style';

export const Accordion: React.FC<IAccordion> = ({ title, isOpen, onClick }) => {
  return (
      <Container>
        <TitleContainer
          isOpen={isOpen}
          onClick={onClick}
        >
          <Title>{title}</Title>

          <IconContainer isOpen={isOpen}>
            <DropDownArrowIcon
              isOpen={isOpen}  
              size={32}
            />
          </IconContainer>
        </TitleContainer>

        {isOpen && (
          <ContentContainer>
            <ClassContainer>
              <HourContainer>
                <HourText>18:20</HourText>
              </HourContainer>

              <ClassText>Programação Web</ClassText>
            </ClassContainer>

            <ClassContainer>
              <HourContainer>
                <HourText>19:10</HourText>
              </HourContainer>

              <ClassText>Programação Web</ClassText>
            </ClassContainer>

            <ClassContainer>
              <HourContainer>
                <HourText>20:10</HourText>
              </HourContainer>

              <ClassText>Programação Web</ClassText>
            </ClassContainer>

            <ClassContainer>
              <HourContainer>
                <HourText>21:00</HourText>
              </HourContainer>

              <ClassText>Programação Web</ClassText>
            </ClassContainer>

            <ClassContainer>
              <HourContainer>
                <HourText>21:50</HourText>
              </HourContainer>

              <ClassText>Programação Web</ClassText>
            </ClassContainer>
          </ContentContainer>
        )}
      </Container>
    );
};