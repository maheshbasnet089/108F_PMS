import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import api from "../http/ApiService"



const ProductDetail = ()=>{
    const route = useRoute()
    const productId = route.params.productId
    const [product,setProduct] = useState({})
    useEffect(()=>{
    (
        async()=>{
            const result = await api.getById("products",productId)
            setProduct(result)
        }
    )()
    },[productId])
    return (
        <View style={styles.container}>
            <Image source={{uri : product.productImage}} style={styles.image} />
            <View style={styles.textContainer}>
            <Text style={styles.name}>
                {product.productName}</Text>
            <Text style={styles.description}>{product.productDescription}</Text>
            </View>
        </View>
    )
}
export default ProductDetail

const styles = StyleSheet.create({
    container : {
        flex : 1 , 
        backgroundColor : "#fff"
    },
    image : {
        width : '100%',
        height : 200,
    },
    name : {
        fontSize : 28 ,
        fontWeight : 'bold',
        color : 'green'
    },
    textContainer : {
        padding : 10
    },
})