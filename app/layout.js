import "./globals.css";
import Provider from "./context/user";
import CartProvider from "./context/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "eBay Clone",
  description: "eBay Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <Provider>
          <CartProvider>{children}</CartProvider>
        </Provider>
      </body>
    </html>
  );
}
