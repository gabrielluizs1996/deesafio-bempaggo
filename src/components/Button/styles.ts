import styled from "styled-components";

export const CustomButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: var(--blue-100);
    color: #FFF;
    font-weight: 700;
    font-size: 14px;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;

    &:hover {
        transform: scale(1.03);
    }

    &:active {
        transform: scale(.98);
    }
`