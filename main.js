const translations = {
    ko: {
        siteTitle: "Movie Mood - 당신의 기분을 읽는 맞춤형 영화 큐레이션",
        headerTitle: "🎬 Movie Mood",
        heroMsg: "지금 어떤 기분이신가요?",
        heroSubmsg: "감정 분석 큐레이션을 통해 당신의 현재 기분에 가장 깊은 공감을 선사할 영화를 추천해 드립니다. 전문가가 엄선한 50편 이상의 고품질 영화 데이터를 만나보세요.",
        resultTitle: "오늘의 추천 큐레이션",
        commentTitle: "시청 후기 및 커뮤니티",
        footerText: "© 2024 Movie Mood. 전문적인 영화 큐레이션 서비스를 지향합니다.",
        contactTitle: "비즈니스 및 제휴 문의",
        labelEmail: "이메일 주소",
        labelMessage: "문의 내용",
        submitBtn: "문의 메시지 보내기",
        placeholderEmail: "답변 받으실 이메일을 입력하세요.",
        placeholderMessage: "제휴 제안이나 서비스 피드백을 상세히 남겨주세요.",
        langBtn: "English",
        themeDark: "다크 모드",
        themeLight: "라이트 모드",
        privacyTitle: "개인정보처리방침",
        aboutTitle: "서비스 철학",
        aboutContent: "Movie Mood는 단순한 영화 목록 제공을 넘어, 인간의 보편적인 감정과 영화라는 예술 매체를 연결하는 전문 큐레이션 플랫폼입니다. 우리는 영화가 단순한 오락을 넘어 치유와 영감을 줄 수 있다고 믿습니다.",
        director: "감독",
        year: "개봉",
        moods: {
            happy: "행복과 즐거움",
            sad: "슬픔과 위로",
            excited: "열정과 에너지",
            scared: "스릴과 긴장",
            calm: "평온과 휴식"
        }
    },
    en: {
        siteTitle: "Movie Mood - Personalized Movie Curation for Your Emotions",
        headerTitle: "🎬 Movie Mood",
        heroMsg: "How are you feeling right now?",
        heroSubmsg: "Through emotional analysis curation, we recommend movies that provide the deepest empathy for your current mood. Meet over 50 high-quality movies carefully selected by experts.",
        resultTitle: "Today's Curation",
        commentTitle: "Reviews & Community",
        footerText: "© 2024 Movie Mood. Aiming for professional movie curation services.",
        contactTitle: "Business & Partnership Inquiry",
        labelEmail: "Email Address",
        labelMessage: "Message",
        submitBtn: "Send Message",
        placeholderEmail: "Enter email to receive a reply.",
        placeholderMessage: "Please leave your partnership proposals or service feedback in detail.",
        langBtn: "한국어",
        themeDark: "Dark Mode",
        themeLight: "Light Mode",
        privacyTitle: "Privacy Policy",
        aboutTitle: "Our Philosophy",
        aboutContent: "Movie Mood is a professional curation platform that connects universal human emotions with the art form of film, going beyond simple movie lists. We believe movies can provide healing and inspiration beyond mere entertainment.",
        director: "Director",
        year: "Release",
        moods: {
            happy: "Happiness & Joy",
            sad: "Sadness & Comfort",
            excited: "Passion & Energy",
            scared: "Thrill & Tension",
            calm: "Peace & Rest"
        }
    }
};

const movieData = {
    happy: [
        { title: { ko: "인턴", en: "The Intern" }, director: "낸시 마이어스", year: "2015", desc: { ko: "성공한 젊은 CEO와 70세의 노련한 인턴이 만나 서로의 삶을 배우는 과정을 담았습니다. 세대 간의 벽을 허무는 따뜻한 유머와 지혜가 가득하여 시청 후 매우 긍정적인 에너지를 얻을 수 있는 영화입니다.", en: "It depicts the process of a successful young CEO and a seasoned 70-year-old intern meeting and learning about each other's lives. It's full of warm humor and wisdom that breaks down generational barriers, making you feel very positive energy after watching." }, img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "어바웃 타임", en: "About Time" }, director: "리차드 커티스", year: "2013", desc: { ko: "시간 여행이라는 판타지적 소재를 통해, 우리가 매일 마주하는 평범한 일상이 사실은 가장 위대한 기적임을 일깨워줍니다. 사랑과 가족, 그리고 삶에 대한 태도를 긍정적으로 바꿔주는 웰메이드 로맨스 영화입니다.", en: "Through the fantasy subject of time travel, it reminds us that the ordinary daily life we face every day is actually the greatest miracle. It's a well-made romance movie that positively changes attitudes toward love, family, and life." }, img: "https://images.unsplash.com/photo-1518893063132-36e46dbe2428?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "라라랜드", en: "La La Land" }, director: "데미언 셔젤", year: "2016", desc: { ko: "꿈을 쫓는 두 남녀의 열정과 사랑을 환상적인 음악과 영상미로 풀어냈습니다. 인생의 쓴맛과 단맛을 동시에 느끼게 하면서도, 결국 우리 모두를 꿈꾸게 만드는 마법 같은 힘을 가진 영화입니다.", en: "The passion and love of a man and a woman chasing their dreams are unraveled with fantastic music and visual beauty. It has a magical power that makes us all dream in the end, while making us feel the bitterness and sweetness of life at the same time." }, img: "https://images.unsplash.com/photo-1514525253344-f81bcd3ce919?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "월터의 상상은 현실이 된다", en: "The Secret Life of Walter Mitty" }, director: "벤 스틸러", year: "2013", desc: { ko: "상상만 하던 주인공이 실제로 모험을 떠나며 겪는 변화를 아이슬란드의 광활한 풍경과 함께 담았습니다. 도전에 주저하는 모든 이들에게 강력한 동기부여와 시각적 쾌감을 선사합니다.", en: "The change of the protagonist, who only imagined, as he actually goes on an adventure is captured along with the vast scenery of Iceland. It provides powerful motivation and visual pleasure to everyone who hesitates to take a challenge." }, img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "미스 리틀 선샤인", en: "Little Miss Sunshine" }, director: "조나단 데이턴", year: "2006", desc: { ko: "완벽하지 않은 가족들이 함께 여행하며 서로의 결점을 포용하는 과정을 유쾌하게 그렸습니다. '승리'보다 중요한 '함께함'의 가치를 보여주어 보는 내내 입가에 미소를 띠게 합니다.", en: "It cheerfully depicts the process of imperfect family members traveling together and embracing each other's flaws. It shows the value of 'togetherness' which is more important than 'victory', keeping a smile on your face throughout." }, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "싱 스트리트", en: "Sing Street" }, director: "존 카니", year: "2016", desc: { ko: "80년대 아일랜드를 배경으로 소년들이 밴드를 결성하며 성장하는 이야기입니다. 풋풋한 첫사랑과 음악을 향한 순수한 열정이 어우러져 시청 후 경쾌한 기분을 유지하게 해줍니다.", en: "Set in 80s Ireland, it's a story of boys growing up while forming a band. The combination of fresh first love and pure passion for music keeps you in a cheerful mood after watching." }, img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "패딩턴 2", en: "Paddington 2" }, director: "폴 킹", year: "2017", desc: { ko: "친절함과 예의바름이 세상을 어떻게 바꿀 수 있는지 보여주는 무공해 영화입니다. 패딩턴의 엉뚱하지만 사랑스러운 행동들이 남녀노소 모두에게 순수한 즐거움을 선사합니다.", en: "It's a pollution-free movie that shows how kindness and politeness can change the world. Paddington's eccentric but lovely actions provide pure joy to people of all ages." }, img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "맘마 미아!", en: "Mamma Mia!" }, director: "필리다 로이드", year: "2008", desc: { ko: "아바(ABBA)의 음악으로 가득 찬 뮤지컬 영화로, 그리스의 푸른 바다를 배경으로 한 활기찬 이야기입니다. 신나는 리듬과 밝은 에너지가 우울한 기분을 한 번에 날려줍니다.", en: "A musical movie filled with ABBA's music, a lively story set against the backdrop of the blue sea of Greece. Exciting rhythms and bright energy blow away a gloomy mood at once." }, img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "예스 맨", en: "Yes Man" }, director: "페이튼 리드", year: "2008", desc: { ko: "부정적인 태도로 일관하던 남자가 긍정의 힘을 깨달으며 겪는 유쾌한 인생 반전 드라마입니다. 짐 캐리의 열정적인 연기가 삶에 대한 활력을 불어넣어 줍니다.", en: "A cheerful life reversal drama about a man who used to be consistent with a negative attitude realizing the power of positivity. Jim Carrey's passionate acting breathes vitality into life." }, img: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "언터처블: 1%의 우정", en: "The Intouchables" }, director: "올리비에 나카체", year: "2011", desc: { ko: "전신불구의 귀족과 하위 1% 실업자의 불가능해 보이는 우정을 실화 바탕으로 그렸습니다. 인간에 대한 존중과 삶에 대한 낙천적인 태도를 배울 수 있는 감동적인 수작입니다.", en: "Based on a true story, it depicts the seemingly impossible friendship between a quadriplegic aristocrat and a bottom 1% unemployed man. It's an impressive masterpiece where you can learn about respect for humans and an optimistic attitude toward life." }, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500&auto=format&fit=crop" }
    ],
    sad: [
        { title: { ko: "이프 온리", en: "If Only" }, director: "길 융거", year: "2004", desc: { ko: "사랑하는 연인을 잃고 나서야 그 소중함을 깨달은 남자의 가슴 아픈 고백입니다. 슬픔을 통해 사랑의 본질을 깊이 있게 통찰하며, 펑펑 울고 싶을 때 가장 먼저 떠오르는 영화입니다.", en: "It's a heartbreaking confession of a man who realized the value of his beloved lover only after losing her. It deeply insights into the essence of love through sadness, and is the first movie that comes to mind when you want to cry out loud." }, img: "https://images.unsplash.com/photo-1516589174184-c68526673fdc?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "노트북", en: "The Notebook" }, director: "닉 카사베츠", year: "2004", desc: { ko: "첫사랑부터 마지막 순간까지 한 여자만을 사랑한 남자의 헌신적인 이야기입니다. 세월의 흐름을 이겨내는 사랑의 위대함이 서정적인 영상미와 어우러져 깊은 여운을 남깁니다.", en: "It's a dedicated story of a man who loved only one woman from his first love to his last moment. The greatness of love that overcomes the passage of time harmonizes with lyrical visual beauty, leaving a deep lingering emotion." }, img: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "코코", en: "Coco" }, director: "리 언크리치", year: "2017", desc: { ko: "사후 세계를 배경으로 가족 간의 기억과 연결을 아름답게 그렸습니다. 누군가에게 기억된다는 것의 의미를 묻는 이 영화는 어른들에게 더 큰 위로와 감동을 주는 애니메이션입니다.", en: "Beautifully depicts the memory and connection between family members set against the backdrop of the afterlife. This movie, which asks about the meaning of being remembered by someone, is an animation that provides greater comfort and emotion to adults." }, img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "인생은 아름다워", en: "Life Is Beautiful" }, director: "로베르토 베니니", year: "1997", desc: { ko: "나치 수용소라는 비극적인 상황에서도 아들의 동심을 지켜주려는 아버지의 눈물겨운 사투를 다룹니다. 비극 속에서 피어난 유머가 역설적으로 더 큰 슬픔과 감동을 자아내는 명작입니다.", en: "It deals with a father's tearful struggle to protect his son's innocence even in the tragic situation of a Nazi concentration camp. It's a masterpiece where humor bloomed in tragedy paradoxically creates greater sadness and emotion." }, img: "https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "그녀", en: "Her" }, director: "스파이크 존즈", year: "2013", desc: { ko: "고독한 현대인이 인공지능과 교감하며 느끼는 사랑과 상실감을 섬세하게 포착했습니다. 기술의 발전 속에서도 변하지 않는 인간의 외로움과 소통의 갈망을 깊이 있게 그려냈습니다.", en: "It delicately captures the love and sense of loss felt by a lonely modern person communicating with AI. It deeply depicts human loneliness and the desire for communication that doesn't change even amidst technological advancement." }, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "내 머리 속의 지우개", en: "A Moment to Remember" }, director: "이재한", year: "2004", desc: { ko: "알츠하이머로 기억을 잃어가는 아내와 그녀를 끝까지 지키려는 남자의 절절한 멜로입니다. '기억이 사라지면 영혼도 사라진다'는 대사와 함께 잊을 수 없는 슬픔을 전해줍니다.", en: "It's a sorrowful melodrama about a wife losing her memory due to Alzheimer's and a man trying to protect her until the end. Along with the line 'If memory disappears, the soul also disappears,' it conveys unforgettable sadness." }, img: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "맨체스터 바이 더 씨", en: "Manchester by the Sea" }, director: "케네스 로너건", year: "2016", desc: { ko: "과거의 거대한 트라우마를 안고 살아가는 남자의 무채색 같은 삶을 현실적으로 그렸습니다. 억지로 극복하려 하지 않는 주인공의 모습이 오히려 더 깊은 위로와 공감을 줍니다.", en: "It realistically depicts the achromatic life of a man living with a huge trauma from the past. The appearance of the protagonist who doesn't try to overcome it by force rather provides deeper comfort and empathy." }, img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "파도가 지나간 자리", en: "The Light Between Oceans" }, director: "데릭 시엔프랜스", year: "2016", desc: { ko: "외딴 섬 등대지기 부부가 바다에서 떠내려온 아이를 키우며 겪는 가혹한 운명의 갈림길을 담았습니다. 사랑과 도덕 사이의 고통스러운 선택이 보는 이의 가슴을 먹먹하게 만듭니다.", en: "It contains the harsh crossroads of fate experienced by a lighthouse keeper couple on a remote island as they raise a child washed up from the sea. The painful choice between love and morality makes the viewer's heart feel heavy." }, img: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "빌리 엘리어트", en: "Billy Elliot" }, director: "스티븐 달드리", year: "2000", desc: { ko: "가난한 탄광촌 소년이 발레리노의 꿈을 이루기 위해 겪는 시련과 아버지의 헌신적인 사랑을 다뤘습니다. 마지막 장면의 벅찬 감동은 슬픔을 넘어선 환희를 느끼게 합니다.", en: "It deals with the trials a boy in a poor mining village experiences to achieve his dream of becoming a ballerino and his father's dedicated love. The overwhelming emotion of the last scene makes you feel joy beyond sadness." }, img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "소원", en: "Hope" }, director: "이준익", year: "2013", desc: { ko: "참혹한 범죄 피해를 겪은 아이와 그 가족이 다시 세상 밖으로 걸어 나오는 과정을 따뜻한 시선으로 그렸습니다. 슬픔의 심연에서도 포기하지 않는 인간의 존엄성과 희망을 보여줍니다.", en: "It depicts the process of a child and her family, who suffered cruel criminal damage, walking back out into the world with a warm gaze. It shows human dignity and hope that do not give up even in the abyss of sadness." }, img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=500&auto=format&fit=crop" }
    ],
    excited: [
        { title: { ko: "매드맥스: 분노의 도로", en: "Mad Max: Fury Road" }, director: "조지 밀러", year: "2015", desc: { ko: "핵전쟁으로 멸망한 미래, 독재자에게 반기를 든 자들의 멈추지 않는 도로 위 사투를 담았습니다. 거친 엔진 소리와 폭발적인 액션이 아드레날린을 최고조로 끌어올리는 체험형 영화입니다.", en: "In a future destroyed by nuclear war, it contains the unstoppable struggle on the road of those who rebelled against a dictator. It's an experiential movie where rough engine sounds and explosive action boost adrenaline to the peak." }, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "어벤져스: 엔드게임", en: "Avengers: Endgame" }, director: "루소 형제", year: "2019", desc: { ko: "전 우주의 절반이 사라진 절망적인 상황에서 영웅들이 마지막 희망을 걸고 벌이는 장엄한 전투를 그렸습니다. 10년간 이어온 마블 시리즈의 거대한 마침표가 주는 전율이 대단합니다.", en: "In a desperate situation where half of the universe has disappeared, it depicts the majestic battle heroes wage with their last hope. The thrill given by the huge period of the Marvel series that has lasted for 10 years is immense." }, img: "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "분노의 질주: 더 익스트림", en: "The Fate of the Furious" }, director: "F. 게리 그레이", year: "2017", desc: { ko: "최첨단 슈퍼카들의 화려한 카체이싱과 도심 한복판에서 벌어지는 파괴적인 액션의 정수를 보여줍니다. 쉴 새 없이 몰아치는 속도감과 타격감이 스트레스를 단번에 해소해 줍니다.", en: "It shows the essence of colorful car chasing of state-of-the-art supercars and destructive action taking place in the middle of the city. The non-stop speed and hitting feel relieve stress at once." }, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "미션 임파서블: 폴아웃", en: "Mission: Impossible - Fallout" }, director: "크리스토퍼 맥쿼리", year: "2018", desc: { ko: "배우 톰 크루즈가 직접 대역 없이 수행한 고난도 액션들의 집합체입니다. 헬기 추격전, 스카이다이빙 등 현실감 넘치는 액션이 극강의 긴장감과 전율을 선사합니다.", en: "It's a collection of high-difficulty actions performed by actor Tom Cruise himself without a stunt double. Realistic actions such as helicopter pursuit and skydiving provide extreme tension and thrill." }, img: "https://images.unsplash.com/photo-1510133769068-ad0565e499a0?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "탑건: 매버릭", en: "Top Gun: Maverick" }, director: "조셉 코신스키", year: "2022", desc: { ko: "전설적인 파일럿 매버릭이 다시 하늘로 날아올라 젊은 팀원들과 불가능한 미션에 도전합니다. 전투기의 박진감 넘치는 비행과 엔진음이 온몸에 전율을 느끼게 하는 액션 블록버스터입니다.", en: "Legendary pilot Maverick flies back into the sky and challenges an impossible mission with young team members. It's an action blockbuster where the breathtaking flight and engine sound of fighter jets make you feel thrills all over your body." }, img: "https://images.unsplash.com/photo-1561054411-e6b772421297?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "존 윅 4", en: "John Wick: Chapter 4" }, director: "채드 스타헬스키", year: "2023", desc: { ko: "액션 마스터 존 윅이 자유를 얻기 위해 전 세계 암살자들과 벌이는 최후의 전쟁입니다. 독창적이고 스타일리시한 '건푸' 액션이 한층 더 업그레이드되어 장르적 쾌감을 극대화합니다.", en: "Action master John Wick's final war against assassins around the world to gain freedom. Original and stylish 'Gun-fu' action has been upgraded further, maximizing the genre's pleasure." }, img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "킹스맨 : 시크릿 에이전트", en: "Kingsman: The Secret Service" }, director: "매튜 본", year: "2015", desc: { ko: "전통적인 스파이 영화의 틀을 깬 감각적이고 위트 있는 액션 영화입니다. 화려한 수트와 기발한 무기들, 그리고 거침없는 전개가 관객의 시선을 완전히 사로잡습니다.", en: "An emotional and witty action movie that broke the frame of traditional spy movies. Colorful suits, ingenious weapons, and unstoppable development completely capture the audience's attention." }, img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "다이 하드", en: "Die Hard" }, director: "존 맥티어난", year: "1988", desc: { ko: "뉴욕 경찰 존 맥클레인이 테러리스트들에 맞서 홀로 사투를 벌이는 현대 액션의 고전입니다. 제한된 공간에서의 긴박한 두뇌 싸움과 폭발적인 반격이 백미인 작품입니다.", en: "A classic of modern action where New York cop John McClane struggles alone against terrorists. The urgent brain fight and explosive counterattack in a limited space are the highlights." }, img: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "다크 나이트", en: "The Dark Knight" }, director: "크리스토퍼 놀란", year: "2008", desc: { ko: "배트맨과 조커의 철학적 대결을 담은 묵직한 히어로 영화입니다. 선과 악의 경계에 선 인간들의 고뇌를 치밀한 각본과 압도적인 스케일의 액션으로 풀어낸 걸작입니다.", en: "A heavy hero movie depicting the philosophical confrontation between Batman and Joker. It's a masterpiece that unraveled the agony of humans standing on the boundary of good and evil with a precise script and an overwhelming scale of action." }, img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "글래디에이터", en: "Gladiator" }, director: "리들리 스콧", year: "2000", desc: { ko: "로마 제국의 장군에서 노예 검투사로 전락한 막시무스의 복수극입니다. 콜로세움에서의 장엄한 대결과 웅장한 OST가 어우러져 시대를 초월한 전율을 선사합니다.", en: "Maximus's revenge drama as he falls from a general of the Roman Empire to a slave gladiator. The majestic confrontation in the Colosseum harmonizes with the grand OST, providing an unconventional thrill." }, img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop" }
    ],
    scared: [
        { title: { ko: "컨저링", en: "The Conjuring" }, director: "제임스 완", year: "2013", desc: { ko: "실존 인물 워렌 부부의 사건 파일을 바탕으로 한 정통 호러입니다. 직접적인 잔인함 없이 오직 분위기와 긴장감만으로 관객의 숨통을 조여오는 영리한 연출이 돋보입니다.", en: "Authentic horror based on the case files of the real-life Warren couple. The clever production stands out as it chokes the audience's breath only with atmosphere and tension without direct cruelty." }, img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "겟 아웃", en: "Get Out" }, director: "조던 필", year: "2017", desc: { ko: "평범해 보이는 교외 마을에서 벌어지는 기묘하고 소름 돋는 미스터리를 그렸습니다. 인종 차별이라는 사회적 문제를 공포 장르와 결합하여 신선하고 충격적인 경험을 제공합니다.", en: "It depicts a strange and spine-chilling mystery taking place in a seemingly ordinary suburban village. By combining the social problem of racism with the horror genre, it provides a fresh and shocking experience." }, img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "유전", en: "Hereditary" }, director: "아리 애스터", year: "2018", desc: { ko: "한 가문의 비극적인 역사와 그로부터 벗어날 수 없는 운명적인 공포를 다룹니다. 가슴을 짓누르는 압도적인 분위기와 충격적인 전개가 공포의 새로운 차원을 보여줍니다.", en: "It deals with the tragic history of a family and the fateful horror that cannot be escaped from it. The overwhelming atmosphere that presses down on the chest and the shocking development show a new dimension of horror." }, img: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "미드소마", en: "Midsommar" }, director: "아리 애스터", year: "2019", desc: { ko: "한여름의 태양 아래서 벌어지는 기괴하고 잔혹한 축제를 담았습니다. 밝은 색감 뒤에 숨겨진 광기와 불안이 관객을 묘한 공포와 불쾌함으로 밀어넣는 독창적인 작품입니다.", en: "It contains a bizarre and cruel festival taking place under the midsummer sun. It's an original work where madness and anxiety hidden behind bright colors push the audience into strange horror and discomfort." }, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "곡성", en: "The Wailing" }, director: "나홍진", year: "2016", desc: { ko: "외지인이 나타난 후 벌어지는 의문의 사건들과 믿음에 관한 이야기를 다뤘습니다. 오컬트와 미스터리, 호러가 정교하게 뒤섞여 영화가 끝난 후에도 멈추지 않는 소름을 유발합니다.", en: "It deals with questionable incidents and stories about faith that occur after a stranger appears. Occult, mystery, and horror are elaborately mixed, causing goosebumps that do not stop even after the movie is over." }, img: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "부산행", en: "Train to Busan" }, director: "연상호", year: "2016", desc: { ko: "정체불명의 바이러스가 퍼진 서울에서 부산으로 향하는 KTX 안의 사투를 그렸습니다. 좀비물의 장르적 재미와 한국적인 신파, 인간의 이기심을 절묘하게 결합한 수작입니다.", en: "It depicts the struggle inside the KTX bound for Busan from Seoul, where an unidentified virus has spread. It's a masterpiece that exquisitely combines the genre fun of zombies with Korean melodrama and human selfishness." }, img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "파라노말 액티비티", en: "Paranormal Activity" }, director: "오렌 펠리", year: "2007", desc: { ko: "집안에서 벌어지는 기이한 현상들을 CCTV 화면으로 보여주는 페이크 다큐멘터리 호러입니다. '정적인 화면 속의 변화'가 주는 압박감이 상상 이상의 공포를 자아냅니다.", en: "A fake documentary horror showing strange phenomena occurring in the house through CCTV screens. The pressure given by the 'change in the static screen' creates horror beyond imagination." }, img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "어셔가의 몰락", en: "The Fall of the House of Usher" }, director: "마이크 플래너건", year: "2023", desc: { ko: "에드거 앨런 포의 고전 호러를 현대적으로 재해석했습니다. 한 가문의 몰락과 비밀스러운 공포가 탐미적인 영상미와 어우러져 기묘하고 음산한 분위기를 자아냅니다.", en: "A modern reinterpretation of Edgar Allan Poe's classic horror. The fall of a family and secret horror harmonize with aesthetic visual beauty, creating a strange and gloomy atmosphere." }, img: "https://images.unsplash.com/photo-1478033394151-c931d5a4bdd6?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "숨바꼭질", en: "Hide and Seek" }, director: "허정", year: "2013", desc: { ko: "남의 집에 몰래 몸을 숨기고 사는 사람들에 대한 도시 괴담을 소재로 했습니다. 가장 안전해야 할 '집'이 공포의 공간으로 변할 때의 긴장감이 극대화된 심리 스릴러입니다.", en: "Based on urban legends about people living secretly hidden in other people's houses. A psychological thriller where the tension is maximized when 'home', which should be the safest place, turns into a space of horror." }, img: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "오멘", en: "The Omen" }, director: "리처드 도너", year: "1976", desc: { ko: "사탄의 아들 '데미안'의 탄생과 그를 둘러싼 비극적인 죽음들을 다룬 고전 호러의 명작입니다. 운명적 공포와 섬뜩한 상징들이 시종일관 가슴을 조여오게 만듭니다.", en: "A masterpiece of classic horror dealing with the birth of Satan's son 'Damian' and the tragic deaths around him. Fateful horror and eerie symbols keep choking your heart throughout." }, img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=500&auto=format&fit=crop" }
    ],
    calm: [
        { title: { ko: "리틀 포레스트", en: "Little Forest" }, director: "임순례", year: "2018", desc: { ko: "도시 생활에 지친 주인공이 고향으로 돌아와 사계절을 보내며 자신만의 삶을 찾아가는 힐링 영화입니다. 정갈한 음식과 평화로운 시골 풍경이 지친 마음을 차분하게 달래줍니다.", en: "A healing movie about a protagonist exhausted from city life returning home and finding her own life while spending four seasons. Neat food and peaceful rural scenery calmly soothe the exhausted mind." }, img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "소울", en: "Soul" }, director: "피트 닥터", year: "2020", desc: { ko: "인생의 의미를 잃어버린 재즈 뮤지션이 특별한 모험을 통해 삶의 진정한 아름다움을 발견하는 여정을 담았습니다. 우리가 놓치기 쉬운 일상의 소소한 행복이 얼마나 소중한지 일깨워줍니다.", en: "It contains the journey of a jazz musician who lost the meaning of life discovering the true beauty of life through a special adventure. It reminds us how precious the small daily happiness we easily miss is." }, img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "카모메 식당", en: "Kamome Diner" }, director: "오기가미 나오코", year: "2006", desc: { ko: "핀란드에서 식당을 운영하는 여인과 그곳을 찾는 사람들의 소소한 인연을 다룬 담백한 영화입니다. 맛있는 음식과 여유로운 대화들이 정서적인 안정을 선사하는 따뜻한 작품입니다.", en: "A plain movie dealing with the small connections of a woman running a restaurant in Finland and the people who visit there. Delicious food and relaxed conversations are warm works that provide emotional stability." }, img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "어느 가족", en: "Shoplifters" }, director: "고레에다 히로카즈", year: "2018", desc: { ko: "혈연보다 깊은 유대로 묶인 가짜 가족의 삶을 통해 진정한 가족의 의미를 묻습니다. 조용하게 흐르는 일상 속에 숨겨진 날카로운 질문과 깊은 울림이 긴 여운을 남깁니다.", en: "It asks the meaning of a true family through the lives of a fake family bound by bonds deeper than blood ties. Sharp questions hidden in a quietly flowing daily life and deep echoes leave a long lingering emotion." }, img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "월터의 상상은 현실이 된다", en: "The Secret Life of Walter Mitty" }, director: "벤 스틸러", year: "2013", desc: { ko: "자신만의 세계에 갇혀 있던 남자가 광활한 대자연 속으로 모험을 떠나며 내면의 평화를 찾아가는 과정입니다. 시원하게 펼쳐지는 아이슬란드의 풍경이 복잡한 생각을 비우게 해줍니다.", en: "The process of a man who was trapped in his own world going on an adventure into the vast great nature and finding inner peace. The coolly spread scenery of Iceland helps to clear complex thoughts." }, img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "패터슨", en: "Paterson" }, director: "짐 자무쉬", year: "2016", desc: { ko: "버스 운전사이자 시인인 패터슨의 반복적인 일주일간의 일상을 담백하게 담았습니다. 변함없는 일상 속에서 발견하는 작은 시적 순간들이 마음을 고요하고 풍요롭게 만듭니다.", en: "It contains the repetitive one-week daily life of Paterson, a bus driver and poet, plainly. Small poetic moments discovered in an unchanging daily life make the heart quiet and rich." }, img: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "원스", en: "Once" }, director: "존 카니", year: "2006", desc: { ko: "음악이라는 공통 분모를 통해 서로의 상처를 이해하고 소통하는 두 사람의 소박한 만남을 그렸습니다. 꾸미지 않은 영상과 진심 어린 노래들이 깊은 정서적 정화를 선사합니다.", en: "It depicts a simple meeting of two people who understand and communicate with each other's scars through the common denominator of music. Unadorned visuals and sincere songs provide deep emotional purification." }, img: "https://images.unsplash.com/photo-1514525253344-f81bcd3ce919?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "심야식당", en: "Midnight Diner" }, director: "마츠오카 조지", year: "2015", desc: { ko: "밤늦은 시각 문을 여는 작은 식당에서 오가는 사람들의 사연과 음식을 담은 옴니버스 영화입니다. 따스한 조명과 소박한 요리들이 고단한 하루 끝에 완벽한 휴식을 줍니다.", en: "An omnibus movie containing the stories and food of people coming and going in a small restaurant that opens late at night. Warm lighting and simple dishes provide perfect rest at the end of a tiring day." }, img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "그해 여름", en: "Once in a Summer" }, director: "조근식", year: "2006", desc: { ko: "지나간 시간과 돌아오지 않을 첫사랑에 대한 아련한 추억을 다룬 서정적인 영화입니다. 수채화 같은 풍경과 차분한 호흡이 과거의 기억을 조용히 소환하게 만듭니다.", en: "A lyrical movie dealing with faint memories of past time and first love that won't come back. Watercolor-like scenery and calm breath quietly summon past memories." }, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=500&auto=format&fit=crop" },
        { title: { ko: "바닷마을 다이어리", en: "Our Little Sister" }, director: "고레에다 히로카즈", year: "2015", desc: { ko: "가마쿠라의 아름다운 사계절 속에서 네 자매가 진정한 가족이 되어가는 과정을 담았습니다. 조용하지만 단단한 유대감이 주는 평온함이 마음속 깊은 곳까지 정화시켜줍니다.", en: "It contains the process of four sisters becoming a true family in the beautiful four seasons of Kamakura. The peace given by a quiet but strong bond purifies to the deep part of the heart." }, img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=500&auto=format&fit=crop" }
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

    // Navigation and Pages
    const aboutTitleElements = document.querySelectorAll('.about-title-text');
    aboutTitleElements.forEach(el => el.textContent = t.aboutTitle);
    
    const aboutContentElements = document.querySelectorAll('.about-content-text');
    aboutContentElements.forEach(el => el.textContent = t.aboutContent);

    document.getElementById('privacy-link-text').textContent = t.privacyTitle;
    document.getElementById('home-link-text').textContent = currentLang === 'ko' ? "홈" : "Home";

    // Contact Form Translations
    document.getElementById('contact-title').textContent = t.contactTitle;
    document.getElementById('label-email').textContent = t.labelEmail;
    document.getElementById('label-message').textContent = t.labelMessage;
    document.getElementById('submit-btn').textContent = t.submitBtn;
    document.getElementById('email').placeholder = t.placeholderEmail;
    document.getElementById('message').placeholder = t.placeholderMessage;

    // Refresh mood buttons
    const moodButtonsContainer = document.getElementById('mood-buttons');
    if (moodButtonsContainer) {
        moodButtonsContainer.innerHTML = '';
        Object.keys(t.moods).forEach(mood => {
            const btn = document.createElement('button');
            btn.className = 'mood-btn';
            btn.textContent = t.moods[mood];
            btn.onclick = () => showRecommendations(mood);
            moodButtonsContainer.appendChild(btn);
        });
    }

    // Refresh results if any
    const lastMood = localStorage.getItem('lastMood');
    if (lastMood) showRecommendations(lastMood);
}

function showRecommendations(mood) {
    localStorage.setItem('lastMood', mood);
    const t = translations[currentLang];
    
    // UI Feedback
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === t.moods[mood]);
    });

    const area = document.getElementById('recommendation-area');
    if (!area) return;
    
    const grid = document.getElementById('movie-grid');
    grid.innerHTML = '';

    const shuffledMovies = [...movieData[mood]].sort(() => Math.random() - 0.5);

    shuffledMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.img}" alt="${movie.title[currentLang]}" class="movie-poster" loading="lazy">
            <div class="movie-info">
                <span class="movie-meta">${t.year}: ${movie.year} | ${t.director}: ${movie.director}</span>
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
