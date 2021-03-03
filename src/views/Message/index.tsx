import { useClipboard } from '@react-native-community/clipboard';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Linking, Text, ToastAndroid, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Interstitial from '../../components/Ads/Interstitial';
import Layout from '../../Layout';
import phrasesFile from '../../resources/phrases';
import randomNumber from '../../utils/randomNumber';
import styles from './styles';


interface MessageProps {
    author: string,
    phrase: string
}

const Message = () => {
    const [message, setMessage] = useState<MessageProps>({} as MessageProps)
    const [clipBoardData, setClipboardData] = useClipboard();
    const navigation = useNavigation();

    useEffect(loadMessage, []);

    function loadMessage(){
        const phrases = phrasesFile;
        const phraseItem = phrases[randomNumber(phrases.length-1)]
        setMessage(phraseItem)
    }

    function handleCopyToClipBoard() {
        setClipboardData(`${message.phrase} \n\nAutor ${message.author}`)
        ToastAndroid.show("Copiado par área de transferência", ToastAndroid.SHORT)
    }

    function handleSharedFacebook() {
        Linking.openURL(`https://instagram.com/sharer.php?u=${message.phrase}\n\nAutor${message.author}`)
    }

    function handleSharedInstagram() {

    }

    function handlerSharedWhatsApp() {
        Linking.openURL(`https://wa.me/?text=${message.phrase} \n\nAutor ${message.author}`)
    }

    function handlerNavigateToback() {
        navigation.goBack();
    }

    return (
        <Layout>
            <RectButton onPress={handlerNavigateToback} style={styles.buttonBack} >
                <Feather name="arrow-left" size={24} />
            </RectButton>
            <View style={styles.header} >
                <Text style={styles.textHeader} >
                    Aqui está !
                </Text>
            </View>
            <View style={styles.body} >
                <ScrollView>
                    <View style={styles.content} >
                        <Text style={styles.textContent} >
                            {message.phrase}
                        </Text>
                        <Text style={styles.textAuthor} >Autor: {message.author}</Text>

                    </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={styles.sharedContent}>
                    <Text style={styles.textShared} >Compartilhe</Text>
                    <View style={styles.buttonGroup} >
                        <RectButton
                            onPress={handlerSharedWhatsApp}
                            style={styles.sharedButton}
                        >
                            <FontAwesome name="whatsapp" size={24} color="#34af23" />
                        </RectButton>

                        {/* <RectButton
                            onPress={handleSharedFacebook}
                            style={styles.sharedButton}
                        >
                            <FontAwesome name="facebook" size={24} color="#3b5998" />
                        </RectButton> */}
{/* 
                        <RectButton
                            onPress={handleSharedInstagram}
                            style={styles.sharedButton}
                        >
                            <FontAwesome name="instagram" size={24} color="#517fa4" />
                        </RectButton> */}

                        <RectButton
                            onPress={handleCopyToClipBoard}
                            style={styles.sharedButton}
                        >
                            <MaterialCommunityIcons  name="content-copy" size={24} color="#000" />
                        </RectButton>
                    </View>
                </View>
            </View>
            <Interstitial/>
        </Layout>
    )
}

export default Message;