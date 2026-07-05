const DEFAULT_SETS = [
  {
    "id": "set1",
    "title": "Set 1 · Sentences",
    "lines": [
      {
        "th": "ป้าอ้วนแต่หลานสาวผอม",
        "rom": "bpâa ûuan dtàe lăan săao pŏm",
        "en": "Aunt is fat but niece is skinny."
      },
      {
        "th": "ช้างใหญ่กว่าเรือ",
        "rom": "cháang yài gwàa reuua",
        "en": "The elephant is bigger than the boat."
      },
      {
        "th": "อย่าเชื่อผู้ขาย",
        "rom": "yàa chêuua pôo kăai",
        "en": "Don't believe the seller."
      },
      {
        "th": "คนสูงข้ามถนน",
        "rom": "kon sŏong kâam tà-nŏn",
        "en": "The tall person crosses the street."
      },
      {
        "th": "หลานชายซื่อสัตย์และใจดี",
        "rom": "lăan chaai sʉ̂ʉ-sàt láe jai-dii",
        "en": "Grandson is honest and kind."
      },
      {
        "th": "หลานชายมีผมสั้นบลอนและจมูกเล็ก",
        "rom": "lăan chaai mii phǒm sân blɔɔn láe jà-mùuk lék",
        "en": "Nephew has short blonde hair and a small nose."
      },
      {
        "th": "ลูกค้าเอาส้อมสองอันและช้อนหนึ่งอัน",
        "rom": "lôok káa ao sôm sŏng an láe chón nèung an",
        "en": "The customer wants two forks and one spoon."
      },
      {
        "th": "ซีอิ๊วอยู่ข้างน้ำปลาไหม",
        "rom": "see íw yòo kâang náam bplaa măi",
        "en": "Is the soy sauce next to the fish sauce?"
      },
      {
        "th": "พี่ชายไม่ค่อยออกกำลังกาย",
        "rom": "pêe chaai mâi kôi òk gam-lang gaai",
        "en": "Older brother rarely exercises."
      },
      {
        "th": "เปิดหน้าต่าง ห้องนอนร้อน",
        "rom": "bpə̀ət nâa-dtàang, hông non rón",
        "en": "Open the window — the bedroom is hot."
      },
      {
        "th": "ชอบฤดูไหน ฉันชอบฤดูหนาว",
        "rom": "chôp réu-doo năi, chăn chôp réu-doo năao",
        "en": "Which season do you like? I like winter."
      },
      {
        "th": "สัตว์เลี้ยงของฉันคือนก มันอยู่บนต้นไม้",
        "rom": "sàt líiang kŏng chăn keu nók, man yòo bon dtôn mái",
        "en": "My pet is a bird; it's up in the tree."
      },
      {
        "th": "เขาดื่มน้ำสามแก้วเพราะหิวน้ำ",
        "rom": "kăo dèum náam săam gâew phrɔ́ hĭw náam",
        "en": "He drank three glasses of water because he was thirsty."
      },
      {
        "th": "ธนาคารอยู่ชั้นบน สำนักงานอยู่ชั้นล่าง",
        "rom": "tá-naa-kaan yòo chán bon, săm-nák ngaan yòo chán lâang",
        "en": "The bank is upstairs; the office is downstairs."
      }
    ]
  },
  {
    "id": "set2",
    "title": "Set 2 · Mix",
    "lines": [
      {
        "th": "แมวของฉันหิวน้ำ",
        "rom": "maew kŏng chăn hĭw náam",
        "en": "My cat is thirsty."
      },
      {
        "th": "นกตัวนี้สวยมาก",
        "rom": "nók dtuua née sŭuay mâak",
        "en": "This bird is very beautiful."
      },
      {
        "th": "ทำไมคุณเหนื่อย",
        "rom": "tham-mai kun nʉ̀ai",
        "en": "Why are you tired?"
      },
      {
        "th": "หมาของเขานอนบนเตียง",
        "rom": "măa kŏng kăo non bon dtiiang",
        "en": "His dog sleeps on the bed."
      },
      {
        "th": "ฉันอยากซื้อดอกไม้ให้แฟน",
        "rom": "chăn yàak séu dòk mái hâi faen",
        "en": "I want to buy flowers for my partner."
      },
      {
        "th": "วันนี้ร้อนมาก",
        "rom": "wan-née rón mâak",
        "en": "Today is very hot."
      },
      {
        "th": "ช้างใหญ่กว่าหมา",
        "rom": "cháang yài gwàa măa",
        "en": "The elephant is bigger than the dog."
      },
      {
        "th": "ผมกำลังหาแมวอยู่",
        "rom": "pŏm gam-lang hăa maew yòo",
        "en": "I'm looking for the cat."
      },
      {
        "th": "น้องสาวชอบกินมะม่วง",
        "rom": "nóng săao chôp gin má-mûuang",
        "en": "(My) younger sister likes to eat mango."
      },
      {
        "th": "ที่วัดมีต้นไม้เยอะ",
        "rom": "têe wát mii dtôn mái yúh",
        "en": "There are lots of trees at the temple."
      },
      {
        "th": "เขาพูดภาษาไทยได้",
        "rom": "kăo pôot paa-săa tai dâai",
        "en": "He can speak Thai."
      },
      {
        "th": "ฉันไม่ชอบเบียร์",
        "rom": "chăn mâi chôp biia",
        "en": "I don't like beer."
      },
      {
        "th": "คุณอยากดื่มอะไร",
        "rom": "kun yàak dèum à-rai",
        "en": "What do you want to drink?"
      },
      {
        "th": "คุณจะกินข้าวที่ไหน",
        "rom": "kun jà gin kâao têe năi",
        "en": "Where are you going to eat?"
      },
      {
        "th": "หลานสาวของฉันสูงและสวย",
        "rom": "lăan săao kŏng chăn sŏong láe sŭuay",
        "en": "My niece is tall and beautiful."
      },
      {
        "th": "ตำรวจข้ามถนน",
        "rom": "dtam-rùat kâam tà-nŏn",
        "en": "The policeman crosses the street."
      },
      {
        "th": "ฉันจำชื่อคุณได้",
        "rom": "chăn jam chêu kun dâai",
        "en": "I remember your name."
      },
      {
        "th": "คุณตื่นกี่โมง",
        "rom": "kun dtèun gèe mohng",
        "en": "What time do you wake up?"
      },
      {
        "th": "พ่อกับแม่อยู่บ้าน",
        "rom": "pôr gàp mâe yòo bâan",
        "en": "Dad and mom are at home."
      }
    ]
  },
  {
    "id": "set3",
    "title": "Set 3 · Mix",
    "lines": [
      {
        "th": "ผมหิวมาก อยากกินข้าว",
        "rom": "pŏm hĭw mâak, yàak gin kâao",
        "en": "I'm very hungry; I want to eat."
      },
      {
        "th": "โรงแรมอยู่ที่ไหน",
        "rom": "rohng raem yòo têe năi",
        "en": "Where is the hotel?"
      },
      {
        "th": "ส้มตำเผ็ดมาก",
        "rom": "sôm dtam phèt mâak",
        "en": "The papaya salad is very spicy."
      },
      {
        "th": "เลี้ยวขวาที่ธนาคาร",
        "rom": "líieow kwăa têe tá-naa-kaan",
        "en": "Turn right at the bank."
      },
      {
        "th": "เมื่อวานผมทำงานหนัก",
        "rom": "mêuua-waan pŏm tam ngaan nàk",
        "en": "Yesterday I worked hard."
      },
      {
        "th": "ขอน้ำส้มหนึ่งแก้ว",
        "rom": "kŏr náam sôm nèung gâew",
        "en": "One glass of orange juice, please."
      },
      {
        "th": "ร้านอาหารนี้แพง",
        "rom": "ráan aa-hăan née phaeng",
        "en": "This restaurant is expensive."
      },
      {
        "th": "ผมไปโรงเรียนด้วยจักรยาน",
        "rom": "pŏm bpai rohng riian dûuay jàk-grà-yaan",
        "en": "I go to school by bicycle."
      },
      {
        "th": "ผมรักครอบครัวของผม",
        "rom": "pŏm rák krôp kruua kŏng pŏm",
        "en": "I love my family."
      },
      {
        "th": "คุณอยากกินอะไร",
        "rom": "kun yàak gin à-rai",
        "en": "What do you want to eat?"
      },
      {
        "th": "ตรงไปแล้วเลี้ยวซ้าย",
        "rom": "dtrong bpai láew líieow sáai",
        "en": "Go straight then turn left."
      },
      {
        "th": "ผมชอบกินไก่มากกว่าหมู",
        "rom": "pŏm chôp gin gài mâak gwàa mŏo",
        "en": "I like eating chicken more than pork."
      },
      {
        "th": "โรงพยาบาลอยู่ใกล้ตลาด",
        "rom": "rohng pá-yaa-baan yòo glâi dtà-làat",
        "en": "The hospital is near the market."
      },
      {
        "th": "อาหารร้อนแล้ว",
        "rom": "aa-hăan rón láew",
        "en": "The food is hot now."
      },
      {
        "th": "คุณจะไปสนามบินยังไง",
        "rom": "kun jà bpai sà-năam bin yang ngai",
        "en": "How will you get to the airport?"
      },
      {
        "th": "ตอนเย็นผมชอบฟังเพลง",
        "rom": "dton yen pŏm chôp fang pleng",
        "en": "In the evening I like to listen to music."
      },
      {
        "th": "ขอเมนูหน่อย",
        "rom": "kŏr mee-noo nòi",
        "en": "May I have the menu?"
      },
      {
        "th": "น้องชายของผมอายุสิบปี",
        "rom": "nóng chaai kŏng pŏm aa-yú sìp bpii",
        "en": "My younger brother is ten years old."
      },
      {
        "th": "บ้านผมอยู่ข้างวัด",
        "rom": "bâan pŏm yòo kâang wát",
        "en": "My house is next to the temple."
      },
      {
        "th": "วันนี้ผมยุ่งมาก",
        "rom": "wan-née pŏm yûng mâak",
        "en": "Today I'm very busy."
      },
      {
        "th": "ผมอิ่มแล้ว",
        "rom": "pŏm ìm láew",
        "en": "I'm full now."
      },
      {
        "th": "เรานั่งเรือไปเที่ยว",
        "rom": "rao nâng reuua bpai tîieow",
        "en": "We take a boat to go traveling."
      }
    ]
  },
  {
    "id": "set4",
    "title": "Set 4 · Mix",
    "lines": [
      {
        "th": "น้ำเปล่าเย็นไหม",
        "rom": "náam bplào yen măi",
        "en": "Is the water cold?"
      },
      {
        "th": "แท็กซี่แพงกว่ารถเมล์",
        "rom": "táek-sêe phaeng gwàa rót may",
        "en": "The taxi is more expensive than the bus."
      },
      {
        "th": "เอากาแฟเย็นหนึ่งที่",
        "rom": "ao gaa-fae yen nèung têe",
        "en": "One iced coffee, please."
      },
      {
        "th": "ห้างอยู่ตรงไหน",
        "rom": "hâang yòo dtrong năi",
        "en": "Where exactly is the mall?"
      },
      {
        "th": "เธอสวยและใจดี",
        "rom": "thəə sŭuay láe jai-dii",
        "en": "She is beautiful and kind."
      },
      {
        "th": "ผมอาบน้ำตอนเช้า",
        "rom": "pŏm àap náam dton cháo",
        "en": "I shower in the morning."
      },
      {
        "th": "กล้วยหวานมาก",
        "rom": "glûuay wăan mâak",
        "en": "The banana is very sweet."
      },
      {
        "th": "พรุ่งนี้เพื่อนจะมาบ้าน",
        "rom": "prûng-née pêuuan jà maa bâan",
        "en": "Tomorrow my friend will come over."
      },
      {
        "th": "คิดเงินเท่าไหร่",
        "rom": "kít ngern thâo-rài",
        "en": "How much is it?"
      },
      {
        "th": "เลี้ยวซ้ายที่โรงเรียน",
        "rom": "líieow sáai têe rohng riian",
        "en": "Turn left at the school."
      },
      {
        "th": "เขาชื่ออะไร",
        "rom": "kăo chêu à-rai",
        "en": "What is his name?"
      },
      {
        "th": "ตลาดขายปลาสด",
        "rom": "dtà-làat kăai bplaa sòt",
        "en": "The market sells fresh fish."
      },
      {
        "th": "สนามบินอยู่ไกลจากเมือง",
        "rom": "sà-năam bin yòo glai jàak mʉang",
        "en": "The airport is far from the city."
      },
      {
        "th": "ผมนอนดึกทุกคืน",
        "rom": "pŏm non dʉ̀k túk keun",
        "en": "I sleep late every night."
      },
      {
        "th": "คุณมาที่นี่ยังไง",
        "rom": "kun maa têe nêe yang ngai",
        "en": "How did you get here?"
      },
      {
        "th": "ขอข้าวสองจาน",
        "rom": "kŏr kâao sŏng jaan",
        "en": "Two plates of rice, please."
      },
      {
        "th": "คุณมีพี่น้องกี่คน",
        "rom": "kun mii pêe nóng gèe kon",
        "en": "How many siblings do you have?"
      },
      {
        "th": "ผมขับรถไปทะเล",
        "rom": "pŏm khàp rót bpai tá-lee",
        "en": "I drive to the sea."
      },
      {
        "th": "เขาเหนื่อยเพราะทำงานเยอะ",
        "rom": "kăo nʉ̀ai phrɔ́ tam ngaan yúh",
        "en": "He's tired because he works a lot."
      },
      {
        "th": "คุณดื่มเบียร์ไหม",
        "rom": "kun dèum biia măi",
        "en": "Do you drink beer?"
      },
      {
        "th": "ที่นี่มีรถไฟไหม",
        "rom": "têe nêe mii rót fai măi",
        "en": "Is there a train here?"
      },
      {
        "th": "วันนี้อากาศดี",
        "rom": "wan-née aa-gàat dii",
        "en": "The weather is nice today."
      }
    ]
  },
  {
    "id": "set5",
    "title": "Set 5 · Mix",
    "lines": [
      {
        "th": "ขนมนี้หวานมาก",
        "rom": "kà-nŏm née wăan mâak",
        "en": "This snack is very sweet."
      },
      {
        "th": "เดินตรงไปห้านาที",
        "rom": "dəən dtrong bpai hâa naa-tee",
        "en": "Walk straight for five minutes."
      },
      {
        "th": "ผมชอบอ่านหนังสือตอนกลางคืน",
        "rom": "pŏm chôp àan nǎng-sʉ̌ʉ dton glaang keun",
        "en": "I like reading books at night."
      },
      {
        "th": "เอาส้มตำไม่เผ็ด",
        "rom": "ao sôm dtam mâi phèt",
        "en": "I'll have papaya salad, not spicy."
      },
      {
        "th": "เพื่อนของผมใจดีมาก",
        "rom": "pêuuan kŏng pŏm jai-dii mâak",
        "en": "My friend is very kind."
      },
      {
        "th": "ร้านกาแฟเปิดกี่โมง",
        "rom": "ráan gaa-fae bpèrt gèe mohng",
        "en": "What time does the coffee shop open?"
      },
      {
        "th": "ผมหลงทาง",
        "rom": "pŏm lŏng taang",
        "en": "I'm lost."
      },
      {
        "th": "พี่สาวทำงานทุกวัน",
        "rom": "pêe săao tam ngaan túk wan",
        "en": "Older sister works every day."
      },
      {
        "th": "น้ำส้มแก้วนี้เท่าไหร่",
        "rom": "náam sôm gâew née thâo-rài",
        "en": "How much is this glass of orange juice?"
      },
      {
        "th": "ขอตั๋วรถไฟสองใบ",
        "rom": "kŏr dtŭua rót fai sŏng bai",
        "en": "Two train tickets, please."
      },
      {
        "th": "คุณทำอะไรตอนเย็น",
        "rom": "kun tam à-rai dton yen",
        "en": "What do you do in the evening?"
      },
      {
        "th": "ผมอยากกินก๋วยเตี๋ยว",
        "rom": "pŏm yàak gin gŭay-dtĭieow",
        "en": "I want to eat noodles."
      },
      {
        "th": "โรงแรมอยู่ใกล้สถานี",
        "rom": "rohng raem yòo glâi sà-tăa-nee",
        "en": "The hotel is near the station."
      },
      {
        "th": "ผมออกกำลังกายทุกเช้า",
        "rom": "pŏm òk gam-lang gaai túk cháo",
        "en": "I exercise every morning."
      },
      {
        "th": "ไข่กับข้าวอร่อย",
        "rom": "kài gàp kâao à-ròi",
        "en": "Egg with rice is tasty."
      },
      {
        "th": "คุณจะไปไหน",
        "rom": "kun jà bpai năi",
        "en": "Where are you going?"
      },
      {
        "th": "เธอเรียนภาษาไทย",
        "rom": "thəə riian paa-săa tai",
        "en": "She studies Thai."
      },
      {
        "th": "คุณชอบอาหารเผ็ดไหม",
        "rom": "kun chôp aa-hăan phèt măi",
        "en": "Do you like spicy food?"
      },
      {
        "th": "รถเมล์คันนี้ไปห้าง",
        "rom": "rót may kan née bpai hâang",
        "en": "This bus goes to the mall."
      },
      {
        "th": "ครอบครัวของผมอยู่กรุงเทพ",
        "rom": "krôp kruua kŏng pŏm yòo grung-têep",
        "en": "My family lives in Bangkok."
      },
      {
        "th": "ขอช้อนกับส้อม",
        "rom": "kŏr chón gàp sôm",
        "en": "Spoon and fork, please."
      },
      {
        "th": "เลี้ยวขวาแล้วตรงไป",
        "rom": "líieow kwăa láew dtrong bpai",
        "en": "Turn right then go straight."
      },
      {
        "th": "พ่อกับแม่รักผม",
        "rom": "pôr gàp mâe rák pŏm",
        "en": "Dad and mom love me."
      },
      {
        "th": "ร้านนี้ถูกและอร่อย",
        "rom": "ráan née tòok láe à-ròi",
        "en": "This shop is cheap and tasty."
      },
      {
        "th": "ผมชอบเดินเล่นในสวน",
        "rom": "pŏm chôp dəən lên nai sŭuan",
        "en": "I like to stroll in the park."
      },
      {
        "th": "วันนี้ผมมีความสุข",
        "rom": "wan-née pŏm mii kwaam sùk",
        "en": "Today I'm happy."
      },
      {
        "th": "ผมกินข้าวเช้าทุกวัน",
        "rom": "pŏm gin kâao cháo túk wan",
        "en": "I eat breakfast every day."
      },
      {
        "th": "บ้านคุณอยู่ไกลไหม",
        "rom": "bâan kun yòo glai măi",
        "en": "Is your house far?"
      },
      {
        "th": "คืนนี้ผมจะนอนเร็ว",
        "rom": "keun née pŏm jà non reo",
        "en": "Tonight I'll sleep early."
      }
    ]
  },
  {
    "id": "set6",
    "title": "Set 6 · Mix",
    "lines": [
      {
        "th": "วันเกิดของผมคือวันศุกร์",
        "rom": "wan-gə̀ət kŏng pŏm keu wan sùk",
        "en": "My birthday is on Friday."
      },
      {
        "th": "ผมป่วย วันนี้อยู่บ้าน",
        "rom": "pŏm bpùai, wan-née yòo bâan",
        "en": "I'm sick, so I'm home today."
      },
      {
        "th": "กระเป๋าของฉันหนักมาก",
        "rom": "grà-bpăo kŏng chăn nàk mâak",
        "en": "My bag is very heavy."
      },
      {
        "th": "คุณเป็นนักศึกษาใช่ไหม",
        "rom": "kun bpen nák-sèuk-săa châi măi",
        "en": "You're a student, right?"
      },
      {
        "th": "เที่ยงนี้ผมกินอาหารกลางวันกับเพื่อน",
        "rom": "tîiang née pŏm gin aa-hăan glaang wan gàp pêuuan",
        "en": "At noon I have lunch with a friend."
      },
      {
        "th": "ผมชอบชาไทยเย็น",
        "rom": "pŏm chôp chaa tai yen",
        "en": "I like Thai iced tea."
      },
      {
        "th": "แกงเขียวหวานเผ็ดไหม",
        "rom": "gaeng kĭieow wăan phèt măi",
        "en": "Is the green curry spicy?"
      },
      {
        "th": "เมื่อวานผมไปชายหาดกับแฟน",
        "rom": "mêuua-waan pŏm bpai chaai-hàat gàp faen",
        "en": "Yesterday I went to the beach with my partner."
      },
      {
        "th": "ผมเกิดที่กรุงเทพ",
        "rom": "pŏm gə̀ət têe grung-têep",
        "en": "I was born in Bangkok."
      },
      {
        "th": "ผู้ชายคนนั้นหยิ่งมาก",
        "rom": "phûu-chaai kon nán yìng mâak",
        "en": "That man is very arrogant."
      },
      {
        "th": "ตาของเธอสีน้ำตาล",
        "rom": "dtaa kŏng thəə sĕe náam-dtaan",
        "en": "Her eyes are brown."
      },
      {
        "th": "เขาสูบบุหรี่หน้าร้าน",
        "rom": "kăo sòop bù-rèe nâa ráan",
        "en": "He smokes in front of the shop."
      },
      {
        "th": "อย่าร้องไห้ ทุกอย่างเรียบร้อย",
        "rom": "yàa róng-hâi, túk yàang rîiap-rói",
        "en": "Don't cry, everything's fine."
      },
      {
        "th": "ผมแพ้นม",
        "rom": "pŏm páe nom",
        "en": "I'm allergic to milk."
      },
      {
        "th": "รองเท้าคู่นี้แพงมาก",
        "rom": "rong-táo kôo née phaeng mâak",
        "en": "This pair of shoes is very expensive."
      },
      {
        "th": "ผมซื้อเสื้อผ้าใหม่",
        "rom": "pŏm séu sêuua-pâa mài",
        "en": "I bought new clothes."
      },
      {
        "th": "คุณอยากได้อะไร",
        "rom": "kun yàak dâai à-rai",
        "en": "What do you want to get?"
      },
      {
        "th": "เขาโทรหาผมเมื่อคืน",
        "rom": "kăo toh hăa pŏm mêuua keun",
        "en": "He called me last night."
      },
      {
        "th": "คุณเคยไปญี่ปุ่นไหม",
        "rom": "kun koiie bpai yêe-bpùn măi",
        "en": "Have you ever been to Japan?"
      },
      {
        "th": "เมื่อคืนผมนอนไม่หลับ",
        "rom": "mêuua keun pŏm non mâi làp",
        "en": "Last night I couldn't sleep."
      },
      {
        "th": "พี่สาวของผมเป็นหมอ",
        "rom": "pêe săao kŏng pŏm bpen mŏr",
        "en": "My older sister is a doctor."
      },
      {
        "th": "พรุ่งนี้เป็นวันหยุด",
        "rom": "prûng-née bpen wan-yùt",
        "en": "Tomorrow is a day off."
      },
      {
        "th": "ขอโทษ ถามอะไรหน่อยได้ไหม",
        "rom": "kŏr-tôht, tăam à-rai nòi dâai măi",
        "en": "Excuse me, can I ask something?"
      },
      {
        "th": "ยินดีที่ได้รู้จัก",
        "rom": "yin-dii têe dâai róo-jàk",
        "en": "Nice to meet you."
      },
      {
        "th": "ฝันดีนะ",
        "rom": "făn dii ná",
        "en": "Sweet dreams."
      },
      {
        "th": "หัวหินอยู่ไกลจากกรุงเทพ",
        "rom": "hŭua-hĭn yòo glai jàak grung-têep",
        "en": "Hua Hin is far from Bangkok."
      },
      {
        "th": "ญาติของผมอยู่ญี่ปุ่น",
        "rom": "yâat kŏng pŏm yòo yêe-bpùn",
        "en": "My relatives live in Japan."
      },
      {
        "th": "สามีของเธอเป็นตำรวจ",
        "rom": "săa-mee kŏng thəə bpen dtam-rùat",
        "en": "Her husband is a policeman."
      }
    ]
  }
];

const MANIFEST_KEY = "thai-practice-manifest";
const MANIFEST_VERSION = 2;   // bump when DEFAULT_SETS content changes -> reseed (stars preserved)

function cloneSets(sets){
  return sets.map(s => ({
    id: s.id, title: s.title,
    lines: (s.lines || []).map(l => { const o = { th: l.th, rom: l.rom || "", en: l.en || "" }; if(l.star) o.star = true; return o; }),
  }));
}
function starMap(sets){
  const m = {};
  for(const s of (sets || [])){ for(const l of (s.lines || [])){ if(l && l.star) m[l.th] = true; } }
  return m;
}
function applyStars(sets, stars){
  for(const s of sets){ for(const l of s.lines){ if(stars[l.th]) l.star = true; } }
  return sets;
}
function saveManifest(sets){
  try { localStorage.setItem(MANIFEST_KEY, JSON.stringify({ version: MANIFEST_VERSION, sets })); return true; } catch(e){ return false; }
}

// Live editable manifest, stored as { version, sets }. When built-in content changes
// (MANIFEST_VERSION bumps), sets reseed from DEFAULT_SETS but existing stars carry over.
function loadManifest(){
  let raw = null;
  try { raw = JSON.parse(localStorage.getItem(MANIFEST_KEY) || "null"); } catch(e){}
  let storedSets = null, ver = 0;
  if(raw && Array.isArray(raw.sets)){ storedSets = raw.sets; ver = raw.version || 1; }
  else if(Array.isArray(raw)){ storedSets = raw; ver = 1; }

  let sets, changed = false;
  if(!storedSets){ sets = cloneSets(DEFAULT_SETS); changed = true; }
  else if(ver < MANIFEST_VERSION){ sets = applyStars(cloneSets(DEFAULT_SETS), starMap(storedSets)); changed = true; }
  else {
    sets = storedSets;
    for(const def of DEFAULT_SETS){ if(!sets.find(s => s && s.id === def.id)){ sets.push(cloneSets([def])[0]); changed = true; } }
  }
  try {
    const legacy = JSON.parse(localStorage.getItem("thai-practice-starred") || "null");
    if(Array.isArray(legacy) && legacy.length){
      const ls = new Set(legacy);
      for(const s of sets){ for(const l of (s.lines || [])){ if(ls.has(l.th)) l.star = true; } }
      localStorage.removeItem("thai-practice-starred");
      changed = true;
    }
  } catch(e){}
  if(changed) saveManifest(sets);
  return sets;
}
