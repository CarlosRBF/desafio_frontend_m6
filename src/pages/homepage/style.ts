import styled from "styled-components"

export const Main = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .online {
    color: blue;
  }

  .offline {
    color: red;
  }
`

export const Container = styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  border-radius: 20px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-family: "Ubuntu", sans-serif;
    font-size: 19px;
    cursor: pointer;
  }
  .message__error {
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: red;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 24px;
  }
`
export const Inputs = styled.input`
  width: 300px;
  padding: 16px;
  background-color: rgba(var(--grey-2), 1);
  border-radius: 4px;
  border: 1px solid #343b41;
  a &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus {
    color: rgba(var(--grey-0), 1);
    border: 1px solid #f8f9fa;
  }
`

export const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  border-radius: 20px 0 0 20px;

  background-color: white;
  width: 60%;
  height: 100%;

  h1 {
    font-family: "Ubuntu", sans-serif;
    font-size: 30px;
    font-weight: normal;
  }
`

export const Aside = styled.aside`
  background-color: rgba(240, 248, 255);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
  gap: 40px;
  border-radius: 0 20px 20px 0;

  width: 40%;
  height: 100%;

  h2 {
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-size: 26px;
    color: rgba(25, 25, 112);
    border-bottom: 1px solid gray;
    width: 300px;
    height: 30px;
  }

  p {
    font-family: "Ubuntu", sans-serif;
    font-size: 20px;
    color: rgba(30, 144, 255);
  }

  span {
    font-family: "Ubuntu", sans-serif;
    font-size: 20px;
    color: rgba(65, 105, 225);
    padding-left: 10px;
  }
`
