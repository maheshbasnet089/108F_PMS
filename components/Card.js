import { useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"


const Card = ({data})=>{
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('details',{productId : data.id })}>
        <View style={styles.card}>
            <Image source ={{uri : data.productImage }} style={styles.image} />
            <View style={styles.textContainer}>
            <Text style={styles.name}>
                {data.productName}</Text>
            <Text style={styles.description}>{data.productDescription}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}


export default Card 

const styles = StyleSheet.create({

    card : {
        height : 300, 
        width : 300, 
        backgroundColor : '#fff',
        borderRadius : 10, 
        margin : 10, 
        elevation : 5,
        shadowColor : '#000',
        alignSelf : 'center',
        overflow : 'hidden',
        shadowOffset : {width : 0, height : 2},
        shadowOpacity : 0.4, 
        shadowRadius : 4
    },
    textContainer : {
        padding : 10
    },
    image : {
        flex : 1, 
        height : '70%', 
        width : '100%' ,
        
    },
    name : {
        fontSize : 18 ,
        fontWeight : 'bold',
        color : 'green'
    }
})