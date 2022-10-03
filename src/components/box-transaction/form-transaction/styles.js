import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--primaryColor);

  .input-field {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .input-icon {
      margin-right: 5px;
    }

    > label {
      font-weight: 300;
      font-size: 14px;
    }
  }
`;
