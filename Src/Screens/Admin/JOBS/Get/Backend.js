// backend.js

import firestore from '@react-native-firebase/firestore';

export const fetchJobData = async () => {
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

export const deleteJobItem = async (docId) => {
  try {
    await firestore().collection('Jobs-Posting').doc(docId).delete();
  } catch (error) {
    throw new Error('Error deleting job item:', error);
  }
};
