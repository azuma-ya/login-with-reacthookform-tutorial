import React from "react";
import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ja";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

export type RhfDatePickerProps<T extends FieldValues> = DatePickerProps<T> &
  UseControllerProps<T>;

const RhfDatePicker = <T extends FieldValues>(props: RhfDatePickerProps<T>) => {
  const { name, control } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <DatePicker
            {...field}
            {...props}
            format="YYYY年MM月DD日"
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
