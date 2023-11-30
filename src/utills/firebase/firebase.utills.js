import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  addDoc,
  updateDoc,
  getDocFromCache,
  arrayUnion,
} from "firebase/firestore";
import SHOP_DATA from "../../store-data/shop-data";

const firebaseConfig = {
  apiKey: "AIzaSyBmKmNo2tmgQKHnYnTg16SFQClI47YyWdI",
  authDomain: "my-first-react-project-a84c4.firebaseapp.com",
  projectId: "my-first-react-project-a84c4",
  storageBucket: "my-first-react-project-a84c4.appspot.com",
  messagingSenderId: "769301143111",
  appId: "1:769301143111:web:6f59693c73748fbf881b62",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompts: "select_account",
});

// for adding user new user information

export const auth = getAuth();
export const signInWithGooglepopup = () => signInWithPopup(auth, provider);

export const secondAddColectionAndDocuments = async () => {
  try {
    const docRef = await setDoc(collection(db, "Farm products"), SHOP_DATA);
    console.log("Upload Successfull");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// secondAddColectionAndDocuments();

// for adding documents------------------------
export const settingDocuments = async (docName, docData) => {
  const covertdocName = docName.toLowerCase();
  try {
    const addnewDoc = await setDoc(
      doc(db, "Farm products", covertdocName),
      docData
    );

    console.log("Document written with ID: ");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
// settingDocuments();

//updating documents

// const addingData = {
//   id: 4,
//   name: "Grey Brim",
//   imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
//   price: 25,
// };
// // export const upDatingDocuments = async () => {
//   try {
//     const washingtonRef = doc(db, "Farm products", "packaged products");
//     await setDoc(
//       washingtonRef,
//       {
//         items: addingData,
//       },
//       { merge: true }
//     );
//     console.log("Document update successful");
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };

// upDatingDocuments();

// Firestore data converter

export const gettingDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "Farm products"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data().items);
  });
};

// gettingDocuments();

// export for adding our data into our firestore database
export const addColectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
    console.log("done 2222");
  });
  await batch.commit();
};

const info = [
  "export products",

  "furit",

  "grain products",

  "packaged products",

  "palm oil",

  "seed products",

  "tuber",
];
// export const subCollections = () => {
//   for (const element of info) {
//     const val = doc(db, "Farm Products", element);
//     const collectionval = collection(val, "Product list");
//     addDoc(collectionval, { addingData });
//     console.log("complate");
//   }
// };
// subCollections();

export const subCollections = (category, dataToUpload) => {
  const commonIput = category.toLowerCase();
  const val = doc(db, "Farm Products", commonIput);
  const collectionval = collection(val, "Product list");
  addDoc(collectionval, dataToUpload);
};

// subCollections("export products", addingData);

export const getCollections = async () => {
  let outputValue = [];
  for (const element of info) {
    const val = doc(db, "Farm Products", element);
    const collectionval = collection(val, "Product list");
    const data = await getDocs(collectionval);

    const result = data.docs.map((output) => ({
      ...output.data(),
      id: output.id,
    }));
    outputValue.push(result);
  }
  return outputValue;
};
// getCollections();
// addColectionAndDocuments("Farm products", SHOP_DATA);

const additionalCollectionAndDoc = async () => {
  const frankDocRef = doc(db, "Farm Products", "packaged product");
  await setDoc(frankDocRef, {
    title: "packaged product",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
      },
    ],
  });

  // additionalCollectionAndDoc();

  // To update age and favorite color:
  await updateDoc(frankDocRef, {
    age: 13,
    "favorites.color": "Red",
  });
};

export const uploadDataToDatabase = async (data) => {
  try {
    await setDoc(doc(db, "Cities", "LA"), data);
    alert("Data upload successfull");
  } catch (error) {
    console.log(error);
  }
};

export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  });
  return categoryMap;
};

const mydata = getCategoriesAndDocument();
console.log(mydata);
const getCitiesDocument = async () => {
  const collectionRef = doc(db, "Cities", "LA");
  const querySnapshot = await getDoc(collectionRef);
  if (querySnapshot.exists()) {
    console.log("Document data:", querySnapshot.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return console.log("here::", querySnapshot);
  }
};
// getCitiesDocument();

export const createUserDocumentFromAuth = async (
  userAuth,
  addtionalinformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "user", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...addtionalinformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
