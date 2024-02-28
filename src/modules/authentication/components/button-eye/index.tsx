"use client";

import { MdRemoveRedEye, MdVisibilityOff } from "react-icons/md";

interface IButtonEye {
  isVisible: boolean;
  handleClick: () => void;
}

export const ButtonEye = ({ isVisible, handleClick }: IButtonEye) => {
  return (
    <button className="focus:outline-none" type="button" onClick={handleClick}>
      {isVisible && <MdRemoveRedEye className="text-gray-500 cursor-pointer" />}
      {!isVisible && (
        <MdVisibilityOff className="text-gray-500 cursor-pointer" />
      )}
    </button>
  );
};
