import { CustomFooter } from "./styles";

type FooterProps = { 
    children: JSX.Element | JSX.Element[];
}

export function Footer({ children }: FooterProps) {

    return (
        <CustomFooter>
            {children}
        </CustomFooter>
    )
}

