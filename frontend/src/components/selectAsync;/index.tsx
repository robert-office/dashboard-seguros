import { useEffect, useState } from "react";
import { AsyncPaginate, LoadOptions } from "react-select-async-paginate";
import './styles.css';

type IasyncSelect = {
    name: string,
    placeholder: string,
    className?: string,
    loadOptions: LoadOptions<any, any, { page: number }>,
    onchangeEx?: (e: {value: string, label: string} | undefined) => void,
    add?: {}
}

export const AsyncSelect = ( {name, placeholder, className, loadOptions, onchangeEx, add} : IasyncSelect ) => {
    const [value, setValue] = useState('');
    const [valueSelect, setValueSelect] = useState<{value: string, label: string}>();
    useEffect(() => {
        if(onchangeEx) { onchangeEx(valueSelect) }
    }, [valueSelect])

    const onchange = (e: {value: string, label: string}) => {
        setValue(e.value);
        setValueSelect(e);
    }

    return (
        <div className={`${className}`}>
            <input type={'hidden'} name={name} value={value} />
            <AsyncPaginate
                className="w-full"
                placeholder={placeholder}
                classNamePrefix={'react_select_prefix'}
                value={valueSelect}
                onChange={onchange}
                loadOptions={loadOptions}
                additional={{
                    page: 1,
                    ...add
                }}
            />
        </div>
    )
}
