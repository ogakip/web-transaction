import { GlobalStyles } from "./styles/global";
import { BoxTransaction } from "./components/box-transaction";

export const App = () => {
  return (
    <div>
      <GlobalStyles/>
      <BoxTransaction/>
    </div>
  );
}