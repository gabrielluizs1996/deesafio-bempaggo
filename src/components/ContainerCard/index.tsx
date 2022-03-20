import React from 'react'
import { Container, Content } from './styles';

type ContainerCardProps = {
    children: JSX.Element | JSX.Element[];
}

export function ContainerCard({ children }: ContainerCardProps) {

    return (
        <Container>
            <Content>
                {children}
            </Content>
        </Container>
    )
}
