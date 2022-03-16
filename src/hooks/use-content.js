import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";
import { firebase } from "../lib/firebase.prod";

const useContent = (collectionName) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const data = firebase
      .firestore()
      .collection(collectionName)
      .get()

      .then((snapshot) => {
        const contentData = snapshot.docs.map((doc) => ({
          ...doc,
          docId: doc.id,
        }));
        setContent(contentData);
      })
      .catch((error) => console.log(error, "console error"));
  }, []);

  return { [collectionName]: content };
};

export default useContent;
