import React from "react";
import styled from "styled-components";

const ButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 15px;
  border: 1px solid var(--colors-purple100);
  border-radius: 25px;
  background-color: transparent;
  color: var(--colors-purple100);
  font-family: 'Poppins', serif;
  font-weight: 500;
  cursor: pointer;
`;

type Interface = {
  children: string;
};

export const Button = ({ children }: Interface) => {
  return (
    <ButtonAdd>{children}</ButtonAdd>
  );
};
