import React from 'react';
import { IBody } from '../../types/components/Body';

import { BodyContainer } from './style';

export const Body: React.FC<IBody> = ({ children }) => (
    <BodyContainer>
        {children}
    </BodyContainer>
)