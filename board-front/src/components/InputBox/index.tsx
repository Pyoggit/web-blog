import './style.css'
// import DefaultProfileImage from "../../assets/image/default-profile-image.png";
// import { BoardListItem } from '@/types/interface'
// import { useNavigate } from 'react-router-dom';
import { ChangeEvent, Dispatch, forwardRef, SetStateAction, KeyboardEvent} from 'react';

interface Props{
    label: string;
    type: 'text' | 'password';
    placeholder: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    error: boolean;

    icon?: string;
    onButtonClick?: () => void;
    message?: string;

    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const InputBox = forwardRef<HTMLInputElement, Props> ((props: Props, ref) => {
    


    const {label, type, error, placeholder, value, icon, message} = props;
    const { setValue, onButtonClick, onKeyDown} = props;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setValue(value);
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) =>{
        if(!onKeyDown) return;
        onKeyDown(event);
    }

    return(
        <div className='inputBox'>
            <div className='inputbox-label'>{label}</div>
            <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
                <input ref={ref} type={type} className='input' placeholder={placeholder} value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
                {onButtonClick !== undefined &&    
                <div className='icon-button'>
                    {icon !== undefined && <div className={`icon ${icon}`}></div>}
                </div>
                }
            </div>
            {message !== undefined && <div className='inputbox-message'>{message}</div>}       
        </div>
    )
});

export default InputBox