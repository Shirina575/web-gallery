import { useState, useEffect } from "react";
import {projectFirestore} from '../firebase/config';
import { collection, onSnapshot } from "firebase/firestore";
const useFirestore = (imageCollection) => {
    const [docs, setDocs] = useState([]);

    useEffect( () => {
        const collectionRef = collection(projectFirestore, imageCollection);
        const unsub = onSnapshot( collectionRef, (snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        })

        return () => unsub();
    }, [imageCollection]);

    return{ docs };
}

export default useFirestore;