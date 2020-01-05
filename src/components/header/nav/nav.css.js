import styled from 'styled-components';
import * as theme from 'constants/theme';

export const Burger = styled.button`
  position: fixed;
  top: 2.5rem;
  right: 4rem;
  width: 45px;
  height: 30px;
  background: none;
  border: none;
  outline: none;
  z-index: 9999;
  cursor: pointer;
  span {
    position: relative;
    height: ${theme.burger_line};
    width: 100%;
    background: ${theme.burger_color};
    display: inline-block;
    border-radius: 4px;
    transition: all 0.3s ease;
    &:before {
      content: '';
      height: ${theme.burger_line};
      width: 60%;
      background: ${theme.burger_color};
      position: absolute;
      top: 10px;
      right: 0;
      border-radius: 4px;
      transition: all 0.3s ease-in-out;
    }
    &.true {
      background: white;
      transform: rotate(-50deg);
      &:before {
        opacity: 1;
        transform: rotate(100deg);
        width: 100%;
        top: 0px;
        background: white;
      }
    }
  }
`;

export const Container = styled.nav`
  background: ${theme.sidemenu_background};
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  transform: translateX(100%);
  transition: all 0.5s cubic-bezier(0.04, 0.59, 0.34, 0.79);
  ul {
    padding: 13rem;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    li {
      display: block;
      margin-bottom: 3.5rem;
      padding-bottom: 3.5rem;
      opacity: 0;
      border-bottom: 1px solid ${theme.sidemenu_border};
      i {
        font-size: 3.5rem;
        margin-right: 1rem;
      }
      a {
        color: ${theme.sidemenu_link};
        font-weight: 300;
        text-decoration: none;
        font-size: 2.5rem;
        &:hover {
          color: lighten(${theme.sidemenu_link}, 10%);
        }
      }
    }
  }
  &.true {
    transform: translateX(0);
    ul {
      li {
        opacity: 1;
        transition: opacity 1s ease-in-out;
      }
    }
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
