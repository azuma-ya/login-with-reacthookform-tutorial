import React from "react";
import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ja from "date-fns/locale/ja";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

export type RhfDatePickerProps<T extends FieldValues> = DatePickerProps<T> &
  UseControllerProps<T>;

const RhfDatePicker = <T extends FieldValues>(props: RhfDatePickerProps<T>) => {
  const { name, control } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <DatePicker
            {...field}
            {...props}
            format="yyyy年MM月dd日"
            localeText={{
              previousMonth: "前月を表示",
              nextMonth: "次月を表示",
            }}
            slotProps={{
              textField: {
                error: fieldState.invalid,
                helperText: fieldState.error?.message,
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default RhfDatePicker;
