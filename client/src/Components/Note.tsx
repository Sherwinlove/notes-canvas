import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

function Note({ name, priority, key, id, currentPosition, handleOnDrag }: any) {
  const notePosition = useSpring({
    x: currentPosition.x,
    y: currentPosition.y,
  });
  const bindNotePosition = useDrag((parameter) => {
    const x = parameter.offset[0];
    const y = parameter.offset[1];
    notePosition.x.set(x);
    notePosition.y.set(y);
    console.log({ x: currentPosition.x, y: currentPosition.y });

    console.log(parameter);

    handleOnDrag({ x, y }, id);
  });

  const noteStyle =
    priority === 1
      ? "border-4 border-purple-300 bg-white hover:border-purple-400 text-bold rounded-xl py-4 px-8 shadow-lg"
      : priority === 2
      ? "border-4 border-pink-300 bg-white hover:border-pink-400 text-bold rounded-xl py-4 px-8 shadow-lg"
      : "border-4 border-cyan-300 bg-white hover:border-cyan-400 text-bold rounded-xl py-4 px-8 shadow-lg";

  return (
    <animated.div
      {...bindNotePosition()}
      style={{
        x: currentPosition?.x ?? 0,
        y: currentPosition?.y ?? 0,
      }}
      key={key}
      className={noteStyle}
    >
      <span className="text-xl">{name}</span>
    </animated.div>
  );
}

export default Note;
