import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import React from "react";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

type RhfCheckBoxProps<T extends FieldValues> = {
  formlabel?: string;
  checkboxlabel: string;
} & CheckboxProps &
  UseControllerProps<T>;

const RhfCheckBox = <T extends FieldValues>(props: RhfCheckBoxProps<T>) => {
  const { name, control, formlabel, checkboxlabel } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={fieldState.invalid}>
          <FormLabel>{formlabel}</FormLabel>
          <FormGroup {...field}>
            <FormControlLabel
              label={checkboxlabel}
              control={<Checkbox {...field} {...props} checked={field.value} />}
            />
          </FormGroup>
          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default RhfCheckBox;
