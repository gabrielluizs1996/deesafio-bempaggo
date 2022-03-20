import { useContext } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ActionButton, Div, ContentForms, Form, TitleForms, CountInput, TextArea } from "./styles";
import { StickerContext, StickersProps } from '../../contexts/StickersContext'
import { ContainerCard } from "../../components/ContainerCard";
import { Footer } from "../../components/Footer";
import { IoMdSend } from 'react-icons/io';

var mockStickers: StickersProps[] = [
    { sticker: 'React', quantity: 0, isChecked: false},
    { sticker: 'Vue', quantity: 0, isChecked: false},
    { sticker: 'Angular', quantity: 0, isChecked: false },
]

export function Purchase() {
    const { handleClickAdd, handleClickRemove, handleCheckboxChange, handleInputChange, handleSubmit, notes } = useContext(StickerContext);

    return (
        <ContainerCard>
            <Header title={<>Formulário<br /> para compra de adesivos</>} subtitle="Pacote de Adesivos" />
            <Form>
                <ContentForms>
                    <TitleForms>Quais adesivos:</TitleForms>
                    {mockStickers.map((el, index, arr) => (
                        <Div>
                            <div className="checkboxarea">
                                <input type="checkbox" value={el.sticker}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(event, el, index, arr)} />
                                <label>{el.sticker}</label>
                            </div>
                            <div>
                                <ActionButton
                                    disabled={!el.isChecked}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleClickRemove(index, mockStickers);
                                    }}>-</ActionButton>
                                <CountInput required={el.quantity <= 0 && el.isChecked} value={el.quantity} type="number" id="scales" name="scales" />
                                <ActionButton
                                    disabled={!el.isChecked}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleClickAdd(index, mockStickers);
                                    }}>+</ActionButton>
                            </div>
                        </Div>
                    ))}
                </ContentForms>
                <ContentForms>
                    <TitleForms>Observações</TitleForms>
                    <Div>
                        <TextArea rows={5}  placeholder="Observações" value={notes} onChange={handleInputChange} />
                    </Div>
                </ContentForms>
            </Form>
            <Footer>
                <Button icon={<IoMdSend />} type="submit" onClick={handleSubmit}>Enviar</Button>
            </Footer>
        </ContainerCard>
    )
}
