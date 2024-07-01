import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue, darkText, setDarkText }) => {
    return (
        <form onSubmit={(e) => e.preventDefault}>
            <label>Add Colour Name: </label>
            <input
            autoFocus
            type="text"
            placeholder="Type Colour Here..."
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}>
            </input>

        <button 
            type="button"
            onClick={() => setDarkText(!darkText)}
        >
            Toggle Text Colour
        </button>    
        </form>
    )
}

export default Input