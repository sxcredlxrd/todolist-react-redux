import {withProviders} from "./providers/index.js";
import {Routing} from "../pages/index.jsx";

function App() {
  return (
    <Routing/>
  )
}

export default withProviders(App)
