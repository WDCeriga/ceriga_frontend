
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./i18n";
import store from "./redux/store.ts";
import App from "./App.tsx";

import "./index.css";
import "./utils/mixins.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(

    <Provider store={store}>
      <App />
    </Provider>
 
);
