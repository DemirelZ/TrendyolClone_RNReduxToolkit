import firestore from '@react-native-firebase/firestore';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getNotifications = createAsyncThunk(
  'notification/getNotifications',
  async () => {
    try {
      let notifications: any[] = [];

      // Firestore sorgusunun tamamlanmasını beklemek için await kullanıyoruz
      const querySnapshot = await firestore().collection('Notifications').get();

      // Her belgeyi döngüye alıp verileri çekiyoruz
      querySnapshot.forEach(documentSnapshot => {
        const data = documentSnapshot.data();
        notifications.push({
          title: data.title,
          description: data.description,
          productId: data.productId,
          url: data.url,
        });
      });

      // Verileri döndürüyoruz
      return notifications;
    } catch (error) {
      console.error('Bildirimi çekerken hata oluştu: ', error);
      throw error; // createAsyncThunk içinde hata fırlatmak için
    }
  },
);

export const addNotificationsToRemote = createAsyncThunk(
  'notification/addNotificationsToRemote',
  async (params: object) =>
    firestore()
      .collection('Notifications')
      .add(params)
      .then(() => {
        console.log('Notification added!');
      }),
);
