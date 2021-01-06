var weaponTypes = ["Club	1	sp	1d4	Bludgeoning	2 lbs	Simple Melee Weapon	5ft.	Light",
                   "Dagger	2	gp	1d4	Piercing	1 lbs	Simple Melee Weapon	5 ft.	Finesse, light, thrown (range 20/60)",
                   "Great Club	2	sp	1d8	Bludgeoning	10 lbs	Simple Melee Weapon	5ft.	Two-handed",
                   "Handaxe	5	gp	1d6	Slashing	2 lbs	Simple Melee Weapon	5 ft.	Light, thrown (range 20/60)",
                   "Javelin	5	sp	1d6	Piercing	2 lbs	Simple Melee Weapon	5 ft.	Thrown (range 30/120)",
                   "Light Hammer	2	gp	1d4	Bludgeoning	2 lbs	Simple Melee Weapon	5 ft.	Light, thrown (range 20/60)",
                   "Mace	5	gp	1d6	Bludgeoning	4 lbs	Simple Melee Weapon	5 ft.	",
                   "Quarterstaff	2	sp	1d6	Bludgeoning	4 lbs	Simple Melee Weapon	5 ft.	Versatile (1d8)",
                   "Sickle	1	gp	1d4	Slashing	2 lbs	Simple Melee Weapon	5 ft.	Light",
                   "Spear	1	gp	1d6	Piercing	3 lbs	Simple Melee Weapon	5ft.	Thrown (range 20/60), versatile (1d8)",
                   "Light Crossbow	25	gp	1d8	Piercing	5 lbs	Simple Ranged Weapon	80/320 ft	Ammunition (crossbow bolts), loading, two-handed",
                   "Dart	5	cp	1d4	Piercing	1/4 lbs	Simple Ranged Weapon	20/60 ft.	Finesse, thrown",
                   "Shortbow	25	gp	1d6	Piercing	2 lbs	Simple Ranged Weapon	80/320 ft.	Ammunition (arrows), two-handed",
                   "Sling	1	sp	1d4	Bludgeoning	-	Simple Ranged Weapon	30/120 ft.	Ammunition (small objects)",
                   "Battleaxe	10	gp	1d8	Slashing	4 lbs	Martial Melee Weapon	5 ft.	Versatile (1d10)",
                   "Flail	10	gp	1d8	Bludgeoning	2 lbs	Martial Melee Weapon	5 ft.	",
                   "Glaive	20	gp	1d10	Slashing	6 lbs	Martial Melee Weapon	10 ft.	Heavy, reach, two-handed",
                   "Greataxe	30	gp	1d12	Slashing	7 lbs	Martial Melee Weapon	5 ft.	Heavy, two-handed",
                   "Greatsword	50	gp	2d6	Slashing	6 lbs	Martial Melee Weapon	5 ft.	Heavy, two-handed",
                   "Halberd	20	gp	1d10	Slashing	6 lbs	Martial Melee Weapon	10 ft.	Heavy, reach, two-handed",
                   "Lance	10	gp	1d12	Piercing	6 lbs	Martial Melee Weapon	10 ft.	Reach, You have disadvantage when you use a lance to Attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren’t mounted",
                   "Longsword	15	gp	1d8	Slashing	3 lbs	Martial Melee Weapon	5 ft.	Versatile (1d10)",
                   "Maul	10	gp	2d6	Bludgeoning	10 lbs	Martial Melee Weapon	5 ft.	Heavy, two-handed",
                   "Morningstar	15	gp	1d8	Piercing	4 lbs	Martial Melee Weapon	5 ft.	",
                   "Pike	5	gp	1d10	Piercing	18 lbs	Martial Melee Weapon	10 ft.	Heavy, reach, two-handed",
                   "Rapier	25	gp	1d8	Piercing	2 lbs	Martial Melee Weapon	5 ft.	Finesse",
                   "Scimitar	25	gp	1d6	Slashing	3 lbs	Martial Melee Weapon	5 ft.	Finesse, light",
                   "Shortsword	10	gp	1d6	Piercing	2 lbs	Martial Melee Weapon	5 ft.	Finesse, light",
                   "Trident	5	gp	1d6	Piercing	4 lbs	Martial Melee Weapon	5 ft.	Thrown (range 20/60), versatile (1d8)",
                   "War Pick	5	gp	1d8	Piercing	2 lbs	Martial Melee Weapon	5 ft.	",
                   "Warhammer	15	gp	1d8	Bludgeoning	2 lbs	Martial Melee Weapon	5 ft.	Versatile (1d10)",
                   "Whip	2	gp	1d4	Slashing	3 lbs	Martial Melee Weapon	10 ft.	Finesse, reach",
                   "Blowgun	10	gp	1	Piercing	1 lbs	Martial Ranged Weapon	25/100 ft.	Ammunition (blowdarts), loading",
                   "Hand Crossbow	75	gp	1d6	Piercing	3 lbs	Martial Ranged Weapon	30/120 ft.	Ammunition (crossbow bolts), light, loading",
                   "Heavy Crossbow	50	gp	1d10	Piercing	18 lbs	Martial Ranged Weapon	100/400 ft.	Ammunition (crossbow bolts), heavy, loading, two-handed",
                   "Longbow	50	gp	1d8	Piercing	2 lbs	Martial Ranged Weapon	150/600	Ammunition (arrows), heavy, two-handed",
                   "Net	1	gp	-	-	3 lbs	Martial Ranged Weapon	5/15 ft.	Thrown, A Large or smaller creature hit by a net is Restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, Bonus Action, or reaction to Attack with a net, you can make only one Attack regardless of the number of attacks you can normally make.",
                   "Flintlock Pistol	50	gp	1d10	Piercing	1 lbs	Martial Ranged Weapon	60/120 ft.	Smoothbore penalty (-5 to hit), ammunition (lead shot), loading",
                   "Flintlock Rifle	100	gp	3d4	Piercing	3 lbs	Martial Ranged Weapon	100/400 ft.	Smoothbore penalty (-2 to hit), ammunition (lead shot), loading",
                   "Blunder Bus	75	gp	3d4	Piercing	2 lbs	Martial Ranged Weapon	15 ft.	Smoothbore penalty (-7 to hit), ammunition (small objects), loading, damages all creatures in a 15 ft. diameter cone in front of the user"
];

var enchantments =["Forceful	adds 1d6 force damage",
                   "Legendary	adds 5 to hit and damage rolls",
                   "Flight	Allows the wielder to fly up to 100ft per day at a speed of 50ft",
                   "Sentient (Coach)	The weapon is alive, and wants to train its wielder to be a real hero.",
                   "Bane (Aberrations)	Does +1 damage and +2 to aberrations.",
                   "Dexterity	adds 1 to wielder's dexterity (cannot exceed 20)",
                   "Performance	adds 1 to wielder's performance",
                   "Honed/Impressive	adds 3 to hit and damage rolls",
                   "Wisdom	adds 1 to wielder's wisdom (cannot exceed 20)",
                   "Perception	adds 1 to wielder's perception",
                   "Fleeing	This weapon does not like to be held, and will move away from anyone who attempts to pick it up.",
                   "Spell Diflect	The weapon can reflect one single target line attack spell per day.",
                   "Summoning	Allows the wielder to summon a random monster with a CR equal to half the user's level. The wielder and the monster roll constitution; if the summoner wins the creature is under thier control, otherwise the creature will attack the summoner.",
                   "Healing	Allows the wielder to cast Healing Word 1d4 times per day.",
                   "Medicine	adds 1 to wielder's medicine",
                   "Sorcery	Allows the wielder to cast level 1 sorcerer cantrips 1d6 times per day.",
                   "Sentient (Bashful)	The weapon is alive with an insulting personality. It will insult everyone around it.",
                   "Spell Attunement (Necrotic)	adds 1d4 to spell hit rolls and damage rolls for spells that deal necrotic damage.",
                   "Constitution	adds 1 to wileder's constitution (cannot exceed 20)",
                   "Light	This weapon weighs half as much as a normal weapon of its kind.",
                   "Invisibility	Allows the wielder to become invisible 1d4 times per day.",
                   "History	adds 1 to wielder's history",
                   "Spell Attunement (Cold)	adds 1d4 to spell hit rolls and damage rolls for spells that deal cold damage.",
                   "Accuracy	adds 1d4 to hit rolls",
                   "Echoing	adds 1d6 thunder damage",
                   "Disguised	This weapon appears to be an unthreatening object until it is drawn and ready for combat.",
                   "Spell Refinement	Increases the wielder's spell save DC by 1 and adds 1 to spell hit rolls and damage rolls.",
                   "Spell Polarity Switch	All spells cast by the wielder now deal damage of the opposing type: fireball deals cold damge, chilling touch does radiant damage etc.",
                   "Spell Amplification	Increases the wielder's spell save DC by 2 and adds 2 to spell hit rolls and damage rolls.",
                   "Spell Attunement (Poison)	adds 1d4 to spell hit rolls and damage rolls for spells that deal poison damage.",
                   "Sweeping (Melee Weapon)	Can attack multiple enemies within range with a single attack.",
                   "Intelligence	adds 1 to wielder's intelligence (cannot exceed 20)",
                   "Broken	The weapon is damaged beyond repair.",
                   "Piercing	Attacks affect up to three enemies standing in single file.",
                   "Spell Enhancement	Increases the wielder's spell save DC by 3 and adds 3 to spell hit rolls and damage rolls.",
                   "Charming	adds 1 to persuasion and performance rolls",
                   "Acidic	adds 1d6 acid damage",
                   "Spell Attunement (Lightning)	adds 1d4 to spell hit rolls and damage rolls for spells that deal lightning damage.",
                   "Athletics	adds 1 to wielder's athletics",
                   "Wizardry	Allows the wielder to cast level 1 wizard cantrips 1d6 times per day.",
                   "Flaming	adds 1d6 fire damage",
                   "Conjuring	Allows the wielder to create minor illusions 1d6 times per day.",
                   "Warning	The weapon alerts the wielder to danger.",
                   "Arcana	adds 1 to wielder's arcana",
                   "Frozen	adds 1d6 cold damage",
                   "Spell Attunement (Psychic)	adds 1d4 to spell hit rolls and damage rolls for spells that deal psychic damage.",
                   "Animal Handling	adds 1 to wielder's animal handling",
                   "Sleight of Hand	adds 1 to wielder's sleight of hand",
                   "Sentient (Dreary)	The weapon is alive with a depressing attitude that really brings down the atmosphere.",
                   "Bent	subtract 1d4 from hit rolls",
                   "Incredible/Amazing/Awe Inspiring/Awesome	adds 4 to hit and damage rolls",
                   "Heavy	This weapon weighs ten times as much as a normal weapon of its kind.",
                   "Spell Attunement (Thunder)	adds 1d4 to spell hit rolls and damage rolls for spells that deal thunder damage.",
                   "Returning	The weapon always returns to the person it is attuned to.",
                   "Sentient (Cheerful)	The weapon is alive with a bright and cheery personality that encourages the wielder.",
                   "Well Made	adds 1 to hit and damage rolls",
                   "Slumbering	Targets hit with this weapon must pass a DC 5 constitution save or fall asleep.",
                   "Dull/Rusty	subtract 1d4 from damage rolls.",
                   "Sentient (Boastful)	The weapon is alive and believes it is the single greatest object ever crafted, and loves to tell you all about it.",
                   "Ghostly	The weapon ignores physical barriers, reducing the target's AC to 10. The damage type for the weapon is changed to psychic.",
                   "Elemental	This weapon can be attuned to any element it is exposed to. Attuning the weapon will cause it to deal 1d6 of that damage type.",
                   "Sentient (Pacifist)	The weapon is alive, and doesn't want to hurt anyone.",
                   "Strength	adds 1 to wielder's strength (cannot exceed 20)",
                   "Anti-Magic	The wielder of this weapon is only affected by spells half as much, and any spell they cast is only half as affective.",
                   "Expertly Crafted	adds 2 to hit and damage rolls",
                   "Intimidation	adds 1 to wielder's intimidation",
                   "Spell Empowerment	Increases the wielder's spell save DC by 4 and adds 4 to spell hit rolls and damage rolls.",
                   "Electrified	adds 1d6 lightning damage",
                   "High Powered (Ranged Weapon)	The weapon's range is increased by 30ft.",
                   "Insight	adds 1 to wielder's insight",
                   "Withering	adds 1d6 necrotic damage",
                   "Acrobatics	adds 1 to wileder's acrobatics",
                   "Sharpness	adds 1d4 to damage rolls",
                   "Nature	adds 1 to wielder's nature",
                   "Radiant	adds 1d6 radiant damage",
                   "Sentient (Bloodthirsty)	The weapon is alive, and wants to kill.",
                   "Life Steal	adds 1d4 to damage rolls, and restores an equal amount of HP to the wielder",
                   "Spell Attunement (Radiant)	adds 1d4 to spell hit rolls and damage rolls for spells that deal radiant damage.",
                   "Spell Attunement (Force)	adds 1d4 to spell hit rolls and damage rolls for spells that deal force damage.",
                   "Essence Transfer	The wielder and the target both roll constitution; whoever rolls lower takes 1d6 damage, and the winner has that much HP restored.",
                   "Sentient (Motherly)	The weapon is alive, and treats the wielder like its child.",
                   "Religion	adds 1 to wielder's religion",
                   "Deception	adds 1 to wielder's deception",
                   "Entangled	This weapon is constantly getting hung up on things.",
                   "Investigation	adds 1 to wielder's investigation",
                   "Persuasion	adds 1 to wielder's persuasion",
                   "Spell Absorb	The weapon can absorb one single target damaging spell per day.",
                   "Fast	This weapon allows the wielder to make two quick strikes instead of one, and each quick strike gets a +5 to hit, but only does half the damage.",
                   "Spell Attunement (Fire)	adds 1d6 to spell hit rolls and damage rolls for spells that deal fire damage.",
                   "Shining	The weapon shines brightly, illuminating a 20ft radius around it.",
                   "Survival	adds 1 to wielder's survival",
                   "Magic Immunity	The wielder of this weapon is immune to any spell effects, but cannot cast any spells.",
                   "Glibe	adds 1 to persuasion, deception, and intimidation rolls",
                   "Boxer	This weapon allows the person who carries it to add their strength modifier to an unarmed strike twice.",
                   "Charisma	adds 1 to wielder's charisma (cannot exceed 20)",
                   "Spell Perfection	Increases the wielder's spell save DC by 5 and adds 5 to spell hit rolls and damage rolls.",
                   "Stealth	adds 1 to wielder's stealth",
                   "Momentum	If the wielder moves at least 20ft in the direction of their opponent before attacking with this weapon, add 1d8 to their damage roll.",
                   "Spell Attunement (Acid)	adds 1d4 to spell hit rolls and damage rolls for spells that deal acid damage.",
                   "Poisoned	adds 1d6 poison damage",
                   "Command Dead	Up to 3 targets killed by this weapon can be raised as zombies controlled by the wielder.",
                   "Sentient (Opera Singer)	This weapon is alive and loudly sings opera music every time it is drawn.",
                   "Command Elemental (Fire)	This weapon allows the user to cast command on fire elementals.",
                   "Curse of Binding (Lulaby)	This weapon can only be sheathed after the user sings it a lulaby.",
                   "Cursed Speech (Song)	While wielding this weapon the user sings while talking.",
                   "Command Elemental (Water)	This weapon allows the user to cast command on water elementals.",
                   "Command Elemental (Earth)	This weapon allows the user to cast command on earth elementals.",
                   "Command Elemental (Air)	This weapon allows the user to cast command on air elementals.",
                   "Cursed Speech (Baby Talk)	While wielding this weapon the user talks like a baby.",
                   "Cursed Speech (Silence)	While wielding this weapon the user cannot talk.",
                   "Curse of Binding (Bloodied)	This weapon can only be sheathed if it has drawn blood.",
                   "Curse of Binding (Self Inflicted Wounds)	This weapon can only be sheathed after doing harm to its user.",
                   "Unbreakable	This weapon cannot be broken by any ordinary circumstance.",
                   "Feeble	When the wielder of this weapon rolls a natural 1 on his or her attack roll, this weapon shatters.",
                   "Toy	This isn't actually a weapon, it is a squeeky toy shaped like a weapon! This weapon deals at most 1 damage to its target.",
                   "Clown	When the user takes up this weapon the DM rolls a d12 and the wielder rolls a d20; if the wielder rolls equal or higher than the DM the weapon works as usual; if the DM rolls higher the weapon turns to rubber and deals no damage. Sheathing and drawing the weapon initiates another roll.",
                   "Bane (Beasts/Animals)	Does +1 damage and +2 to beasts and animals.",
                   "Bane (Constructs)	Does +1 damage and +2 to constructs.",
                   "Bane (Elementals)	Does +1 damage and +2 to elementals.",
                   "Bane (Fey)	Does +1 damage and +2 to fey.",
                   "Bane (Giants)	Does +1 damage and +2 to giants.",
                   "Bane (Triton)	Does +1 damage and +2 to triton.",
                   "Bane (Dwarves)	Does +1 damage and +2 to dwarves.",
                   "Bane (Elves)	Does +1 damage and +2 to elves.",
                   "Bane (Goblinoids)	Does +1 damage and +2 to goblinoids.",
                   "Bane (Halflings)	Does +1 damage and +2 to halflings.",
                   "Bane (Humans)	Does +1 damage and +2 to humans.",
                   "Bane (Lizardfolk)	Does +1 damage and +2 to lizardfolk.",
                   "Bane (Orcs)	Does +1 damage and +2 to orcs.",
                   "Bane (Arakocra)	Does +1 damage and +2 to arakocra.",
                   "Bane (Tieflings)	Does +1 damage and +2 to tieflings.",
                   "Bane (Tabaxi)	Does +1 damage and +2 to tabaxi.",
                   "Bane (Gnomes)	Does +1 damage and +2 to gnomes.",
                   "Bane (Gnolls)	Does +1 damage and +2 to gnolls.",
                   "Bane (Fiends)	Does +1 damage and +2 to fiends.",
                   "Bane (Plants)	Does +1 damage and +2 to plants.",
                   "Bane (Undead)	Does +1 damage and +2 to undead.",
                   "Bane (Vermin)	Does +1 damage and +2 to vermin.",
                   "Bane (Oozes)	Does +1 damage and +2 to oozes.",
                   "Bane (Monsterous Humanoids)	Does +1 damage and +2 to monsterous humanoids.",
                   "Bane (Magical Beasts)	Does +1 damage and +2 to magical beasts.",
                   "  "
];

var materials =[{name:"", addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:1},
                {name:"Adamantium", addsDamage:true, damageDice:"1d4", damageType:"Force", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:3},
                {name:"Deadwood", addsDamage:true, damageDice:"1d4", damageType:"Necrotic", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:3},
                {name:"Duranium", addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"Spell Storing", inateEnchantment:"This weapon can have a spell stored inside of it as per the rules of the Ring of Spell Storing.", valueMultiplier:10},
                {name:"Dura Steele", addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"Spell Storing", inateEnchantment:"This weapon can have a spell stored inside of it as per the rules of the Ring of Spell Storing.", valueMultiplier:10},
                {name:"Katchin", addsDamage:true, damageDice:"1d4", damageType:"Poison", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:2},
                {name:"Iron Wood", addsDamage:true, damageDice:"1d4", damageType:"Poison", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:2},
                {name:"Iron Bark", addsDamage:true, damageDice:"1d4", damageType:"Poison", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:2},
                {name:"Mythril", addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"Light", inateEnchantment:"This weapon has the Light property or acts as a weapon one class size smaller. (dual wield longswords, wield greatsword with a shield, etc...)", valueMultiplier:4},
                {name:"Obsidian", addsDamage:true, damageDice:"1d4", damageType:"Fire", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:3},
                {name:"Black Glass", addsDamage:true, damageDice:"1d4", damageType:"Fire", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:3},
                {name:"Orichalcum", addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"Heavy", inateEnchantment:"Increase damage die by one class (d4 -> d6, d6 -> d8, etc...). Weapon gains the heavy property.", valueMultiplier:3},
                {name:"Permafrost", addsDamage:true, damageDice:"1d4", damageType:"Cold", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:3},
                {name:"Tritanium", addsDamage:true, damageDice:"1d4", damageType:"Cold", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:3},
                {name:"Thorium", addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"Anti-Magic", inateEnchantment:"Casts Dispel Magic on objects and creatures struck wih the weapon. Immune to magical effects such as Heat Metal, etc..", valueMultiplier:7},
                {name:"Elder Stone", addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"Anti-Magic", inateEnchantment:"Casts Dispel Magic on objects and creatures struck wih the weapon. Immune to magical effects such as Heat Metal, etc..", valueMultiplier:7},
                {name:"Wind Glass", addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"True Reflection", inateEnchantment:"Illusions do not pass through or reflect off of this weapon, making it easy to spot and see through them.", valueMultiplier:3},
                {name:"Cat Glass", addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"True Reflection", inateEnchantment:"Illusions do not pass through or reflect off of this weapon, making it easy to spot and see through them.", valueMultiplier:3},
                {name:"Sheer Sand", addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"True Reflection", inateEnchantment:"Illusions do not pass through or reflect off of this weapon, making it easy to spot and see through them.", valueMultiplier:3},
                {name:"Xithricite", addsDamage:true, damageDice:"1d4", damageType:"Psychic", hasInateEnchantment:true, inateEnchantmentName:"Sentient", inateEnchantment:"This weapon contains a random alien (Xith/ian) personality determined by rolling on the Xith personality table. Regardless of its personality the object harbors a hatred toward both aboleths and mindflayers.", valueMultiplier:5},
                {name:"Meteorite", addsDamage:true, damageDice:"1d4", damageType:"Psychic", hasInateEnchantment:true, inateEnchantmentName:"Sentient", inateEnchantment:"This weapon contains a random alien (Xith/ian) personality determined by rolling on the Xith personality table. Regardless of its personality the object harbors a hatred toward both aboleths and mindflayers.", valueMultiplier:5}
];

function newItem(){
  let weaponInfoID = Math.floor(Math.random() * (weaponTypes.length - 1));
  let materialInfoID = Math.floor(Math.random() * (materials.length - 1));
  let enchantmentInfoID = Math.floor(Math.random() * (enchantments.length - 1));
  let weapon = weaponTypes[weaponInfoID].split("\t");
  let material = materials[materialInfoID];
  let enchantment = enchantments[enchantmentInfoID].split("\t");
  document.getElementById("weaponName").innerHTML = (enchantment[0].length > 0 ? enchantment[0] + " " : "") + (material.name.length > 0 ? material.name + " " : "") + weapon[0];
  document.getElementById("weaponClass").innerHTML = weapon[6];
  document.getElementById("weaponDamage").innerHTML = weapon[3] + (material.addsDamage ? " + " + material.damageDice : "");
  document.getElementById("weaponDamageType").innerHTML = weapon[4] + (material.addsDamage ? ", " + material.damageType : "");
  document.getElementById("weaponRange").innerHTML = weapon[7];
  document.getElementById("weaponProperties").innerHTML = weapon[8];
  document.getElementById("weaponWeight").innerHTML = weapon[5];
  document.getElementById("weaponValue").innerHTML = (Number(weapon[1]) * material.valueMultiplier) + " " + weapon[2];
  document.getElementById("materialPropertyName").innerHTML = (material.hasInateEnchantment ? material.inateEnchantmentName : "");
  document.getElementById("materialPropertyEffect").innerHTML = (material.hasInateEnchantment ? material.inateEnchantment : "");
  document.getElementById("enchantmentName").innerHTML = enchantment[0];
  document.getElementById("enchantmentEffect").innerHTML = enchantment[1];
}

function copyBrew(){
  let itemString = `___
> ## ${document.getElementById("weaponName").innerHTML}
>*${document.getElementById("weaponClass").innerHTML}*
> ___
> - **Category:** Items
> - **Damage:** ${document.getElementById("weaponDamage").innerHTML}
> - **Damage Type:** ${document.getElementById("weaponDamageType").innerHTML}
> - **Range:** ${document.getElementById("weaponRange").innerHTML}
> - **Properties:** ${document.getElementById("weaponProperties").innerHTML}
> - **Weight:** ${document.getElementById("weaponWeight").innerHTML}.
> - **Value:** ${document.getElementById("weaponValue").innerHTML}.`

let hasMaterialProperty = document.getElementById("materialPropertyName").innerHTML.length > 0;
let hasEnchantmentProperty = document.getElementById("enchantmentName").innerHTML.length > 0;
if(hasMaterialProperty || hasEnchantmentProperty){
  itemString += `
>
> ### Enchantment` + (hasMaterialProperty ? `
> ***${document.getElementById("materialPropertyName").innerHTML}.*** ${document.getElementById("materialPropertyEffect").innerHTML}` : "") + (hasMaterialProperty && hasEnchantmentProperty ? `
>` : "") + (hasEnchantmentProperty ? `
> ***${document.getElementById("enchantmentName").innerHTML}.*** ${document.getElementById("enchantmentEffect").innerHTML}` : "")
}
  
  /* Dumb way that javascript forces you to copy text... */
  // Create new element
  let tempTextArea = document.createElement('textarea');
  // Set value (string to be copied)
  tempTextArea.value = itemString;
  // Set non-editable to avoid focus and move outside of view
  tempTextArea.setAttribute('readonly', '');
  tempTextArea.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(tempTextArea);
  // Select text inside element
  tempTextArea.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(tempTextArea);
  alert("Copied text to clipboard!");
}
