import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function(){
    const context = useContext(AppContext)

    const cambiarTexto = (e) => {
    let valorActual = e.target.value
    context.defineCiudad(valorActual)
    console.log('defineCiudad:', valorActual)
    // console.log('param2:', param2)
    }

    const handleBuscar = () => {
        fetch(API_URL(nombreCiudad))
        .then(res=>res.json())
        .then((datos)=>{
            console.log('resultados:', datos)
        })
    }

    return (<div>
        <h1>Eventos</h1>
        <label>Idioma actual: {context.idioma}</label>
        <form>
        <label>Escribe la ciudad</label>
        <input type="text" placeholder="Escribe la ciudad" onChange={cambiarTexto} defaultValue={nombreCiudad} />
        <button type="button" onClick={handleBuscar}>Buscar</button>


        </form>
    </div>)
}