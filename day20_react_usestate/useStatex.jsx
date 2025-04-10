import React, { useState } from "react";
function UseStatex() {
    const [name, setName] = useState("Hemnath");
    const [age, setAge] = useState(0);
    const updateName = () => {
        setName("Hemnath V");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }
    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Update</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
    </div >);
}
export default UseStatex