const BASE_URL = 'https://mytestbed-9e98e-default-rtdb.firebaseio.com';

export async function getDegree(){
    const response = await fetch(`${BASE_URL}/degree.json`);
    
    const responseJson = await response.json();
    return { data : responseJson };
}