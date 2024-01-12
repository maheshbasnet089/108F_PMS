import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import api from "../http/ApiService"



const ProductDetail = ()=>{
    const navigation = useNavigation()
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
    const deleteProduct = async()=>{
        // delete product with that productId 
        const result = await api.delete("products",productId)
        console.log(result.status)
        if(result.status === 200){
            Alert.alert("Delete Success","The Product was delete successfully",[
                {
                    text : "OK", onPress : ()=>{
                        navigation.navigate("home")
                    }
                }
            ])
        }else{
            alert("Something Went Wrong")
        }
    }

    const editProduct = ()=>{

    }


    return (
        <View style={styles.container}>
            <Image source={{uri : product.productImage}} style={styles.image} />
            <View style={styles.textContainer}>
            <Text style={styles.name}>
                {product.productName}</Text>
            <Text style={styles.description}>{product.productDescription}</Text>
           <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.deleteButton} onPress={deleteProduct}>
                <Text style={styles.deleteButtonText}>Delete </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton} onPress={editProduct}>
                <Text style={styles.editButtonText} onPress={()=>navigation.navigate("editProductForm",{product})}>Edit </Text>
            </TouchableOpacity>
           </View>
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
    deleteButton : {
        backgroundColor : 'red', 
        width : 70, 
        padding : 8,
        marginTop : 10
    },
    deleteButtonText : {
        color : "white",
        fontWeight : 'bold', 
        textAlign : 'center'
    },
    editButton : {
        backgroundColor : 'green', 
        width : 70, 
        padding : 8,
        marginTop : 10,
        marginLeft : 10
    },
    editButtonText : {
        color : "white",
        fontWeight : 'bold', 
        textAlign : 'center'
    },
    buttonContainer : {
        display : 'flex',
        flexDirection : 'row'
        
    }
})