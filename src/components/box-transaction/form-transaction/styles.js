import styled from "styled-components";

export const Container = styled.div`
  color: var(--primaryColor);
  box-sizing: border-box;
  padding: 50px;

  >form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input-field {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .input-icon {
      margin-right: 5px;
    }

    .input-button {
      margin: 0px 5px 0px 10px;
    }

    .list-days {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      max-width: 320px;

      >div {
        padding: 2px;
        border: 1px solid var(--primaryColor);
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        >span {
          display: flex;
          justify-content: center;
          align-items: center;

          :hover {
            color: red;
            cursor: pointer;
          }
        }
      }
    }

    > label {
      font-weight: 300;
      font-size: 14px;
    }
  }
`;

export const Form = styled.form`

`