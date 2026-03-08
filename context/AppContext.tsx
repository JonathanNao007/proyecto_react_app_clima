import { createContext, useState } from "react";
import config from "../app/API/config.json";

interface IAppContext {
    isModoOscuro: boolean,
    toggleModo: () => void,
    getTextColor: () => string,
    getBackGroundColor: () => string,
    setEsp: ()=> void,
    setIng: ()=> void
}

export const AppContext:IAppContext = createContext({})

interface IAppProvider {
    children : any
}

const Dark = '#163a47';
const Light = '#ededed';

export const AppProvider = ({children}: IAppProvider) => {
    const [isModoOscuro, setIsModoOscuro] = useState(false)
    const getTextColor = () => isModoOscuro ? Light : Dark
    const getBackGroundColor = () => isModoOscuro ? Dark : Light
    const toggleModo = () => setIsModoOscuro(!isModoOscuro)
    //Datos de configuracion del API
    const [idioma, setIdioma] = useState(config.Idioma.Español)
    const setEsp = ()=>setIdioma(config.Idioma.Español)
    const setIng = ()=>setIdioma(config.Idioma.Ingles)
    const [ciudad, setCiudad] = useState(config.CiudadInicial)
    const defineCiudad = (nuevoValor:string)=> setCiudad(nuevoValor)
    //
    const [image, setImagen] = useState() 
    //
    const API_KEY = config.ApiKey
    const API_URL = (ciudad: string) => `${config.Url}?q=${ciudad}&lang=${idioma}&units=metric&appid=${API_KEY}`

    return (
        <AppContext.Provider value={{toggleModo, isModoOscuro, getTextColor, getBackGroundColor, idioma, setEsp, setIng, API_KEY, API_URL, defineCiudad, ciudad}}>
            {children}
        </AppContext.Provider>
    )
}
