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
        "th": "กุญแจอยู่ข้างในโรงแรม",
        "rom": "gun-jae yòo kâang nai rohng raem",
        "en": "The keys are inside the hotel."
      },
      {
        "th": "นกกินส้มตำของฉัน",
        "rom": "nók gin sôm dtam kŏng chăn",
        "en": "The bird ate my papaya salad."
      },
      {
        "th": "ฉันกำลังหาแมวใต้เตียง",
        "rom": "chăn gam-lang hăa maew dtâi dtiiang",
        "en": "I'm looking for the cat under the bed."
      },
      {
        "th": "ร้านยาอยู่ด้านหลังธนาคาร",
        "rom": "ráan yaa yòo dâan lăng tá-naa-kaan",
        "en": "The pharmacy is behind the bank."
      },
      {
        "th": "หมอขับรถไปวัดทุกวันอาทิตย์",
        "rom": "mŏr khàp rót bpai wát túk wan aa-tít",
        "en": "The doctor drives to the temple every Sunday."
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
        "th": "เลี้ยวซ้ายที่วัด โรงพยาบาลอยู่ไกล",
        "rom": "líieow sáai têe wát, rohng pá-yaa-baan yòo glai",
        "en": "Turn left at the temple; the hospital is far."
      },
      {
        "th": "ทำไมแมวง่วง เพราะกินเยอะ",
        "rom": "tham-mai maew ngûang, phrɔ́ gin yúh",
        "en": "Why is the cat sleepy? Because it ate a lot."
      },
      {
        "th": "ลูกค้าเอาส้อมสองอันและช้อนหนึ่งอัน",
        "rom": "lôok káa ao sôm sŏng an láe chón nèung an",
        "en": "The customer wants two forks and one spoon."
      },
      {
        "th": "ภรรยาทำข้าวผัดทุกคืน",
        "rom": "pan-rá-yaa tham kâao pàt túk keun",
        "en": "(My) wife makes fried rice every night."
      },
      {
        "th": "หมาอยู่บนโต๊ะอีก อุบาทว์",
        "rom": "măa yòo bon dtó èek, ù-bàat",
        "en": "The dog is on the table again — disgusting."
      },
      {
        "th": "ฉันจำนามสกุลของคุณได้",
        "rom": "chăn jam naam sà-gun kŏng kun dâai",
        "en": "I remember your family name."
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
        "th": "ตลาดปิดแล้ว ไปห้างกัน",
        "rom": "dtà-làat bpìt láew, bpai hâang gan",
        "en": "The market's closed — let's go to the mall."
      },
      {
        "th": "พี่ชายบินไปญี่ปุ่น น้องสาวขับรถไปบุรีรัมย์",
        "rom": "pêe chaai bin bpai yêe-bpùn, nóng săao khàp rót bpai bù-ree-ram",
        "en": "Older brother flew to Japan; younger sister drove to Buriram."
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
        "th": "พรุ่งนี้ฉันจะไปตลาดกับเพื่อน",
        "rom": "prûng-née chăn jà bpai dtà-làat gàp pêuuan",
        "en": "Tomorrow I'll go to the market with a friend."
      },
      {
        "th": "หมออยู่ที่โรงพยาบาลทุกวัน",
        "rom": "mŏr yòo têe rohng pá-yaa-baan túk wan",
        "en": "The doctor is at the hospital every day."
      },
      {
        "th": "เขาชอบดื่มกาแฟตอนเช้า",
        "rom": "kăo chôp dèum gaa-fae dton-cháo",
        "en": "He likes to drink coffee in the morning."
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
        "th": "ร้านกาแฟอยู่ใกล้ธนาคาร",
        "rom": "ráan gaa-fae yòo glâi tá-naa-kaan",
        "en": "The coffee shop is near the bank."
      },
      {
        "th": "พี่ชายของฉันขับรถไปโรงเรียน",
        "rom": "pêe chaai kŏng chăn khàp rót bpai rohng riian",
        "en": "My older brother drives to school."
      },
      {
        "th": "เมื่อคืนเรากินข้าวที่ร้าน",
        "rom": "mêuua keun rao gin kâao têe ráan",
        "en": "Last night we ate at the restaurant."
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
        "th": "คุณจะไปโรงเรียนเมื่อไหร่",
        "rom": "kun jà bpai rohng riian mêuua-rài",
        "en": "When will you go to school?"
      },
      {
        "th": "เพื่อนของฉันเป็นคนใจดี",
        "rom": "pêuuan kŏng chăn bpen kon jai-dii",
        "en": "My friend is a kind person."
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
        "th": "รถเมล์อยู่ด้านหน้าโรงแรม",
        "rom": "rót may yòo dâan nâa rohng raem",
        "en": "The bus is in front of the hotel."
      },
      {
        "th": "คุณอยากดื่มอะไร",
        "rom": "kun yàak dèum à-rai",
        "en": "What do you want to drink?"
      },
      {
        "th": "เขาดูหนังทุกคืน",
        "rom": "kăo doo năng túk keun",
        "en": "He watches a movie every night."
      },
      {
        "th": "ส้มตำร้านนี้อร่อยมาก",
        "rom": "sôm dtam ráan née à-ròi mâak",
        "en": "The papaya salad here is very delicious."
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
        "th": "ผมตื่นเช้าทุกวัน",
        "rom": "pŏm dtèun cháo túk wan",
        "en": "I wake up early every day."
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
        "th": "สถานีรถไฟอยู่ไกลไหม",
        "rom": "sà-tăa-nee rót fai yòo glai măi",
        "en": "Is the train station far?"
      },
      {
        "th": "แม่ทำอาหารเย็นทุกวัน",
        "rom": "mâe tam aa-hăan yen túk wan",
        "en": "Mom makes dinner every day."
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
        "th": "พี่สาวของฉันเรียนที่โรงเรียน",
        "rom": "pêe săao kŏng chăn riian têe rohng riian",
        "en": "My older sister studies at school."
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
        "th": "คุณตื่นกี่โมงทุกวัน",
        "rom": "kun dtèun gèe mohng túk wan",
        "en": "What time do you wake up every day?"
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
        "th": "ขึ้นรถเมล์ที่นี่",
        "rom": "kʉ̂n rót may têe nêe",
        "en": "Take the bus here."
      },
      {
        "th": "น้องชายของผมอายุสิบปี",
        "rom": "nóng chaai kŏng pŏm aa-yú sìp bpii",
        "en": "My younger brother is ten years old."
      },
      {
        "th": "ข้าวผัดจานนี้อร่อยมาก",
        "rom": "kâao pàt jaan née à-ròi mâak",
        "en": "This plate of fried rice is delicious."
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
      },
      {
        "th": "พ่อดูหนังทุกคืน",
        "rom": "pôr doo năng túk keun",
        "en": "Dad watches a movie every night."
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
        "th": "ผมคิดถึงเพื่อน",
        "rom": "pŏm kít tʉ̌ng pêuuan",
        "en": "I miss my friend."
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
        "th": "ร้านนี้ขายผลไม้",
        "rom": "ráan née kăai pŏn-lá-mái",
        "en": "This shop sells fruit."
      },
      {
        "th": "ผมเดินไปตลาดทุกเช้า",
        "rom": "pŏm dəən bpai dtà-làat túk cháo",
        "en": "I walk to the market every morning."
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
        "th": "รถไฟมากี่โมง",
        "rom": "rót fai maa gèe mohng",
        "en": "What time does the train come?"
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
        "th": "ผมไม่กินเผ็ด",
        "rom": "pŏm mâi gin phèt",
        "en": "I don't eat spicy food."
      },
      {
        "th": "คุณมาที่นี่ยังไง",
        "rom": "kun maa têe nêe yang ngai",
        "en": "How did you get here?"
      },
      {
        "th": "แม่ของฉันทำงานที่ธนาคาร",
        "rom": "mâe kŏng chăn tam ngaan têe tá-naa-kaan",
        "en": "My mom works at the bank."
      },
      {
        "th": "ขอข้าวสองจาน",
        "rom": "kŏr kâao sŏng jaan",
        "en": "Two plates of rice, please."
      },
      {
        "th": "ธนาคารอยู่ตรงข้ามโรงแรม",
        "rom": "tá-naa-kaan yòo dtrong kâam rohng raem",
        "en": "The bank is across from the hotel."
      },
      {
        "th": "คุณมีพี่น้องกี่คน",
        "rom": "kun mii pêe nóng gèe kon",
        "en": "How many siblings do you have?"
      },
      {
        "th": "อาหารไทยอร่อยกว่าอาหารญี่ปุ่น",
        "rom": "aa-hăan tai à-ròi gwàa aa-hăan yêe-bpùn",
        "en": "Thai food is more delicious than Japanese food."
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
        "th": "วัดอยู่หลังตลาด",
        "rom": "wát yòo lăng dtà-làat",
        "en": "The temple is behind the market."
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
  }
];

const MANIFEST_KEY = "thai-practice-manifest";

// deep copy of the built-in sets (used to seed the manifest and to "Reset to built-in")
function cloneSets(sets){
  return sets.map(s => ({
    id: s.id, title: s.title,
    lines: (s.lines || []).map(l => ({ th: l.th, rom: l.rom || "", en: l.en || "" })),
  }));
}

// the live, user-editable manifest — stored in localStorage, seeded from the defaults.
// Missing built-in sets are seeded in so newly-added sets appear without wiping edits.
function loadManifest(){
  let m = null;
  try { m = JSON.parse(localStorage.getItem(MANIFEST_KEY) || "null"); } catch(e){}
  if(!Array.isArray(m)) m = [];
  let changed = false;
  for(const def of DEFAULT_SETS){
    if(!m.find(s => s && s.id === def.id)){ m.push(cloneSets([def])[0]); changed = true; }
  }
  // one-time migration: fold the old separate star list into the manifest, then retire it
  try {
    const legacy = JSON.parse(localStorage.getItem("thai-practice-starred") || "null");
    if(Array.isArray(legacy) && legacy.length){
      const set = new Set(legacy);
      for(const s of m){ for(const l of (s.lines || [])){ if(set.has(l.th)) l.star = true; } }
      localStorage.removeItem("thai-practice-starred");
      changed = true;
    }
  } catch(e){}
  if(changed){ try { localStorage.setItem(MANIFEST_KEY, JSON.stringify(m)); } catch(e){} }
  return m;
}
function saveManifest(m){ try { localStorage.setItem(MANIFEST_KEY, JSON.stringify(m)); return true; } catch(e){ return false; } }
