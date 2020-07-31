import React from 'react';
import ReactDOM from 'react-dom'
import LoginInput from '../LoginInput.js'

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<LoginInput />, div)
})