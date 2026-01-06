import { CartProvider } from "./Context/CartContext";
import Home from "./Pages/Home";
import Routing from "./Routes/Routing";

function App() {
  return (
    <>
      <CartProvider>
        <Routing />
      </CartProvider>
    </>
  );
}

export default App;
