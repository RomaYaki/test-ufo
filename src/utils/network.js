
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);
        console.log(`res`, res)

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res; 
        } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}

// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     .then(body => console.log(body))

// (async () => {
//     const body = await getApiResource(API_ROOT);
//     console.log(body);
// })();