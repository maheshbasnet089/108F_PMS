import { useState } from "react"
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native"
import api from "../http/ApiService"
import { useNavigation, useRoute } from "@react-navigation/native"


const EditProductForm = ()=>{
    const navigation = useNavigation()
    const route = useRoute()
    const pastData = route.params.product
    const [product,setProduct] = useState(pastData)
    const handleInputChange = (name,text)=>{
        setProduct({
            ...product,
            [name] : text
        })
    }
    console.log(product)
    const handleEditProduct = async ()=>{
        const {status}  = await api.edit("products",product.id,product)
       
        if(status === 200){
            Alert.alert("Product edit", "The product was edit successfully",[
                {
                    text : "OK" , onPress : ()=>{
                       navigation.navigate("home")
                    }
                }
            ])
        }
    }
   
    return ( 
        <View style={styles.container}>
           <TextInput style={styles.input} value={product.productName} placeholder="Product Name" onChangeText={(text)=>handleInputChange('productName',text)} />

           <TextInput style={styles.input} placeholder="Product Image URL" value={product.productImage}  onChangeText={(text)=>handleInputChange('productImage',text)} />

           <TextInput  style={styles.input} placeholder="Product Description" 
           value={product.productDescription} 
           onChangeText={(text)=>handleInputChange('productDescription',text)} />
           <Button title="Edit Product" onPress={handleEditProduct} />
        </View>
    )
}

export default EditProductForm

const styles = StyleSheet.create({
    container : {
        padding : 16
    },
    input : {
        height : 40, 
        borderColor : 'gray',
        borderWidth : 1,
        marginBottom : 16,
        paddingHorizontal : 8 
    }
})