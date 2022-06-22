import "./styles.css";
import Home from "./home";
import { Hv } from "./utils/hv";

export default function App() {
  console.log(Hv());
  return Home(Hv());
}
