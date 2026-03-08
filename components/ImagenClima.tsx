import { useEffect, useState } from "react"
import { Image, StyleSheet, View } from "react-native"

interface ImagenClima{
    momento: string
}

export function ImagenClima(props){
    const [imagenPath, setImagenPath] = useState('imagenDia')
    const setImagenDia = ()=> setImagenPath('imagenDia')
    const setImagenNoche = ()=> setImagenPath('imagenNoche')

    useEffect(()=>{
        if(props.momento === 'noche'){
            setImagenNoche()
        }
        else{
            setImagenDia()
        }
    }, [])
    const source = localImages[imagenPath];
   return(
    <View>
        <Image
        style={style.imagenStyle}
        source= {source}
        resizeMode="contain"        
        />
    </View>
   ) 
}

const style = StyleSheet.create({
    imagenStyle:{
        width: 350
    }
})

const localImages = {
    'imagenDia' : require('../assets/images/dia_clima.png'),
    'imagenNoche': require('../assets/images/noche_clima.png')
}