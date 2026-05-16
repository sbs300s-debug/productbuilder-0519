const translations = {
    ko: {
        siteTitle: "기분별 영화 추천 - Movie Mood",
        headerTitle: "🎬 Movie Mood",
        heroMsg: "오늘의 기분은 어떠신가요?",
        heroSubmsg: "당신의 기분에 딱 맞는 영화를 추천해 드립니다. 다양한 장르의 영화를 만나보세요.",
        resultTitle: "추천 영화",
        commentTitle: "댓글 및 후기",
        footerText: "© 2024 Movie Mood. All rights reserved.",
        contactTitle: "제휴 및 비즈니스 문의",
        labelEmail: "이메일 주소",
        labelMessage: "문의 내용",
        submitBtn: "문의하기",
        placeholderEmail: "example@email.com",
        placeholderMessage: "문의하실 내용을 상세히 입력해주세요.",
        langBtn: "English",
        themeDark: "다크 모드",
        themeLight: "라이트 모드",
        privacyTitle: "개인정보처리방침",
        aboutTitle: "서비스 소개",
        aboutContent: "Movie Mood는 사용자의 현재 감정 상태에 가장 적합한 영화를 인공지능과 큐레이션을 통해 추천해드리는 서비스입니다. 지루한 일상에 활력을 불어넣을 최고의 영화를 찾아보세요.",
        moods: {
            happy: "😊 행복함",
            sad: "😢 우울함",
            excited: "🤩 신남",
            scared: "😱 무서움",
            calm: "😌 평온함"
        }
    },
    en: {
        siteTitle: "Movie Recommendation by Mood - Movie Mood",
        headerTitle: "🎬 Movie Mood",
        heroMsg: "How are you feeling today?",
        heroSubmsg: "We recommend movies that perfectly match your mood. Explore various genres of movies.",
        resultTitle: "Recommended Movies",
        commentTitle: "Comments & Reviews",
        footerText: "© 2024 Movie Mood. All rights reserved.",
        contactTitle: "Partnership & Business Inquiry",
        labelEmail: "Email Address",
        labelMessage: "Message",
        submitBtn: "Submit",
        placeholderEmail: "example@email.com",
        placeholderMessage: "Please enter your message in detail.",
        langBtn: "한국어",
        themeDark: "Dark Mode",
        themeLight: "Light Mode",
        privacyTitle: "Privacy Policy",
        aboutTitle: "About Us",
        aboutContent: "Movie Mood is a service that recommends movies most suitable for the user's current emotional state through AI and curation. Find the best movie to energize your boring daily life.",
        moods: {
            happy: "😊 Happy",
            sad: "😢 Sad",
            excited: "🤩 Excited",
            scared: "😱 Scared",
            calm: "😌 Calm"
        }
    }
};

const movieData = {
    happy: [
        { title: { ko: "인턴", en: "The Intern" }, desc: { ko: "70세 인턴과 30세 CEO의 훈훈한 우정 이야기. 세대를 뛰어넘는 조언과 위로를 얻을 수 있는 힐링 영화입니다.", en: "A heartwarming story of friendship between a 70-year-old intern and a 30-year-old CEO. A healing movie where you can get advice and comfort beyond generations." }, img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "어바웃 타임", en: "About Time" }, desc: { ko: "시간을 되돌릴 수 있다면? 일상의 소중함을 일깨워주는 영화. 매 순간이 얼마나 특별한지 느끼게 해줍니다.", en: "What if you could travel back in time? A movie that reminds us of the value of everyday life. It makes you feel how special every moment is." }, img: "https://images.unsplash.com/photo-1518893063132-36e46dbe2428?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "라라랜드", en: "La La Land" }, desc: { ko: "꿈꾸는 사람들을 위한 별들의 도시, 마법 같은 음악 영화. 아름다운 영상미와 음악이 기분을 환상적으로 만들어줍니다.", en: "A city of stars for dreamers, a magical musical film. Beautiful visuals and music make you feel fantastic." }, img: "https://images.unsplash.com/photo-1514525253344-f81bcd3ce919?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "월터의 상상은 현실이 된다", en: "The Secret Life of Walter Mitty" }, desc: { ko: "반복되는 일상을 벗어나 진정한 자아를 찾아 떠나는 여정. 용기와 희망을 주는 최고의 추천작입니다.", en: "A journey to find one's true self away from the repetitive daily routine. The best recommendation that gives courage and hope." }, img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "미스 리틀 선샤인", en: "Little Miss Sunshine" }, desc: { ko: "조금은 부족하지만 사랑스러운 가족의 로드 트립. 웃음과 감동을 동시에 선사하는 밝은 에너지의 영화입니다.", en: "A road trip of a slightly lacking but lovely family. A movie of bright energy that provides both laughter and emotion." }, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "싱 스트리트", en: "Sing Street" }, desc: { ko: "소년들의 풋풋한 사랑과 음악에 대한 열정. 80년대 감성의 경쾌한 노래들이 귀를 즐겁게 합니다.", en: "Boys' fresh love and passion for music. Cheerful songs with 80s sensibility please the ears." }, img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "패딩턴 2", en: "Paddington 2" }, desc: { ko: "세상에서 가장 친절한 곰 패딩턴의 유쾌한 소동극. 보는 내내 미소가 끊이지 않는 순수한 즐거움을 줍니다.", en: "A cheerful disturbance of Paddington, the kindest bear in the world. It gives pure joy that keeps you smiling throughout." }, img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "맘마 미아!", en: "Mamma Mia!" }, desc: { ko: "아바의 명곡들과 함께하는 그리스 섬에서의 결혼식 소동. 신나는 춤과 노래가 어깨를 들썩이게 합니다.", en: "A wedding disturbance on a Greek island with ABBA's masterpieces. Exciting dances and songs make your shoulders dance." }, img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "예스 맨", en: "Yes Man" }, desc: { ko: "모든 것에 '예스'라고 답하기 시작한 남자의 인생 역전. 짐 캐리의 코믹 연기와 긍정의 힘을 느낄 수 있습니다.", en: "A man's life reversal who started answering 'yes' to everything. You can feel Jim Carrey's comic acting and the power of positivity." }, img: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "언터처블: 1%의 우정", en: "The Intouchables" }, desc: { ko: "전혀 어울릴 것 같지 않은 두 남자의 특별한 우정. 실화를 바탕으로 한 깊은 여운과 기분 좋은 웃음을 줍니다.", en: "A special friendship between two men who don't seem to match at all. Based on a true story, it gives deep lingering emotions and a pleasant laugh." }, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500&auto=format&fit=crop" }
    ],
    sad: [
        { title: { ko: "이프 온리", en: "If Only" }, desc: { ko: "사랑하는 사람의 소중함을 다시금 깨닫게 하는 눈물 쏙 영화. 후회 없는 사랑에 대해 생각하게 합니다.", en: "A tear-jerking movie that makes you realize the importance of your loved ones. It makes you think about love without regret." }, img: "https://images.unsplash.com/photo-1516589174184-c68526673fdc?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "노트북", en: "The Notebook" }, desc: { ko: "한 남자의 일생을 건 위대한 사랑 이야기. 세월이 흘러도 변치 않는 사랑의 힘을 보여줍니다.", en: "A great love story of a man's lifetime. It shows the power of love that doesn't change over time." }, img: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "코코", en: "Coco" }, desc: { ko: "가족의 의미를 되새기게 하는 감동적인 사후 세계 여행. 기억한다는 것의 소중함을 일깨워줍니다.", en: "A moving journey through the afterlife that reminds us of the meaning of family. It reminds us of the importance of remembering." }, img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "인생은 아름다워", en: "Life Is Beautiful" }, desc: { ko: "참혹한 전쟁 속에서도 아들을 위해 유머를 잃지 않는 아버지의 사랑. 눈물과 감동이 가득한 명작입니다.", en: "A father's love who doesn't lose his humor for his son even in a cruel war. A masterpiece full of tears and emotion." }, img: "https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "그녀", en: "Her" }, desc: { ko: "인공지능과 사랑에 빠진 남자. 고독과 외로움, 그리고 사랑의 본질에 대해 묻는 감각적인 영화입니다.", en: "A man who fell in love with AI. A sensible movie that asks about solitude, loneliness, and the essence of love." }, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "내 머리 속의 지우개", en: "A Moment to Remember" }, desc: { ko: "기억을 잃어가는 여자와 그녀를 지키는 남자의 애절한 사랑. 한국 멜로 영화의 고전적인 감동을 선사합니다.", en: "A sorrowful love between a woman losing her memory and a man protecting her. It provides a classic emotion of Korean melodrama." }, img: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "맨체스터 바이 더 씨", en: "Manchester by the Sea" }, desc: { ko: "상처를 안고 살아가는 사람들의 무거운 침묵과 슬픔. 억지 눈물이 아닌 깊은 슬픔을 담담하게 그려냅니다.", en: "The heavy silence and sadness of people living with scars. It calmly depicts deep sadness, not forced tears." }, img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "파도가 지나간 자리", en: "The Light Between Oceans" }, desc: { ko: "고립된 섬에서 만난 한 아이와 그로 인한 가혹한 선택. 아름다운 풍경과 대비되는 비극적인 사랑 이야기입니다.", en: "A child met on an isolated island and a harsh choice resulting from it. A tragic love story contrasting with beautiful scenery." }, img: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "빌리 엘리어트", en: "Billy Elliot" }, desc: { ko: "꿈을 향해 비상하는 소년의 투쟁과 가족의 희생. 벅찬 감동과 슬픔이 공존하는 영화입니다.", en: "A boy's struggle flying toward his dream and his family's sacrifice. A movie where overwhelming emotion and sadness coexist." }, img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "소원", en: "Hope" }, desc: { ko: "가장 아픈 곳에서 피어난 희망. 상처 입은 가족이 다시 일어서는 과정을 그린 가슴 뭉클한 영화입니다.", en: "Hope bloomed in the most painful place. A touching movie depicting the process of a wounded family getting back on their feet." }, img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=500&auto=format&fit=crop" }
    ],
    excited: [
        { title: { ko: "매드맥스: 분노의 도로", en: "Mad Max: Fury Road" }, desc: { ko: "멈추지 않는 질주, 폭발하는 액션의 카타르시스. 아드레날린을 최고조로 끌어올리는 시각적 경이로움.", en: "Unstoppable racing and exploding action catharsis. A visual wonder that boosts adrenaline to the peak." }, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "어벤져스: 엔드게임", en: "Avengers: Endgame" }, desc: { ko: "마블 시네마틱 유니버스의 거대한 피날레. 모든 영웅들이 집결하는 장엄한 전투신이 압권입니다.", en: "The epic finale of the Marvel Cinematic Universe. The majestic battle scene where all heroes gather is the masterpiece." }, img: "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "분노의 질주: 더 익스트림", en: "The Fate of the Furious" }, desc: { ko: "압도적인 스케일의 카체이싱 액션. 눈을 뗄 수 없는 속도감과 파괴적인 연출이 돋보입니다.", en: "Car chasing action on an overwhelming scale. Breathtaking speed and destructive production stand out." }, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "미션 임파서블: 폴아웃", en: "Mission: Impossible - Fallout" }, desc: { ko: "톰 크루즈의 한계를 모르는 리얼 액션. 실제 헬기 추격신 등 보는 내내 손에 땀을 쥐게 합니다.", en: "Tom Cruise's real action that knows no limits. It keeps you on the edge of your seat with real helicopter pursuit scenes." }, img: "https://images.unsplash.com/photo-1510133769068-ad0565e499a0?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "탑건: 매버릭", en: "Top Gun: Maverick" }, desc: { ko: "하늘을 가르는 전투기들의 박진감 넘치는 공중전. 전율을 느끼게 하는 음향과 영상의 조화가 완벽합니다.", en: "Breathtaking aerial dogfights of fighter jets slicing through the sky. Perfect harmony of thrill-inducing sound and visuals." }, img: "https://images.unsplash.com/photo-1561054411-e6b772421297?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "존 윅 4", en: "John Wick: Chapter 4" }, desc: { ko: "액션 예술의 정점. 쉴 새 없이 몰아치는 건푸(Gun-fu) 액션이 장르적 쾌감을 극대화합니다.", en: "The peak of action art. Non-stop Gun-fu action maximizes the genre's pleasure." }, img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "킹스맨 : 시크릿 에이전트", en: "Kingsman: The Secret Service" }, desc: { ko: "기존 스파이 영화를 뒤집는 스타일리시하고 유쾌한 액션. 매너가 사람을 만드는 독특한 세계관.", en: "Stylish and cheerful action that flips existing spy movies. A unique worldview where manners maketh man." }, img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "다이 하드", en: "Die Hard" }, desc: { ko: "액션 영화의 전설. 좁은 공간에서 벌어지는 손에 땀을 쥐는 생존 투쟁과 통쾌한 반격.", en: "A legend of action movies. A breathtaking survival struggle and a thrilling counterattack in a narrow space." }, img: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "다크 나이트", en: "The Dark Knight" }, desc: { ko: "히어로 영화의 차원을 높인 걸작. 선과 악의 경계에서 벌어지는 치밀한 심리전과 폭발적인 액션.", en: "A masterpiece that elevated the level of hero movies. Precise psychological warfare and explosive action on the boundary of good and evil." }, img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "글래디에이터", en: "Gladiator" }, desc: { ko: "로마 시대를 배경으로 한 웅장한 대서사시. 콜로세움에서의 검투신이 주는 긴장감과 전율이 대단합니다.", en: "An epic grand narrative set in the Roman era. The tension and thrill of the gladiatorial matches in the Colosseum are immense." }, img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop" }
    ],
    scared: [
        { title: { ko: "컨저링", en: "The Conjuring" }, desc: { ko: "무서운 장면 없이 무서운 실화 바탕 공포물. 심리적인 압박감과 보이지 않는 존재의 공포가 압권입니다.", en: "A horror film based on a true story that's scary without gore. The psychological pressure and the fear of an invisible existence are the masterpieces." }, img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "겟 아웃", en: "Get Out" }, desc: { ko: "숨 막히는 긴장감과 소름 돋는 반전. 단순한 공포를 넘어 사회적인 메시지를 담은 미스터리 스릴러.", en: "Breathtaking tension and spine-chilling twists. A mystery thriller containing social messages beyond simple horror." }, img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "유전", en: "Hereditary" }, desc: { ko: "가족의 비극에서 시작된 벗어날 수 없는 공포. 가문의 저주와 기이한 현상들이 숨통을 조여옵니다.", en: "An inescapable horror that begins with a family tragedy. The family curse and strange phenomena choke you." }, img: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "미드소마", en: "Midsommar" }, desc: { ko: "밝은 태양 아래서 벌어지는 기괴한 축제. 낮이 주는 공포라는 독특한 분위기의 호러 영화입니다.", en: "A bizarre festival held under the bright sun. A horror movie with a unique atmosphere called fear given by day." }, img: "https://images.unsplash.com/photo-1464306311913-9d8858d41113?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "곡성", en: "The Wailing" }, desc: { ko: "의문의 사건들과 정체를 알 수 없는 존재. 미스터리와 공포가 뒤섞여 관객을 혼란에 빠뜨리는 걸작입니다.", en: "Questionable incidents and an unidentified existence. A masterpiece where mystery and horror are mixed, throwing the audience into confusion." }, img: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "부산행", en: "Train to Busan" }, desc: { ko: "달리는 기차 안에서의 좀비 사투. 극한의 상황 속에서 드러나는 인간의 본성과 긴박한 액션.", en: "A zombie struggle inside a running train. Human nature revealed in extreme situations and urgent action." }, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "파라노말 액티비티", en: "Paranormal Activity" }, desc: { ko: "실제 같은 폐쇄 회로 카메라 화면이 주는 공포. 조용하지만 확실한 공포를 선사하는 페이크 다큐 형식.", en: "Fear given by real-looking closed-circuit camera screens. A fake documentary format that provides quiet but certain fear." }, img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "어셔가의 몰락", en: "The Fall of the House of Usher" }, desc: { ko: "고전 호러의 진수. 무너져가는 가문과 저택을 둘러싼 음산하고 기묘한 분위기의 이야기.", en: "The essence of classic horror. A story of a gloomy and strange atmosphere surrounding a crumbling family and mansion." }, img: "https://images.unsplash.com/photo-1478033394151-c931d5a4bdd6?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "숨바꼭질", en: "Hide and Seek" }, desc: { ko: "누군가 우리 집에 숨어 살고 있다? 일상적인 공간이 가장 무서운 곳으로 변하는 심리 스릴러.", en: "Is someone living hidden in our house? A psychological thriller where an everyday space turns into the scariest place." }, img: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "오멘", en: "The Omen" }, desc: { ko: "666의 숫자를 가진 아이의 탄생과 주변의 비극적인 죽음들. 고전 호러의 묵직한 공포를 느낄 수 있습니다.", en: "The birth of a child with the number 666 and tragic deaths around him. You can feel the heavy fear of classic horror." }, img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=500&auto=format&fit=crop" }
    ],
    calm: [
        { title: { ko: "리틀 포레스트", en: "Little Forest" }, desc: { ko: "잠시 쉬어가도 괜찮아, 힐링 가득한 시골 생활. 계절마다 바뀌는 정성스러운 음식과 풍경이 마음을 달래줍니다.", en: "It's okay to take a break, a healing rural life. Elaborate food and scenery that change every season soothe the mind." }, img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "소울", en: "Soul" }, desc: { ko: "인생의 아름다움을 찾는 특별한 여정. 일상의 작은 순간들이 얼마나 소중한지 재즈 음악과 함께 보여줍니다.", en: "A special journey to find the beauty of life. It shows how precious the small moments of everyday life are along with jazz music." }, img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "카모메 식당", en: "Kamome Diner" }, desc: { ko: "핀란드에서 열린 작은 식당의 소박하고 따뜻한 이야기. 맛있는 음식과 느긋한 일상이 힐링을 선사합니다.", en: "A simple and warm story of a small restaurant in Finland. Delicious food and a relaxed daily life provide healing." }, img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "어느 가족", en: "Shoplifters" }, desc: { ko: "진정한 가족이란 무엇인가에 대한 따뜻하고 날카로운 질문. 잔잔한 파도처럼 밀려오는 감동이 있습니다.", en: "A warm and sharp question about what a true family is. There is an emotion that comes like calm waves." }, img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "월터의 상상은 현실이 된다", en: "The Secret Life of Walter Mitty" }, desc: { ko: "광활한 아이슬란드의 풍경과 함께하는 자아 찾기. 조용히 자신의 내면을 들여다보고 싶을 때 추천합니다.", en: "Finding one's self along with the vast scenery of Iceland. Recommended when you want to quietly look into your inner self." }, img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "패터슨", en: "Paterson" }, desc: { ko: "버스 운전사 패터슨의 반복되는 평범한 일상 속의 시적 순간들. 지루함 속에서 아름다움을 발견하는 영화입니다.", en: "Poetic moments in the repetitive ordinary daily life of bus driver Paterson. A movie that discovers beauty in boredom." }, img: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "원스", en: "Once" }, desc: { ko: "더블린 거리에서 들려오는 진심 어린 노래들. 음악으로 소통하는 두 사람의 소박한 교감이 아름답습니다.", en: "Sincere songs heard from the streets of Dublin. The simple communion of two people communicating through music is beautiful." }, img: "https://images.unsplash.com/photo-1514525253344-f81bcd3ce919?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "심야식당", en: "Midnight Diner" }, desc: { ko: "지친 밤, 따뜻한 음식 한 그릇으로 전하는 위로와 인생 이야기. 조용한 분위기 속에서 힐링하기 좋습니다.", en: "In the exhausted night, comfort and life stories delivered with a bowl of warm food. Good for healing in a quiet atmosphere." }, img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "그해 여름", en: "Once in a Summer" }, desc: { ko: "잊지 못할 첫사랑의 기억과 아련한 풍경들. 추억에 젖어 마음을 차분하게 만들어주는 영화입니다.", en: "Unforgettable first love memories and faint sceneries. A movie that makes your heart calm down while being soaked in memories." }, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "바닷마을 다이어리", en: "Our Little Sister" }, desc: { ko: "가마쿠라의 평화로운 마을에서 살아가는 네 자매의 이야기. 계절의 흐름과 함께 마음이 정화되는 기분을 줍니다.", en: "The story of four sisters living in a peaceful village in Kamakura. Along with the flow of the seasons, it gives a feeling of purification of the mind." }, img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=500&auto=format&fit=crop" }
    ]
};

let currentLang = 'ko';

function updateUI() {
    const t = translations[currentLang];
    document.title = t.siteTitle;
    document.getElementById('header-title').textContent = t.headerTitle;
    document.getElementById('hero-msg').textContent = t.heroMsg;
    document.getElementById('hero-submsg').textContent = t.heroSubmsg;
    document.getElementById('result-title').textContent = t.resultTitle;
    document.getElementById('comment-title').textContent = t.commentTitle;
    document.getElementById('footer-text').textContent = t.footerText;
    document.getElementById('lang-toggle').textContent = t.langBtn;

    // About Section
    document.getElementById('about-title').textContent = t.aboutTitle;
    document.getElementById('about-content').textContent = t.aboutContent;

    // Privacy Link
    document.getElementById('privacy-link').textContent = t.privacyTitle;

    // Contact Form Translations
    document.getElementById('contact-title').textContent = t.contactTitle;
    document.getElementById('label-email').textContent = t.labelEmail;
    document.getElementById('label-message').textContent = t.labelMessage;
    document.getElementById('submit-btn').textContent = t.submitBtn;
    document.getElementById('email').placeholder = t.placeholderEmail;
    document.getElementById('message').placeholder = t.placeholderMessage;

    // Refresh mood buttons
    const moodButtonsContainer = document.getElementById('mood-buttons');
    moodButtonsContainer.innerHTML = '';
    Object.keys(t.moods).forEach(mood => {
        const btn = document.createElement('button');
        btn.className = 'mood-btn';
        btn.textContent = t.moods[mood];
        btn.onclick = () => showRecommendations(mood);
        moodButtonsContainer.appendChild(btn);
    });

    // Refresh results if any
    const lastMood = localStorage.getItem('lastMood');
    if (lastMood) showRecommendations(lastMood);
}

function showRecommendations(mood) {
    localStorage.setItem('lastMood', mood);
    
    // UI Feedback
    const t = translations[currentLang];
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === t.moods[mood]);
    });

    const area = document.getElementById('recommendation-area');
    const grid = document.getElementById('movie-grid');
    grid.innerHTML = '';

    // Shuffle movies to show different order each time
    const shuffledMovies = [...movieData[mood]].sort(() => Math.random() - 0.5);

    shuffledMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.img}" alt="${movie.title[currentLang]}" class="movie-poster" loading="lazy">
            <div class="movie-info">
                <h3>${movie.title[currentLang]}</h3>
                <p>${movie.desc[currentLang]}</p>
            </div>
        `;
        grid.appendChild(card);
    });

    area.classList.add('visible');
    area.scrollIntoView({ behavior: 'smooth' });
}

// Event Listeners
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    updateUI();
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('theme-toggle').textContent = isDark ? translations[currentLang].themeLight : translations[currentLang].themeDark;
});

// Init
updateUI();
