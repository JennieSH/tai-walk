import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import Error404 from "@/pages/Error404";
import Footer from "@/components/Footer";
import { Category, validCategory } from "@/types/category";
import Loading from "./components/Loading";
import { LoadingProvider } from "@/context/loadingContext";

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Header />
        <Loading />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/:category"
            render={props => {
              const validCategoryParam = validCategory.includes(
                props.match.params.category as Category
              );
              return validCategoryParam ? <Search /> : <Error404 />;
            }}
          />
          <Route
            path="/:category/:id"
            render={props => {
              const validCategoryParam = validCategory.includes(
                props.match.params.category as Category
              );
              return validCategoryParam ? <Detail /> : <Error404 />;
            }}
          />
        </Switch>
        <Footer />
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
