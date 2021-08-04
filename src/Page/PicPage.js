import { useEffect } from 'react';
import { getApiResource } from '../utils/network';
import { API_ROOT } from '../constants/api';

const PickList = () => {
    const getResource = async (url) => {
        const body = await getApiResource(url);
        console.log(`body`, body)
    }

    useEffect(() => {
        getResource(API_ROOT)
    }, []);
    
    return (
        <>PickList</>
    )
}

export default PickList;