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

const FebruaryScreen = () => {
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
                userName="February 3"
                name="RETRO 2 - White/Lucky Green"
                postImg={require('../../assets/images/Feb/2green.jpeg')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 9"
                name="Womens RETRO 4 - White/Oil Green"
                postImg={require('../../assets/images/Feb/4seafoam.jpeg')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 11"
                name="RETRO 4 SE - Craft"
                postImg={require('../../assets/images/Feb/4craft.jpeg')}
                liked={true}
              />
               <ReleaseDateCard
                userName="February 15"
                name="RETRO 1 ‘85 - Black/White"
                postImg={require('../../assets/images/Feb/1BlkWht.jpeg')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 17"
                name="Womens RETRO 1 - “Laney High”"
                postImg={require('../../assets/images/Feb/WmnsLaney1.jpeg')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 18"
                name="RETRO 13 - “Playoffs” - Black"
                postImg={require('../../assets/images/Feb/Playoff13s.webp')}
                liked={true}
              />
                <ReleaseDateCard
                userName="February 25"
                name="RETRO 1 - White/Cement"
                postImg={require('../../assets/images/Feb/Retro1WhtCement.jpeg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default FebruaryScreen;
