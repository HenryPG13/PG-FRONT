import Productos from "./Productos.jsx"

import { Filters } from "../Filters/Filters.jsx"
import SearchBar from "../SearchBar/SearchBar.jsx"

export function ProductosRender() {
    return (
        <div>
           
            <SearchBar/>
            <Filters/>
            <Productos/>
        </div>
    )
}