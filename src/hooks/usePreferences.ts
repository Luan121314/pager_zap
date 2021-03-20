import { useContext } from 'react';
import PreferencesContext from '../contexts/Preferences';

function UsePreferences() {
    return useContext(PreferencesContext)
    
}
export default UsePreferences;