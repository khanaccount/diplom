import { Route, Routes } from "react-router";
import "styles/index.scss";

import { Home } from "pages/Home";
import { Layout } from "layouts/main-layout";
import { Auth } from "pages/Auth";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
