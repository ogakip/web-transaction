import { GlobalStyles } from "./styles/global";
import { BoxTransaction } from "./components/box-transaction";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div>
      <GlobalStyles/>
      <BoxTransaction/>
      <ToastContainer/>
    </div>
  );
}