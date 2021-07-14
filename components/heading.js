import cn from "classnames";

export default function Heading({ isLarge, text }) {
  const classes = cn({
    "text-6xl font-bold": isLarge,
    "text-lg": !isLarge,
  });
  return <h1 className={classes}>{text}</h1>;
}
