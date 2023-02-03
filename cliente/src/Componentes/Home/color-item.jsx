const ColorItem = ({ color, setColor }) => (
  <span
    onClick={(e) => {
      setColor(e);
    }}
    className="color-item color w-5 rounded-full p-3"
    style={{ "--bg-color": color }}
  ></span>
);

export default ColorItem;
