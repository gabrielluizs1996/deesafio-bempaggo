import styled from "styled-components";
import wave from '../../assets/images/wave.svg'


export const CustomHeader = styled.header`
    background-image: url(${wave});
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    height: 167px;
    min-height: 167px;
    width: 100%;
    max-width: 488px;
    padding: 16px 32px;
    position: relative;

    @media (min-width: 488px) {
        border-radius: 15px;
    }
`

export const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Title = styled.h1`
    font-size: 16px;
    color: #fff;
    font-weight: 300;
    z-index: 100;
`

export const Subtitle = styled(Title)`
    font-weight: 700;
`

export const Image = styled.img`
    position: absolute;
    top: 0;
    right: 32px;
    z-index: 0;
`