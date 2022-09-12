import React, {useState} from "react";
import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    Alert,
    ScrollView,
    TouchableOpacity,
    Linking,
    ActionSheetIOS,
    Platform,
  } from 'react-native';
import {Container} from '../../../styles/FeedStyles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ReleaseDateCard} from '../../components/release-date-card';
import FormButton from '../../components/form-button';

const SeptemberScreen = ({navigation}) => {

  const SeptStockX1 = () => {
    Linking.openURL('https://stockx.com/air-jordan-5-retro-expression-w');
  };

  const SeptStockX2 = () => {
    Linking.openURL('https://www.nike.com/launch/t/air-jordan-3-fire-red?cp=usns_aff_nike_Content_PID_3137483_Sneaker%2BNews%2BInc&cid=4942550&cjevent=17bbf3f4326211ed83ef8a610a1c0e12');
  };

  const SeptStockX3 = () => {
    Linking.openURL
      ('https://www.nike.com/t/air-jordan-xxxvii-mens-basketball-shoes-qX0lC2/DD6958-060?cid=4942550&cp=usns_aff_nike_Content_PID_3137483_Sneaker+News+Inc&cjevent=a1f1261b32b111ed828e01730a1c0e10');
  };

  const SeptStockX4 = () => {
    Linking.openURL
      ('https://www.nike.com/launch/t/womens-air-jordan-1-denim?cp=usns_aff_nike_Content_PID_3137483_Sneaker%2BNews%2BInc&cid=4942550&cjevent=2e8b196b321c11ed826fd34a0a1c0e14');
  };

  const SeptStockX5 = () => {
    Linking.openURL
      ('https://stockx.com/jordan-1-retro-pinnacle-vachetta-tan');
  };

  const SeptStockX6 = () => {
    Linking.openURL
      ('https://www.nike.com/launch/t/big-kids-air-jordan-8-paprika?cp=usns_aff_nike_Content_PID_3137483_Sneaker%2BNews%2BInc&cid=4942550&cjevent=f39021a432b411ed826fd39b0a1c0e14');
  };

  const SeptStockX7 = () => {
    Linking.openURL
      ('https://stockx.com/air-jordan-1-retro-high-og-yellow-toe');
  };

  const SeptStockX8 = () => {
    Linking.openURL
      ('https://stockx.com/air-jordan-1-retro-low-og-unc');
  };

  const SeptStockX9 = () => {
    Linking.openURL
      ('https://stockx.com/air-jordan-37-hare');
  };

    const [loading, setLoading] = useState(true);

    if (loading) {
      setLoading(false);
    }
  
    return (
      <SafeAreaView style={{flex: 1}}>
        {loading ? (
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{alignItems: 'center'}}
          >
            <SkeletonPlaceholder>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 60, height: 60, borderRadius: 50}} />
                <View style={{marginLeft: 20}}>
                  <View style={{width: 120, height: 20, borderRadius: 4}} />
                  <View
                    style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                  />
                </View>
              </View>
              <View style={{marginTop: 10, marginBottom: 30}}>
                <View style={{width: 300, height: 20, borderRadius: 4}} />
                <View
                  style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
                />
                <View
                  style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
                />
              </View>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 60, height: 60, borderRadius: 50}} />
                <View style={{marginLeft: 20}}>
                  <View style={{width: 120, height: 20, borderRadius: 4}} />
                  <View
                    style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                  />
                </View>
              </View>
              <View style={{marginTop: 10, marginBottom: 30}}>
                <View style={{width: 300, height: 20, borderRadius: 4}} />
                <View
                  style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
                />
                <View
                  style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
                />
              </View>
            </SkeletonPlaceholder>
          </ScrollView>
        ) : (
          <ScrollView>
            <Container>
            <FormButton buttonTitle="Check em Out" onPress={SeptStockX1} />
              <ReleaseDateCard
                userName="September 10"
                name="Womens RETRO 5 LOW - “Expression”"
                postImg={require('../../assets/users/jordanlogo.webp')}
                liked={true}
              />
              <FormButton buttonTitle="Check em Out" onPress={SeptStockX2} />
              <ReleaseDateCard
                userName="September 10"
                name="RETRO 3 - White/Fire Red"
                postImg={require('../../assets/images/Sept2022/WhiteFireRed3.webp')}
                liked={true}
              />
              <FormButton buttonTitle="Check em Out" onPress={SeptStockX3} />
              <ReleaseDateCard
                userName="September 15"
                name="AJ XXXVII - Light Bone/Concord"
                postImg={require('../../assets/users/jordanlogo.webp')}
                liked={true}
              />
              <FormButton buttonTitle="Check em Out" onPress={SeptStockX4} />
              <ReleaseDateCard
                userName="September 22"
                name="Womens RETRO 1 - Denim"
                postImg={require('../../assets/users/jordanlogo.webp')}
                liked={true}
              />
              <FormButton buttonTitle="Check em Out" onPress={SeptStockX5} />
              <ReleaseDateCard
                userName="September 23"
                name="RETRO 1 - Vachetta Tan"
                postImg={require('../../assets/users/jordanlogo.webp')}
                liked={true}
              />
              <FormButton buttonTitle="Check em Out" onPress={SeptStockX6} />
              <ReleaseDateCard
                userName="September 23"
                name="Girls RETRO 8 - White/Black/Red"
                postImg={require('../../assets/users/jordanlogo.webp')}
                liked={true}
              />
              <FormButton buttonTitle="Check em Out" onPress={SeptStockX7} />
               <ReleaseDateCard
                userName="September 24"
                name="RETRO 1 - Taxi Yellow/Black"
                postImg={require('../../assets/users/jordanlogo.webp')}
                liked={true}
              />
              <FormButton buttonTitle="Check em Out" onPress={SeptStockX8} />
               <ReleaseDateCard
                userName="September 28"
                name="AJ 1 LOW - Dark Powder Blue"
                postImg={require('../../assets/users/jordanlogo.webp')}
                liked={true}
              />
              <FormButton buttonTitle="Check em Out" onPress={SeptStockX9} />
               <ReleaseDateCard
                userName="September 29"
                name="AJ XXXVII - “Hare”"
                postImg={require('../../assets/users/jordanlogo.webp')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default SeptemberScreen;