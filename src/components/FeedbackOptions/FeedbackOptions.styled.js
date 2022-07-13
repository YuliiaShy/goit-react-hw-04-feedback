import styled from 'styled-components';

export const Container = styled.div`
 margin: 0 auto;
text-align: center;
max-width: 200px;
`;

export const Button = styled.button`
  min-width: 60px;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  border: 1.6px solid rgb(245, 248, 40);
  :hover {
    background-color: rgb(245, 248, 40);
  }
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Item = styled.li`
  :not(:last-child) {
   margin-right: 20px;
`;


