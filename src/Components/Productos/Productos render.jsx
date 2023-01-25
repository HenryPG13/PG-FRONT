import Productos from "./Productos.jsx"
import NavBar from "../NavBar/NavBar.jsx"
import { Filters } from "../Filters/Filters.jsx"
import SearchBar from "../SearchBar/SearchBar.jsx"

export function ProductosRender() {
    return (
        <div>
            <NavBar/>
            <SearchBar />
            <Filters/>
            <Productos/>
        </div>
    )
}