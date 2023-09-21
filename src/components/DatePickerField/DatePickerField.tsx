import { FC } from 'react';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface IProps {
    label: string;
    value: Dayjs | null;
    setValue: (value: Dayjs | null) => void;
}

const DatePickerField:FC<IProps> = ({label, value, setValue}) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          value={value}
          sx={{ width: 200}}
          slotProps={{ textField: { variant: 'standard' } }}
          onChange={(newValue) => setValue(newValue)}
        />
    </LocalizationProvider>
  );
}

export default DatePickerField;