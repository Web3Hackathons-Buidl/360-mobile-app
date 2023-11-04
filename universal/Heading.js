const Heading = ({ children, textSize, color, marginLeft }) => {
  const size =
    (textSize === "24" && "text-2xl") || (textSize === "base" && "text-base");
  const textColor =
    (color === "white" && "text-white") || (color === "main" && "text-main");

  return (
    <div
      className={`${textColor} font-druk ${size} font-black tracking-tighter uppercase`}
    >
      {children}
    </div>
  );
};

export default Heading;
