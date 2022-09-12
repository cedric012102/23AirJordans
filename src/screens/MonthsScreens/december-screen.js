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

const DecemberScreen = () => {
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
                userName="December 3"
                name="RETRO 12 - Black/Gold/Taxi"
                postImg={require('../../assets/images/Dec2022/BlackMetallic12.jpg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="December 3"
                name="RETRO 2 LOW - White/Cherrywood"
                postImg={require('../../assets/users/jordanlogo.webp')}
                liked={true}
              />
              <ReleaseDateCard
                userName="December 10"
                name="AIR JORDAN XI - White/Red"
                postImg={require('../../assets/images/Dec2022/CherryRed11.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="December 17"
                name="RETRO 7 - Black/Cherrywood Red/Olive"
                postImg={require('../../assets/images/Dec2022/BlackOlive7.jpg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="December 23"
                name="RETRO 13 - Black/UNC"
                postImg={require('../../assets/images/Dec2022/BlackUnc13.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="December 30"
                name="RETRO 2 - “Chicago”"
                postImg={require('../../assets/images/Dec2022/OG2Chicago.jpg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default DecemberScreen;