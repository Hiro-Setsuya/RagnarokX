var classes = [
  {
    name: "Merchant",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1600.0b54c53f.png",
    description:
      "A versatile trader class focused on crafting, vending and economy support. Can switch between tanky, support and damage roles using cart and trade skills.",
  },
  {
    name: "Blacksmith",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1610.c4137efb.png",
    description:
      "Heavy physical attacker and weapon specialist. Excels at forging gear, improving weapons and delivering sustained melee damage.",
  },
  {
    name: "Whitesmith",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1611.9738b288.png",
    description:
      "High-damage melee craftsman with strong single-target skills. Combines forging expertise with powerful attack boosts and criticals.",
  },
  {
    name: "Mechanic",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1612.26ec9c12.png",
    description:
      "Tech-based ranged fighter using firearms, turrets and gadgets. Offers sustained single-target DPS and utility from mechanical skills.",
  },

  {
    name: "Alchemist",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1620.3385176d.png",
    description:
      "Support and hybrid caster that uses potions, elemental attacks and homunculi. Useful for crafting, field support and flexible combat roles.",
  },
  {
    name: "Creator",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1621.204e6591.png",
    description:
      "Advanced synthesis specialist with stronger homunculus control and destructive alchemy. Blends AoE magic with pet-based support.",
  },
  {
    name: "Genetic",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1622.11bf6be2.png",
    description:
      "Experimental alchemist combining genetics and homunculi. Offers unique debuffs, self-buffs and hybrid DPS capabilities.",
  },

  {
    name: "Mage",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1300.9805de9d.png",
    description:
      "Elemental caster specializing in basic AoE and crowd control. Good for clearing groups and supporting later advanced magic classes.",
  },
  {
    name: "Wizard",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1310.4effabd2.png",
    description:
      "Powerful AoE nuker with elemental mastery and strong crowd control. Excels at map-wide damage and burst spells.",
  },
  {
    name: "High Wizard",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1311.31c92cb2.png",
    description:
      "High-tier spellcaster with enhanced elemental combos and huge burst potential. Balances wide-area destruction with strategic mana use.",
  },
  {
    name: "Warlock",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1312.7be72827.png",
    description:
      "Versatile magic user that blends offensive spells with debuffs and utility. Known for unique magic combos and flexible playstyles.",
  },

  {
    name: "Acolyte",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1200.42d04516.png",
    description:
      "Basic healer and support class focused on recovery and simple buffs. Prepares players for advanced priest roles.",
  },
  {
    name: "Priest",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1210.5028a760.png",
    description:
      "Primary party healer and buffer with resurrection and defensive spells. Essential in group play for sustain and support.",
  },
  {
    name: "High Priest",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1211.f2a16075.png",
    description:
      "Advanced healer with powerful party-wide support and utility. Provides strong healing, cleansing and protective buffs.",
  },
  {
    name: "Archbishop",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1212.0031b6da.png",
    description:
      "Hybrid support that mixes healing with offensive holy magic and crowd control. Great for both PvE and PvP support roles.",
  },

  {
    name: "Monk",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1220.8d0d3f26.png",
    description:
      "Fist-based melee fighter with combo skills and strong self-buffs. Focuses on burst melee damage and spiritual techniques.",
  },
  {
    name: "Champion",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1221.c9fc5207.png",
    description:
      "High-tier unarmed combatant with devastating combos and crowd control. Excels at single-target and close-range burst damage.",
  },
  {
    name: "Shura",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1222.f8c198a3.png",
    description:
      "Martial arts master focused on high-damage combos and mobility. Built for aggressive melee play and quick takedowns.",
  },

  {
    name: "Swordsman",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1100.5729c024.png",
    description:
      "Balanced frontline fighter with a mix of offense and defense. Serves as the base for multiple advanced warrior paths.",
  },
  {
    name: "Knight",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1110.a3846e42.png",
    description:
      "Tanky melee class with strong defense and charge attacks. Good for holding aggro and frontline control.",
  },
  {
    name: "Lord Knight",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1111.4545cdc9.png",
    description:
      "Heavy-hitting warrior with powerful physical skills and battlefield presence. Excels at sustained melee damage and leading charges.",
  },
  {
    name: "Rune Knight",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1112.faf0c0ed.png",
    description:
      "Majestic mounted fighter who combines melee power with rune magic. Offers burst damage, mobility and unique transformations.",
  },

  {
    name: "Crusader",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1120.02be0e3c.png",
    description:
      "Shield-focused holy fighter with defensive auras and party protection. Strong at reducing incoming damage and supporting allies.",
  },
  {
    name: "Paladin",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1121.2ca462aa.png",
    description:
      "Defensive guardian who specializes in team protection and holy skills. Excels at mitigation and frontline control.",
  },
  {
    name: "Royal Guard",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1122.31f10a88.png",
    description:
      "Advanced tank with strong shields, team buffs and crowd control. Built to anchor parties and control engagements.",
  },

  {
    name: "Archer",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1500.9263a4bf.png",
    description:
      "Basic ranged physical class using bows and traps. Good for consistent ranged damage and early-game kiting.",
  },
  {
    name: "Hunter",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1510.466d6471.png",
    description:
      "Trapper and marksmanship specialist using pets and traps. Excels at single-target damage and map control.",
  },
  {
    name: "Sniper",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1511.751640fa.png",
    description:
      "Precision ranged DPS with lethal criticals and long-range dominance. Built for high single-target burst and picking off foes.",
  },
  {
    name: "Ranger",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1512.c67401e4.png",
    description:
      "Nature-infused archer using traps, pets and elemental shots. Flexible in both AoE and single-target hunting.",
  },

  {
    name: "Bard",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1520.25036faf.png",
    description:
      "Music-based support that buffs allies and debuffs enemies. Valuable in parties for sustained utility and control.",
  },
  {
    name: "Clown",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1521.001ae687.png",
    description:
      "Offensive support that uses songs to boost damage and provide crowd control. Great for mixed DPS/support roles.",
  },
  {
    name: "Minstrel",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1522.d4710360.png",
    description:
      "Advanced musical supporter with wide-area buffs and enhanced party utility. Optimized for group play and coordination.",
  },

  {
    name: "Dancer",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1530.55c9843b.png",
    description:
      "Agile support that uses dances to buff allies and evade attacks. Strong at mobility and team utility.",
  },
  {
    name: "Gypsy",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1531.fa962c19.png",
    description:
      "Offensive-magic dancer who combines debuffs and party-wide effects. Useful for both damage amplification and control.",
  },
  {
    name: "Wanderer",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1532.5d1858e2.png",
    description:
      "Versatile endgame dancer with enhanced buffs and offensive options. Balances mobility, support and damage.",
  },

  {
    name: "Thief",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1400.70d628b9.png",
    description:
      "Quick and evasive melee class that focuses on speed and critical hits. Good for hit-and-run tactics and PvP roaming.",
  },
  {
    name: "Assassin",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1410.ef331b75.png",
    description:
      "Stealthy dagger specialist with high burst damage and criticals. Excels at isolating and eliminating single targets.",
  },
  {
    name: "Assassin Cross",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1411.9b1b2094.png",
    description:
      "Advanced assassin built for lethal bursts and dual-wield combos. Masters of stealth, evasion and sudden strikes.",
  },
  {
    name: "Guillotine Cross",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1412.55c26042.png",
    description:
      "Elite assassin with deadly finishers and sustain options. Focuses on combo execution and high single-target DPS.",
  },

  {
    name: "Rogue",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1420.51d3d56e.png",
    description:
      "Trickster class using stealth, traps and stealing mechanics. Flexible in both PvE farming and disruptive PvP play.",
  },
  {
    name: "Stalker",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1421.1df05305.png",
    description:
      "Shadowy debuffer and controller who excels at interrupting and disabling enemies. Combines stealth with crowd disruption.",
  },
  {
    name: "Shadow Chaser",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1422.2e4048e3.png",
    description:
      "Hybrid stealth support that uses illusions and traps to control the battlefield. Great for hit-and-run and team utility.",
  },

  {
    name: "Novice",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1010.ac68de74.png",
    description:
      "Starter class with basic skills and straightforward combat. Serves as the gateway to all advanced job paths.",
  },
  {
    name: "Expanded Super Novice",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1011.6301d0d4.png",
    description:
      "Beginner-friendly hybrid with access to a broad set of skills. Designed for swappable roles and flexible leveling.",
  },
  {
    name: "Hyper Novice",
    image:
      "https://p16-marketing-sg.bytedgame.com/obj/g-marketing-assets-sg/static/media/job1013.9927c6f4.png",
    description:
      "Enhanced novice class with multiple advanced skill options. Offers surprising versatility and unique solo potential.",
  },
];
