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

const SeptemberScreen = () => {
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
                userName="September 3"
                name="RETRO 6 - “Georgetown”"
                postImg={require('../../assets/images/Sept2022/6Georgetown.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="September 17"
                name="RETRO 1 HI OG - “Heirloom” Vachetta Tan"
                postImg={require('../../assets/images/Sept2022/Heirloom1.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="Date Unknown"
                name="RETRO 14 - Ginger/White"
                postImg={require('../../assets/images/Sept2022/GingerWhite14.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="Date Unknown"
                name="RETRO 13 - White/Blue/Grey"
                postImg={require('../../assets/images/Sept2022/FrenchBlueWhite13.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="Date Unknown"
                name="RETRO 11 LOW IE - Grey/White"
                postImg={require('../../assets/images/Sept2022/Grey11.jpg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="Date Unknown"
                name="Womens RETRO 1 HI OG - Denim"
                postImg={require('../../assets/images/Sept2022/WomenDenim1.jpg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default SeptemberScreen;