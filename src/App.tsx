import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import Footer from "@/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
