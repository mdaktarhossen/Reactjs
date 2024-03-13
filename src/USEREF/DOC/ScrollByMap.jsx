import { useRef } from "react";

export default function CatFriends() {
  const hedingRef = useRef(null);
  const getMap = () => {
    if (!hedingRef.current) {
      hedingRef.current = new Map();
    }
    return hedingRef.current;
  };

  const handleBtn = (hedingId) => {
    const map = getMap();
    const node = map.get(hedingId);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    node.style.backgroundColor = "red";
  };

  return (
    <>
      <nav>
        <button
          onClick={() => {
            handleBtn(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            handleBtn(15);
          }}
        >
          15
        </button>
        <button
          onClick={() => {
            handleBtn(18);
          }}
        >
          18
        </button>
      </nav>
      <div>
        <ol>
          {hedingLists.map((heding) => (
            <li
              key={heding.id}
              ref={(node) => {
                const map = getMap();
                node ? map.set(heding.id, node) : map.delete(heding.id);
              }}
            >
              {heding.heding}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

const hedingLists = [];
for (let i = 0; i < 20; i++) {
  hedingLists.push({
    id: i,
    heding: <h1>This is the heding No: {i}</h1>,
  });
}
