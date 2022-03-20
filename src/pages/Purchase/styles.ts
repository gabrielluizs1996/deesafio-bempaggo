import styled from "styled-components";

export const Form = styled.form`
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    overflow: auto;
`

export const ContentForms = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const TitleForms = styled.h2`
    font-size: 16px;
    padding-bottom: 8px;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    .checkboxarea { 
        display: flex;
        align-items: center;
        gap: 8px;
    }
`

export const ActionButton = styled.button`
    background-color: var(--blue-100);
    color: #FFF;
    font-weight: 700;
    height: 24px;
    font-size: 14px;
    padding: 0px 8px;
    border: none;
    border-radius: 4px;

    &:hover {
        transform: scale(1.03);
    }

    &:active {
        transform: scale(.98);
    }

    &:disabled {
        background-color: #979797;
    }
`

export const Input = styled.input`
    height: 24px;
    border: 0.5px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    width: 100%;
    padding: 0 8px;

    &:focus {
        outline: 0.5px solid var(--blue-100);
    }
`

export const CountInput = styled(Input)`
    width: 50px;
    border: 0.5px solid ${props => props.required ? 'rgba(255, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.12)' };
    
    &[type=number] {
        -moz-appearance: textfield;
    }
`

export const TextArea = styled.textarea`
    border: 0.5px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    width: 100%;
    padding: 0 8px;
    resize: none;

    &:focus {
        outline: 0.5px solid var(--blue-100);
    }
`