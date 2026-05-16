const translations = {
    ko: {
        siteTitle: "기분별 영화 추천",
        headerTitle: "🎬 Movie Mood",
        heroMsg: "오늘의 기분은 어떠신가요?",
        heroSubmsg: "당신의 기분에 딱 맞는 영화를 추천해 드립니다.",
        resultTitle: "추천 영화",
        footerText: "© 2024 Movie Mood. All rights reserved.",
        langBtn: "English",
        themeDark: "Dark Mode",
        themeLight: "Light Mode",
        moods: {
            happy: "😊 행복함",
            sad: "😢 우울함",
            excited: "🤩 신남",
            scared: "😱 무서움",
            calm: "😌 평온함"
        }
    },
    en: {
        siteTitle: "Movie Recommendation by Mood",
        headerTitle: "🎬 Movie Mood",
        heroMsg: "How are you feeling today?",
        heroSubmsg: "We recommend movies that perfectly match your mood.",
        resultTitle: "Recommended Movies",
        footerText: "© 2024 Movie Mood. All rights reserved.",
        langBtn: "한국어",
        themeDark: "Dark Mode",
        themeLight: "Light Mode",
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
        { title: { ko: "인턴", en: "The Intern" }, desc: { ko: "70세 인턴과 30세 CEO의 훈훈한 우정 이야기", en: "A heartwarming story of friendship between a 70-year-old intern and a 30-year-old CEO." }, emoji: "👔" },
        { title: { ko: "어바웃 타임", en: "About Time" }, desc: { ko: "시간을 되돌릴 수 있다면? 일상의 소중함을 일깨워주는 영화", en: "What if you could travel back in time? A movie that reminds us of the value of everyday life." }, emoji: "⏳" }
    ],
    sad: [
        { title: { ko: "이프 온리", en: "If Only" }, desc: { ko: "사랑하는 사람의 소중함을 다시금 깨닫게 하는 눈물 쏙 영화", en: "A tear-jerking movie that makes you realize the importance of your loved ones." }, emoji: "❤️" },
        { title: { ko: "노트북", en: "The Notebook" }, desc: { ko: "한 남자의 일생을 건 위대한 사랑 이야기", en: "A great love story of a man's lifetime." }, emoji: "📖" }
    ],
    excited: [
        { title: { ko: "매드맥스: 분노의 도로", en: "Mad Max: Fury Road" }, desc: { ko: "멈추지 않는 질주, 폭발하는 액션의 카타르시스", en: "Unstoppable racing and exploding action catharsis." }, emoji: "🏎️" },
        { title: { ko: "어벤져스: 엔드게임", en: "Avengers: Endgame" }, desc: { ko: "마블 시네마틱 유니버스의 거대한 피날레", en: "The epic finale of the Marvel Cinematic Universe." }, emoji: "🦸" }
    ],
    scared: [
        { title: { ko: "컨저링", en: "The Conjuring" }, desc: { ko: "무서운 장면 없이 무서운 실화 바탕 공포물", en: "A horror film based on a true story that's scary without gore." }, emoji: "👻" },
        { title: { ko: "겟 아웃", en: "Get Out" }, desc: { ko: "숨 막히는 긴장감과 소름 돋는 반전", en: "Breathtaking tension and spine-chilling twists." }, emoji: "🕯️" }
    ],
    calm: [
        { title: { ko: "리틀 포레스트", en: "Little Forest" }, desc: { ko: "잠시 쉬어가도 괜찮아, 힐링 가득한 시골 생활", en: "It's okay to take a break, a healing rural life." }, emoji: "🌿" },
        { title: { ko: "소울", en: "Soul" }, desc: { ko: "인생의 아름다움을 찾는 특별한 여정", en: "A special journey to find the beauty of life." }, emoji: "🎷" }
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
    document.getElementById('footer-text').textContent = t.footerText;
    document.getElementById('lang-toggle').textContent = t.langBtn;

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
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.includes(translations[currentLang].moods[mood].split(' ')[1]));
    });

    const area = document.getElementById('recommendation-area');
    const grid = document.getElementById('movie-grid');
    grid.innerHTML = '';

    movieData[mood].forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <div class="movie-poster">${movie.emoji}</div>
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
    document.getElementById('theme-toggle').textContent = isDark ? "Light Mode" : "Dark Mode";
});

// Init
updateUI();
