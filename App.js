import html from "../core.js";
import { connect } from '../store.js'

const connector = connect(state => ({
    cars: state.cars
}))
export default connector(App)

function App({ cars }){
    return html`
        <h1>${true}</h1>
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>
        <button onclick="dispatch('ADD', 'Mercedes')">Add car</button>
    `
}

