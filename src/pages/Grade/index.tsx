import React, { useState } from 'react';

import { Body } from '../../components';
import { Accordion } from '../../components/Accordion';

import { AccordionContainer, ContentContainer, Title, TitleContainer } from './style';

export const Grade: React.FC = () => {
    const [mondayAccordion, setMondayAccordion] = useState(false);
    const [tuesdayAccordion, setTuesdayAccordion] = useState(false);
    const [wednesdayAccordion, setWednesdayAccordion] = useState(false);
    const [thursdayAccordion, setThursdayAccordion] = useState(false);
    const [fridayAccordion, setFridayAccordion] = useState(false);

    return (
        <Body>
            <AccordionContainer>
                <TitleContainer>
                    <Title>Sistemas da Informação</Title>
                    
                    <Title>7º Período</Title>
                </TitleContainer>

                <ContentContainer>
                    <Accordion
                        title="Segunda-feira"
                        isOpen={mondayAccordion}
                        onClick={() => {
                            setMondayAccordion((state) => !state)
                        }}
                    />

                    <Accordion
                        title="Terça-feira"
                        isOpen={tuesdayAccordion}
                        onClick={() => {
                            setTuesdayAccordion((state) => !state)
                        }}
                    />

                    <Accordion
                        title="Quarta-feira"
                        isOpen={wednesdayAccordion}
                        onClick={() => {
                            setWednesdayAccordion((state) => !state)
                        }}
                    />

                    <Accordion
                        title="Quinta-feira"
                        isOpen={thursdayAccordion}
                        onClick={() => {
                            setThursdayAccordion((state) => !state)
                        }}
                    />

                    <Accordion
                        title="Sexta-feira"
                        isOpen={fridayAccordion}
                        onClick={() => {
                            setFridayAccordion((state) => !state)
                        }}
                    />
                </ContentContainer>
            </AccordionContainer>
        </Body>            
    );
};