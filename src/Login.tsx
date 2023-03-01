import "./App.css";
import { KAKAO_AUTH_URL } from "./Auth";

function App() {
  return (
    <div className="App">
      <a href={KAKAO_AUTH_URL}>카카오톡</a>
    </div>
  );
}

export default App;
