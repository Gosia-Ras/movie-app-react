import styled from "styled-components";

export const FooterBox = styled.footer`
  width: 100%;
  background-color: #2f3640;
  padding: 10px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 25px;
    font-size: 14px;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  margin-left: 15px;
  border: 1px solid #dcdde1;
  padding: 5px;
  border-radius: 5px;
  color: #dcdde1;

  &:hover {
    background-color: #dcdde1;
  }

  &:visited {
    color: #487eb0;
  }
`;
