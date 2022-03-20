import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 40px;
    overflow: auto;

    span {
        font-size: 14px;
        text-align: justify;
    }
`

export const ContentTitle = styled.div`
    display: flex;
    justify-content: center;

    h2 {
        font-size: 16px;
        font-weight: bold;
    }
`

export const ContentStickers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        font-size: 14px;
    }
`
