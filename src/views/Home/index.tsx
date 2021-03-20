import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import qs from 'query-string';
import React, { useEffect, useState } from 'react';
import { Image, Linking, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import imageBg from '../../assets/images/vintage.png';
import Banner from '../../components/Ads/Banner';
import MenuOptions from '../../components/MenuOptions';
import UsePreferences from '../../hooks/usePreferences';
import Layout from '../../Layout';
import generateGreetings from '../../utils/generateGreetings';
import randomNumber from '../../utils/randomNumber';
import styles from './styles';

interface ImageProps {
    hits: Array<{
        webformatURL: string
    }>
}

const Home = () => {
    const navigation = useNavigation()
    const [greetings, setGreetings] = useState("");
    const [image, setImage] = useState<string>();
    const {preference} = UsePreferences()
    useEffect(() => {
        return setGreetings(generateGreetings());
    })

    function handlerNavigateToMessage() {
        navigation.navigate("message");
    }

    function handleLoadImage() {
        const BASE_URL = "https://pixabay.com/api/?";
        const queries = {
            key: "20735019-f67c0e6f6566d6d6090a6ea8a",
            q: "nature",
            image_type: "illustration",
            pretty: "true",
            per_page: "20",
            min_width: "300",
            category: "feelings",
            safesearch: "true",
            colors: "transparent",
            order: "latest"
        }
        const query = qs.stringify(queries)
        const uri = BASE_URL + query;

        console.log("uri: ", uri);


        axios.get<ImageProps>(uri).then(response => {
            const images = response.data.hits;
            const length = images.length - 1;
            console.log("numbers response ", length);

            const index = randomNumber(length);
            setImage(response.data.hits[index].webformatURL)
        })
    }

    useEffect(handleLoadImage, [])

    function handlerSharedApp() {
        const text = "text=Olá, eu uso Pagerzap, super recomendo\nExperimente :)\n\nBaixe e instale\n";
        const urlApp = "https://play.google.com/store/apps/details?id=com.pager_zap2"
        const url = "https://wa.me/?"
        Linking.openURL(url + text + urlApp);
    }
    function handlerEvaluationApp() {
        Linking.openURL("https://play.google.com/store/apps/details?id=com.pager_zap2");
    }

    return (
        <Layout>
            <View style={styles.header} >
                <View style={styles.nav} >
                    <View />
                    <MenuOptions options={[
                        {
                            label: "compartilhe", pressEvent: handlerSharedApp
                        },
                        {
                            label: "Avalie", pressEvent: handlerEvaluationApp
                        }
                    ]} />
                </View>

                <Text style={styles.textGreetings} >
                    {preference.name && `${preference.name}, `}
                    {greetings}
                </Text>
                <Text style={styles.textHeader} >
                    Pensando em melhorar seu dia temos uma mensagem para você. 😄
                    </Text>
            </View>
            <View style={styles.body} >
                <Image style={styles.image} source={image ? { uri: image } : imageBg} />
            </View>
            <View style={styles.footer} >
                <RectButton
                    style={styles.button}
                    onPress={handlerNavigateToMessage}
                >
                    <Text style={styles.textButton} >Receber mensagem</Text>
                </RectButton>
                <Banner />
            </View>
        </Layout>
    )
}

export default Home;