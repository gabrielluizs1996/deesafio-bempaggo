import React from 'react'
import { CustomHeader, Subtitle, Title, TitleContent, Image } from './styles';
import box from '../../assets/images/box.svg';

type HeaderProps = {
    title: JSX.Element;
    subtitle: React.ReactNode;
}

export function Header({ title, subtitle}: HeaderProps) {

    return (
        <CustomHeader>
            <TitleContent>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </TitleContent>
            <Image src={box} alt="Icone de uma caixa" />
        </CustomHeader>
    )
}
