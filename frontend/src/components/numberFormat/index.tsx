import { useState } from 'react';
import NumberFormat from 'react-number-format';

type InumberFormat = {
    value?: number,
    name: string,
    className?: string
}

export const NumberFormatt = ({ value, name, className }: InumberFormat) => {
    const [valor, setValor] = useState('')

    return (
        <div className={`flex ${className}`}>
            <input type={'hidden'} className="absolute top-1 w-0 h-0" name={name} value={valor} />
            <NumberFormat
                className={`h-14 w-full bg-transparent border border-secundaryColor rounded-md pl-3 text-white focus:border-secundaryColor`}
                placeholder='Valor'
                thousandsGroupStyle="thousand"
                defaultValue={value}
                prefix="R$ "
                onValueChange={(values) => {
                    const { value } = values;
                    setValor(value);
                }}
                decimalSeparator="."
                displayType="input"
                type="text"
                thousandSeparator={true}
                allowNegative={false}
            />
        </div>
    )
}