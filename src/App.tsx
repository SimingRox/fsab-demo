import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import MDSample from "./markdown-sample.md";

function App() {
  const [sample, setSample] = useState("");

  // Fetch Terms of Use
  useEffect(() => {
    fetch(MDSample)
      .then((res) => res.text())
      .then((text) => setSample(text));
  });

  return (
    <div>
      <ReactMarkdown children={sample} />
    </div>
  );
}

export default App;
