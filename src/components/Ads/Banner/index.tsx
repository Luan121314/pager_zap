import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import React from 'react';
import { View } from 'react-native';
// import CONSTANTS from '../../../contants';
import styles from './styles';

// Set global test device ID

const Banner = () => {

    return (
        <View style={styles.container} >
            <BannerAd
                unitId={TestIds.BANNER}
                size={BannerAdSize.ADAPTIVE_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly:true
                }}
                onAdFailedToLoad={(error)=>{
                    console.log(`Error loaded ads banner\n${error.message}`)
                }}
                onAdClosed={()=>{}}
                onAdLeftApplication={()=>{}}
                onAdLoaded={()=>{
                    console.log("ads loaded");
                    
                }}
                onAdOpened={()=>{
                    console.log("ads opened");

                }}
            />
        </View>
    )
}

export default Banner;