import { useEffect, useState } from "react"
import { FlatList, RefreshControl, Text, View } from "react-native"
import api from "../http/ApiService"
import Card from "../components/Card"



const Home = ()=>{
    const [products,setProducts] = useState([])
    const [refreshing,setRefreshing] = useState(false)
    const fetchProducts = async()=>{
       try {
        const result = await api.getAll('products')
        setProducts(result)
       } catch (error) {
        console.log(error)
       }finally{
        setRefreshing(false)
       }
    }
    const handleRefresh = async ()=>{
        console.log("triggered")
       setRefreshing(true)
       await fetchProducts()

    }
    useEffect(()=>{
        
        fetchProducts()

    },[])
    return (
        <View>
            <FlatList data={products} renderItem={({item})=>(
                    <Card data={item}  />  
    )} keyExtractor={(item)=>item.id}  
    refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} colors={['red','blue']}  progressBackgroundColor={'white'}  />
    }
    
    />

        </View>
    )
}

export default Home