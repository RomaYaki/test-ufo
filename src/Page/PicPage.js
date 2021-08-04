import { useEffect } from 'react';
import { getApiResource } from '../utils/network';
import { API_ROOT } from '../constants/api';

const PickList = () => {
    const getResource = async (url) => {
        const body = await getApiResource(url);
        console.log(body);
        console.log(`url`, url)
    }

    useEffect(() => {
        getResource(API_ROOT)
        console.log(`API_ROOT`, API_ROOT)
    }, []);
    return <>PickList</>
}

export default PickList;