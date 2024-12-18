import "./index.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-[url('/images/el.png')] gap-5">
        <h1 className="text-center text-gray">OMDB.DD</h1>
        <img className="size-32" src="/images/move.gif" alt="move" />
        <input
          className="w-96 p-2 bg-white rounded-lg border-2 border-black-300 mb-48"
          type="text"
        />
        <p className="text-center">
          이 사이트는 다음과 같이 제공받아 제작되었습니다.
          <br />
          <a href="https://maplestory.io/">maplestory.io</a>
        </p>
      </div>
    </>
  );
}

export default App;
