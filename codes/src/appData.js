const cards = [
  {
    id: 0,
    author: "정상우",
    title: "jungsangwoo",
    description: "jungsangwoo",
    imageUrl: "/images/image00.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://jungsangwoo.com",
      },
    ]
  },
  {
    id: 1,
    author: "박수연",
    title: "Sooyeon Park",
    description: "작업 아카이브",
    imageUrl: "/images/image01.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://furtherpark.wixsite.com/shin",
      },
    ]
  },
  {
    id: 2,
    author: "주진석(Ju Jinseok)",
    title: "Ju Jinseok - Where is my works?",
    description: "Where is my works?",
    imageUrl: "/images/image02.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://docs.google.com/spreadsheets/d/1Uf4rIstf5Mmah3-dX3TXV-CljKNhD56rVGaeaj6g5zg/edit?usp=sharing",
      },
    ]
  },
  {
    id: 3,
    author: "최가은",
    title: "workinggorae",
    description: "내 손을 거쳐간 모든 것들",
    imageUrl: "/images/image03.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://www.instagram.com/working_gorae",
      },
    ]
  },
  {
    id: 4,
    author: "손민지",
    title: "SONMINJI",
    description: "playful works",
    imageUrl: "/images/image04.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://grafolio.naver.com/sonminji",
      },
    ]
  },
  {
    id: 5,
    author: "이성은",
    title: "Until you see them",
    description: "데굴데굴 굴러다닙니다. 아무 말이나 해 주세요",
    imageUrl: "/images/image05.jpg",
    buttonTexts: ["Open", "Open"],
    siteUrls: ["https://www.instagram.com/untilyouseethem/","https://untilyouseethem.tumblr.com"],
    buttons: [
      {
        text: "Open",
        siteUrl: "https://www.instagram.com/untilyouseethem/",
      },
      {
        text: "Open",
        siteUrl: "https://untilyouseethem.tumblr.com",
      },
    ]
  },
  {
    id: 6,
    author: "김솔",
    title: "Nightmare",
    description: "I always dream of labyrinths or of mirrors.",
    imageUrl: "/images/image06.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://solkim2020.wixsite.com/nightmare",
      },
    ]
  },
  {
    id: 7,
    author: "이승아",
    title: "​휴 관 (休 館)",
    description: "이승아 작업 아카이브",
    imageUrl: "/images/image07.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://betty092858.wixsite.com/closed",
      },
    ]
  },
  {
    id: 8,
    author: "원민영",
    title: "Minyoung Won",
    description: "작업 아카이브",
    imageUrl: "/images/image08.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "http://honeimo.creatorlink.net",
      },
    ]
  },
  {
    id: 9,
    author: "이예진",
    title: "record ING",
    description: "작업 과정, 아카이브",
    imageUrl: "/images/image09.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://jinny3579.wixsite.com/recording",
      },
    ]
  },
  {
    id: 10,
    author: "김윤진",
    title: "YOONJIN KIM",
    description: "artworks",
    imageUrl: "/images/image10.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://yoonjinwork.wordpress.com",
      },
    ]
  },
  {
    id: 11,
    author: "박지원(Jiwon Park)",
    title: "Open to Violence",
    description: "걸러진 것",
    imageUrl: "/images/image11.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://m.blog.naver.com/mystnoon",
      },
    ]
  },
  {
    id: 12,
    author: "임동혁",
    title: "Still Life",
    description: "작업 아카이브",
    imageUrl: "/images/image12.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://donghyuklim.creatorlink.net/",
      },
    ]
  },
  {
    id: 13,
    author: "최수연",
    title: "sooyeon choi",
    description: "작업 아카이브",
    imageUrl: "/images/image13.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://sooyeonchoi.creatorlink.net/",
      },
    ]
  },
  {
    id: 14,
    author: "정주원(Juwon Jeong)",
    title: "jowo archives",
    description: "작업 과정, 결과 아카이브",
    imageUrl: "/images/image14.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://https504520163.wordpress.com",
      },
    ]
  },
  {
    id: 15,
    author: "이지현",
    title: "PIP",
    description: "#People in Pictures",
    imageUrl: "/images/image15.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://lelly464373536.wordpress.com/",
      },
    ]
  },
  {
    id: 16,
    author: "장순원",
    title: "NEW WORLD",
    description: "글, 그림, 애니메이션",
    imageUrl: "/images/image16.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "http://sunwonchang.creatorlink.net",
      },
    ]
  },
  {
    id: 17,
    author: "안혜수",
    title: "Aniyaesoo",
    description: "!지극히 개인적! 궁금하지 않으시다면 슥. 지나가주세요",
    imageUrl: "/images/image17.jpg",
    buttons: [
      {
        text: "Open",
        siteUrl: "https://artwork722116545.wordpress.com/",
      },
    ]
  },
];

/*
Refs for Suffle algorithme
- https://en.wikipedia.org/wiki/Fisher–Yates_shuffle#The_modern_algorithm
- https://qastack.kr/programming/2450954/how-to-randomize-shuffle-a-javascript-array
*/

export const appData = {
  headerText: '상상의 전시 - Imaginary Exhibition',
  footerText: `본 웹사이트는 2020학년도 2학기 서울대학교 미술대학 서양화과 "회화II" 수업의 결과물입니다.\n 모든 콘텐츠의 저작권은 각 창작자에게 있습니다.`,
  cards: ((cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  })(cards)
};
