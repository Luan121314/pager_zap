import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import imgRandom from '../../assets/images/img2.jpg';
import Banner from '../../components/Ads/Banner';
import Layout from '../../Layout';
import styles from './styles';
const Home = () => {
    const navigation = useNavigation()

    function handlerNavigateToMessage() {
        navigation.navigate("message")
    }
    return (
        <Layout>
            <View style={styles.header} >
                <Text style={styles.textHeader} >
                    Pensando em melhorar seu dia temos uma mensagem para você. 😄
                    </Text>
            </View>
            <View style={styles.body} >
                <Image style={styles.image} source={imgRandom} />
            </View>
            <View style={styles.footer} >
                <Banner/>
                <RectButton
                    style={styles.button}
                    onPress={handlerNavigateToMessage}
                >
                    <Text style={styles.textButton} >Receber mensagem</Text>
                </RectButton>

            </View>
        </Layout>
    )
}

export default Home;