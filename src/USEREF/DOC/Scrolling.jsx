import { useRef } from "react";

export default function Scrolling() {
  const scrollOne = useRef(null);
  const scrollTwo = useRef(null);
  const scrollThree = useRef(null);

  const handleScrollOne = () => {
    scrollOne.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  const handleScrollTwo = () => {
    scrollTwo.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  const handleScrollThree = () => {
    scrollThree.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  return (
    <>
      <nav>
        <button onClick={handleScrollTwo}>Two</button>
        <button onClick={handleScrollOne}>One</button>
        <button onClick={handleScrollThree}>Three</button>
      </nav>
      <ul>
        <li ref={scrollOne}>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam deleniti quibusdam cumque, repellat veritatis, cupiditate omnis,
            voluptatem sint natus itaque iusto odio quo? Aspernatur reiciendis voluptatem itaque perferendis nesciunt? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Obcaecati ea vel, facere eos qui nesciunt nostrum a fugit, totam repellat vero, sunt non molestias? Quod
            omnis minima nihil vel distinctio!
          </h3>
        </li>
        <li ref={scrollTwo}>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, aperiam qui perferendis obcaecati inventore fuga repellat, fugit enim
            minima quo ab consequatur! Minus id ducimus maiores ullam architecto facere sed. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dolore, aperiam qui perferendis obcaecati inventore fuga repellat, fugit enim minima quo ab consequatur! Minus id ducimus maiores ullam
            architecto facere sed. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, aperiam qui perferendis obcaecati inventore fuga
            repellat, fugit enim minima quo ab consequatur! Minus id ducimus maiores ullam architecto facere sed. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Dolore, aperiam qui perferendis obcaecati inventore fuga repellat, fugit enim minima quo ab consequatur!
            Minus id ducimus maiores ullam architecto facere sed. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, aperiam qui
            perferendis obcaecati inventore fuga repellat, fugit enim minima quo ab consequatur! Minus id ducimus maiores ullam architecto facere sed.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, aperiam qui perferendis obcaecati inventore fuga repellat, fugit enim
            minima quo ab consequatur! Minus id ducimus maiores ullam architecto facere sed. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dolore, aperiam qui perferendis obcaecati inventore fuga repellat, fugit enim minima quo ab consequatur! Minus id ducimus maiores ullam
            architecto facere sed. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, aperiam qui perferendis obcaecati inventore fuga
            repellat, fugit enim minima quo ab consequatur! Minus id ducimus maiores ullam architecto facere sed. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Dolore, aperiam qui perferendis obcaecati inventore fuga repellat, fugit enim minima quo ab consequatur!
            Minus id ducimus maiores ullam architecto facere sed. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, aperiam qui
            perferendis obcaecati inventore fuga repellat, fugit enim minima quo ab consequatur! Minus id ducimus maiores ullam architecto facere sed.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, aperiam qui perferendis obcaecati inventore fuga repellat, fugit enim
            minima quo ab consequatur! Minus id ducimus maiores ullam architecto facere sed. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dolore, aperiam qui perferendis obcaecati inventore fuga repellat, fugit enim minima quo ab consequatur! Minus id ducimus maiores ullam
            architecto facere sed. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, aperiam qui perferendis obcaecati inventore fuga
            repellat, fugit enim minima quo ab consequatur! Minus id ducimus maiores ullam architecto facere sed.
          </h2>
        </li>
        <li ref={scrollThree}>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, aperiam qui perferendis obcaecati inventore fuga repellat, fugit enim
            minima quo ab consequatur! Minus id ducimus maiores ullam architecto facere sed.
          </h2>
        </li>
      </ul>
    </>
  );
}
