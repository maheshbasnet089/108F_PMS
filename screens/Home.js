import { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import api from "../http/ApiService"
import Card from "../components/Card"



const Home = ()=>{
    const [products,setProducts] = useState([])
    useEffect(()=>{
        (
            async()=>{
                const result = await api.getAll('products')
                console.log(result)
                setProducts(result)
            }
        )()
    },[])
    return (
        <View>
            <FlatList data={products} renderItem={({item})=>(
                    <Card data={item}/>  
    )} keyExtractor={(item)=>item.id} />

        </View>
    )
}

export default Home