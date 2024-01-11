import { useState } from "react"
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native"
import api from "../http/ApiService"


const ProductForm = ()=>{
    const [product,setProduct] = useState({
        productName : "",
        productDescription : "",
        productImage : ""
    })
    const handleInputChange = (name,text)=>{
        setProduct({
            ...product,
            [name] : text
        })
    }
    const handleCreateProduct = async ()=>{
        const {data,status}  = await api.add("products",product)
       
        if(status === 201){
            Alert.alert("Product Created", "The product was created successfully",[
                {
                    text : "OK" , onPress : ()=>{
                        console.log("OK pressed")
                        setProduct({
                            productName : "",
                            productDescription : "",
                            productImage : ""
                        })
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
           <Button title="Create Product" onPress={handleCreateProduct} />
        </View>
    )
}

export default ProductForm

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