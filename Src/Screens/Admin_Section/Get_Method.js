import { View, Text, ScrollView, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Colors } from '../../Themes/Colors'
import { Fonts } from '../../Themes/Fonts'
import { Back_Icon, Bookmark, Bookmark1, Search } from '../../Themes/Images'
import { useIsFocused, useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';


const University_Name = (props) => {
  const [BtnState, setBtnState] = useState(0)
  const [items, setItems] = useState([]);
  const [itemStates, setItemStates] = useState(items.map(() => true));
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  

  useEffect(() => {
    getItems();
  }, [isFocused]);

  const getItems = () => {
    try {
      firestore()
        .collection('items')
        .get()
        .then(querySnapshot => {
          console.log('Total items: ', querySnapshot.size);
          let tempData = [];
          querySnapshot.forEach(documentSnapshot => {
            console.log(
              'Item ID: ',
              documentSnapshot.id,
              documentSnapshot.data(),
            );
            tempData.push({
              id: documentSnapshot.id,
              data: documentSnapshot.data(),
            });
          });
          console.log('Items data:', tempData);
          setItems(tempData);
        })
        .catch(error => {
          console.error('Error getting items from Firestore:', error);
        });
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const deleteItem = docId => {
    firestore()
      .collection('items')
      .doc(docId)
      .delete()
      .then(() => {
        console.log('Item deleted!');
        getItems();
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.Cart}>
      <TouchableOpacity onPress={() => { props.navigation.navigate('Uni_Detail', { item: item }) }} >
        <ImageBackground source={{ uri: item.data.imageUrls[1] }} style={styles.Product_Img} imageStyle={{ borderRadius: 10, alignItems: 'center' }} resizeMode='cover'>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Detail_cont} onPress={() => { props.navigation.navigate('Uni_Detail', { item: item }) }} >
        <Text style={styles.Title}>{item.data.name}</Text>
        <View style={styles.City_Cont}>
          <Text style={styles.City_Text}>{item.data.City}</Text>
        </View>
      </TouchableOpacity>
      {itemStates[index] ? (
        <TouchableOpacity onPress={() => toggleItemState(index)} style={{ width: 30, height: 30, alignSelf: 'flex-end', right: "5%", bottom: "2%" }} >
          <Image source={Bookmark} style={styles.Wishlist} />
        </TouchableOpacity>
      ) : <TouchableOpacity onPress={() => toggleItemState(index)} style={{ width: 30, height: 30, alignSelf: "flex-end", right: "5%", bottom: "2%" }} >
        <Image source={Bookmark1} style={[styles.Wishlist, { tintColor: Colors.Green }]} />
      </TouchableOpacity>}

    </View>
  );

  // Function to toggle the state of a specific item
  const toggleItemState = (index) => {
    const updatedStates = [...itemStates];
    updatedStates[index] = !updatedStates[index];
    setItemStates(updatedStates);
  };

  return (
    <ScrollView style={styles.MainCont}  showsVerticalScrollIndicator={false}>
      <View style={styles.Header} >
        <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={styles.Back_Cont} >
          <Image source={Back_Icon} style={styles.Back_Icon} />
        </TouchableOpacity>
        <Text style={styles.Back_Txt} >Addmission</Text>
        <View style={styles.Auth_Cont} >
        </View>
      </View>
      <View style={styles.Input_With_Filter} >
      <View style={styles.Input_Cont} >
        <Image source={Search} style={styles.SearchIcon} />
        <TextInput placeholder='Search here.....' placeholderTextColor={Colors.Grey9} style={styles.Search_Input} />
      </View>
      <TouchableOpacity onPress={() => {  }}  >
          <Image source={require('../../Assets/Icons/filter.png')} style={styles.Filter} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.Btn_Cont} showsHorizontalScrollIndicator={false}  >
        <TouchableOpacity style={[styles.Btn, BtnState === 0 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(0) }}>
          <Text style={[styles.Btn_Txt, BtnState === 0 ? styles.ActiveBtn_Txt : null]} >All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn, BtnState === 1 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(1) }}>
          <Text style={[styles.Btn_Txt, BtnState == 1 ? styles.ActiveBtn_Txt : null]} >Goverment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn, BtnState === 2 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(2) }}>
          <Text style={[styles.Btn_Txt, BtnState == 2 ? styles.ActiveBtn_Txt : null]} >Semi-Goverment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn, BtnState === 3 ? styles.ActiveBtn : null]} onPress={() => { setBtnState(3) }}>
          <Text style={[styles.Btn_Txt, BtnState === 3 ? styles.ActiveBtn_Txt : null]} >Private</Text>
        </TouchableOpacity>
      </ScrollView>


      <View style={styles.FlatList_Cont} >
        <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  )
}

export default University_Name

const styles = StyleSheet.create({
  MainCont: {
    backgroundColor: Colors.Bg,
    padding: '5%',
    
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginVertical:"3%",
  },
  Back_Cont: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: "2%"
  },
  Back_Txt: {

    color: Colors.Green,
    fontFamily: Fonts.SF_Bold,
    lineHeight: 26,
    fontSize: 22,
    fontWeight: "700",
    marginRight: "5%"
  },
  Back_Icon: {
    width: 20, height: 20,
    resizeMode:"contain"
  },
  Auth_Cont: {
    flexDirection: 'row',
    alignItems: "center",
    marginRight: "5%"
  },
  FlatList_Cont: {
    paddingBottom: "10%"
  },
  Cart: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    padding: '2%',
    flexDirection: "row",
    elevation:2,
    marginBottom:"3%",
    height:120,
    alignItems:"center"
  },
  Product_Img: {
    width: 100, height: 100,

  },
  City_Cont: {
    backgroundColor: '#D0A700',
    paddingHorizontal: "3%",
    paddingVertical: '2%',
    alignItems: 'center',
    width: 150,
    borderRadius: 5,
    marginTop: "2%"

  },
  City_Text: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.White,
    fontFamily: Fonts.SF_Medium,
  },
  Wishlist: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    top: "40%",
    right: '40%'
  },
  Title: {
    fontSize: 14,
    fontFamily: Fonts.SF_Bold,
    fontWeight: "600",
    lineHeight: 18,
    color: Colors.Black,
    marginBottom: "3%",
    height:50,
  },
  Detail_cont: {
    justifyContent: "center",
    marginLeft: "4%",
    width: "60%"
  },
  Input_With_Filter:{
   justifyContent:"space-around",
   flexDirection: "row",
   borderWidth: 1,
   elevation: 3,
   backgroundColor: Colors.White,
   borderColor: Colors.Black,
   borderRadius: 10,
   paddingHorizontal: "2%",
   marginTop: "3%",
   alignItems:"center",
   height:55
  },
  Input_Cont: {
    flexDirection: "row",
    alignItems: "center",
  },
  SearchIcon: {
    width: 25, height: 25,
    marginRight: "2%"
  },
  Filter:{
    width: 25, height: 25,
    marginLeft: "2%"
  },
  Search_Input: {
    width: "70%",
    color: Colors.Black,
    fontFamily: Fonts.SF_Medium,
    fontSize: 14,
    backgroundColor: Colors.White
  },
  Btn_Cont: {
    marginTop: 20,
    marginBottom: 30

  },
  Btn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: Colors.White,
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: Colors.Grey4
  },
  ActiveBtn: {
    backgroundColor: Colors.Green
  },
  Btn_Txt: {
    fontSize: 16,
    fontFamily: Fonts.SF_SemiBold,
    lineHeight: 20,
    color: Colors.Black
  },
  ActiveBtn_Txt: {
    color: Colors.White
  }


})



// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import { useIsFocused, useNavigation } from '@react-navigation/native';

// const Get_Method = () => {
  // const isFocused = useIsFocused();
  // const navigation = useNavigation();
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   getItems();
  // }, [isFocused]);

  // const getItems = () => {
  //   try {
  //     firestore()
  //       .collection('items')
  //       .get()
  //       .then(querySnapshot => {
  //         console.log('Total items: ', querySnapshot.size);
  //         let tempData = [];
  //         querySnapshot.forEach(documentSnapshot => {
  //           console.log(
  //             'Item ID: ',
  //             documentSnapshot.id,
  //             documentSnapshot.data(),
  //           );
  //           tempData.push({
  //             id: documentSnapshot.id,
  //             data: documentSnapshot.data(),
  //           });
  //         });
  //         console.log('Items data:', tempData);
  //         setItems(tempData);
  //       })
  //       .catch(error => {
  //         console.error('Error getting items from Firestore:', error);
  //       });
  //   } catch (error) {
  //     console.error('Error fetching items:', error);
  //   }
  // };

  // const deleteItem = docId => {
  //   firestore()
  //     .collection('items')
  //     .doc(docId)
  //     .delete()
  //     .then(() => {
  //       console.log('Item deleted!');
  //       getItems();
  //     })
  //     .catch(error => {
  //       console.error('Error deleting item:', error);
  //     });
  // };

//   return (
   
   
   
   
   
   
//     <View style={styles.container}>
//       <FlatList
//         data={items}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item, index }) => {
//           return (
//             <View style={styles.itemView}>
//               <View style={styles.imageContainer}>
               
//               {item.data.imageUrls.map((imageUrl, index) => (
//                   <Image
//                     key={index}
//                     source={{ uri: imageUrl }}
//                     style={styles.itemImage}
//                   />
//                 ))}
//               </View>
//               <View style={styles.nameView}>
//                 <Text style={styles.nameText}>{item.data.name}</Text>
//                 <Text style={styles.descText}>{item.data.description}</Text>
//                 <View style={styles.priceView}>
//                   <Text style={styles.priceText}>
//                     {'$' + item.data.discountPrice}
//                   </Text>
//                   <Text style={styles.discountText}>
//                     {'$' + item.data.price}
//                   </Text>
//                 </View>
//               </View>
//               <Image
//               key={index}
//               source={{ uri: item.data.imageUrls[1] }}
//               style={styles.itemImage}
//             /> 
//               <View style={{ margin: 10 }}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     navigation.navigate('Edit_Data', {
//                       data: item.data,
//                       id: item.id,
//                     });
//                   }}>
//                   <Image
//                     source={require('../../Assets/Icons/edit.png')}
//                     style={styles.icon}
//                   />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() => {
//                     deleteItem(item.id);
//                   }}>
//                   <Image
//                     source={require('../../Assets/Icons/remove.png')}
//                     style={[styles.icon, { marginTop: 20 }]}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default Get_Method;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   itemView: {
//     flexDirection: 'row',
//     width: '90%',
//     alignSelf: 'center',
//     backgroundColor: '#fff',
//     elevation: 4,
//     marginTop: 10,
//     borderRadius: 10,
//     height: 100,
//     marginBottom: 10,
//   },
//   imageContainer: {
//     flexDirection: 'row',
//   },
//   itemImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 5,
//     margin: 5,
//   },
//   nameView: {
//     width: '43%',
//     margin: 10,
//   },
//   priceView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   nameText: {
//     fontSize: 18,
//     fontWeight: '700',
//   },
//   descText: {
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   priceText: {
//     fontSize: 18,
//     color: 'green',
//     fontWeight: '700',
//   },
//   discountText: {
//     fontSize: 17,
//     fontWeight: '600',
//     textDecorationLine: 'line-through',
//     marginLeft: 5,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });
