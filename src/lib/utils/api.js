import {handleSession, logout} from './auth'
import {variables} from '$lib/utils/variables'

const apiPath = variables.env === 'development' ? variables.apiDevPath : variables.apiLivePath

export const api = async (method, path, data, token) => {
  try {
    const noBodyData = method === 'GET' || method === 'DELETE';

    console.log({
      method: method,
      path: path,
      fullPath: `${apiPath}/${path}`,
      data: data,
      token: token,
    });

    const response = await fetch(`${apiPath}/${path}`, {
      method: `${method}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(token ? {'X-AUTH-TOKEN': token} : {})
      },
      ...(!noBodyData ? {body: JSON.stringify(data)} : null)
    });

    console.log({'api.js response': response});
    console.log(response);

    await handleSession(response);

    return await response.json();
  } catch (e) {
    setTimeout(async ()=>{
      // await logout();
    },4000);

    console.log({
      'message': 'api error line 40',
      'error': e,
      method: method,
      path: path,
      data: data,
      token: token,
    });

    return {
      status: 502,
      message: 'Oops! Something is wrong. Please try later.'
    };
  }

}

export const apiForm = async (method, path, data, token) => {
  try {
    const response = await fetch(`${apiPath}/${path}`, {
      method: `${method}`,
      headers: {
        Accept: 'application/json',
        ...(token ? {'X-AUTH-TOKEN': token} : {})
      },
      body: data
    });

    return await response.json()
  } catch (e) {
    return {
      status: 502,
      message: 'Oops! Something is wrong. Please try later.'
    }
  }
}


// export const api = (method, path, data, token) => {
//   const noBodyData = method === 'GET' || method === 'DELETE'
//   return fetch(`${apiPath}/${path}`, {
//     method: `${method}`,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       ...(token ? {Authorization: `Bearer ${token}`} : {})
//     },
//     ...(!noBodyData ? {body: JSON.stringify(data)} : null)
//   })
//     .then(async res => {
//       await handleSession(res)
//       return await res.json()
//     })
//     .catch(() => {
//       setTimeout(async ()=>{
//         await logout()
//       },4000)
//       return {
//         status: 502,
//         message: 'Oops! Something is wrong. Please try later.'
//       }
//     })
// }

// formData body type
// export const apiForm = (method, path, data, token) => {
//   return fetch(`${apiPath}/${path}`, {
//     method: `${method}`,
//     headers: {
//       Accept: 'application/json',
//       ...(token ? {Authorization: `Bearer ${token}`} : {})
//     },
//     body: data
//   })
//     .then((res) => {
//       return res.json()
//     })
//     .catch(() => {
//       return {
//         status: 502,
//         message: 'Oops! Something is wrong. Please try later.'
//       }
//     })
// }