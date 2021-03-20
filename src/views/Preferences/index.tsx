import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, ToastAndroid, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Banner from '../../components/Ads/Banner';
import TextInput from '../../components/TextInput';
import Switch from '../../components/Switch';
import UsePreferences from '../../hooks/usePreferences';
import Layout from '../../Layout';
import styles from './styles';

const Preferences = () => {
    const navigation = useNavigation();
    const [isIncludeShareApp, setIsIncludeSharedApp] = useState(false);
    const [isIncludeGreeting, setIsIncludeGreeting] = useState(false);
    const [name, setName] = useState("");
    const { preference, setPreferences } = UsePreferences();

    function handleLoadPreferencesContext() {
        setIsIncludeGreeting(preference.isIncludeGreeting);
        setIsIncludeSharedApp(preference.isIncludeShareApp);
        setName(preference.name || "")
    }
    useEffect(handleLoadPreferencesContext, [])

    function handlerNavigateToback() {
        navigation.goBack();
    }

    function handleSavePreferences() {
        setPreferences({
            isIncludeShareApp,
            isIncludeGreeting,
            name: name.length > 0 ? name: undefined
        })
        ToastAndroid.show("Salvo", ToastAndroid.SHORT);
        navigation.goBack()
    }

    return (
        <Layout>
            <View style={styles.header} >
                <View style={styles.nav} >
                    <RectButton onPress={handlerNavigateToback} style={styles.button} >
                        <Feather name="arrow-left" size={24} />
                    </RectButton>
                    <View>
                    </View>
                </View>
                <Text style={styles.textHeader} >
                    Preferências
                </Text>
            </View>
            <View style={styles.body} >
                <View style={styles.content} >
                    <View>
                        <Text style={styles.textContent} >Compartilhar</Text>
                    </View>
                    <View style={styles.optionsGroup} >
                        <Switch value={isIncludeGreeting} state={setIsIncludeGreeting} name="includeGreeting" label="Incluir Saudações" />
                        <Switch value={isIncludeShareApp} state={setIsIncludeSharedApp} name="includeSharedApp" label="Incluir link do app" />
                    </View>
                </View>
                <View style={styles.content} >
                    <View>
                        <Text style={styles.textContent} >Usuario</Text>
                    </View>
                    <View style={styles.optionsGroup} >
                        <TextInput
                            name="name"
                            label="Nome"
                            value={name}
                            onChangeText={setName}
                            focusable={false}

                        />
                    </View>
                </View>
            </View>
            <View style={styles.footer} >
                <RectButton
                    style={styles.buttonSave}
                    onPress={handleSavePreferences} >
                    <Text style={styles.textButton} >
                        Salvar
                    </Text>
                </RectButton>
            </View>
            {/* <Interstitial /> */}
            <Banner />
        </Layout>
    )
}

export default Preferences;