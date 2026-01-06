import { Toaster } from "react-hot-toast";
import { CartProvider } from "./Context/CartContext";
import Home from "./Pages/Home";
import Routing from "./Routes/Routing";

function App() {
  return (
    <>
      <CartProvider>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Routing />
      </CartProvider>
    </>
  );
}

export default App;
