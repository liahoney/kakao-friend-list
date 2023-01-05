import { TouchableOpacity, View } from 'react-native'

const TabButton = ({onPress, isSelected, activeIconName, inactiveIconName, isIconFontisto, isIconIonicons,}) => {
    return (
        <TouchableOpacity onPress={onPress} 
        style={{backgroundColor: 'blue', flex: 1}}> 
           {isIconFontisto &&  <Fontisto name={isSelected? activeIconName: inactiveIconName} size={2} color="black"/>}
            {isIconFontisto && <Ionicons name={isSelected? activeIconName: inactiveIconName} size={24} color="black" /> }
        </TouchableOpacity> 
    )
}

export default ({selectedTabIdx, setSelectedTabIdx}) => {
    return (
        <View style={{ flexDirection: "row" ,width:"100%", height: 50, backgroundColor: "lightblue"}}>
        <TabButton 
         isSelected={selectedTabIdx === 0}
         onPress={() => setSelectedTabIdx(0)}
         activeIconName={"person"}
         inactiveIconName={"person"}
         isIconFontisto/>
         <TabButton 
         isSelected={selectedTabIdx === 1}
         onPress={() => setSelectedTabIdx(1)}
         activeIconName={"person"}
         inactiveIconName={"person"}
         isIconFontisto/>
         <TabButton 
         isSelected={selectedTabIdx === 2}
         onPress={() => setSelectedTabIdx(2)}
         activeIconName={"person"}
         inactiveIconName={"person"}
         isIconFontisto/>
         <TabButton 
         isSelected={selectedTabIdx === 3}
         onPress={() => setSelectedTabIdx(3)}
         activeIconName={"person"}
         inactiveIconName={"person"}
         isIconFontisto/>

        </View>
    )
}