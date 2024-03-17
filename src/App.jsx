import './App.css';
import "./App2.css";
import "./App3.css";
import "./App4.css";
import { CountdownTimer } from "./CountdownTimer";

function App() {
  const NOW_IN_MS = new Date("March 17, 2024 23:59:59").getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS;
  return (
    <>
      <div className="flex zx w-full h-screen items-center justify-center bg-[url(https://images.wallpaperscraft.com/image/single/butterfly_flower_black_background_74198_2560x1600.jpg)] bg-cover h-screen w-full">
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
    </>
  );
}

export default App;