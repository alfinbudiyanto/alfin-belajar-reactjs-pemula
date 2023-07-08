import { useState } from "react";

function Header({ author }) {
  return <h1>Belajar ReactJs bareng {author ? author : "WPU"} 🚀</h1>;
}

function App() {
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header />
      <button onClick={handleClick}>Like ({likes})</button>
    </>
  );
}

export default App;
