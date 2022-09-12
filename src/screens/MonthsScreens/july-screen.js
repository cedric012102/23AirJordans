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

const JulyScreen = () => {
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
              <ReleaseDateCard
                userName="July 2"
                name="RETRO 7 - Black/Citrus"
                postImg={require('../../assets/images/July2022/BlackCitrus7.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="July 8"
                name="Womens Nina Chanel Abney x AJ 2"
                postImg={require('../../assets/images/July2022/NinaChanel2.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="July 16"
                name="RETRO 1 HI OG - Grey/White"
                postImg={require('../../assets/images/July2022/retro1GreyWhite.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="July 20"
                name="Womens RETRO 1 HI OG - Iron/Red/Sail"
                postImg={require('../../assets/images/July2022/IronRedSail.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="July 23"
                name="RETRO 5 - White/Concord"
                postImg={require('../../assets/images/July2022/5Concord.jpg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="July 30"
                name="RETRO 12 - Grey/White"
                postImg={require('../../assets/images/July2022/GreyWhite12.jpeg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default JulyScreen;