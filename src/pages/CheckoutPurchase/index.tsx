import React, { useContext } from 'react'
import { Button } from '../../components/Button'
import { ContainerCard } from '../../components/ContainerCard'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { StickerContext } from '../../contexts/StickersContext'
import { ContentStickers, ContentTitle, Main, Row } from './styles'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export function CheckoutPurchase() {
    const { stickers, notes, handleReturn } = useContext(StickerContext);

    return (
        <ContainerCard>
            <Header title={<>Pedido<br /> enviado com sucesso!</>} subtitle="Pacote de adesivos" />
            <Main>
                <ContentTitle><h2>Detalhes do Pedido</h2></ContentTitle>
                <ContentStickers>
                    {stickers.map((el) => {
                        return (
                            <Row>
                                <span>{el.sticker}</span>
                                <span>{el.quantity}</span>
                            </Row>
                        )
                    })}
                </ContentStickers>
                <Row>
                    <span>Total</span>
                    <span>{stickers.reduce((accumulator, currentValue) => {
                        return accumulator += currentValue.quantity;
                    }, 0)}</span>
                </Row>
                {notes && <span>Observações: {notes}</span>}
            </Main>
            <Footer>
                <Button icon={<AiOutlineArrowLeft />} onClick={handleReturn}>Voltar</Button>
            </Footer>
        </ContainerCard>
    )
}
