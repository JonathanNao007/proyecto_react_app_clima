import { Button } from "@/components/Button";
import { Etiqueta } from "@/components/Etiqueta";
import { Header } from "@/components/Headers";
import { ImagenClima } from "@/components/ImagenClima";
import { AppContext } from "@/context/AppContext";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export function HomeView(){
    const context = useContext(AppContext)
    const [ciudad, setCiudad] = useState('-')
    const [grados, setGrados] = useState('-')
    const [velocidadViento, setVelocidadViento] = useState('-')
    const [clima, setClima] = useState('-')
    const router = useRouter();
    const [valorDiaNoche, setValorDiaNoche] = useState('dia') 
 
    // useEffect(() => {
    //     handleBuscar()
    // }, [])

    const handleBuscar = () => {
        fetch(context.API_URL(context.ciudad))
        .then(res=>res.json())
        .then((datos)=>{
            console.log('resultados:', datos)   
            setCiudad(`${datos.name}, ${datos.sys.country}`)
            setGrados(`${datos.main.temp}°`)
            const velocidadMK = covertMSKMH(datos.wind.speed)
            setVelocidadViento(`${velocidadMK} km/h`)
            setClima(`${datos.weather[0].description}`)
            let dn = (datos.weather[0].icon).includes('n') ? 'noche' : 'dia'
            setValorDiaNoche(`${dn}`)
            
        })
        .catch((res)=> {
            console.log(`Error al consumir el API: ${res}`)
        })
    }

     const cambiarTexto = (e) => {
        let valorActual = e.target.value
        context.defineCiudad(valorActual)
        console.log('setNombreCiudad:', valorActual)
    }

    return (
        <View style={styles.container}>
            <View>
                <Etiqueta>Idioma para el API: {context.idioma}</Etiqueta>
                <form>
                    <Etiqueta>Ciudad: </Etiqueta>
                    <input type="text" placeholder="Escribe la ciudad" onChange={cambiarTexto} defaultValue={context.ciudad}/>
                </form>
                <Button title="Buscar" action={handleBuscar}></Button>
            </View>
            <ScrollView>
                <Etiqueta>{ciudad}</Etiqueta>
                <Etiqueta>{clima}</Etiqueta>
                <Header>{grados}</Header>
                <Etiqueta>Viento: {velocidadViento}</Etiqueta>
                <ImagenClima momento={valorDiaNoche}></ImagenClima>
            </ScrollView>
            <View style={styles.bottom}>
                <Button title={context.isModoOscuro ? 'Modo Claro' : 'Modo Oscuro'} action={context.toggleModo}></Button>
                {/* <Etiqueta alin='right'>Ecerca de esta App</Etiqueta> */}
                {/* <Button title="Ecerca de esta App" action={()=> alert('Ejecutando, Acerca de esta app.')}></Button> */}
                <Button title="Ecerca de esta App" action={()=> router.push("/AboutView")}></Button>
                {/* <Link asChild href={'/AboutView'}><Button title="Ecerca de esta App"></Button></Link> */}
            </View>
        </View>
    )

    
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    bottom: {
        bottom: 0,
        padding:2,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

const covertMSKMH = (valor) => {
    if(valor >= 0){
        return Math.round(valor * 3.6).toFixed(1)
    }
    else{
        return 0
    }
    
}