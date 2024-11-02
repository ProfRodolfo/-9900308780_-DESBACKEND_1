
import { URL } from 'url';
const address = 'https://meusite.com.br/catalogo?produto=cadeira';

const parsedUrl = new URL(address)

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('produto'));


