import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import api from "../http/ApiService"



const Home = ()=>{
    const [products,setProducts] = useState([])
    useEffect(()=>{
        (
            async()=>{
                const result = await api.getAll('products')
                setProducts(result)
            }
        )()
    },[])
    return (
        <View>
            <Text>This will be home page soon</Text>

        </View>
    )
}

export default Home