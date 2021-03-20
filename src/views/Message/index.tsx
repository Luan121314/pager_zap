import { useClipboard } from '@react-native-community/clipboard';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Linking, Text, ToastAndroid, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Banner from '../../components/Ads/Banner';
import UsePreferences from '../../hooks/usePreferences';
import Layout from '../../Layout';
import phrasesFile from '../../resources/phrases';
import generateGreetings from '../../utils/generateGreetings';
import randomNumber from '../../utils/randomNumber';
import styles from './styles';

interface MessageProps {
    author: string,
    phrase: string
}

const Message = () => {
    const [message, setMessage] = useState<MessageProps>({} as MessageProps)
    const [messageShared, setMessageShared] = useState("")
    const [clipBoardData, setClipboardData] = useClipboard();
    const navigation = useNavigation();
    const preferences = UsePreferences()

    useEffect(loadMessage, []);

    function loadMessage() {
        const phrases = phrasesFile;
        const phraseItem = phrases[randomNumber(phrases.length - 1)]
        setMessage(phraseItem)
        setMessageShared(`${phraseItem.phrase}\n\n${phraseItem.author}`)
    }

    function handleGenerateSharedMessage() {
        const { isIncludeGreeting, isIncludeShareApp } = preferences.preference;
        const principalMessage = messageShared;
        const greetings = generateGreetings();
        const linkAppStore = "https://play.google.com/store/apps/details?id=com.pager_zap2"
        const sharedAppText = `Mensagem gerada por Pagezap,  receba a sua também, baixe e instale o app.\n\n${linkAppStore}`

        let messageFinal = "";
        if (isIncludeGreeting) {
            messageFinal = `*${greetings}*\n\n`;
        }

        messageFinal += principalMessage;

        if (isIncludeShareApp) {
            messageFinal += `\n\n\n${sharedAppText}`
        }

        return messageFinal;
    }

    function handleCopyToClipBoard() {
        setClipboardData(handleGenerateSharedMessage())
        ToastAndroid.show("Copiado para área de transferência", ToastAndroid.SHORT)
    }

    function handlerSharedWhatsApp() {
        const messageGenerate = handleGenerateSharedMessage()
        setClipboardData(messageGenerate)
        Linking.openURL(`https://wa.me/?text=${messageGenerate}`)
    }

    function handlerNavigateToback() {
        navigation.goBack();
    }
    function handlerNavigateToPreferences() {
        navigation.navigate("preferences");
    }

    return (
        <Layout>
            <View style={styles.header} >
                <View style={styles.nav} >
                    <RectButton onPress={handlerNavigateToback} style={styles.button} >
                        <Feather name="arrow-left" size={24} />
                    </RectButton>
                    <RectButton onPress={handlerNavigateToPreferences} style={styles.button} >
                        <FontAwesome name="gear" size={24} />
                    </RectButton>
                </View>
                <Text style={styles.textHeader} >
                    Aqui está !
                </Text>
            </View>
            <View style={styles.body} >
                <View style={styles.content} >
                    <ScrollView>
                        <Text style={styles.textContent} >
                            {message.phrase}
                        </Text>
                        <Text style={styles.textAuthor} >{message.author}</Text>

                    </ScrollView>
                </View>
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

                        <RectButton
                            onPress={handleCopyToClipBoard}
                            style={styles.sharedButton}
                        >
                            <MaterialCommunityIcons name="content-copy" size={24} color="#000" />
                        </RectButton>
                    </View>
                </View>
            </View>
            <Banner />
        </Layout>
    )
}

export default Message;