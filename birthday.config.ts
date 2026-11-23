/** Edit this file to personalize the complete experience. Paths in /public start with /. */
export const birthdayConfig = {
  recipientName: "Favour",
  nickname: "my love",
  relationship: "someone very special",
  mainHeadline: ["Happy", "birthday,"], // The name is added on the final line.
  personalMessage: "You bring a very specific kind of sunshine into ordinary days. Today, the sunshine is all yours.",
  introLines: ["Some days are ordinary…", "But today is different.", "Because today, the world celebrates someone extraordinary."],
  reasons: [
    "You are beautiful, and not in a way that tries too hard. It's in your smile, your eyes, the way you carry yourself without even noticing. Some days I just look at you and wonder how I got this lucky.",
    "You love so deeply and so sincerely, and you're sexy without even trying. Your touch, your voice, that look you give when you know exactly what you're doing. You are a beautiful mix of tenderness and temptation, and I'm completely under your spell.",
    "Your laughter is a little piece of magic, and one of my favourite sounds.",
    "I admire your strength. Despite how fragile you are, you are strong within.",
    "Being in your presence is the second best thing ever. The first is God's presence.",
    "Life is more beautiful because you are in it."
  ],
  facts: [
    "I love how calm and gentle you are. You have this soft side to you that I really like. You’re not someone who always needs to make noise to be noticed, and there’s something about your calmness that I find really attractive.",
    "Now, your stubbornness! 😂 You can be so stubborn sometimes, and I’m sure you know it. Once you’ve made up your mind about something, good luck trying to change it. But honestly, it’s part of your charm, and I wouldn’t want you any other way.",
    "You’re such a beautiful woman. I mean, that’s pretty obvious, but I also love the little things about you. Your smile, your expressions, the way you carry yourself. You really are a beautiful sight, and I hope you never forget that.",
    "I love how playful you can be. You have this fun side that comes out, and of course, you and your dancing! 😂 I love that you enjoy yourself and don’t always take life too seriously. There’s a lovely energy about that.",
    "I love how smart you are. You’re thoughtful, you think things through, and I appreciate that there’s always a mind behind that pretty face. I enjoy that side of you, and I hope you never underestimate how intelligent you are.",
    "I know you have a very generous and selfless side to you. You're someone who genuinely cares about other people and doesn't always put yourself first. I may not have seen every expression of that side of you, but I recognise it in your nature, and it's something I really admire about you. I just hope you remember to show yourself the same kindness and consideration you so freely give to others.",
    "I love how much you value your family. Especially your brothers. You really don’t joke with the boys! 😂 It’s lovely to see how much they mean to you and how protective and connected you are to them. Family clearly means a lot to you.",
    "Being the only girl among three brothers must be an interesting experience. I can only imagine what growing up in that house was like! But I think it has helped shape a very special part of who you are, and I love the bond you share with your brothers.",
    "Finally, you’re the first child. I think you’re doing a pretty good job of being the firstborn, honestly. I know it comes with its own responsibilities and expectations, but you seem to handle your place in the family really well. You should give yourself some credit for that. I’m proud of the woman you are."
  ],
  letter: {
    salutation: "Happy Birthday, My Love ❤️",
    paragraphs: [
      "Another year around the sun, and today I get to celebrate you. I hope you take a moment to appreciate how far you’ve come, all the things you’ve overcome, the lessons you’ve learnt and the person you’re becoming. Sometimes we’re so busy figuring out the next chapter that we forget to appreciate how much we’ve already grown. Today, I hope you do just that. Be proud of yourself, baby.",
      "I hope this new year brings you opportunities that excite you, experiences that broaden your world and moments that remind you just how beautiful life can be. I wish you the courage to pursue the things you sometimes only think about, the freedom to change your mind when you need to and the confidence to never settle for less than what makes you happy. I hope you surprise yourself with what you accomplish this year.",
      "I also hope you make time for the things that have nothing to do with responsibilities or expectations. Take that trip, wear that outfit, dance to your favourite music, laugh until your stomach hurts and enjoy the little pleasures that make life worth living. You don’t have to have everything figured out to enjoy where you are right now.",
      "I’m happy that our paths crossed, and I look forward to all the things we are yet to experience together. We still have places to go, stories to create, arguments to laugh about later and plenty of ordinary days to turn into special memories. I hope we continue to learn each other, make room for each other’s differences and enjoy this journey together.",
      "Above all, my wish for you is that this next chapter is kind to you. May you have peace of mind, good health, genuine happiness and reasons to wake up excited about the day ahead. May the things you desire find their way to you, and may you always have the strength to create the life you dream of.",
      "Happy Birthday, my beautiful girl. Enjoy your day. You deserve all the good things life has to offer."
    ],
    signoff: "I love you. ❤️"
  },
  video: {
    src: "/video/birthday-video.mp4", // Portrait video. Put the file in /public/video.
    poster: "", // Optional still image shown before play, e.g. "/images/video-poster.jpg".
    caption: "I could not let this day pass without a little moment with just you in it. Take a look at yourself, and see what I see."
  },
  surpriseMessage: "If I had to choose again, in every lifetime, I would still choose you. ♥",
  theme: { ivory: "#fff8e9", plum: "#362335", coral: "#f55b59", gold: "#ffdc72", blush: "#f8c4bb" },
  sections: { facts: true, reasons: true, letter: true, video: true, fireworks: true, cake: true, gift: true }
} as const;
