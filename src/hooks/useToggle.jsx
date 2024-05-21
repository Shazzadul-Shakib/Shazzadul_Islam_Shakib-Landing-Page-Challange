import { useState } from "react";

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Toggle = () => {
    setIsOpen(!isOpen);
  };
  return [isOpen, setIsOpen, Toggle];
};
