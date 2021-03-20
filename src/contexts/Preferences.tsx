import React, { createContext, useEffect, useState } from 'react';
import locationStorage from '../service/LocationStorage';

interface PreferencesProps {
    isIncludeGreeting: boolean,
    isIncludeShareApp: boolean,
    name?: string
}

interface PreferenceContextData {
    setPreferences: (data: PreferencesProps) => void
    preference: PreferencesProps
}

const preferencesDefault: PreferencesProps = {
    isIncludeGreeting: true,
    isIncludeShareApp: true
}

const PreferencesContext = createContext<PreferenceContextData>({} as PreferenceContextData);

export const PreferencesProvider: React.FC = ({ children }) => {
    const [preference, setPreference] = useState<PreferencesProps>(preferencesDefault);

    async function handleLoadPreferencesStorage() {
        const storagePreference = await locationStorage.getData();
        if (!storagePreference) return;

        setPreference(storagePreference);
    }

    useEffect(() => { handleLoadPreferencesStorage() }, [])

    async function setPreferences(data: PreferencesProps) {
        setPreference(data)
        locationStorage.setData(data)
    }

    return (
        <PreferencesContext.Provider value={{ preference, setPreferences }} >
            {children}
        </PreferencesContext.Provider>
    )
}

export default PreferencesContext;