import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

type radio = {
  value: string;
  label: string;
};

type RhfRadioGroupProps<T extends FieldValues> = {
  label: string;
  radios: radio[];
} & UseControllerProps<T>;

const RhfRadioGroup = <T extends FieldValues>(props: RhfRadioGroupProps<T>) => {
  const { name, control, label, radios } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.invalid}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup {...field}>
            {radios.map((radio, index) => (
              <FormControlLabel
                value={radio.value}
                control={<Radio />}
                label={radio.label}
                key={index}
              />
            ))}
          </RadioGroup>
          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default RhfRadioGroup;
