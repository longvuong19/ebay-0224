import "./globals.css";
import Provider from "./context/user";
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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
