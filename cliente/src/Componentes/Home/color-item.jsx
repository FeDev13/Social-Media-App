const ColorItem = ({ color,setColor }) => <span onClick={e =>{setColor(e)}} className="color-item p-3 rounded-full w-5" style={{'--bg-color':color}}  ></span>

export default ColorItem;