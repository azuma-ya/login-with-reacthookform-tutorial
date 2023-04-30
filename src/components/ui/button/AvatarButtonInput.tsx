import { Avatar } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import React from "react";

export type AvatarButtonInputProps = {
  src: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & IconButtonProps;

const AvatarButtonInput = (props: AvatarButtonInputProps) => {
  const { src, onChange, sx } = props;
  const { width, height } = sx as { width?: string; height?: string };
  return (
    <IconButton component="label" sx={sx}>
      <input hidden accept="image/*" type="file" onChange={onChange} />
      <Avatar src={src} sx={{ width: width, height: height }} />
    </IconButton>
  );
};

export default AvatarButtonInput;
