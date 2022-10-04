import * as Styled from "./styles";

export const ListReceiving = () => {
  return (
    <Styled.Container>
      <div>
        <h2>Você receberá:</h2>
        <hr />
      </div>
      <Styled.List>
        <li>
          Amanhã: <span className="amount-money">$10</span>
        </li>
        <li>
          Em 15 dias: <span className="amount-money">$10</span>
        </li>
        <li>
          Em 30 dias: <span className="amount-money">$10</span>
        </li>
        <li>
          Em 90 dias: <span className="amount-money">$10</span>
        </li>
      </Styled.List>
    </Styled.Container>
  );
};
