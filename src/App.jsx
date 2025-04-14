import "./App.css";
import Hobbies from "./components/Hobbies";
import Profile from "./components/Profile";
import Bio from "./components/Bio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-pink-400 h-dvh w-dvw flex justify-center items-center flex-col relative">
      <main className="h-[90%] w-[80%] bg-white rounded-[50px] min-w-[320px] max-h-[700px] max-w-[800px] shadow-(--clay-pink-shadow-body) p-8 flex justify-center items-center flex-col gap-y-5 xl:flex-row xl:justify-around xl:max-w-4/6 xl:max-h-5/6">
        <Profile />
        <div className="flex justify-center content-center flex-col gap-y-3">
          <Bio />
          <Hobbies />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
