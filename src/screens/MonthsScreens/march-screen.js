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

const MarchScreen = () => {
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
                userName="March 2"
                name="Womens RETRO 12 MA MANIERE - White"
                postImg={require('../../assets/images/Mar/WmnsManiere.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 3"
                name="Womens AJ 14 LOW - Metallic Silver"
                postImg={require('../../assets/images/Mar/wmns14low.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 4"
                name="RETRO 5 - “UNC”"
                postImg={require('../../assets/images/Mar/5unc.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 11"
                name="RETRO 3 ‘88 - White/Cement"
                postImg={require('../../assets/images/Mar/3cem88.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="March 25"
                name="Womens AJ 1 LOW x Travis Scott - Olive"
                postImg={require('../../assets/images/Mar/Wmns1Travis.jpeg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default MarchScreen;
