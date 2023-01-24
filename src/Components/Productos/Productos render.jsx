import Productos from "./Productos.jsx"
import NavBar from "../NavBar/NavBar.jsx"
import { Filters } from "../Filters/Filters.jsx"

export function ProductosRender() {
    return (
        <div>
            <NavBar/>
            <Filters/>
            <Productos/>
        </div>
    )
}