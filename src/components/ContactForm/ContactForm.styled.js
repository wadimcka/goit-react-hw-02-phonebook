import styled from 'styled-components';

export const FormWraper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const FormButton = styled.button`
  display: block;
  margin: 20px auto 10px auto;
  width: 200px;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #e6f0ff;
  color: #0d47a1;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 100ms ease;
  &:hover,
  &:focus {
    background-color: rgb(168 199 250 / 1);
    border: 1px solid transparent;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  }
  &:active {
    transform: scale(1.04);
  }
`;
