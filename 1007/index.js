//正式使用
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkYXHGj37nHrMglwUHKWN2vOE0ty3o8T4",
  authDomain: "fir-test-dc8dc.firebaseapp.com",
  projectId: "fir-test-dc8dc",
  storageBucket: "fir-test-dc8dc.appspot.com",
  messagingSenderId: "851272507964",
  appId: "1:851272507964:web:493d6b2ce3d5e239029939"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

/*
設置：set() 的用途是創建或覆蓋文件。文件不存在時，系統會創建一個新的文件。但若文件存在，則內容會整個被新的資料覆蓋，想避免文件被整個蓋掉的狀況，可以加上 {merge: true} 的寫法
更新：update()就是對指定文件中的某些屬性更新

*/
/*
db.collection('根莖類')
  .doc('1.胡蘿蔔')
  .set({
    名稱:'胡蘿蔔',
    圖片:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ85-Ip8oJxvfC2KE7z6oMbI32QKjydcM15hG_0sP0oS_6dXR9BeZ_xZEHOQ5vhY1ySQ8&usqp=CAU',
    如何挑選: '1.看外觀：選擇表面光滑完整、顏色青綠明亮、花紋清晰鮮明，果梗呈捲曲狀，瓜蒂部分些微凹陷者。2.拍果皮：聲音清脆響亮者為佳。',
    建議保存方式: '1.一整個西瓜，放在常溫陰涼通風的地方，可以保存1個月左右。2.切開的半個西瓜，用保鮮膜包裹好，密封放入冰箱冷藏室，可以放2天左右。3.切成塊的西瓜，用保鮮盒裝好，蓋上一層保鮮膜，放入冰箱冷藏可以保存8-12小時。4.切開的西瓜，放在常溫下不能超過8小時，尤其是夏季高溫時期，最好在2-4小時內吃完爲宜，以免變味變質。5.切好的西瓜，放入冷凍室保存，可以放2-7天。'
  })
  .then(docRef => console.log('success'))
  */
  // 創建一個對象包含圖片網址
const imageObject = {
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ85-Ip8oJxvfC2KE7z6oMbI32QKjydcM15hG_0sP0oS_6dXR9BeZ_xZEHOQ5vhY1ySQ8&usqp=CAU',
};

// 將對象存入Firestore中的一個集合
db.collection('images')
  .add(imageObject)
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });








