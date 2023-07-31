import { useState } from "react";
import "./App.css";
import Db from "./db/spaceCuriosities.json"
import { Getrandom } from "./utils/random";
import QuotesBox from "./components/QuotesBox";

const bgs = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  const [quote, setQuote] = useState(Getrandom(Db))
  const [ backgr, setBackgr] = useState(Getrandom(bgs))
   
  const handleChangeQuote = () =>{
   setQuote(Getrandom(Db))
   setBackgr(Getrandom(bgs))
  }

  return (
    <main className={`App ${backgr}`}>
        <QuotesBox handleChangeQuote={handleChangeQuote} quote={quote}/>
    
    </main>
  );
}

export default App;
