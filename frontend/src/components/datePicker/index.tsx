import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import { CssTextField } from '../cssTextField';

interface idatePicker {
  label? : string,
  className?: string,
}

export default function BasicDatePicker({ className, label = 'Data' }: idatePicker) {
    const [value, setValue] = React.useState<Date | null>(null);
  
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label={label}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <CssTextField className={className} {...params} />}
        />
      </LocalizationProvider>
    );
  }