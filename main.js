const translations = {
  ko: {
    tagline: "AI와 디자인으로 새로운 가능성을 만드는 크리에이티브 스튜디오",
    intro: "NOVAIX는 AI 기술과 감각적인 디자인을 결합하여 브랜드, 상세페이지, 콘텐츠, 웹페이지 제작을 돕는 크리에이티브 스튜디오입니다.",
    serviceResultDefault: "원하는 분야를 클릭해보세요.",
    card_title_ai: "AI Design",
    card_desc_ai: "AI를 활용한 빠르고 감각적인 디자인 작업",
    card_title_detail: "Detail Page",
    card_desc_detail: "상품의 장점을 잘 보여주는 상세페이지 구성",
    card_title_creative: "Creative",
    card_desc_creative: "브랜드에 어울리는 콘텐츠와 웹페이지 제작",
    lottoTitle: "바이오리듬 로또 번호 추천기",
    lottoDesc: "생년월일을 입력하면 오늘의 바이오리듬을 계산해<br>나만의 로또 번호 5세트와 보너스 번호를 추천해드립니다.",
    lottoButton: "번호 추천받기",
    loading: "번호 생성 중...",
    service: {
      ai: "AI 디자인은 인공지능을 활용하여 빠르고 효율적으로 시안을 제작합니다. 브랜드의 아이덴티티에 맞는 감각적인 디자인을 만나보세요.",
      detail: "상세페이지는 고객의 구매를 유도하는 중요한 요소입니다. 제품의 특장점을 분석하여 설득력 있는 스토리로 구성합니다.",
      creative: "크리에이티브 서비스는 독창적인 콘텐츠와 웹페이지를 통해 브랜드 가치를 높입니다. 사용자의 시선을 사로잡는 특별한 경험을 만들어보세요."
    }
  },
  en: {
    tagline: "A creative studio creating new possibilities with AI and design",
    intro: "NOVAIX is a creative studio that combines AI technology and modern design for branding, detail pages, and web content.",
    serviceResultDefault: "Click the category you want.",
    card_title_ai: "AI Design",
    card_desc_ai: "Fast and stylish design work using AI",
    card_title_detail: "Detail Page",
    card_desc_detail: "Detailed page composition that highlights product advantages",
    card_title_creative: "Creative",
    card_desc_creative: "Content and web page production that suits the brand",
    lottoTitle: "Biorhythm Lotto Number Generator",
    lottoDesc: "Enter your date of birth to calculate today's biorhythm<br>and get 5 sets of personalized lotto numbers and a bonus number.",
    lottoButton: "Get Recommendations",
    loading: "Generating numbers...",
    service: {
      ai: "AI Design uses artificial intelligence to create proposals quickly and efficiently. Discover a sensational design that fits your brand's identity.",
      detail: "The detail page is a crucial element that drives customer purchases. We analyze the product's features and structure a compelling story.",
      creative: "The Creative service enhances brand value through original content and web pages. Create a special experience that captures users' attention."
    }
  },
  ja: {
    tagline: "AIとデザインで新しい可能性を作るクリエイティブスタジオ",
    intro: "NOVAIXはAI技術と感覚的なデザインを組み合わせ、ブランド、詳細ページ、コンテンツ、ウェブページの制作を支援するクリエイティブスタジオです。",
    serviceResultDefault: "ご希望の分野をクリックしてください。",
    card_title_ai: "AIデザイン",
    card_desc_ai: "AIを活用した迅速でスタイリッシュなデザイン作業",
    card_title_detail: "詳細ページ",
    card_desc_detail: "製品の長所を強調する詳細ページの構成",
    card_title_creative: "クリエイティブ",
    card_desc_creative: "ブランドに合わせたコンテンツとウェブページの制作",
    lottoTitle: "バイオリズムロト番号生成器",
    lottoDesc: "生年月日を入力すると、今日のバイオリズムを計算し、<br>あなた専用のロト番号5セットとボーナス番号を提案します。",
    lottoButton: "番号を生成する",
    loading: "番号を生成中...",
    service: {
      ai: "AIデザインは、人工知能を活用して迅速かつ効率的に案を作成します。ブランドのアイデンティティに合った感覚的なデザインを体験してください。",
      detail: "詳細ページは、顧客の購入を誘導する重要な要素です。製品の特徴を分析し、説得力のあるストーリーで構成します。",
      creative: "クリエイティブサービスは、独創的なコンテンツとウェブページを通じてブランド価値を高めます。ユーザーの目を引く特別な体験を創造してください。"
    }
  },
  zh: {
    tagline: "用AI与设计创造新可能性的创意工作室",
    intro: "NOVAIX 是结合 AI 技术与现代设计的创意工作室，致力于品牌、详情页、内容及网页制作。",
    serviceResultDefault: "请点击您感兴趣的领域。",
    card_title_ai: "AI设计",
    card_desc_ai: "利用AI进行快速且富有感性的设计工作",
    card_title_detail: "详情页",
    card_desc_detail: "突出产品优点的详情页构成",
    card_title_creative: "创意",
    card_desc_creative: "制作符合品牌形象的内容和网页",
    lottoTitle: "生物节律乐透号码推荐器",
    lottoDesc: "输入您的出生日期，计算今天的生物节律，<br>并为您推荐5组个性化的乐透号码和1个奖励号码。",
    lottoButton: "获取号码推荐",
    loading: "号码生成中...",
    service: {
        ai: "AI设计利用人工智能快速高效地制作设计草案。探索符合品牌身份的感性设计。",
        detail: "详情页是引导客户购买的关键。通过分析产品特长，构建具有说服力的故事情节。",
        creative: "创意服务通过独创性的内容和网页提升品牌价值。创造吸引用户注意力的特别体验。"
    }
  }
};

function changeLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelector('.tagline').textContent = translations[lang].tagline;
  document.querySelector('.intro').textContent = translations[lang].intro;
  document.getElementById('serviceResult').textContent = translations[lang].serviceResultDefault;
  
  document.getElementById('card-title-ai').textContent = translations[lang].card_title_ai;
  document.getElementById('card-desc-ai').textContent = translations[lang].card_desc_ai;
  document.getElementById('card-title-detail').textContent = translations[lang].card_title_detail;
  document.getElementById('card-desc-detail').textContent = translations[lang].card_desc_detail;
  document.getElementById('card-title-creative').textContent = translations[lang].card_title_creative;
  document.getElementById('card-desc-creative').textContent = translations[lang].card_desc_creative;

  document.getElementById('lottoTitle').textContent = translations[lang].lottoTitle;
  document.getElementById('lottoDesc').innerHTML = translations[lang].lottoDesc;
  document.getElementById('lottoButton').textContent = translations[lang].lottoButton;
}

function showService(service) {
  const lang = document.documentElement.lang || 'ko';
  const serviceResult = document.getElementById("serviceResult");
  serviceResult.textContent = translations[lang].service[service];
}

function getBallColor(num) {
  if (num <= 10) return "#fbc400";
  if (num <= 20) return "#69c8f2";
  if (num <= 30) return "#ff7272";
  if (num <= 40) return "#aaa";
  return "#b0d840";
}

function createBall(num, isBonus = false) {
  const ball = document.createElement("div");
  ball.className = isBonus ? "ball bonus" : "ball";
  ball.textContent = num;
  ball.style.background = getBallColor(num);
  return ball;
}

function daysBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return Math.floor((d2 - d1) / oneDay);
}

function calcBiorhythm(days, cycle) {
  return Math.sin((2 * Math.PI * days) / cycle);
}

function updateBioUI(idText, idBar, value) {
  const percent = Math.round(value * 100);
  const displayPercent = Math.round((value + 1) * 50);

  document.getElementById(idText).textContent = percent + "%";
  document.getElementById(idBar).style.width = displayPercent + "%";

  if (percent >= 50) {
    document.getElementById(idBar).style.background = "#22c55e";
  } else if (percent >= 0) {
    document.getElementById(idBar).style.background = "#7c3aed";
  } else {
    document.getElementById(idBar).style.background = "#ef4444";
  }
}

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateOneSet(seed) {
  const numbers = [];
  let count = 1;

  while (numbers.length < 7) {
    const randomValue = seededRandom(seed + count * 13);
    const number = Math.floor(randomValue * 45) + 1;

    if (!numbers.includes(number)) {
      numbers.push(number);
    }

    count++;
  }

  const mainNumbers = numbers.slice(0, 6).sort((a, b) => a - b);
  const bonusNumber = numbers[6];

  return {
    main: mainNumbers,
    bonus: bonusNumber
  };
}

function generateByBiorhythm() {
  const lang = document.documentElement.lang || 'ko';
  const birthValue = document.getElementById("birthDate").value;
  const lottoButton = document.getElementById("lottoButton");

  if (!birthValue) {
    const alertMsg = lang === 'ko' ? "생년월일을 먼저 입력해주세요." : 
                     lang === 'en' ? "Please enter your date of birth first." :
                     lang === 'ja' ? "まず生年月日を入力してください。" :
                     "请先输入您的出生日期。";
    alert(alertMsg);
    return;
  }

  const birthDate = new Date(birthValue);
  const today = new Date();
  const livedDays = daysBetween(birthDate, today);

  if (livedDays < 0) {
    const alertMsg = lang === 'ko' ? "생년월일을 다시 확인해주세요." : 
                     lang === 'en' ? "Please check your date of birth again." :
                     lang === 'ja' ? "生年月日をもう一度確認してください。" :
                     "请再次检查您的出生日期。";
    alert(alertMsg);
    return;
  }

  // Visual feedback
  const originalText = lottoButton.textContent;
  lottoButton.disabled = true;
  lottoButton.textContent = translations[lang].loading || "Loading...";

  setTimeout(() => {
    const physical = calcBiorhythm(livedDays, 23);
    const emotional = calcBiorhythm(livedDays, 28);
    const intellectual = calcBiorhythm(livedDays, 33);

    document.getElementById("bioBox").style.display = "block";

    updateBioUI("physicalText", "physicalBar", physical);
    updateBioUI("emotionalText", "emotionalBar", emotional);
    updateBioUI("intellectualText", "intellectualBar", intellectual);

    const bioSeed =
      livedDays +
      Math.round(physical * 1000) +
      Math.round(emotional * 1000) +
      Math.round(intellectual * 1000);

    const resultBox = document.getElementById("result");
    resultBox.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
      const lotto = generateOneSet(bioSeed + i * 77);

      const setBox = document.createElement("div");
      setBox.className = "set";

      const title = document.createElement("div");
      title.className = "set-title";
      const setLabel = lang === 'ko' ? "세트" : 
                       lang === 'en' ? "Set" :
                       lang === 'ja' ? "セット" : "组";
      title.textContent = i + setLabel;

      setBox.appendChild(title);

      lotto.main.forEach(num => {
        setBox.appendChild(createBall(num));
      });

      const bonusLabel = document.createElement("div");
      bonusLabel.className = "bonus-label";
      const bonusText = lang === 'ko' ? "+ 보너스" : 
                        lang === 'en' ? "+ Bonus" :
                        lang === 'ja' ? "+ ボーナス" : "+ 奖励";
      bonusLabel.textContent = bonusText;

      setBox.appendChild(bonusLabel);
      setBox.appendChild(createBall(lotto.bonus, true));

      resultBox.appendChild(setBox);
    }

    lottoButton.disabled = false;
    lottoButton.textContent = originalText;
    
    // Smooth scroll to result
    document.getElementById("bioBox").scrollIntoView({ behavior: 'smooth' });
  }, 600);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const lottoButton = document.getElementById('lottoButton');
  if (lottoButton) {
    lottoButton.addEventListener('click', generateByBiorhythm);
  }
  
  const langSelector = document.getElementById('langSelector');
  if (langSelector) {
    langSelector.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }

  const birthDateInput = document.getElementById('birthDate');
  if (birthDateInput) {
    birthDateInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        generateByBiorhythm();
      }
    });
  }

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      showService(card.getAttribute('data-service'));
    });
  });
});
