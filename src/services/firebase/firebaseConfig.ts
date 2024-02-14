const config = {
    apiKey: "AIzaSyAYXjuCXtnPCE72-DkrWV7LGyrNiXx5LBM",
    authDomain: "solution-cloud-54c21.firebaseapp.com",
    projectId: "solution-cloud-54c21",
    storageBucket: "solution-cloud-54c21.appspot.com",
    messagingSenderId: "850957641653",
    appId: "1:850957641653:web:4ff151681b84964a579bfc"
};

export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
            'Add your web app\'s configuration object to firebase-config.ts');
    } else {
        return config;
    }
}