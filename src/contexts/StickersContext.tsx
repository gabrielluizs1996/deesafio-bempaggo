import { createContext, useState } from "react";
import { useNavigate  } from "react-router-dom";

export type StickersProps = {
    sticker: string;
    quantity: number;
    isChecked: boolean;
}

type ContextType = {
    handleClickAdd: (index: number, arr: StickersProps[]) => void;
    handleClickRemove: (index: number, arr: StickersProps[]) => void;
    handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>, el: StickersProps, index: number, arr: StickersProps[]) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleReturn: () => void;
    quantities: number;
    notes: string;
    stickers: StickersProps[];
}

type ProviderProps = {
    children: React.ReactNode;
}

export const StickerContext = createContext({} as ContextType);

export function StickerContextProvider(props: ProviderProps) {
    const [quantities, setQuantities] = useState(0);
    const [notes, setNotes] = useState("");
    const [stickers, setStickers] = useState<StickersProps[]>([]);
    const navigate = useNavigate();

    const handleClickAdd = (index: number, arr: StickersProps[]) => {
        var array: StickersProps[] = [...stickers];
        setQuantities(arr[index].quantity += 1);
        setStickers(array);
    }

    const handleClickRemove = (index: number, arr: StickersProps[]) => {
        var array: StickersProps[] = [...stickers];
        if (quantities > 0) {
            setQuantities(arr[index].quantity -= 1);
            setStickers(array);
        }
    }

    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>, el: StickersProps, index: number, arr: StickersProps[]) {
        var array: StickersProps[] = [...stickers];
        event.target.checked ? arr[index].isChecked = true : arr[index].isChecked = false;

        if (index !== -1) {
            array.splice(index, 1);
        }
        event.target.checked ?
            setStickers([...stickers, el]) :
            setStickers(array);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setNotes(event.target.value);
    }

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        const checkQuantities = stickers.some((el) => el.quantity === 0);
        console.log(checkQuantities);
        console.log(stickers);
        stickers.length && !checkQuantities ? navigate('/checkout') : null as any;
    }

    
    function handleReturn() {
        setNotes("");
        setStickers([]);
        navigate("/");
    }

    return (
        <StickerContext.Provider value={{ handleClickAdd, handleClickRemove, handleCheckboxChange, handleInputChange, handleSubmit, handleReturn, quantities, notes, stickers }}>
            {props.children}
        </StickerContext.Provider>
    )
}