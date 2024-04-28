// backend.js

import firestore from '@react-native-firebase/firestore';

export const fetchJobsData = async () => {
  try {
    const querySnapshot = await firestore().collection('Jobs-Posting').get();
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data(),
    }));
    return data;
  } catch (error) {
    throw new Error('Error fetching job data:', error);
  }
};


