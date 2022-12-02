import image_1 from './assets/thinking-fast-and-slow.webp'
import image_2 from './assets/atomic-habits-tiny-changes-remarkable-results.webp'
import image_3 from './assets/principles.webp'
import image_4 from './assets/daring-greatly.webp'
import image_5 from './assets/big-panda-and-tiny-dragon.webp'
import image_6 from './assets/puer-aeternus.webp'
import image_7 from './assets/counselling-for-toads.webp'
import image_8 from './assets/guns-germs-and-steel-the-fates-of-human-societies.webp'
import image_9 from './assets/sapiens.webp'
import image_10 from './assets/21-lessons-for-the-21st-century.webp'
import image_11 from './assets/rich-dad-poor-dad.webp'
import image_12 from './assets/the-stranger.webp'
import image_13 from './assets/目送.webp'
import image_14 from './assets/the-little-prince.webp'
import image_15 from './assets/鋼の錬金術師.webp'
import image_16 from './assets/diary-of-a-wimpy-kid.webp'
import image_17 from "./assets/harry-potter-and-the-philosopher's-stone.webp"
import image_18 from './assets/harry-potter-and-the-chamber-of-secret.webp'
import image_19 from './assets/harry-potter-and-the-prisoner-of-azkaban.webp'
import image_20 from './assets/harry-potter-and-the-goblet-of-fire.webp'
import image_21 from './assets/harry-potter-and-the-order-of-the-phoenix.webp'
import image_22 from './assets/harry-potter-and-the-half-blood-prince.webp'
import image_23 from './assets/harry-potter-and-the-deathly-hallows.webp'
import image_24 from './assets/神鵰俠侶.webp'
import image_25 from './assets/射鵰英雄傳.webp'
import image_26 from './assets/天龍八部.webp'
import image_27 from './assets/倚天屠龍記.webp'
import image_28 from './assets/笑傲江湖.webp'

export const BOOK_DATA = [
  {
    title: 'books',
    items: [
      {
        id: 1,
        title: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        price: 19.98,
        description:
          'In the highly anticipated Thinking, Fast and Slow, Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. Kahneman exposes the extraordinary capabilities—and also the faults and biases—of fast thinking, and reveals the pervasive influence of intuitive impressions on our thoughts and behavior. The impact of loss aversion and overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the challenges of properly framing risks at work and at home, the profound effect of cognitive biases on everything from playing the stock market to planning the next vacation—each of these can be understood only by knowing how the two systems work together to shape our judgments and decisions.',
        image: image_1,
        publicationDate: 'April 2, 2013',
        language: 'english',
        category: 'life',
        bestsellers: true,
        series: null,
      },
      {
        id: 2,
        title:
          'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
        author: 'James Clear',
        price: 26.98,
        description:
          "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights.",
        image: image_2,
        publicationDate: 'October 16, 2018',
        language: 'english',
        category: 'life',
        bestsellers: true,
        series: null,
      },
      {
        id: 3,
        title: 'Principles: Life and Work',
        author: 'Ray Dalio',
        price: 16.29,
        description:
          "Ray Dalio, one of the world's most successful investors and entrepreneurs, shares the unconventional principles that he’s developed, refined, and used over the past forty years to create unique results in both life and business—and which any person or organization can adopt to help achieve their goals.",
        image: image_3,
        publicationDate: 'September 19, 2017',
        language: 'english',
        category: 'life',
        bestsellers: true,
        series: null,
      },

      {
        id: 4,
        title:
          'Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead',
        author: 'Brené Brown',
        price: 16.98,
        description:
          'Researcher and thought leader Dr. Brené Brown offers a powerful new vision that encourages us to dare greatly: to embrace vulnerability and imperfection, to live wholeheartedly, and to courageously engage in our lives.',
        image: image_4,
        publicationDate: 'September 11, 2012',
        language: 'english',
        category: 'self-help',
        bestsellers: true,
        series: null,
      },
      {
        id: 5,
        title: 'Big Panda and Tiny Dragon',
        author: 'James Norbury',
        price: 19.99,
        description:
          'Joing Big Panda & Tiny Dragon on their travels. They often get lost and make a lot of mistakes. But therein lies the beauty of life.',
        image: image_5,
        publicationDate: 'September 21, 2021',
        language: 'english',
        category: 'self-help',
        bestsellers: false,
        series: null,
      },
      {
        id: 6,
        title: 'The Problem of the Puer Aeternus',
        author: 'Marie-Louise von Franz',
        price: 39.98,
        description:
          'The Latin term puer aeternus means eternal youth. In Jungian psychology it is used to describe a certain type of man - charming, affectionate, creative and ever in pursuit of his dreams. These are the men who remain adolescent well into their adult years, generally full of life yet strangely draining to those around them. We have worked with them, loved them and watched them wave good-bye. It is impossible to overstate the influence on both men and women of this classic study, originally a series of lectures at the Zurich Jung Institute. It is Jungian psychology in its most down-to-earth voice, telling it like it is so accurately and with such a depth of understanding that it is still much in demand even though it has been out of print for many years. This new edition features a Bibliography and an extensive Index.',
        image: image_6,
        publicationDate: 'January 31, 2000',
        language: 'english',
        category: 'self-help',
        bestsellers: false,
        series: null,
      },
      {
        id: 7,
        title: 'Counselling for Toads: A Psychological Adventure',
        author: ' Robert de Board',
        price: 31.94,
        description:
          "Best-selling author, Robert de Board says: 'Toad's experiences are based on my own experiences of counselling people over a period of twenty years. Counselling for Toads is really an amalgamation of the many counselling sessions I have held and contains a distillation of the truths I have learnt from practice.' Appropriate for anyone approaching counselling for the first time, whether as a student or as a client, or for the professional counsellor looking for something to recommend to the hesitant, Counselling for Toads will appeal to both children and adults of all ages.",
        image: image_7,
        publicationDate: 'November 20, 1997',
        language: 'english',
        category: 'self-help',
        bestsellers: false,
        series: null,
      },

      {
        id: 8,
        title: 'Guns, Germs and Steel: The Fate of Human Societies',
        author: 'Jared Diamond',
        price: 18.95,
        description:
          'In his 1997 work Guns, Germs and Steel, Jared Diamond marshals evidence from five continents and across 13,000 years of human history in an attempt to answer the question of why that history unfolded so differently in various parts of the globe. His results offer new explanations for why the unequal divisions of power and wealth so familiar to us today came into existence – and have persisted.',
        image: image_8,
        publicationDate: 'April 1, 1999',
        language: 'english',
        category: 'social-sciences',
        bestsellers: false,
        series: null,
      },
      {
        id: 9,
        title: 'A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        price: 24.99,
        description:
          'In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?',
        image: image_9,
        publicationDate: '2011',
        language: 'english',
        category: 'social-sciences',
        bestsellers: true,
        series: null,
      },

      {
        id: 10,
        title: '21 Lessons for the 21st Century',
        author: 'Yuval Noah Harari ',
        price: 19.98,
        image: image_10,
        description:
          "Yuval Noah Harari's 21 Lessons for the 21st Century is a probing and visionary investigation into today's most urgent issues as we move into the uncharted territory of the future. As technology advances faster than our understanding of it, hacking becomes a tactic of war, and the world feels more polarized than ever, Harari addresses the challenge of navigating life in the face of constant and disorienting change and raises the important questions we need to ask ourselves in order to survive.",
        publicationDate: 'September 9, 2018',
        language: 'english',
        category: 'social-sciences',
        bestsellers: false,
        series: null,
      },
      {
        id: 11,
        title:
          'Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
        author: 'Robert T. Kiyosaki',
        price: 11.81,
        description:
          "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his 'rich dad' — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
        image: image_11,
        publicationDate: 'April 11, 2017',
        language: 'english',
        category: 'social-sciences',
        bestsellers: false,
        series: null,
      },

      {
        id: 12,
        title: 'The stranger',
        author: 'Albert Camus',
        price: 15.04,
        description:
          "The Stranger is a 1942 novella by French author Albert Camus. Its theme and outlook are often cited as examples of Camus' philosophy, absurdism, coupled with existentialism; though Camus personally rejected the latter label.",
        image: image_12,
        publicationDate: 'Dec 1, 1971',
        language: 'english',
        category: 'literature',
        bestsellers: false,
        series: null,
      },

      {
        id: 13,
        title: '目送',
        author: '龍應台',
        price: 11.99,
        description:
          '《目送》的七十四篇散文，寫父親的逝、母親的老、兒子的離、朋友的牽掛、兄弟的攜手共行，寫失敗和脆弱、失落和放手，寫纏綿不捨和絕然的虛無。她寫盡了幽微，如燭光冷照山壁。',
        image: image_13,
        publicationDate: 'June 10, 2008',
        language: 'chinese',
        category: 'literature',
        bestsellers: false,
        series: null,
      },

      {
        id: 14,
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        price: 15.99,
        description:
          'Few stories are as widely read and as universally cherished by children and adults alike as The Little Prince, presented here in a stunning new translation with carefully restored artwork. The definitive edition of a worldwide classic, it will capture the hearts of readers of all ages.',
        image: image_14,
        publicationDate: 'May 15, 2000',
        language: 'english',
        category: 'comic-book',
        bestsellers: true,
        series: null,
      },
      {
        id: 15,
        title: '鋼の錬金術師 20th ANNIVERSARY BOOK',
        author: '荒川弘',
        price: 29.98,
        description:
          '《鋼之鍊金術師》敘述12歲就考上國家鍊金術師的愛德華，與弟弟阿爾馮斯兩人為了讓死去的母親復活而使用鍊金術「人體鍊成」，但是鍊金失敗使愛德華失去了左腳，讓阿爾馮斯失去了肉體。於是愛德華用自己的右手作為鍊金的代價，讓阿爾馮斯的魂魄成功的附在盔甲上。為了取回原有的一切，必須讓法力增強才行，於是他們踏上了尋找能夠增強能力的”賢者之石”的旅程...',
        image: image_15,
        publicationDate: 'November 16, 2021',
        language: 'chinese',
        category: 'comic-book',
        bestsellers: false,
        series: null,
      },
      {
        id: 16,
        title: 'Diary of a wimpy kid',
        author: 'Jeff Kinney',
        price: 9.48,
        description:
          'Author/illustrator Jeff Kinney recalls the growing pains of school life and introduces a new kind of hero who epitomizes the challenges of being a kid. As Greg says in his diary, “Just don’t expect me to be all ‘Dear Diary’ this and ‘Dear Diary’ that.” Luckily for us, what Greg Heffley says he won’t do and what he actually does are two very different things.',
        image: image_16,
        publicationDate: 'April 1, 2007',
        language: 'english',
        category: 'comic-book',
        bestsellers: false,
        series: null,
      },

      {
        id: 17,
        title: "Harry Potter and the Philosopher's Stone",
        author: 'J.K. Rowling',
        description: '',
        price: 25.99,
        image: image_17,
        publicationDate: 'June 26, 1997',
        language: 'english',
        category: 'literature',
        bestsellers: false,
        series: 'harry-potter',
        label: 'Book 1 of 7: Harry Potter',
      },

      {
        id: 18,
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        price: 25.99,
        description: '',
        image: image_18,
        publicationDate: 'July 2, 1998',
        language: 'english',
        category: 'literature',
        bestsellers: false,
        series: 'harry-potter',
        label: 'Book 2 of 7: Harry Potter',
      },

      {
        id: 19,
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K. Rowling',
        price: 25.99,
        description: '',
        image: image_19,
        publicationDate: 'July 8, 1999',
        language: 'english',
        category: 'literature',
        bestsellers: false,
        series: 'harry-potter',
        label: 'Book 3 of 7: Harry Potter',
      },

      {
        id: 20,
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        price: 25.99,
        description: '',
        image: image_20,
        publicationDate: 'July 8, 2000',
        language: 'english',
        category: 'literature',
        bestsellers: false,
        series: 'harry-potter',
        label: 'Book 4 of 7: Harry Potter',
      },

      {
        id: 21,
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
        price: 25.99,
        description: '',
        image: image_21,
        publicationDate: 'June 21, 2003',
        language: 'english',
        category: 'literature',
        bestsellers: false,
        series: 'harry-potter',
        label: 'Book 5 of 7: Harry Potter',
      },
      {
        id: 22,
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J.K. Rowling',
        price: 25.99,
        description: '',
        image: image_22,
        publicationDate: 'July 16, 2005',
        language: 'english',
        category: 'literature',
        bestsellers: false,
        series: 'harry-potter',
        label: 'Book 6 of 7: Harry Potter',
      },

      {
        id: 23,
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J.K. Rowling',
        price: 25.99,
        description: '',
        image: image_23,
        publicationDate: 'July 21, 2007',
        language: 'english',
        category: 'literature',
        bestsellers: false,
        series: 'harry-potter',
        label: 'Book 7 of 7: Harry Potter',
      },
      {
        id: 24,
        title: '神鵰俠侶',
        author: '金庸',
        price: 27.99,
        description:
          '《神鵰俠侶》在金庸作品之中，有一個十分獨特的地位，那就是金庸的小說之中，固然每一部、每一篇都在寫男女之情，但是卻沒有一部寫得像《神鵰俠侶》那樣錯綜複雜、那樣淋漓盡致、那樣透徹入微、那樣感人肺腑、那樣全面、那樣深入。以楊過、小龍女的感情為中心，引出其他人物在情海的狂波巨瀾之中翻滾掙扎、爭鬥糾纏的經過，幾乎已經可以概括了世上所有男女間各種形態的情愛。',
        image: image_24,
        publicationDate: 'January 1, 1959',
        language: 'chinese',
        category: 'literature',
        bestsellers: false,
        series: 'jin-yong',
      },
      {
        id: 25,
        title: '射鵰英雄傳',
        author: '金庸',
        price: 32.99,
        description:
          '《射鵰》最成功之處，是在人物的創造。《射鵰》的故事，甚至可以說是平舖直敘的，所有精采的部分，全來自所創造出來的、活龍活現、無時無刻不在讀者眼前跳躍的人物，如眾所周知的郭靖、黃蓉。 射鵰》最成功之處，是在人物的創造。《射鵰》的故事，甚至可以說是平舖直敘的，所有精采的部分，全來自所創造出來的、活龍活現、無時無刻不在讀者眼前跳躍的人物，如眾所周知的郭靖、黃蓉。《射鵰》在金庸的作品中，流傳最廣，最易為讀者接受，也在於這一點。',
        image: image_25,
        publicationDate: 'January 1, 1957',
        language: 'chinese',
        category: 'literature',
        bestsellers: false,
        series: 'jin-yong',
      },

      {
        id: 26,
        title: '天龍八部',
        author: '金庸',
        price: 23.99,
        description: '',
        image: image_26,
        publicationDate: 'January 1, 1963',
        language: 'chinese',
        category: 'literature',
        bestsellers: false,
        series: 'jin-yong',
      },

      {
        id: 27,
        title: '倚天屠龍記',
        author: '金庸',
        price: 22.99,
        description: '',
        image: image_27,
        publicationDate: 'January 1, 1961',
        language: 'chinese',
        category: 'literature',
        bestsellers: false,
        series: 'jin-yong',
      },

      {
        id: 28,
        title: '笑傲江湖',
        author: '金庸',
        price: 23.99,
        description: '',
        image: image_28,
        publicationDate: 'January 1, 1967',
        language: 'chinese',
        category: 'literature',
        bestsellers: false,
        series: 'jin-yong',
      },
    ],
  },
]
