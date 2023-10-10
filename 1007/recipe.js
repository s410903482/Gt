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
  //胡蘿蔔
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

    db.collection('recipe')
    .doc('胡蘿蔔-胡蘿蔔蒸蛋')
    .set({
      //圖片:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/321349/7a49996823cfd566.jpg',
      名稱:'胡蘿蔔蒸蛋',
      關鍵字1:'胡蘿蔔',
      關鍵字2:'雞蛋',
      準備食材:'胡蘿蔔 適量、豬餃肉 適量、雞蛋 3顆、醬油 適量、豬油(可用橄欖油代替) 適量、蒜頭 適量、鮮味炒手 適量',
      料理步驟:'1.豬餃肉加入醬油做成肉燥，冰起來形成塊狀。      2.胡蘿蔔炒豬油加蒜頭，備用。      3.肉燥塊加入熱開水攪拌，放入炒好的胡蘿蔔。      4.打入3顆雞蛋，和其它食材攪拌在一起。      5.完成。'
      //相關影片:'https://youtu.be/buW5wXkHraE'
    })
    .then(docRef => console.log('success'))

    db.collection('recipe')
    .doc('胡蘿蔔-胡蘿蔔貢丸湯')
    .set({
      //圖片:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/436642/0c7865d15b057665.jpg',
      名稱:'胡蘿蔔貢丸湯',
      關鍵字1:'胡蘿蔔',
      關鍵字2:'芹菜',
      準備食材:'貢丸 10顆、胡蘿蔔 1根、芹菜 1小把、鹽巴 1小匙、胡椒粉 1小匙',
      料理步驟:'1.備料，胡蘿蔔塊，芹菜切末。2.取一鍋 放入半滿的水，滾了之後放入些許薑片，水滾了放入貢丸和胡蘿蔔。3.接著就放入適量的鹽巴調味，也可依個人喜好加入胡椒粉，最後加入切好的芹菜。'
      //相關影片:'https://youtu.be/ndWHDSy6fwo'
    })
    .then(docRef => console.log('success'))

    db.collection('recipe')
    .doc('胡蘿蔔-三色豆（玉米馬鈴薯胡蘿蔔）')
    .set({
      //圖片:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/437976/8c046e5d3a6bf735.jpg',
      名稱:'三色豆（玉米馬鈴薯胡蘿蔔）',
      關鍵字1:'胡蘿蔔',
      關鍵字2:'馬鈴薯',
      準備食材:'胡蘿蔔 0.25根、馬鈴薯 6小顆、玉米 0.5根、蔥花 少許、蒜末 1顆',
      料理步驟:'1.先把胡蘿蔔、馬鈴薯切丁，再把玉米切斷，用手把玉米粒撥下來，切好蒜末備著。2.開小火，先放豬絞肉，再加油，煎炒到金黃色，炒大概2分鐘，再加蒜末，炒一下再加少許米酒。3.先加胡蘿蔔，悶蓋30秒，再加馬鈴薯、玉米，再加1杯熱水，再悶蓋2分鐘。4.加3小匙鹽巴，悶蓋2分鐘（看馬鈴薯軟了沒），最後加蔥花，完成。'
      //相關影片:'https://youtube.com/shorts/lYAoUbxBW7A?feature=share'
    })
    .then(docRef => console.log('success'))

    db.collection('recipe')
    .doc('胡蘿蔔-胡蘿蔔炒蛋')
    .set({
      //圖片:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/422639/7ef0726620b8e164.jpg',
      名稱:'胡蘿蔔炒蛋',
      關鍵字1:'胡蘿蔔',
      關鍵字2:'雞蛋',
      準備食材:'胡蘿蔔 2條、雞蛋 2顆、水 1碗、鹽 1鹽匙、橄欖油 3~5湯匙',
      料理步驟:'1.胡蘿蔔刨細絲。2.鍋中加入胡蘿蔔絲、水、鹽、油，食材放好再開火。3.水滾後轉中小火悶煮。4.胡蘿蔔半熟，鍋內尚有水時加入雞蛋，在鍋中將蛋撥散，蓋上鍋蓋繼續悶煮。5.胡蘿蔔煮熟，火力加大一點，將湯汁收乾。'
      //相關影片:'https://youtu.be/oKMhG3lVGMc'
    })
    .then(docRef => console.log('success'))

    db.collection('recipe')
    .doc('胡蘿蔔-胡蘿蔔炒肉')
    .set({
      //圖片:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/414195/652edaa4b38b8e44.jpg',
      名稱:'胡蘿蔔炒肉',
      關鍵字1:'胡蘿蔔',
      關鍵字2:'五花肉',
      準備食材:'胡蘿蔔 1～2條、肉絲（五花肉） 適量、蔥 姜 蒜 適量',
      料理步驟:'1.胡蘿蔔切薄片，加鹽、油，燙一下水，撈出。2.五花肉炒出油，加入適量醬油、鹽、雞精，或也可加入豆瓣醬或是紅蔥醬。3.加入燙好的胡蘿蔔炒一下，加入蔥段，完成。'
      //相關影片:'https://youtu.be/AYW5u6hknCE'
    })
    .then(docRef => console.log('success'))

    db.collection('recipe')
    .doc('胡蘿蔔-胡蘿蔔地瓜粥')
    .set({
      //圖片:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/425194/5ffd1edbc2be49c0.jpg',
      名稱:'胡蘿蔔地瓜粥',
      關鍵字1:'胡蘿蔔',
      關鍵字2:'地瓜',
      準備食材:'白米飯 1杯、小米粥 0.5杯、胡蘿蔔 0.5條、地瓜 1條、康寶高湯塊 0.5克',
      料理步驟:'1.白米1杯倒入鍋中，洗淨4次，或昨晚電鍋裡吃剩的白飯放進鍋裡。小米適量，洗淨放入已洗好的白米鍋裡。2.地瓜、胡蘿蔔洗淨削皮，先切厚片，再切小丁狀，放入小碗裡。康寶高湯塊一個，切小半塊。3.所有材料準備好，一起放入裝有白米鍋中，在加入兩碗熱水後，將整鍋放入電鍋內，電鍋放入半碗水，蓋上鍋蓋，待電鍋內粥品煮好。粥品煮好在電鍋裡悶15分鐘，15分鐘過後，鍋蓋打開，就可以享用。'
      //相關影片:'https://youtu.be/VNO7XKmnu7c'
    })
    .then(docRef => console.log('success'))


    //白蘿蔔
    db.collection('recipe')
    .doc('白蘿蔔-蘿蔔香菇雞湯')
    .set({
      //圖片:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/426229/bf386d231757f1ff.jpg',
      名稱:'蘿蔔香菇雞湯',
      關鍵字1:'白蘿蔔',
      關鍵字2:'胡椰菜',
      關鍵字3:'木耳',
      關鍵字4:'香菇',
      準備食材:'翅小腿 300克、紅蘿蔔切塊 1條、白蘿蔔切塊 半條、香菇切小條 4朵、木耳撕小塊 適量、薑片 4片、蔥切段 1根、蒜頭 3粒、水 650毫升、酒適量 5毫升、鹽 2.5小匙',
      料理步驟:'雞肉先用熱開水川燙一下，再用清水洗淨，放入電鍋裡，外鍋只要加1米杯水煮30分鍾，再加入蔥薑蒜+香菇+木耳+水，時間到，加入酒+鹽，悶一下就完成了（香菇梗撕小條一起加入，不加也可以）。'
      //相關影片:'https://youtu.be/MRLAMloVEUk'
    })
    .then(docRef => console.log('success'))

/*
db.collection('recipe')
    .doc('胡蘿蔔-鮮菇胡蘿蔔烘蛋')
    .set({
      //圖片:'https://img-global.cpcdn.com/recipes/37d1580375cbad48/1360x964cq70/%E8%8F%87%E8%8F%87%E7%B4%85%E8%98%BF%E8%94%94%E5%81%BD%E7%83%98%E8%9B%8B%E6%BB%BF%E6%BC%A2%E9%9B%BB%E7%81%AB%E9%8D%8B-%E9%A3%9F%E8%AD%9C%E6%88%90%E5%93%81%E7%85%A7%E7%89%87.webp',
      名稱:'鮮菇胡蘿蔔烘蛋',
      關鍵字:'胡蘿蔔 鴻喜菇 雞蛋',
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
      關鍵字:'胡蘿蔔 五花肉 馬鈴薯',
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
      關鍵字:'胡蘿蔔 花椰菜',
      準備食材:'紅蘿蔔 1條、花椰菜 2顆、蒜瓣 4顆、鹽 1茶匙 (5c.c.)、胡椒粉 適量、橄欖油 適量 ',
      料理步驟:'1. 爆蒜入紅蘿蔔拌炒。2. 花椰菜加一點水蓋鍋。3. 待花椰菜軟後加入鹽，再翻炒均勻後即可出鍋。'
      //相關影片:'https://youtu.be/dgl-INrKUQ4'
    })
    .then(docRef => console.log('success'))

    db.collection('recipe')
    .doc('白蘿蔔-蘿蔔香菇雞湯')
    .set({
      //圖片:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/426229/bf386d231757f1ff.jpg',
      名稱:'蘿蔔香菇雞湯',
      關鍵字:'白蘿蔔 胡椰菜 木耳 香菇',
      準備食材:'翅小腿 300克、紅蘿蔔切塊 1條、白蘿蔔切塊 半條、香菇切小條 4朵、木耳撕小塊 適量、薑片 4片、蔥切段 1根、蒜頭 3粒、水 650毫升、酒適量 5毫升、鹽 2.5小匙',
      料理步驟:'雞肉先用熱開水川燙一下，再用清水洗淨，放入電鍋裡，外鍋只要加1米杯水煮30分鍾，再加入蔥薑蒜+香菇+木耳+水，時間到，加入酒+鹽，悶一下就完成了（香菇梗撕小條一起加入，不加也可以）。'
      //相關影片:'https://youtu.be/MRLAMloVEUk'
    })
    .then(docRef => console.log('success'))
    */