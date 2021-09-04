import { useState, useEffect } from 'react';
import {projectStorage, projectFirestore} from '../firebase/config';
import {ref, uploadBytesResumable, getDownloadURL} from '@firebase/storage';
import { collection,addDoc, updateDoc, serverTimestamp } from '@firebase/firestore';

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect( () => {
        const storageRef = ref(projectStorage, file.name);
        const collectionRef = collection(projectFirestore, 'images');
        const uploadTask = uploadBytesResumable(storageRef, file, null );
        uploadTask.on('state_changed', (snapshot) => {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            setUrl(url);
            const storedImageRef = await addDoc(collectionRef, {url});
            await updateDoc(storedImageRef,{timestamp: serverTimestamp()});
        });
    }, [file]);

    return { progress, error, url };
}

export default useStorage;