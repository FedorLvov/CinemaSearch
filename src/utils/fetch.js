import { officialSite } from 'src/constants/api';

export const getSimpleFetch = (method, link, body) => {
  console.log(`Fetch ${method}: ${link}`, {body});
  return fetch(`${link}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data'
    },
    body,
  });
};