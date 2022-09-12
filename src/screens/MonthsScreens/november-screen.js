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

const NovemberScreen = () => {

  // const NovStockX1 = () => {
  //   Linking.openURL('https://www.ebay.com/itm/144663112600?chn=ps&var=443903338461&_trkparms=ispr%3D1&amdata=enc%3A1r_dKR_hrRqy4ZMCR7yOhhg17&norover=1&mkevt=1&mkrid=711-222657-2056-0&mkcid=2&itemid=443903338461_144663112600&targetid=1678750632422&device=c&mktype=&googleloc=9030123&poi=&campaignid=13657268306&mkgroupid=124981971798&rlsatarget=pla-1678750632422&abcId=9300598&merchantid=6296724&gclid=CjwKCAjwsfuYBhAZEiwA5a6CDBMZofYPWOo8O9y-1pOupHFf7nxn-7cLANBGK5mzcy30km5aDMCjxhoCyhEQAvD_BwE');
  // };

  // const NovStockX2 = () => {
  //   Linking.openURL('https://www.mercari.com/us/item/m51314062071/?gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_campaign=17507132121&utm_content=t0&adgroup=140371165560&network=g&device=c&merchant_id=134611514&product_id=m51314062071&product_id=295732879599&gclid=CjwKCAjwsfuYBhAZEiwA5a6CDI8tb-9BA7VhlYISYDyWkf8c0coU6oT0YmIMimAL1ujwykUIy6iyMhoCA-AQAvD_BwE');
  // };

  const NovStockX3 = () => {
    Linking.openURL('https://stockx.com/air-jordan-7-retro-cardinal-2022');
  };

  // const NovStockX4 = () => {
  //   Linking.openURL('https://stockx.com/air-jordan-12-retro-hyper-royal-w');
  // };

  // const NovStockX5 = () => {
  //   Linking.openURL('https://stockx.com/air-jordan-12-retro-hyper-royal-w');
  // };

  // const NovStockX6 = () => {
  //   Linking.openURL('https://stockx.com/air-jordan-12-retro-hyper-royal-w');
  // };
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
              {/* <FormButton buttonTitle="Check em Out" onPress={NovStockX1} /> */}
              <ReleaseDateCard
                userName="November 5"
                name="RETRO 9 - White/Fire Red/Cool Grey"
                postImg={require('../../assets/users/jordanlogo.webp')}
                liked={true}
              />
              {/* <FormButton buttonTitle="Check em Out" onPress={NovStockX2} /> */}
               <ReleaseDateCard
                userName="November 11"
                name="Womens RETRO 11 - “Blue Velvet”"
                postImg={require('../../assets/images/Nov2022/WmnsMidnightNavy11.jpeg')}
                liked={true}
              />
              <FormButton buttonTitle="Check em Out" onPress={NovStockX3} />
              <ReleaseDateCard
                userName="November 12"
                name="RETRO 7 - White/Cardinal Red"
                postImg={require('../../assets/images/Nov2022/Cardinal7.jpeg')}
                liked={true}
              />
              {/* <FormButton buttonTitle="Check em Out" onPress={NovStockX4} /> */}
              <ReleaseDateCard
                userName="November 17"
                name="Limited AJ 4 MA MANIERE - Chocolate"
                postImg={require('../../assets/users/jordanlogo.webp')}
                liked={true}
              />
              {/* <FormButton buttonTitle="Check em Out" onPress={NovStockX5} /> */}
              <ReleaseDateCard
                userName="November 19"
                name="RETRO 1 - “Vintage Chicago”"
                postImg={require('../../assets/images/Nov2022/OGChicago1.jpg')}
                liked={true}
              />
              {/* <FormButton buttonTitle="Check em Out" onPress={NovStockX6} /> */}
              <ReleaseDateCard
                userName="November 26"
                name="RETRO 1 - White/Gorge Green"
                postImg={require('../../assets/images/Nov2022/WhiteGorgeGreen1.jpeg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default NovemberScreen;