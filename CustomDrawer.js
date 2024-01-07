import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { Button, Image, StyleSheet, Text, View } from "react-native"


const CustomDrawer = (props)=>{
    
    return (
        <DrawerContentScrollView >
           <View style={styles.container}>
                <View>
                <Image source={{uri :'https://media.licdn.com/dms/image/D5622AQFdvP33uaRzKA/feedshare-shrink_800/0/1689399958914?e=1706745600&v=beta&t=PC88C2InHSC1EakF_SOVB98U-CDEKiL9eyx8Gl5jGqg'}} height={120} width={120} style={{borderRadius : 50,alignSelf : 'center',borderColor :'black',borderWidth : 2 }}/>
                    <DrawerItemList  {...props}/>
                </View>
                <Button title="Add Product"/>
           </View>
        </DrawerContentScrollView>
           
        
    )
}

export default CustomDrawer


const styles = StyleSheet.create({
    container : {
        height : 730,
        display : 'flex',
        justifyContent : 'space-between',
       
    }
})