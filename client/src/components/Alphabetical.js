import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useAlphabetical = (listMode) => {
    const [modeValue, setModeValue] = useLocalStorage(listMode);

    useEffect(()=>{
        if(modeValue == true){
            return document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    })
    return [modeValue, setModeValue]
}