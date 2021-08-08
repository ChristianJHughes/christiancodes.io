import cn from "classnames";
import PropTypes from "prop-types";

export default function Slice({ center, size, className, children, divider }) {
  const classes = cn(
    {
      "py-0": size == "sm",
      "py-4": size == "md",
      "py-8": size == "lg",
      "py-12": size == "xl",
      "items-center text-center": center,
      "border-b-2 border-gray-400 dark:border-gray-700": divider,
    },
    "mx-5 px-3 md:mx-auto md:px-5 flex flex-col max-w-3xl",
    className
  );
  return <div className={classes}>{children}</div>;
}

Slice.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  center: PropTypes.bool,
  divider: PropTypes.bool,
  size: PropTypes.bool,
  children: PropTypes.node,
};

Slice.defaultProps = {
  size: "sm",
  center: false,
  divider: false,
};
