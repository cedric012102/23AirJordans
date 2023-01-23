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

const OctoberScreen = () => {

  const OctStockX1 = () => {
    Linking.openURL('https://stockx.com/air-jordan-12-retro-hyper-royal-w');
  };

  // const OctStockX2 = () => {
  //   Linking.openURL('https://www.ebay.com/sch/15709/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=DH7138-006&_sop=1&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338788586&customid=DH7138006&toolid=10001&mkevt=1');
  // };

  const OctStockX3 = () => {
    Linking.openURL('https://stockx.com/air-jordan-11-retro-low-ie-light-orewood-brown');
  };

  const OctStockX4 = () => {
    Linking.openURL('https://stockx.com/air-jordan-3-retro-black-cement-gold-w');
  };

  // const OctStockX5 = () => {
  //   Linking.openURL('https://www.ebay.com/itm/325333626909?var=514252812352&hash=item4bbf65301d:g:1CUAAOSwrdtjGBv4&amdata=enc%3AAQAHAAAA8BTusYAvIiHKKdmxFSTuT0Z%2FtPfl4TYGBnu9YwLU1C%2Fdd7v4IrbcJLIcEdg91MlzfbFuRfeCfbid8FcSLok7osXVKz0pJzFqpLYvdfJ0dQM4z2%2FMpMY%2FgmgH3FC%2BMjISSwJew5tTbmBV6gRytRu5lEigRhuu5K1iJ3Gag9YrKCZS36eigOrh4TId44a7H3s%2FoAVM76pv%2FHKR%2FkZNaBUmM4x%2FQdxvFCUxXfL6aVPcyKxtjbYlXBl%2FrdiT4oxfZ66QlWPelVwiPLuD%2BVp5mENZPOylBwAF1CsyNbX0kE%2FLbcK7PDyRaL6Ro%2FNPE2fXgtEE1Q%3D%3D%7Ctkp%3ABFBMkLi-quZg');
  // };

  const OctStockX6 = () => {
    Linking.openURL('https://stockx.com/air-jordan-6-retro-metallic-silver');
  };

  const OctStockX7 = () => {
    Linking.openURL(
      'https://www.goat.com/sneakers/air-jordan-7-retro-se-gs-afrobeats-dz4730-200',
    );
  };

  const OctStockX8 = () => {
    Linking.openURL('https://stockx.com/air-jordan-4-retro-white-midnight-navy');
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
              {/* <FormButton buttonTitle="Check em Out" onPress={OctStockX1} /> */}
              <ReleaseDateCard
                // userName="October 1"
                name="Come Back Later"
                postImg={require('../../assets/users/jordanlogo.webp')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default OctoberScreen;