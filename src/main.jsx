import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const App = lazy(() => import("./camponent/App.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<>...</>}>
      <App />
    </Suspense>
  </StrictMode>
);

// echo "# myTube" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/dheerajWebd .git
// git push -u origin main
