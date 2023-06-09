import { Provider } from "react-redux";
import { store } from "./store";
import { MealRoutes } from "./routes/Routes";

const App = () => {
  return (
    <Provider store={store}>
      <MealRoutes />
    </Provider>
  );
};

export default App;
