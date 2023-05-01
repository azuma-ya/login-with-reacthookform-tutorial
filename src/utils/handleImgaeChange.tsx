const handleImageChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  callback: (any: string) => void
) => {
  e.preventDefault();
  if (e.target.files && e.target.files.length >= 1) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      // setAvatarImage(reader.result as string);
      callback(reader.result as string);
    });
    reader.readAsDataURL(file);
  }
};

export default handleImageChange;
