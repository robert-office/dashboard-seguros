import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import { CssTextField } from '../cssTextField';

interface idatePicker {
  label?: string,
  className?: string,
  valor?: string,
  name?: string,
  disabled?: boolean
}

export default function BasicDatePicker({ className, label = 'Data', valor, name, disabled }: idatePicker) {
  const [value, setValue] = React.useState<Date | null>(null);

  React.useEffect(() => {
    if (valor) {
      setValue(new Date(valor))
    }
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        inputFormat="dd/MM/yyyy"
        mask='__/__/____'
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}

        disabled={disabled}

        renderInput={(params) => <CssTextField name={name} value={value} className={className} {...params} />}
      />
    </LocalizationProvider>
  );
}