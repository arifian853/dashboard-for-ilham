const BASE_URL = 'https://mytestbed-9e98e-default-rtdb.firebaseio.com';

export async function getData(){
    const response = await fetch(`${BASE_URL}/.json?format=export`);
    
    const responseJson = await response.json();
    return { data : responseJson };
}