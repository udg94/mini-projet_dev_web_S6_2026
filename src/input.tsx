import {type FC} from 'react';



type InputProps = {
    type:string;
    name:string;
    value:number|string;
    checked?:boolean;
    max?:number;
    min:number;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:FC<InputProps> =  ({type, name, value,checked, max, min, onChange, ...props}) =>{
    if(type==='checkbox'){
        return (
            <div className='boxinput'>
                <input type={type} name={name} value={value}  onChange={onChange}/>
                <label for={name}>  {name}</label>
            </div>
        )
    }
    return(
            <div className='boxinput'>
                <label for={name}>{name} :</label>
                <input type={type} name={name} value={value} max={max} min={min} onChange={onChange}/>
            </div>
        )
}

export default Input;