 

// import React, { useState, useEffect } from "react";
// import { FlatList, Image, StyleSheet, Text, View ,TouchableOpacity, ScrollView} from "react-native";
// import LinearGradient from "react-native-linear-gradient"; 
// import ProductCard from "../components/ProductCard"; 
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { fonts } from "../utils/fonts";  

// const HomeScreen = () => {
// //   const [products, setProducts] = useState(data.products);
// //   const [isFavorite, setIsFavorite] = useState([]);

//   const [favorites, setFavorites] = useState([]);
//   const navigation = useNavigation();
//   const handleBack = () => {
//     navigation.navigate("HOME");
//   };


//   useEffect(() => {
//     loadFavorites(); 
//   }, []);

//   const loadFavorites = async () => {
//     try {
//       const storedFavorites = await AsyncStorage.getItem("isFavorite");
//       if (storedFavorites !== null) {
//         setFavorites(JSON.parse(storedFavorites));
//       }
//     } catch (error) {
//       console.error("Error loading favorites from AsyncStorage:", error);
//     }
//   };

 
 
 

//   const handleProductDetails = (item) => {
//     navigation.navigate("PRODUCT_DETAILS", { item });
//   };

//   const toggleFavorite = (item) => {
//     const updatedProducts = favorites.map((prod) => {
//       if (prod.id === item.id) {
//         return {
//           ...prod,
//           favorites: !prod.favorites,
//         };
//       }
//       return prod;
//     });
//     setFavorites(updatedProducts);
//     // const updatedFavorites = updatedProducts.filter((prod) => prod.isFavorite);
//   };

//   // Save isFavorite state to local storage whenever it changes
// //   useEffect(() => {
// //     saveIsFavorite();
// //   }, [isFavorite]);

//   return (
//     <ScrollView>
//     <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
//          <View style={styles.header}> 
//       <TouchableOpacity  onPress={handleBack}  > 
//         <Image
//           source={require("../assets/arrowback.png")}
//           style={styles.appBackIcon}
      
//         />
//       </TouchableOpacity> 
//      <Text style={styles.titleText}>StylishHim</Text> 
//     <View>
//       <Image
//         source={require("../assets/favorite.png")}
//         style={styles.profileImage}
//       />
//     </View> 
//   </View>
//   <FlatList
//         ListHeaderComponent={
//           <></>
//         }
//         data={favorites}
//         numColumns={2}
//         renderItem={({ item }) => (
//           <ProductCard
//             item={item}
//             handleProductClick={handleProductDetails}
//             toggleFavorite={toggleFavorite}
//           />
//         )}
//         showsVerticalScrollIndicator={false}
//       />
      
//     </LinearGradient>
//     </ScrollView> 
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#FCF7EE",
//   },
//   inputContainer: {
//     width: "100%",
//     backgroundColor: "#FFFFFF",
//     height: 48,
//     borderRadius: 12,
//     alignItems: "center",
//     flexDirection: "row",
//     marginTop: 15,
//   },
//   searchIcon: {
//     height: 26,
//     width: 26,
//     marginHorizontal: 12,
//   },
//   textInput: {
//     fontSize: 18,
//   },
//   appDrawerContainer: {
//     backgroundColor: "#FCF7EE",
    
//     height: 44,
//     width: 44,
//     borderRadius: 22,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   applogo:{
//     color:'#111',
//     fontSize:24,
//     fontWeight:'bold'
//   },
//   appDrawerIcon: {
//     height: 30,
//     width: 30,
//   },
//   appBackIcon: {
//     height: 24,
//     width: 24,
//     marginLeft: 10,
//     marginTop:8
//   },
//   profileImage: {
//     height: 25,
//     width: 25,
//     marginTop:6
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop:10,
//     padding:10
//   },
//   titleText: {
//     fontSize: 28,
//     fontFamily: fonts.regular,
//     color: "#000000",
//     fontWeight:'bold'
//   },
//   profilecontainer:{
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems:'center',
//     marginTop:20
//   },
//   userImg:{
//     height:100,
//     width:100,
//   },
//   textheading:{
//     color:'#111',
//     fontSize:26,
//     fontWeight:'bold'

//   },
// });


import React, { useState, useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View ,TouchableOpacity, ScrollView} from "react-native";
import LinearGradient from "react-native-linear-gradient"; 
import ProductCard from "../components/ProductCard"; 
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fonts } from "../utils/fonts";  

const HomeScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate("HOME");
  };

  useEffect(() => {
    loadFavorites(); 
  }, []);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("isFavorite");
      if (storedFavorites !== null) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Error loading favorites from AsyncStorage:", error);
    }
  };

  const handleProductDetails = (item) => {
    navigation.navigate("PRODUCT_DETAILS", { item });
  };

  const toggleFavorite = (item) => {
    const updatedProducts = favorites.map((prod) => {
      if (prod.id === item.id) {
        return {
          ...prod,
          favorites: !prod.favorites,
        };
      }
      return prod;
    });
    setFavorites(updatedProducts);
  };

  return (
    
      <ScrollView colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
         <View style={styles.header}> 
            <TouchableOpacity onPress={handleBack}> 
              <Image
                source={require("../assets/arrowback.png")}
                style={styles.appBackIcon}
              />
            </TouchableOpacity> 
           <Text style={styles.titleText}>StylishHim</Text> 
           <View>
             <Image
               source={require("../assets/favorite.png")}
               style={styles.profileImage}
             />
           </View> 
         </View>
        {favorites.length === 0 ? (
          <Text style={styles.noFavoritesText}>Oops, your favorite list is empty</Text>
        ) : (
          <FlatList
            style={{marginBottom:15}}
            data={favorites}
            numColumns={2}
            renderItem={({ item }) => (
              <ProductCard
                item={item}
                handleProductClick={handleProductDetails}
                toggleFavorite={toggleFavorite}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </ScrollView> 
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FCF2DC",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 10,
  },
  titleText: {
    fontSize: 28,
    fontFamily: fonts.regular,
    color: "#000000",
    fontWeight: "bold",
  },
  appBackIcon: {
    height: 24,
    width: 24,
    marginLeft: 10,
    marginTop: 8,
  },
  profileImage: {
    height: 25,
    width: 25,
    marginTop: 6,
  },
  noFavoritesText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    color:'red'
  },
});
