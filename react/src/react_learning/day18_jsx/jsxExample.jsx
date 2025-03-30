import "../../App.css"
export default function jsxExample1() {
    const name = "Hemnath V"
    return <>
        <h1 className="bg-color">Hello World {name}</h1>
        <p style={{ backgroundColor: "white", border: "10px solid black", fontSize: "50px", color: "black" }}>This is a sample</p>
    </>
}