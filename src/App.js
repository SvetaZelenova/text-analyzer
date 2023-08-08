import {
  calculateWords,
  calculateSentences,
  calculateArticles,
} from "./utils/utils";
import "./App.css";
import { useEffect, useState } from "react";

const initResult = {
  characters: 0,
  words: 0,
  sentences: 0,
  articles: 0,
  paragraphs: 0,
  whitespaces: 0,
};

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(initResult);

  useEffect(() => {
    if (text.length === 0) {
      setResult(initResult);
    } else {
      setResult({
        characters: text.length,
        words: calculateWords(text),
        sentences: calculateSentences(text),
        articles: calculateArticles(text),
      });
    }
  }, [text]);

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <header>
        <h2>Text Analyzer</h2>
      </header>
      <div className="summary">
        <p>Words: {result.words}</p>
        <p>Charachters: {result.characters}</p>
        <p>Sentences: {result.sentences}</p>
        <p>Articles: {result.articles}</p>
      </div>
      <textarea
        onChange={textChangeHandler}
        placeholder="Your text...."
      ></textarea>
    </div>
  );
}

export default App;
