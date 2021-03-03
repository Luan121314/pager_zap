import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import CONSTANTS from '../../../contants';
import styles from './styles';

const Banner = () => {

    const unitId = __DEV__ ? TestIds.BANNER : CONSTANTS.ads.banner.id
    useEffect(()=>{
        console.log("isDev from BANNER: ", __DEV__);
        
    })

    return (
        <View style={styles.container} >
            <BannerAd
                unitId={unitId}
                size={BannerAdSize.SMART_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly:true
                }}
                onAdFailedToLoad={(error)=>{
                    console.log(`Error load ads banner\n${error.message}`)
                }}
                onAdClosed={()=>{}}
                onAdLeftApplication={()=>{}}
                onAdLoaded={()=>{
                    console.log("ads banner loaded");
                    
                }}
                onAdOpened={()=>{
                    console.log("ads banner opened");

                }}
            />
        </View>
    )
}

export default Banner;