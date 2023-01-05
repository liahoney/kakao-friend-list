import { ScrollView, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Profile from "../src/Profile";
import Margin from "./Margin";



export default (props) => {
    console.log("isOpened???", props.isOpened)
/**
 * Case1. 삼항연산자
 */
//   return props.isOpened ?  (
//     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: bottomSpace}}>
//       {props.data.map((item, index) => (
//        <View    key={index}>
//          <Profile
//           uri={item.uri}
//           name={item.name}
//           introduction={item.introduction}
//         />
//         <Margin height={13}/>
//        </View>
//       ))}
//     </ScrollView>
//   ): null;

  /**
   * Case2. If문으로 예외처리 
   * */
//   if(!props.isOpened) return null ; 
  
//    return (
//         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: bottomSpace}}>
//           {props.data.map((item, index) => (
//            <View>
//              <Profile
//               key={index}
//               uri={item.uri}
//               name={item.name}
//               introduction={item.introduction}
//             />
//             <Margin height={13}/>
//            </View>
//           ))}
//         </ScrollView>
//       )
        
/**
 * Case3. && 이용
 */

return props.isOpened && (
            <ScrollView showsVerticalScrollIndicator={false}   >
              {props.data.map((item, index) => (
               <View>
                 <Profile
                  key={index}
                  uri={item.uri}
                  name={item.name}
                  introduction={item.introduction}
                />
                <Margin height={13}/>
               </View>
              ))}
            </ScrollView>
          )
 
  
};
