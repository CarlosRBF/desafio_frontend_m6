import styled from "styled-components"

export const Main = styled.div`
  background-color: #f0f8ff;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: block;
  flex-direction: column;
  background-color: #b0d7ff;
  width: 95%;
  max-width: 1000px;
  border-radius: 20px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (min-width: 320px) {
    margin-top: 150px;
  }

  @media (max-width: 375px) {
    display: block;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 60px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f7f7ff;
  border-radius: 20px 20px 0 0;

  h1 {
    text-align: center;
    font-family: "Ubuntu", sans-serif;
    font-size: 30px;
    font-weight: normal;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  label {
    text-align: center;
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
  button {
    width: 90%;
    max-width: 900px;
    height: 40px;

    cursor: pointer;

    border-radius: 8px;
    border: 1px transparent;
    margin: 0 auto;
    margin-bottom: 30px;

    background-color: #b0d7ff;
    color: rgba(25, 25, 112);
    font-family: "Ubuntu", sans-serif;
    font-size: 20px;
    &:focus {
      border: 1px red;
    }
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 22px;
    }
    label {
      font-size: 18px;
    }
  }
  @media (min-width: 768px) {
    width: 60%;
    border-radius: 20px 0 0 20px;
    label {
      text-align: left;
      padding-left: 35px;
    }
    button {
      display: none;
    }
  }
`
export const Inputs = styled.input`
  width: 85%;
  margin: 0 auto;
  padding: 16px;
  background-color: rgba(var(--grey-2), 1);
  border-radius: 10px;
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

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;

  h2 {
    font-family: "Ubuntu", sans-serif;
    font-size: 30px;
    margin-top: 20px;
    color: rgba(25, 25, 112);
    border-bottom: 1px solid gray;
    width: 300px;
  }

  p {
    font-family: "Ubuntu", sans-serif;
    font-size: 20px;
    color: rgba(30, 144, 255);
    margin-bottom: 15px;
    margin-top: 10px;
  }

  span {
    font-family: "Ubuntu", sans-serif;
    font-size: 20px;
    color: rgba(25, 25, 112);
    padding-left: 10px;
  }

  @media (max-width: 420px) {
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 18px;
    }
  }
  @media (min-width: 768px) {
    width: 40%;
    h2 {
      width: 280px;
    }
  }
`
