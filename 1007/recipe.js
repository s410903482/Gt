//食譜資料存入Firestore


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

  db.collection('recipe')
    .doc('胡蘿蔔-鮮菇胡蘿蔔烘蛋')
    .set({
      //圖片:'https://img-global.cpcdn.com/recipes/37d1580375cbad48/1360x964cq70/%E8%8F%87%E8%8F%87%E7%B4%85%E8%98%BF%E8%94%94%E5%81%BD%E7%83%98%E8%9B%8B%E6%BB%BF%E6%BC%A2%E9%9B%BB%E7%81%AB%E9%8D%8B-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp',
      名稱:'鮮菇胡蘿蔔烘蛋',
      關鍵字1:'胡蘿蔔',
      關鍵字2:'鴻喜菇',
      關鍵字3:'雞蛋',
      準備食材:'雞蛋 6顆(約2-3人份)、胡蘿蔔 約100公克、鴻喜菇 約100公克、蔥 1支、調味料：鹽，胡椒。',
      料理步驟:'1.將胡蘿蔔切絲，鴻喜菇切適口大小，比例約1:1；將蔥切碎。2.將六顆蛋打入，加入蔥、鹽、黑胡椒，依個人口味添加，攪拌均勻。3.火力調中火，倒入油，加入蒜末可除去蛋腥味，也可不用，接著加入胡蘿蔔跟鴻喜菇，快炒一下後，倒入蛋液裡攪拌均勻。4.重新熱鍋，將剛剛攪拌均勻的蛋液倒入，剛下鍋未成形之前，多攪拌中間蛋汁，使受熱均勻，過程中切記保持中小火。5.翻面前，確保邊緣沒有黏住，翻面煎約2~3分鐘，檢查顏色呈金黃即可起鍋。'
      //相關影片:'https://youtu.be/24HasuLTHTU'
    })
    .then(docRef => console.log('success'))

    db.collection('recipe')
    .doc('胡蘿蔔-馬鈴薯燉肉')
    .set({
      //圖片:'https://img-global.cpcdn.com/recipes/b3869d2375da4265/1360x964cq70/%E5%BF%AB%E7%85%AE%E9%8D%8B%E9%A6%AC%E9%88%B4%E8%96%AF%E7%87%89%E8%82%89-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp',
      名稱:'馬鈴薯燉肉',
      關鍵字1:'胡蘿蔔',
      關鍵字2:'五花肉',
      關鍵字3:'馬鈴薯',
      準備食材:'五花肉 300公克、馬鈴薯 180公克、胡蘿蔔 100公克、蔥段 30公克、薑片 20公克、紅辣椒 2根、調味料：醬油 5大匙、米酒 2大匙、細砂糖 1大匙、水 600㏄',
      料理步驟:'1. 五花肉切小塊；馬鈴薯及胡蘿蔔去皮洗淨後切塊；紅辣椒對切，備用。2. 熱鍋，倒入約2大匙沙拉油，放入五花肉炒至表面變白，再放入蔥段、薑片、紅辣椒片炒香。3. 作法2的鍋中續加入胡蘿蔔、醬油、米酒、細砂糖、水，煮開後關小火煮約10分鐘。4. 加入馬鈴薯塊，持續小火煮至馬鈴薯熟透，湯汁略收乾濃稠即可。(BOX：馬鈴薯的澱粉含量高，在滷的過程中很容易糊化，因此在烹煮過程盡量不攪拌，才能保留馬鈴薯的口感，馬鈴薯才能完整不過爛。)'
      //相關影片:'https://youtu.be/dgl-INrKUQ4'
    })
    .then(docRef => console.log('success'))

    db.collection('recipe')
    .doc('胡蘿蔔-花椰菜炒胡蘿蔔')
    .set({
      //圖片:'https://img-global.cpcdn.com/recipes/5ea244a58adcc888/1360x964cq70/%E7%84%A1%E6%B0%B4-%E9%9D%92%E8%8A%B1%E8%8F%9C%E7%82%92%E7%B4%85%E8%98%BF%E8%94%94-%E5%BF%AB%E7%85%AE%E9%8D%8B10%E5%88%86%E9%90%98%E6%96%99%E7%90%86-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp',
      名稱:'花椰菜炒胡蘿蔔',
      關鍵字1:'胡蘿蔔',
      關鍵字2:'花椰菜',
      準備食材:'紅蘿蔔 1條、花椰菜 2顆、蒜瓣 4顆、鹽 1茶匙 (5c.c.)、胡椒粉 適量、橄欖油 適量 ',
      料理步驟:'1. 爆蒜入紅蘿蔔拌炒。2. 花椰菜加一點水蓋鍋。3. 待花椰菜軟後加入鹽，再翻炒均勻後即可出鍋。'
      //相關影片:'https://youtu.be/dgl-INrKUQ4'
    })
    .then(docRef => console.log('success'))

    