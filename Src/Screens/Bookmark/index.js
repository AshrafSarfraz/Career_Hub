import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Colors } from '../../Themes/Colors';
import { Bookmark1 } from '../../Themes/Images';
import { Removetocart } from '../../Redux_Toolkit/wishlist/Uni_Wishlist';
import { styles } from './style';
import { RemoveJob } from '../../Redux_Toolkit/wishlist/Job_slice';
import { Remove_Scholarship } from '../../Redux_Toolkit/wishlist/Scholarship_slice';

const Bookmarks = ({ navigation }) => {
  const dispatch = useDispatch()
  const Uni = useSelector((state) => state.uni); // Accessing 'user' slice
  const Job = useSelector((state) => state.job);
  const Scholarship_D = useSelector((state) => state.scholarship);

  const [btnstate, setbtnstate] = useState(0)

  const renderItem = ({ item, index }) => (
    <View style={styles.Cart}>
      <TouchableOpacity style={styles.Img_Cont} onPress={() => { navigation.navigate('Uni_Detail', { item: item }) }} >
        <Image source={{ uri: item.data.Logo[0] }} style={styles.Product_Img} resizeMode='cover' />
        <View style={styles.Title_City_Container}>
          <Text style={styles.Title}>{item.data.name}</Text>
          <View style={styles.City_Cont}>
            <Text style={styles.City_Text}>{item.data.City}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ width: "10%", height: 90, justifyContent: "flex-end" }}>
        <TouchableOpacity onPress={() => { dispatch(Removetocart(item.id)) }} style={{}} >
          <Image source={Bookmark1} style={[styles.Wishlist, { tintColor: Colors.Green }]} />
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderItem2 = ({ item, index }) => (
    <View style={styles.Cart}>
      <TouchableOpacity style={styles.Img_Cont} onPress={() => { navigation.navigate('Jobs_Details', { item: item }) }} >
        <Image source={{ uri: item.data.poster[0] }} style={styles.Product_Img} resizeMode='cover' />
        <View style={styles.Title_City_Container}>
          <Text style={styles.Title}>{item.data.Job_Name}</Text>
          <View style={styles.City_Cont}>
            <Text style={styles.City_Text}>{item.data.Job_City}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ width: "10%", height: 90, justifyContent: "flex-end" }}>
        <TouchableOpacity onPress={() => { dispatch(RemoveJob(item.id)) }} style={{}} >
          <Image source={Bookmark1} style={[styles.Wishlist, { tintColor: Colors.Green }]} />
        </TouchableOpacity>
      </View>
    </View>
  );
  const renderItem3 = ({ item, index }) => (
    <View style={styles.Cart}>
      <TouchableOpacity style={styles.Img_Cont} onPress={() => { navigation.navigate('Sch_Details', { item: item }) }} >
        <Image source={{ uri: item.data.Logo[0] }} style={styles.Product_Img} resizeMode='cover' />
        <View style={styles.Title_City_Container}>
          <Text style={styles.Title}>{item.data.Sch_name}</Text>
          <View style={styles.City_Cont}>
            <Text style={styles.City_Text}>{item.data.Status}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ width: "10%", height: 90, justifyContent: "flex-end" }}>
        <TouchableOpacity onPress={() => { dispatch(Remove_Scholarship(item.id)) }} style={{}} >
          <Image source={Bookmark1} style={[styles.Wishlist, { tintColor: Colors.Green }]} />
        </TouchableOpacity>
      </View>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.Header_Txt} >My Bookmarks</Text>
      </View>
      <View style={styles.Btn_Cont}>
        <TouchableOpacity onPress={() => { setbtnstate(0) }} style={[btnstate === 0 ? styles.Active_Btn : styles.Btn]} >
          <Text style={[btnstate === 0 ? styles.Active_Txt : styles.txt]} >University</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setbtnstate(1) }} style={[btnstate === 1 ? styles.Active_Btn : styles.Btn]} >
          <Text style={[btnstate === 1 ? styles.Active_Txt : styles.txt]}>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setbtnstate(2) }} style={[btnstate === 2 ? styles.Active_Btn : styles.Btn]} >
          <Text style={[btnstate === 2 ? styles.Active_Txt : styles.txt]} >Scholarship</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.FlatList_Cont} >
        {btnstate === 0 ?
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={Uni}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}

          /> : null}
        {btnstate === 1 ?
          <FlatList
            data={Job}
            renderItem={renderItem2}
            keyExtractor={(item) => item.id}
          /> : null}
        {btnstate === 2 ?
          <FlatList
            data={Scholarship_D}
            renderItem={renderItem3}
            keyExtractor={(item) => item.id}
          /> : null}
      </View>

    </View>
  );
};

export default Bookmarks;





