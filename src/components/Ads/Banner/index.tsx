import React from 'react';
// import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { Text, View } from 'react-native';
// import CONSTANTS from '../../../contants';
import styles from './styles';

// Set global test device ID

const Banner = () => {

    return (
        <View style={styles.container} >
            {/* <BannerAd
                unitId={TestIds.BANNER}
                size={BannerAdSize.SMART_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly:true
                }}
                onAdFailedToLoad={(error)=>{
                    console.log(`Error loaded ads banner\n${error.message}`)
                }}
                onAdClosed={()=>{}}
                onAdLeftApplication={()=>{}}
                onAdLoaded={()=>{}}
                onAdOpened={()=>{}}
            /> */}
        </View>
    )
}

export default Banner;