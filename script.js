const animals = [
    { id: 'dog', label: 'Собаки', icon: '🐶' },
    { id: 'cat', label: 'Кошки', icon: '🐱' },
    { id: 'bird', label: 'Птицы', icon: '🦜' },
    { id: 'fish', label: 'Рыбы', icon: '🐠' },
    { id: 'rodent', label: 'Грызуны', icon: '🐹' },
    { id: 'reptile', label: 'Рептилии', icon: '🦎' },
    { id: 'exotic', label: 'Экзотика', icon: '🦝' }
];
const categories = [
    { id: 'dry_food', label: 'Сухой корм' }, { id: 'wet_food', label: 'Влажный корм' },
    { id: 'toys', label: 'Игрушки' }, { id: 'vitamins', label: 'Витамины' },
    { id: 'hygiene', label: 'Гигиена' }, { id: 'beds', label: 'Лежанки' },
    { id: 'bowls', label: 'Миски' }, { id: 'clothes', label: 'Одежда' },
    { id: 'grooming', label: 'Груминг' }, { id: 'tech', label: 'Гаджеты' }
];

const products = [
    // === СОБАКИ ===
    { id: 101, type: 'dog', category: 'dry_food', name: 'Royal Canin Maxi 15kg', price: 3200, img: 'https://cdn.27.ua/799/07/27/132903_9.jpeg' },
    { id: 102, type: 'dog', category: 'dry_food', name: 'Brit Premium L', price: 1800, img: 'https://lfriend.com.ua/image/cache/catalog/import_new/1c/1c7e2798a0165ed8b7acc31fd3f29160-1500x1500.jpg' },
    { id: 103, type: 'dog', category: 'dry_food', name: 'Acana Prairie Poultry', price: 4100, img: 'https://acana.od.ua/assets/cache/images/6898d2ab9f35b07cd5e80679e4ca1600.webp' },
    { id: 104, type: 'dog', category: 'toys', name: 'Мяч Trixie (резина)', price: 150, img: 'https://zoocomplex.com.ua/image/cachewebp/catalog/0_product/offers_25/product-42583693-640x630.webp' },
    { id: 105, type: 'dog', category: 'toys', name: 'Канат грейферный', price: 220, img: 'https://vetapteka-litarova.com.ua/wp-content/uploads/2025/01/0000034415.png' },
    { id: 106, type: 'dog', category: 'toys', name: 'Кольцо Puller', price: 450, img: 'https://images.prom.ua/6786088316_w640_h640_collar-puller-maxi.jpg' },
    { id: 107, type: 'dog', category: 'beds', name: 'Лежанка Donut Soft', price: 1200, img: 'https://bizoon.com.ua/image/cache/catalog/brands/Harley-and-Cho/DSC08677-700x700.jpg' },
    { id: 108, type: 'dog', category: 'beds', name: 'Коврик охлаждающий', price: 600, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFiKm6rQKOJnIjlxUCaWiZzeiNMxFHyIZJug&s' },
    { id: 109, type: 'dog', category: 'clothes', name: 'Дождевик Желтый XL', price: 850, img: 'https://basket-28.wbbasket.ru/vol5465/part546593/546593229/images/big/1.webp' },
    { id: 110, type: 'dog', category: 'clothes', name: 'Свитер вязаный', price: 500, img: 'https://4dog.com.ua/image/cache/catalog/brands/dogsbomba/y-230/y-230-3-1000x1000.jpg' },
    { id: 111, type: 'dog', category: 'hygiene', name: 'Шампунь 8in1', price: 300, img: 'https://zoocool.ua/image/cache/catalog/shop/products/03/75/7503/images/20153-1000x1000.png' },
    { id: 112, type: 'dog', category: 'hygiene', name: 'Пеленки 60x60 (50шт)', price: 400, img: 'https://content1.rozetka.com.ua/goods/images/big/546755904.jpg' },
    { id: 113, type: 'dog', category: 'tech', name: 'GPS Трекер ошейник', price: 2500, img: 'https://content1.rozetka.com.ua/goods/images/big/396645792.jpg' },
    { id: 114, type: 'dog', category: 'vitamins', name: 'Витамины для суставов', price: 750, img: 'https://homefood.ua/content/images/34/536x536l50nn0/vitaminy-provet-profiline-dlia-sobak-hah-kompleks-dlia-suhlobiv-ta-zviazok-94165716948899.png' },
    { id: 115, type: 'dog', category: 'bowls', name: 'Миска на штативе', price: 900, img: 'https://ireland.apollo.olxcdn.com/v1/files/swtbem4yfsso-UA/image;s=1000x1000' },
    // === КОШКИ ===
    { id: 201, type: 'cat', category: 'dry_food', name: 'ProPlan Sterilised', price: 850, img: 'https://content1.rozetka.com.ua/goods/images/big/320828362.jpg' },
    { id: 202, type: 'cat', category: 'dry_food', name: 'Josera Catelux', price: 1100, img: 'https://korm.com.ua/images/detailed/5672/t7490800max.jpg' },
    { id: 203, type: 'cat', category: 'wet_food', name: 'Sheba Пауч (Лосось)', price: 35, img: 'https://shinshilka.com.ua/image/catalog/5504810433_w640_h640_5504810433.webp' },
    { id: 204, type: 'cat', category: 'toys', name: 'Интерактивная мышь', price: 120, img: 'https://content1.rozetka.com.ua/goods/images/big/587532473.jpg' },
    { id: 205, type: 'cat', category: 'toys', name: 'Удочка с перьями', price: 90, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLR5zastzfspp9J2v2dq9FXBkq9kae4aBNw&s' },
    { id: 206, type: 'cat', category: 'toys', name: 'Лазерная указка', price: 150, img: 'https://content.rozetka.com.ua/goods/images/big/507789422.png' },
    { id: 207, type: 'cat', category: 'hygiene', name: 'Наполнитель Силикагель', price: 450, img: 'https://zoodom.ua/media/cache/sylius_shop_product_max_thumbnail/89/ee/71e88c4a8b5c5e8f42b20943be9f.jpeg' },
    { id: 208, type: 'cat', category: 'hygiene', name: 'Лоток закрытый', price: 800, img: 'https://content.rozetka.com.ua/goods/images/big/389042963.jpg' },
    { id: 209, type: 'cat', category: 'beds', name: 'Домик-Когтеточка 3ур', price: 2100, img: 'https://images.prom.ua/1356714515_w1280_h640_1356714515.jpg' },
    { id: 210, type: 'cat', category: 'beds', name: 'Гамак на батарею', price: 400, img: 'https://content.rozetka.com.ua/goods/images/big/395901121.jpg' },
    { id: 211, type: 'cat', category: 'grooming', name: 'Фурминатор M', price: 600, img: 'https://content1.rozetka.com.ua/goods/images/big/16462361.jpg' },
    { id: 212, type: 'cat', category: 'bowls', name: 'Керамическая миска', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6Y_v5FHKPyrjLccJhkvK6YxYfsLE27H-Lg&s' },
    { id: 213, type: 'cat', category: 'vitamins', name: 'Паста для вывода шерсти', price: 320, img: 'https://zoomagazin.dp.ua/image/cache/catalog/gimpet/image-cache-catalog-new2-gim-born-686964-420x420-1200x800.jpg' },
    { id: 214, type: 'cat', category: 'tech', name: 'Автопоилка фонтан', price: 1400, img: 'https://content.rozetka.com.ua/goods/images/big/353927898.jpg' },
    { id: 215, type: 'cat', category: 'clothes', name: 'Ошейник со стразами', price: 180, img: 'https://img.joomcdn.net/8f5374964476f13a3a1f1ebecd039b3e488d738b_original.jpeg' },
    // === ПТИЦЫ ===
    { id: 301, type: 'bird', category: 'dry_food', name: 'Rio для волнистых', price: 120, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SFDiNhQoNyfLHRCc_WMUUjLSoEYduDg9IA&s' },
    { id: 302, type: 'bird', category: 'dry_food', name: 'Versele-Laga Prestige', price: 250, img: 'https://zoomagazin.dp.ua/image/cache/catalog/223604_59019_1_800_2_775-1200x800.jpg' },
    { id: 303, type: 'bird', category: 'vitamins', name: 'Лакомство Палочки (Мед)', price: 60, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfRNIZ-T9ERormbfPkdyxiDkgyqfyFgLX7Tg&s' },
    { id: 304, type: 'bird', category: 'toys', name: 'Зеркальце с колокольчиком', price: 80, img: 'https://lori.net.ua/media/cache/product_detailed/wedes_ecommerce_variant/0001/01/52d5dee40d363aef92fd29f11ce1004ec8b175fd.jpeg' },
    { id: 305, type: 'bird', category: 'toys', name: 'Качели деревянные', price: 110, img: 'https://content1.rozetka.com.ua/goods/images/big/533061514.png' },
    { id: 306, type: 'bird', category: 'toys', name: 'Лесенка 5 ступеней', price: 90, img: 'https://zoocool.ua/image/cache/catalog/products/3358/igrushka-dlya-ptits-lesenka-s-igrushkoy-priroda-22-6-sm-5-sht-1-1000x1000.jpg' },
    { id: 307, type: 'bird', category: 'beds', name: 'Клетка Золотая M', price: 1500, img: 'https://ir.ozone.ru/s3/multimedia-m/c1000/6377443210.jpg' },
    { id: 308, type: 'bird', category: 'beds', name: 'Клетка Большая Voliere', price: 4200, img: 'https://grey.com.ua/image/cache/catalog/image/cache/catalog/imports/source-11/aa65c9389df7d5134d780eec7c4412c640fb7732-695b7a0a242723ae388f1cad779cc16a6d415694/6970051913_bolshaya-kletka-dlya-800x800.webp' },
    { id: 309, type: 'bird', category: 'bowls', name: 'Поилка навесная', price: 50, img: 'https://ireland.apollo.olxcdn.com/v1/files/igi6fhb2r9yz2-UA/image' },
    { id: 310, type: 'bird', category: 'bowls', name: 'Купалка пластиковая', price: 180, img: 'https://murchyk.com.ua/img/10/2636/4786/4786-17349-lg.jpg' },
    { id: 311, type: 'bird', category: 'hygiene', name: 'Песок для клеток', price: 90, img: 'https://c.suziria.ua/58501-thickbox_default/p-sok-dlya-ptakh-v-sandy-z-m-neralami-2kg.jpg' },
    { id: 312, type: 'bird', category: 'vitamins', name: 'Мелок минеральный', price: 30, img: 'https://images.prom.ua/3056966239_w1280_h640_3056966239.jpg' },
    { id: 313, type: 'bird', category: 'vitamins', name: 'Сепия (панцирь)', price: 45, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXHsRefoQyyeKTk9RqwQh3690yG_j9E4UMBw&s' },
    { id: 314, type: 'bird', category: 'grooming', name: 'Когтерез для птиц', price: 140, img: 'https://masterzoo.ua/content/images/13/536x536l50nn0/56144102644819.jpg' },
    { id: 315, type: 'bird', category: 'toys', name: 'Игрушка Фуражиловка', price: 300, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYZz0YmXzeOdoL5bzrb3wCQW3UwFouMsLAQ&s' },
    // === РЫБЫ ===
    { id: 401, type: 'fish', category: 'dry_food', name: 'TetraMin Хлопья', price: 200, img: 'https://c.suziria.ua/57922-thickbox_default/tetra-min-500ml-plast-vc-osnovnij-korm.jpg' },
    { id: 402, type: 'fish', category: 'dry_food', name: 'Гранулы для сомов', price: 180, img: 'https://katiko.ru/image/cache/catalog/Aquarium/korma/5-1200x1200.JPG' },
    { id: 403, type: 'fish', category: 'tech', name: 'Фильтр Aquael Mini', price: 550, img: 'https://www.tetradon.com.ua/wp-content/uploads/2017/09/AQUAEL-PAT-MINI-FILTR-WEWNETRZNY-akwarium-do-120L.jpg' },
    { id: 404, type: 'fish', category: 'tech', name: 'Компрессор бесшумный', price: 400, img: 'https://zoocool.ua/image/cache/catalog/shop/products/25/35/3525/images/26038-1000x1000.jpg' },
    { id: 405, type: 'fish', category: 'tech', name: 'Нагреватель 50Вт', price: 350, img: 'https://images.prom.ua/3414677971_w1280_h640_3414677971.jpg' },
    { id: 406, type: 'fish', category: 'tech', name: 'Автокормушка', price: 950, img: 'https://content2.rozetka.com.ua/goods/images/big/340238652.jpg' },
    { id: 407, type: 'fish', category: 'beds', name: 'Аквариум 20л', price: 1100, img: 'https://aquasmile.com.ua/wp-content/uploads/shop/products/origin/c-c06a074862ff404dc7cd8facfa30808c.jpg' },
    { id: 408, type: 'fish', category: 'beds', name: 'Декор "Замок"', price: 450, img: 'https://images.prom.ua/2014390562_2014390562.jpg?PIMAGE_ID=2014390562' },
    { id: 409, type: 'fish', category: 'beds', name: 'Растение пластик', price: 120, img: 'https://shop.deco-presents.com/img/cms/trava-iskusstvennaya-7a.jpg' },
    { id: 410, type: 'fish', category: 'beds', name: 'Грунт Черный 2кг', price: 150, img: 'https://content2.rozetka.com.ua/goods/images/big/461189040.jpg' },
    { id: 411, type: 'fish', category: 'hygiene', name: 'Сачок большой', price: 80, img: 'https://oase-ukraine.com/image/cache/catalog/fotozamena/sachok-dlya-pruda-bolshoy-500x500.jpg' },
    { id: 412, type: 'fish', category: 'hygiene', name: 'Скребок магнитный', price: 250, img: 'https://cdn.27.ua/original/7a/75/6650485_1.jpeg' },
    { id: 413, type: 'fish', category: 'hygiene', name: 'Сифон для грунта', price: 200, img: 'https://loremflickr.com/400/300/hose?lock=58' },
    { id: 414, type: 'fish', category: 'vitamins', name: 'AquaSafe (Кондиционер)', price: 180, img: 'https://pwa-api.eva.ua/img/512/512/resize/8/1/815307_1_1745407646.jpg' },
    { id: 415, type: 'fish', category: 'tech', name: 'LED Светильник', price: 800, img: 'https://feron.ua/image/cache/catalog/32409/al5020-750x750.jpg' },
    // === ГРЫЗУНЫ ===
    { id: 501, type: 'rodent', category: 'dry_food', name: 'Little One Хомяк', price: 140, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCezay_aNPSaVY2O8E71eBQ40uTEe9Cfz3cQ&s' },
    { id: 502, type: 'rodent', category: 'dry_food', name: 'Versele-Laga Cavia', price: 280, img: 'https://bestpet.com.ua/vendor/laravel-files/files/content/images/feed/__thumbnails__/612514-01800_500resizebg.jpg' },
    { id: 503, type: 'rodent', category: 'dry_food', name: 'Сено Луговое', price: 90, img: 'https://zoocool.ua/image/catalog/shop/products/08/48/4808/images/24482.png' },
    { id: 504, type: 'rodent', category: 'toys', name: 'Колесо беговое 15см', price: 150, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSSIENVCe_uBKmYTxcc44rEPvKZ_9W9477Q&s' },
    { id: 505, type: 'rodent', category: 'toys', name: 'Шар прогулочный', price: 200, img: 'https://petmarket.ua/content/images/32/536x536l50nn0/50316126146084.jpeg' },
    { id: 506, type: 'rodent', category: 'toys', name: 'Тоннель деревянный', price: 180, img: 'https://content1.rozetka.com.ua/goods/images/big/242963636.jpg' },
    { id: 507, type: 'rodent', category: 'beds', name: 'Клетка 2 этажа', price: 850, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HmyRcIjQBQpagE3szlrrYyXjSsIlWiO0Yw&s' },
    { id: 508, type: 'rodent', category: 'beds', name: 'Домик Кокос', price: 120, img: 'https://content.rozetka.com.ua/goods/images/big/4449576.jpg' },
    { id: 509, type: 'rodent', category: 'hygiene', name: 'Опилки прессованные', price: 50, img: 'https://zoohub.com.ua/1520-large_default/korm-sukhoj-dlya-kotyat-1st-choice-272-kg.jpg' },
    { id: 510, type: 'rodent', category: 'bowls', name: 'Поилка ниппельная', price: 70, img: 'https://murchyk.com.ua/img/10/1132/1797/1797-5972-lg.jpg' },
    { id: 511, type: 'rodent', category: 'bowls', name: 'Миска керамика', price: 110, img: 'https://images.prom.ua/4278050437_w640_h640_ploskaya-keramicheskaya-miska.jpg' },
    { id: 512, type: 'rodent', category: 'beds', name: 'Гамак для крыс', price: 160, img: 'https://zoomagazin.dp.ua/image/cache/catalog/trixie/108330_45391%5B1%5D-1200x800.jpg' },
    { id: 513, type: 'rodent', category: 'vitamins', name: 'Камень минеральный', price: 40, img: 'https://zoo-expert.com.ua/image/cache/catalog/product/8511/00026865000011305-500x500.jpg' },
    { id: 514, type: 'rodent', category: 'vitamins', name: 'Дропсы Йогуртовые', price: 65, img: 'https://cryovit.com/wp-content/uploads/2022/04/Fruit-yogurt-drops-Mixed-Flavour.png' },
    { id: 515, type: 'rodent', category: 'clothes', name: 'Переноска пластик', price: 350, img: 'https://cdn.27.ua/sc--media--prod/default/ff/f2/3a/fff23a46-de0e-4376-bb1d-83ca84406d75.jpg' },
    // === РЕПТИЛИИ ===
    { id: 601, type: 'reptile', category: 'tech', name: 'УФ Лампа 10.0', price: 600, img: 'https://pets-start.by/upload/resize_cache/iblock/3e3/1200_1200_140cd750bba9870f18aada2478b24840a/57rjdfxd66merdtuo58sa9n6tfb9ve5l.jpg' },
    { id: 602, type: 'reptile', category: 'tech', name: 'Термоковрик 7Вт', price: 450, img: 'https://ir.ozone.ru/s3/multimedia-w/c1000/6726734852.jpg' },
    { id: 603, type: 'reptile', category: 'tech', name: 'Лампа нагрева', price: 300, img: 'https://content2.rozetka.com.ua/goods/images/big/450963331.jpg' },
    { id: 604, type: 'reptile', category: 'dry_food', name: 'Сверчки консервы', price: 250, img: 'https://wormix.com.ua/image/cache/catalog/WORMIX%20%D0%A1%D0%92%D0%95%D0%A0%D0%A7%D0%9A%D0%98%201-1000x1000.jpg' },
    { id: 605, type: 'reptile', category: 'dry_food', name: 'ReptoMin Sticks', price: 220, img: 'https://masterzoo.ua/content/images/10/536x536l50nn0/tetra-reptomin-sukhyi-korm-dlia-cherepakh-22-h-30943462400479.jpg' },
    { id: 606, type: 'reptile', category: 'hygiene', name: 'Пинцет для кормления', price: 150, img: 'https://basket-26.wbbasket.ru/vol4841/part484175/484175434/images/c516x688/1.webp' },
    { id: 607, type: 'reptile', category: 'vitamins', name: 'Кальций с D3', price: 280, img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cen/cen27523/l/32.jpg' },
    { id: 608, type: 'reptile', category: 'beds', name: 'Террариум 30x30x30', price: 1800, img: 'https://content.rozetka.com.ua/goods/images/big/10696189.jpg' },
    { id: 609, type: 'reptile', category: 'beds', name: 'Коряга мангровая', price: 350, img: 'https://zoomark.com.ua/uploads/shop/products/large/7b6aab6d7991393ea46988b741098dce.jpg' },
    { id: 610, type: 'reptile', category: 'beds', name: 'Укрытие "Скала"', price: 400, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SK1Xft1wbT1gaPnof3pj9GcdpwhdecXv-g&s' },
    { id: 611, type: 'reptile', category: 'hygiene', name: 'Субстрат Кокос', price: 120, img: 'https://hydroponics.in.ua/image/cache/catalog/substrat/coir3-600x600-800x800.jpg' },
    { id: 612, type: 'reptile', category: 'hygiene', name: 'Мох сфагнум', price: 90, img: 'https://content1.rozetka.com.ua/goods/images/big/454818594.jpg' },
    { id: 613, type: 'reptile', category: 'bowls', name: 'Миска для червей', price: 180, img: 'https://img.kwcdn.com/product/fancy/f09f03ad-c1c3-45d0-a0da-4c70dbba6bdb.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp' },
    { id: 614, type: 'reptile', category: 'tech', name: 'Термогигрометр', price: 200, img: 'https://aquaribki.com.ua/image/cache/catalog/prod/15/terr7/6149-termogigrometr-elektronnyj-s-dvumya-datchikami-repti-zoo_sn-67-560x420.jpg' },
    { id: 615, type: 'reptile', category: 'beds', name: 'Фон (Кора)', price: 300, img: 'https://media.istockphoto.com/id/161098323/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D0%B1%D1%91%D1%80%D1%82%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D1%86%D0%B5%D0%BB%D0%BB%D1%8E%D0%BB%D0%BE%D0%B7%D0%BD%D0%B0%D1%8F-%D0%B8%D0%B7-%D0%BA%D0%B5%D0%B4%D1%80-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D1%83%D1%80%D0%B0-%D1%84%D0%BE%D0%BD.jpg?s=612x612&w=0&k=20&c=DJMrDd_ep9FYYhvzosKkiKGJqx-lKf2wp27Kyj78dwI=' },
    // === ЭКЗОТИКА ===
    { id: 701, type: 'exotic', category: 'dry_food', name: 'Корм для Хорьков', price: 550, img: 'https://content2.rozetka.com.ua/goods/images/big/243193353.jpg' },
    { id: 702, type: 'exotic', category: 'dry_food', name: 'Корм для Енотов', price: 650, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfuR0w8yt2nY0C99uoUBP2aiGk2asHLo2oBg&s' },
    { id: 703, type: 'exotic', category: 'vitamins', name: 'Мальт-паста', price: 320, img: 'https://petprofi.com.ua/components/com_jshopping/files/img_products/10280.jpg' },
    { id: 704, type: 'exotic', category: 'beds', name: 'Гамак тройной', price: 450, img: 'https://bigzoo.com.ua/image/cache/catalog/Zoo%20products/hammocks/gamak_troynoy4-750x750-product_thumb.jpg' },
    { id: 705, type: 'exotic', category: 'clothes', name: 'Шлейка для Енота', price: 400, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOXfoJKOe6DMaB4QIlha8lJ_1Z9qtd5Uk3Q&s' },
    { id: 706, type: 'exotic', category: 'clothes', name: 'Поводок 3м', price: 250, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzgcuIfBd7lzDnNrLAjXVkscgVR6zS544OA&s' },
    { id: 707, type: 'exotic', category: 'beds', name: 'Клетка XL (Хорьки)', price: 3500, img: 'https://zoomagazin.dp.ua/image/cache/catalog/ferplast/gruzunu2019/57062414_1_13-1200x800.jpg' },
    { id: 708, type: 'exotic', category: 'hygiene', name: 'Лоток угловой', price: 300, img: 'https://content1.rozetka.com.ua/goods/images/big/353447681.jpg' },
    { id: 709, type: 'exotic', category: 'hygiene', name: 'Шампунь Глубокий', price: 280, img: 'https://bestpet.com.ua/vendor/laravel-files/files/content/images/28/41205425528992_+d8e136cb0c.jpeg' },
    { id: 710, type: 'exotic', category: 'hygiene', name: 'Ликвидатор запаха', price: 220, img: 'https://petprofi.com.ua/components/com_jshopping/files/img_products/15250.jpg' },
    { id: 711, type: 'exotic', category: 'toys', name: 'Тоннель шуршащий', price: 350, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKbGdmMlMK-vSXK6LIrPG5-4cj02oFnYF18A&s' },
    { id: 712, type: 'exotic', category: 'toys', name: 'Конг для лакомств', price: 400, img: 'https://zoodom.ua/media/cache/sylius_shop_product_max_thumbnail/8e/1e/56f6b592e4aaf22a7deaf69d789e.jpeg' },
    { id: 713, type: 'exotic', category: 'beds', name: 'Домик мягкий', price: 500, img: 'https://cdn.27.ua/sc--media--prod/default/cd/59/e6/cd59e621-a1ef-4c89-a9ce-655b5f06c05e.jpg' },
    { id: 714, type: 'exotic', category: 'clothes', name: 'Переноска Авиа', price: 1200, img: 'https://content.rozetka.com.ua/goods/images/big/310979775.jpg' },
    { id: 715, type: 'exotic', category: 'tech', name: 'Кликер для дрессировки', price: 80, img: 'https://aquamaniya.com.ua/wp-content/uploads/2017/03/kliker-dlya-dressirovki-na-pruzhine-e1489510002859.jpg' }
];

// ДАННЫЕ ДЛЯ ПРИЮТА
const adoptionPets = [
    { id: 9001, name: "Барни", age: "2 года", gender: "Мальчик", type: "Собака", desc: "Барни нашли на Салтовке. Он очень добрый, но пугливый. Идеально подойдет в семью без маленьких детей.", history: "Был найден волонтерами зимой 2024 года. Вылечен от пироплазмоза. Сейчас полностью здоров, привит и кастрирован.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDqDMMoDZY987bAQd65D7N2mGVAKrvZ_UEw&s" },
    { id: 9002, name: "Муся", age: "5 месяцев", gender: "Девочка", type: "Кошка", desc: "Ласковая мурчалка. Любит спать на руках. Приучена к лотку.", history: "Мусю подбросили в коробке к магазину. Она очень тянется к людям.", img: "https://www.sunny-cat.ru/datas/users/2659-sl371433.jpg" },
    { id: 9003, name: "Рекс", age: "4 года", gender: "Мальчик", type: "Собака", desc: "Охранник и верный друг. Знает команды. Любит активные прогулки.", history: "Хозяева уехали и оставили его на цепи. Сейчас он ищет того, кто его больше не предаст.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyb149A8_kz2-jahApE65FzdIV_YRQQvk9A&s" },
    { id: 9004, name: "Зося", age: "1 год", gender: "Девочка", type: "Кошка", desc: "Спокойная и независимая дама. Любит наблюдать в окно.", history: "Жила в подвале, пока не попала в отлов. Стерилизована.", img: "https://gala-cat.ru/_bl/1/27843112.jpg" }
];

// --- 2. ЛОГИКА ---
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentAnimal = 'all';
let currentCategory = 'all';
let soundEnabled = false;

// STARTUP
function startSite(withSound) {


    if (withSound) {
        soundEnabled = true;
        const audio = document.getElementById('bgSound');
        audio.volume = 0.2;
        audio.play().catch(e => console.log("Autoplay blocked"));
        document.getElementById('soundToggle').classList.add('active');
    }

    renderAnimalFilters();
    renderCategoryOptions();
    showSkeletons();
    renderAdoption();

    setTimeout(() => {
        applyFilters();
    }, 1000);

    updateCartUI();
}

function toggleSound() {
    const audio = document.getElementById('bgSound');
    const icon = document.getElementById('soundToggle');
    if (audio.paused) {
        audio.play();
        icon.classList.add('active');
        icon.className = "fas fa-volume-up sound-toggle active";
    } else {
        audio.pause();
        icon.classList.remove('active');
        icon.className = "fas fa-volume-mute sound-toggle";
    }
}

function showSkeletons() {
    const grid = document.getElementById('shopGrid');
    grid.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        grid.innerHTML += `
                <div class="card skeleton" style="height: 350px;"></div>
                `;
    }
}

function renderAnimalFilters() {
    const container = document.getElementById('animalFilterContainer');
    let html = `<button class="animal-btn active" onclick="setAnimal('all', this)">Все виды</button>`;
    animals.forEach(a => { html += `<button class="animal-btn" onclick="setAnimal('${a.id}', this)">${a.icon} ${a.label}</button>`; });
    container.innerHTML = html;
}

function renderCategoryOptions() {
    const select = document.getElementById('categorySelect');
    categories.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.innerText = c.label;
        select.appendChild(opt);
    });
}

function setAnimal(type, btn) {
    currentAnimal = type;
    document.querySelectorAll('.animal-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilters();
}

function applyFilters() {
    currentCategory = document.getElementById('categorySelect').value;
    const searchVal = document.getElementById('searchInput').value.toLowerCase();
    const sortVal = document.getElementById('sortSelect').value;
    const grid = document.getElementById('shopGrid');

    let filtered = products.filter(p => {
        const matchAnim = (currentAnimal === 'all') || (p.type === currentAnimal);
        const matchCat = (currentCategory === 'all') || (p.category === currentCategory);
        const matchSearch = p.name.toLowerCase().includes(searchVal);
        return matchAnim && matchCat && matchSearch;
    });

    if (sortVal === 'asc') filtered.sort((a, b) => a.price - b.price);
    if (sortVal === 'desc') filtered.sort((a, b) => b.price - a.price);
    if (sortVal === 'fav') filtered = filtered.filter(p => favorites.includes(p.id));

    grid.innerHTML = '';

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="color:gray; grid-column:1/-1; text-align:center; padding:50px;">Ничего не найдено 😿</p>`;
        return;
    }

    filtered.forEach(p => {
        const catLabel = categories.find(c => c.id === p.category)?.label || 'Товар';
        const isFav = favorites.includes(p.id) ? 'active' : '';

        const el = document.createElement('div');
        el.className = 'card';
        el.setAttribute('onclick', `openProduct(${p.id})`);

        el.innerHTML = `
                    <button class="fav-btn ${isFav}" onclick="toggleFav(event, ${p.id}, this)">
                        <i class="fas fa-heart"></i>
                    </button>
                    <img src="${p.img}" alt="${p.name}">
                    <div class="card-cat">${catLabel}</div>
                    <div class="card-body">
                        <div class="card-title">${p.name}</div>
                        <div style="display:flex; align-items:center; margin-top:auto;">
                            <span class="card-price">${p.price} ₴</span>
                            <button class="add-to-cart" onclick="addToCart(event, ${p.id}, this)"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                `;
        grid.appendChild(el);
    });
    gsap.fromTo(".card", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.02 });
}

// --- ADOPTION LOGIC ---
function renderAdoption() {
    const grid = document.getElementById('adoptGrid');
    grid.innerHTML = '';
    adoptionPets.forEach(pet => {
        grid.innerHTML += `
                <div class="card adopt-card">
                    <img src="${pet.img}" alt="${pet.name}">
                    <div class="card-body">
                        <h3 style="font-size: 1.2rem; font-weight: 800; color:white;">${pet.name}</h3>
                        <div class="adopt-badges">
                            <span class="badge age">${pet.age}</span>
                            <span class="badge">${pet.gender}</span>
                            <span class="badge">${pet.type}</span>
                        </div>
                        <p style="color:#aaa; font-size:0.9rem; margin-bottom:15px; flex-grow:1;">${pet.desc}</p>
                        <div style="display:flex; gap:10px;">
                            <button class="cta-btn" style="flex:1; font-size:0.9rem; justify-content:center;" onclick="openAdoptModal(${pet.id})">Познакомиться</button>
                            <button class="cta-btn" style="background:var(--secondary); width:50px; justify-content:center; padding:0;" onclick="showSupport(event)"><i class="fas fa-hand-holding-heart"></i></button>
                        </div>
                    </div>
                </div>
                `;
    });
}

function openAdoptModal(id) {
    const pet = adoptionPets.find(p => p.id === id);
    if (!pet) return;

    document.getElementById('pmImg').src = pet.img;
    document.getElementById('pmTitle').innerText = "Я " + pet.name;
    document.getElementById('pmPrice').innerHTML = `<span style="font-size:1rem; color:var(--secondary);">Ищет дом</span>`;
    document.getElementById('pmCat').innerText = pet.type;

    document.getElementById('pmContent').innerHTML = `
                <div style="background:rgba(255,255,255,0.05); padding:15px; border-radius:10px; margin-bottom:20px;">
                    <strong>История:</strong><br> ${pet.history}
                </div>
                <p class="pm-desc">${pet.desc}</p>
                <p><strong>Характер:</strong> Добрый, преданный.</p>
            `;

    const btn = document.getElementById('pmAddBtn');
    btn.innerHTML = `Хочу забрать домой <i class="fas fa-heart"></i>`;
    btn.style.background = "var(--secondary)";
    btn.onclick = () => {
        createFlyingIcon(event.clientX, event.clientY, '❤️');
        showToast("Спасибо за доброе сердце! Мы свяжемся.", "var(--secondary)");
        closeProduct();
    };

    document.getElementById('productModal').classList.add('open');
    document.getElementById('overlay').classList.add('open');
}


// --- FAVORITES ---
function toggleFav(e, id, btn) {
    e.stopPropagation();
    if (favorites.includes(id)) {
        favorites = favorites.filter(fid => fid !== id);
        btn.classList.remove('active');
    } else {
        favorites.push(id);
        btn.classList.add('active');
        createFlyingIcon(e.clientX, e.clientY, '❤️');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    if (document.getElementById('sortSelect').value === 'fav') applyFilters();
}

// --- CART ANIMATION & LOGIC ---
function addToCart(event, id, btnElement) {
    if (event) {
        event.stopPropagation();
        const rect = btnElement.getBoundingClientRect();
        createFlyingIcon(rect.left, rect.top, '🐾');
    }

    const product = products.find(p => p.id === id);
    const item = cart.find(i => i.id === id);
    if (item) item.qty++;
    else cart.push({ ...product, qty: 1 });
    saveCart(); updateCartUI(); showToast("Добавлено в корзину!");
}

function createFlyingIcon(x, y, char) {
    const el = document.createElement('div');
    el.className = 'fly-icon';
    el.innerText = char;
    el.style.left = x + 'px';
    el.style.top = y + 'px';

    const cartIcon = document.querySelector('.cart-trigger');
    const cartRect = cartIcon.getBoundingClientRect();

    el.style.setProperty('--tx', (cartRect.left - x) + 'px');
    el.style.setProperty('--ty', (cartRect.top - y) + 'px');

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 800);
}

// --- MODALS (PRODUCT) ---
function openProduct(id) {
    const p = products.find(prod => prod.id === id);
    if (!p) return;

    document.getElementById('pmImg').src = p.img;
    document.getElementById('pmTitle').innerText = p.name;
    document.getElementById('pmPrice').innerText = p.price + ' ₴';

    const catObj = categories.find(c => c.id === p.category);
    document.getElementById('pmCat').innerText = catObj ? catObj.label : 'Товар';

    document.getElementById('pmContent').innerHTML = `<p id="pmDesc" class="pm-desc">${getAutoDescription(p, catObj ? catObj.label : '')}</p>`;

    const btn = document.getElementById('pmAddBtn');
    btn.innerHTML = 'В корзину';
    btn.style.background = "var(--primary)";
    btn.onclick = (e) => {
        addToCart(e, p.id, btn);
        closeProduct();
    };

    document.getElementById('productModal').classList.add('open');
    document.getElementById('overlay').classList.add('open');
}

function closeProduct() {
    document.getElementById('productModal').classList.remove('open');

    if (!document.getElementById('cartPanel').classList.contains('open')) {
        document.getElementById('overlay').classList.remove('open');
    }
}

function getAutoDescription(product, catLabel) {
    const descs = {
        'dry_food': 'Полнорационный сухой корм премиум класса. Обеспечивает здоровье пищеварения, блеск шерсти и крепкий иммунитет.',
        'wet_food': 'Нежные кусочки в соусе. Высокое содержание мяса, отличная поедаемость.',
        'toys': 'Прочная и безопасная игрушка из качественных материалов. Помогает бороться со скукой.',
        'beds': 'Максимальный комфорт для сна. Мягкие гипоаллергенные материалы.',
        'tech': 'Современный гаджет для облегчения ухода за питомцем. Надежная электроника.',
        'clothes': 'Стильная и удобная одежда. Защищает от холода и грязи.',
        'hygiene': 'Средство для поддержания чистоты. Эффективно устраняет запахи.',
        'vitamins': 'Комплекс витаминов и минералов. Рекомендуется ветеринарами.',
        'bowls': 'Удобная посуда из безопасных материалов. Легко моется.'
    };
    return descs[product.category] || `Качественный товар из категории "${catLabel}".`;
}

// --- GENERAL UI ---
function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
    saveCart(); updateCartUI();
}

function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }

function updateCartUI() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    const badge = document.getElementById('cartBadge');
    container.innerHTML = '';
    let total = 0, count = 0;

    if (cart.length === 0) container.innerHTML = '<p style="text-align:center; color:#555; margin-top:50px">Пусто...</p>';

    cart.forEach(item => {
        total += item.price * item.qty;
        count += item.qty;
        container.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.img}" style="width:60px; height:60px; object-fit:cover; border-radius:8px;">
                        <div style="flex-grow:1">
                            <div style="font-weight:bold; font-size:0.9rem">${item.name}</div>
                            <div style="color:var(--primary)">${item.price} ₴</div>
                            <div class="qty-controls">
                                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                                <span>${item.qty}</span>
                                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                            </div>
                        </div>
                        <i class="fas fa-trash" style="color:#ff4757; cursor:pointer" onclick="changeQty(${item.id}, -999)"></i>
                    </div>
                `;
    });
    totalEl.innerText = total + ' ₴';
    badge.innerText = count;
    gsap.fromTo(badge, { scale: 1.3 }, { scale: 1, duration: 0.2 });
}

function toggleCart() {
    document.getElementById('cartPanel').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('open');
}

function openSupport() {
    document.getElementById('supportModal').classList.add('open');
    document.getElementById('overlay').classList.add('open');
}

function showSupport(e) {
    e.stopPropagation();
    openSupport();
}

function closeAll() {
    document.getElementById('cartPanel').classList.remove('open');
    document.getElementById('checkoutModal').classList.remove('open');
    document.getElementById('supportModal').classList.remove('open');
    document.getElementById('productModal').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
}

function openCheckout() {
    if (cart.length === 0) return showToast("Корзина пуста!", "#ff4757");
    document.getElementById('cartPanel').classList.remove('open'); // Закрыть корзину перед чекаутом
    document.getElementById('checkoutModal').classList.add('open');
    document.getElementById('overlay').classList.add('open');
}

function submitOrder(e) {
    e.preventDefault();
    document.getElementById('btnText').style.display = 'none';
    document.getElementById('btnLoader').style.display = 'block';
    setTimeout(() => {
        cart = []; saveCart(); updateCartUI(); closeAll();
        document.getElementById('btnText').style.display = 'block';
        document.getElementById('btnLoader').style.display = 'none';
        e.target.reset();
        showToast("Заказ принят! Спасибо 💛💙");
    }, 1500);
}

function showToast(msg, color = 'var(--secondary)') {
    const t = document.getElementById('toast');
    t.innerHTML = `<i class="fas fa-paw"></i> ${msg}`;
    t.style.background = color;
    t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000);
}

// --- BACKGROUND 3D  ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geo = new THREE.BufferGeometry();
const pos = new Float32Array(600 * 3);
for (let i = 0; i < 600 * 3; i++) pos[i] = (Math.random() - 0.5) * 25;
geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
const mat = new THREE.PointsMaterial({ size: 0.04, color: 0xFF9F1C, transparent: true, opacity: 0.6 });
const points = new THREE.Points(geo, mat);
scene.add(points);
camera.position.z = 5;


let mouseX = 0; let mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
});

function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.001;
    points.rotation.x += 0.0005;

    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}
animate();
window.onresize = () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); };


window.addEventListener('load', () => {
    startSite(false);
});

