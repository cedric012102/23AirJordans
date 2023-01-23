import React, {useState} from "react";
import {
    View,
    SafeAreaView,
    ScrollView,
  } from 'react-native';
import {Container} from '../../../styles/FeedStyles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ReleaseDateCard} from '../../components/release-date-card';

const JanuaryScreen = () => {
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
                userName="January 14"
                name="RETRO 1 - True Blue/Grey"
                postImg={require('../../assets/images/Jan/TrueBlue1.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 14"
                name="Womens RETRO 5 - Red suede"
                postImg={require('../../assets/images/Jan/WmnsRed5s.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 22"
                name="XX3 CNY - Year of the Rabbit"
                postImg={require('../../assets/images/Jan/23Rabbit.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 24"
                name="Girls RETRO 7 - Black/Barely Grape"
                postImg={require('../../assets/images/Jan/Wmns7.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 26"
                name="Womens RETRO 2 - Craft"
                postImg={require('../../assets/images/Jan/Wmns2Craft.jpeg')}
                liked={true}
              />
              <ReleaseDateCard
                userName="January 27"
                name="AJKO 1 LOW x UNION"
                postImg={require('../../assets/images/Jan/ajko1LowUnion.jpeg')}
                liked={true}
              />
            </Container>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };

export default JanuaryScreen;