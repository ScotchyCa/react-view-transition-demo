import { useState } from "react";
import { flushSync } from "react-dom";

type Position = "left" | "right";

type TransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => unknown;
};

function SquareDemo({ title, position, animated, } 
    : 
    { title: string; position: Position; animated: boolean; }) 
    { return (
    <section className="demo-panel">
      <h2>{title}</h2>
      <div className="track">
        <div className={`square ${position} ${ animated ? "animated-square" : ""}`}/>
      </div>
    </section>
  );
}

export default function App() {
  const [selected, setSelected] = useState<Position>("left");
  const [reactPosition, setReactPosition] =
    useState<Position>("left");
  const [transitionPosition, setTransitionPosition] =
    useState<Position>("left");

  function changePosition(next: Position) {
    if (next === selected) return;

    // The ordinary React state example updates immediately.
    setSelected(next);
    setReactPosition(next);

    // Animate the second example using the browser API.
    const doc = document as TransitionDocument;

    if (doc.startViewTransition) {
      doc.startViewTransition(() => {
        flushSync(() => {
          setTransitionPosition(next);
        });
      });
    } else {
      // Fallback for browsers without View Transition support.
      setTransitionPosition(next);
    }
  }

  return (
    <main className="stage">
      <div className="controls" role="radiogroup" aria-label="Square position">
        {(["left", "right"] as const).map((position) => (
          <label className="radio-option" key={position}>
            <input type="radio" name="position" value={position} checked={selected === position} onChange={() => changePosition(position)}/>
            <code>setState("{position}");</code>
          </label>
        ))}
      </div>

      <div className="comparison">
        <SquareDemo title="React state" position={reactPosition} animated={false}/>
        <SquareDemo title="View Transition state" position={transitionPosition}animated={true}/>
      </div>
      <footer className="credit"> &copy; Created by Connor Jungkind 2026 </footer> 
    </main>
  );
}
