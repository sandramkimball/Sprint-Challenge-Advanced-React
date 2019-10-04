import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useAlphabetical = (listMode) => {
    const [modeValue, setModeValue] = useLocalStorage(listMode);

    // useEffect(()=>{
    //     if(modeValue == true){
    //         document.querySelector('PlayerCards').
    //     }
    // })
    return [modeValue, setModeValue]
}