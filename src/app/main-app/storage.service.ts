import * as CryptoJS from 'crypto-js';
//import SecureStorage from 'secure-web-storage'


export class StorageService {

    SecureStorage = require('secure-web-storage');

    private SECRET_KEY: string = 'secret_key' // not callable within secureStorage declaration
                                              // only option is to 1 by 1 declare 'secret_key'   
     
    secureStorage = new this.SecureStorage(localStorage, {
        hash: function hash(key) {
            key = CryptoJS.SHA256(key, 'secret_key');

            return key.toString();
        },
        encrypt: function encrypt(data) {
            data = CryptoJS.AES.encrypt(data, 'secret_key');

            data = data.toString();

            return data;
        },
        decrypt: function decrypt(data) {
            data = CryptoJS.AES.decrypt(data, 'secret_key');

            data = data.toString(CryptoJS.enc.Utf8);

            return data;
        }
    });

}



///var data = {
///    secret: 'data'
///};

// there is no need to stringify/parse you objects before and after storing.

///secureStorage.setItem('data', data);
// stores in localStorage like:
// key => value
// "ad36d572..." => "w1svi6n..."

///var decryptedData = secureStorage.getItem('data');
// returns { secret: 'data' }

///secureStorage.removeItem('data');
// removes the entry 'data'

//secureStorage.key(id)
// returns the hashed version of the key you passed into setItem with the given id.

///secureStorage.clear();
// clears all data in the underlining sessionStorage/localStorage.

///secureStorage.length;
// the number of entries in the underlining sessionStorage/localStorage.