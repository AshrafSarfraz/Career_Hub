import { View, Text,ScrollView, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

import { Menu } from '../../Themes/Images'
import { styles } from './style'

const Policies = ({navigation}) => {
  return (
  <ScrollView  contentContainerStyle={styles.MainCont} >
    <View  style={styles.Header} >
        <TouchableOpacity  onPress={()=>{navigation.openDrawer();}} >
       <Image  source={Menu} style={styles.Menu} />
       </TouchableOpacity>
       <Text style={styles.Vibes} >Terms & Privacy Policy</Text>
       <Text style={styles.Vibes} >     </Text>
    </View>
     <View  style={styles.Body} >
      <View style={styles.PoliciesCont} >
      <Text style={styles.Dot} >.</Text>
      <Text style={styles.Policies_Txt} >Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</Text>
     </View>
     <View style={styles.PoliciesCont} >
      <Text style={styles.Dot} >.</Text>
      <Text style={styles.Policies_Txt} >Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.</Text>
     </View>
     <View style={styles.PoliciesCont} >
      <Text style={styles.Dot} >.</Text>
      <Text style={styles.Policies_Txt} >Conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</Text>
     </View>
     
     
     
     </View>



  </ScrollView>
  )
}

export default Policies
