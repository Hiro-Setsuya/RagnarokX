var classes = [
  {
    name: "Merchant",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1600.0b54c53f.png",
    description: "Description for Merchant.",
    tags: ["physical", "melee"],
  },
  {
    name: "Blacksmith",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1610.c4137efb.png",
    description: "Description for Blacksmith.",
    tags: ["physical", "melee", "dps"],
  },
  {
    name: "Whitesmith",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1611.9738b288.png",
    description: "Description for Whitesmith.",
    tags: ["physical", "melee", "dps"],
  },
  {
    name: "Mechanic",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1612.26ec9c12.png",
    description: "Description for Mechanic.",
    tags: ["physical", "melee", "dps"],
  },

  {
    name: "Alchemist",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1620.3385176d.png",
    description: "Description for Alchemist.",
    tags: ["magic", "support"],
  },
  {
    name: "Creator",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1621.204e6591.png",
    description: "Description for Creator.",
    tags: ["magic", "dps", "support"],
  },
  {
    name: "Genetic",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1622.11bf6be2.png",
    description: "Description for Genetic.",
    tags: ["magic", "dps", "support"],
  },

  {
    name: "Mage",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1300.9805de9d.png",
    description: "Description for Mage.",
    tags: ["magic", "dps"],
  },
  {
    name: "Wizard",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1310.4effabd2.png",
    description: "Description for Wizard.",
    tags: ["magic", "dps"],
  },
  {
    name: "High Wizard",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1311.31c92cb2.png",
    description: "Description for High Wizard.",
    tags: ["magic", "dps"],
  },
  {
    name: "Warlock",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1312.7be72827.png",
    description: "Description for Warlock.",
    tags: ["magic", "dps"],
  },

  {
    name: "Acolyte",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1200.42d04516.png",
    description: "Description for Acolyte.",
    tags: ["heal", "support"],
  },
  {
    name: "Priest",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1210.5028a760.png",
    description: "Description for Priest.",
    tags: ["heal", "support"],
  },
  {
    name: "High Priest",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1211.f2a16075.png",
    description: "Description for High Priest.",
    tags: ["heal", "support"],
  },
  {
    name: "Archbishop",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1212.0031b6da.png",
    description: "Description for Archbishop.",
    tags: ["heal", "support"],
  },

  {
    name: "Monk",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1220.8d0d3f26.png",
    description: "Description for Monk.",
    tags: ["melee", "dps"],
  },
  {
    name: "Champion",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1221.c9fc5207.png",
    description: "Description for Champion.",
    tags: ["melee", "dps"],
  },
  {
    name: "Shura",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1222.f8c198a3.png",
    description: "Description for Shura.",
    tags: ["melee", "dps"],
  },

  {
    name: "Swordsman",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1100.5729c024.png",
    description: "Description for Swordsman.",
    tags: ["physical", "melee"],
  },
  {
    name: "Knight",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1110.a3846e42.png",
    description: "Description for Knight.",
    tags: ["physical", "melee", "tank"],
  },
  {
    name: "Lord Knight",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1111.4545cdc9.png",
    description: "Description for Lord Knight.",
    tags: ["physical", "melee", "tank"],
  },
  {
    name: "Rune Knight",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1112.faf0c0ed.png",
    description: "Description for Rune Knight.",
    tags: ["physical", "melee", "tank"],
  },

  {
    name: "Crusader",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1120.02be0e3c.png",
    description: "Description for Crusader.",
    tags: ["physical", "tank"],
  },
  {
    name: "Paladin",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1121.2ca462aa.png",
    description: "Description for Paladin.",
    tags: ["physical", "tank"],
  },
  {
    name: "Royal Guard",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1122.31f10a88.png",
    description: "Description for Royal Guard.",
    tags: ["physical", "tank"],
  },

  {
    name: "Archer",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1500.9263a4bf.png",
    description: "Description for Archer.",
    tags: ["dps", "ranged", "physical"],
  },
  {
    name: "Hunter",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1510.466d6471.png",
    description: "Description for Hunter.",
    tags: ["dps", "ranged", "physical"],
  },
  {
    name: "Sniper",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1511.751640fa.png",
    description: "Description for Sniper.",
    tags: ["dps", "ranged", "physical"],
  },
  {
    name: "Ranger",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1512.c67401e4.png",
    description: "Description for Ranger.",
    tags: ["dps", "ranged", "physical"],
  },

  {
    name: "Bard",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1520.25036faf.png",
    description: "Description for Bard.",
    tags: ["support", "ranged", "magic"],
  },
  {
    name: "Clown",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1521.001ae687.png",
    description: "Description for Clown.",
    tags: ["support", "ranged"],
  },
  {
    name: "Minstrel",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1522.d4710360.png",
    description: "Description for Minstrel.",
    tags: ["support", "ranged"],
  },

  {
    name: "Dancer",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1530.55c9843b.png",
    description: "Description for Dancer.",
    tags: ["support", "ranged"],
  },
  {
    name: "Gypsy",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1531.fa962c19.png",
    description: "Description for Gypsy.",
    tags: ["support", "ranged"],
  },
  {
    name: "Wanderer",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1532.5d1858e2.png",
    description: "Description for Wanderer.",
    tags: ["support", "ranged"],
  },

  {
    name: "Thief",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1400.70d628b9.png",
    description: "Description for Thief.",
    tags: ["melee", "dps"],
  },
  {
    name: "Assassin",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1410.ef331b75.png",
    description: "Description for Assassin.",
    tags: ["melee", "dps"],
  },
  {
    name: "Assassin Cross",
    image:
      " https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1411.9b1b2094.png",
    description: "Description for Assassin Cross.",
    tags: ["melee", "dps"],
  },
  {
    name: "Guillotine Cross",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1412.55c26042.png",
    description: "Description for Guillotine Cross.",
    tags: ["melee", "dps"],
  },

  {
    name: "Rogue",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1420.51d3d56e.png",
    description: "Description for Rogue.",
    tags: ["melee", "dps"],
  },
  {
    name: "Stalker",
    image:
      " https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1421.1df05305.png",
    description: "Description for Stalker.",
    tags: ["melee", "dps"],
  },
  {
    name: "Shadow Chaser",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1422.2e4048e3.png",
    description: "Description for Shadow Chaser.",
    tags: ["melee", "dps"],
  },

  {
    name: "Novice",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1010.ac68de74.png",
    description: "Description for Novice.",
    tags: ["starter", "balanced"],
  },
  {
    name: "Expanded Super Novice",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1011.6301d0d4.png",
    description: "Description for Expanded Super Novice.",
    tags: ["versatile"],
  },
  {
    name: "Hyper Novice",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1013.9927c6f4.png",
    description: "Description for Hyper Novice.",
    tags: ["versatile"],
  },
];
