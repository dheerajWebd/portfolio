import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./camponent/App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);


// echo "# myTube" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/dheerajWebd/portfolio.git
// git push -u origin main