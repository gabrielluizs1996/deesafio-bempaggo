import { CustomButton } from './styles'

type ButtonProps = {
    icon?: JSX.Element;
}

export function Button({ onClick, children, icon }: React.HTMLProps<HTMLButtonElement> & ButtonProps) {
    return (
        <CustomButton
            onClick={onClick}>
            {icon}
            {children}
        </CustomButton>
    )
}