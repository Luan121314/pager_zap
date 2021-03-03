import { InterstitialAd, TestIds } from '@react-native-firebase/admob';
import React, { useEffect } from 'react';
import CONSTANTS from '../../../contants';

const Interstitial = () => {
    const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : CONSTANTS.ads.intersticial.id;
    const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
        requestNonPersonalizedAdsOnly: true
    });

    useEffect(() => {
        try {
            interstitial.load();
            interstitial.onAdEvent
            console.log("Intersticial loaded");

        } catch (error) {
            console.log("Error loaded Intersticial\n", error.message);
        }
    }, []);

    interstitial.onAdEvent((type)=>{
        if(type !== "loaded") return;
        interstitial.show()        
    })


    return (<></>);
}


export default Interstitial