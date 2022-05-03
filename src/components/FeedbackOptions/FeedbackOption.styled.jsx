import styled from 'styled-components';

export const WrapperBtn = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  padding: 10px 50px 10px 50px;
  border: none;
  border-radius: 10px;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    transform: scale(1.1);
    box-shadow: -2px -2px 5px;
  }
  cursor: pointer;
`;
