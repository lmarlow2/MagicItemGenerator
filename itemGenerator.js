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

var enchantments = [{prefix:[""], suffix:[""], name:[""], effect:[""], addsDamage:false, damageDice:[""], damageType:[""], value:[0]},
		    {prefix:["Honed", "Keen", "Impressive"], suffix:["", "", ""], name:["+1/+1", "+2/+2", "+3/+3"], effect:["adds 1 to hit rolls and damage rolls made with this weapon.", "adds 2 to hit rolls and damage rolls made with this weapon.", "adds 3 to hit rolls and damage rolls made with this weapon."], addsDamage:true, damageDice:["1", "2", "3"], damageType:["", "", ""], value:[1000, 5000, 10000]},
		    {prefix:["Burning", "Chilled", "Sparking", "Echoing", "Shining", "Rotten", "Toxic", "Caustic", "Dynamic", "Psychal", "Searing", "Cold", "Shocking", "Resounding", "Brilliant", "Decaying", "Venomous", "Astringent", "Cogent", "Cerebral", "Incinerating", "Freezing", "Electrified", "Booming", "Luciferous", "", "Virulent", "Mordant", "Vehement", "Transmundane"], suffix:["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "of Necrosis", "", "", "", ""], name:["Burning", "Chilled", "Sparking", "Echoing", "Shining", "Rotten", "Toxic", "Caustic", "Dynamic", "Psychal", "Searing", "Cold", "Shocking", "Resounding", "Brilliant", "Decaying", "Venomous", "Astringent", "Cogent", "Cerebral", "Incinerating", "Freezing", "Electrified", "Booming", "Luciferous", "Necrosis", "Virulent", "Mordant", "Vehement", "Transmundane"], effect:["weapon does an additional 1d4 fire damage.", "weapon does an additional 1d4 cold damage.", "weapon does an additional 1d4 lightning damage.", "weapon does an additional 1d4 thunder damage.", "weapon does an additional 1d4 radiant damage.", "weapon does an additional 1d4 necrotic damage.", "weapon does an additional 1d4 poison damage.", "weapon does an additional 1d4 acid damage.", "weapon does an additional 1d4 force damage.", "weapon does an additional 1d4 psychic damage.", "weapon does an additional 1d6 fire damage.", "weapon does an additional 1d6 cold damage.", "weapon does an additional 1d6 lightning damage.", "weapon does an additional 1d6 thunder damage.", "weapon does an additional 1d6 radiant damage.", "weapon does an additional 1d6 necrotic damage.", "weapon does an additional 1d6 poison damage.", "weapon does an additional 1d6 acid damage.", "weapon does an additional 1d6 force damage.", "weapon does an additional 1d6 psychic damage.", "weapon does an additional 2d6 fire damage.", "weapon does an additional 2d6 cold damage.", "weapon does an additional 2d6 lightning damage.", "weapon does an additional 2d6 thunder damage.", "weapon does an additional 2d6 radiant damage.", "weapon does an additional 2d6 necrotic damage.", "weapon does an additional 2d6 poison damage.", "weapon does an additional 2d6 acid damage.", "weapon does an additional 2d6 force damage.", "weapon does an additional 2d6 psychic damage."], addsDamage:true, damageDice:["1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "1d4", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "1d6", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6"], damageType:["Fire", "Cold", "Lightning", "Thunder", "Radiant", "Necrotic", "Poison", "Acid", "Force", "Psychic", "Fire", "Cold", "Lightning", "Thunder", "Radiant", "Necrotic", "Poison", "Acid", "Force", "Psychic", "Fire", "Cold", "Lightning", "Thunder", "Radiant", "Necrotic", "Poison", "Acid", "Force", "Psychic"], value:[1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000]},
		    {prefix:["Cantrip Imbued", "Spell Imbued", "Magic Imbued"], suffix:["", "", ""], name:["Imbued Cantrip", "Imbued Spell", "Imbued Magic"], effect:["This weapon can be used to cast a cantrip or a spell up to level 2 up to 1d4 times per day item recharges at dawn, dusk, midday, or midnight.", "This weapon can be used to cast a spell up to level 2 up to 1d6 times per day or a spell up to level 5 up to 1d4 times per day item recharges at dawn, dusk, midday, or midnight.", "This weapon can be used to cast a spell up to level 2 up to 1d8 times per day, a spell up to level 5 up to 1d6 times per day, or a spell up to level 8 up to 1d4 times per day item recharges at dawn, dusk, midday, or midnight."], addsDamage:false, damageDice:[""], damageType:[""], value:[3000, 7000, 15000]},
		    {prefix:["Accurate", "Precise", "Unerring"], suffix:["", "", ""], name:["Accurate", "Precise", "Unerring"], effect:["adds 2 to hit rolls when attacking with this weapon.", "adds 4 to hit rolls when attacking with this weapon.", "adds 6 to hit rolls when attacking with this weapon."], addsDamage:false, damageDice:[""], damageType:[""], value:[1000, 5000, 10000]},
		    {prefix:["Savage", "Deadly", "Lethal"], suffix:["", "", ""], name:["Savage", "Deadly", "Lethal"], effect:["adds 2 to damage rolls when attacking with this weapon.", "adds 4 to damage rolls when attacking with this weapon.", "adds 6 to damage rolls when attacking with this weapon."], addsDamage:true, damageDice:["2", "4", "6"], damageType:["", "", ""], value:[1000, 5000, 10000]},
		    {prefix:["Light"], suffix:[""], name:["Light"], effect:["Adds the light property to a weapon that doesn't have it. If the weapon has the heavy property it is removed, but the light property is not added."], addsDamage:false, damageDice:[""], damageType:[""], value:[500]},
		    {prefix:["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], suffix:["of Aberration Bane", "of Arakocra Bane", "of Beast Bane", "of Construct Bane", "of Dwarf Bane", "of Elemental Bane", "of Elf Bane", "of Fey Bane", "of Fiend Bane", "of Giant Bane", "of Gnoll Bane", "of Gnome Bane", "of Goblinoid Bane", "of Halfling Bane", "of Human Bane", "of Lizardfolk Bane", "of Magical Beast Bane", "of Monsterous Humanoid Bane", "of Ooze Bane", "of Orc Bane", "of Plant Bane", "of Tabaxi Bane", "of Tiefling Bane", "of Triton Bane", "of Undead Bane", "of Vermin Bane", "of Aberration Ruin", "of Arakocra Ruin", "of Beast Ruin", "of Construct Ruin", "of Dwarf Ruin", "of Elemental Ruin", "of Elf Ruin", "of Fey Ruin", "of Fiend Ruin", "of Giant Ruin", "of Gnoll Ruin", "of Gnome Ruin", "of Goblinoid Ruin", "of Halfling Ruin", "of Human Ruin", "of Lizardfolk Ruin", "of Magical Beast Ruin", "of Monsterous Humanoid Ruin", "of Ooze Ruin", "of Orc Ruin", "of Plant Ruin", "of Tabaxi Ruin", "of Tiefling Ruin", "of Triton Ruin", "of Undead Ruin", "of Vermin Ruin", "of Scourge of Aberrations", "of Scourge of Arakocra", "of Scourge of Beasts", "of Scourge of Constructs", "of Scourge of Dwarves", "of Scourge of Elementals", "of Scourge of Elves", "of Scourge of Fey", "of Scourge of Fiends", "of Scourge of Giants", "of Scourge of Gnolls", "of Scourge of Gnomes", "of Scourge of Goblinoids", "of Scourge of Halflings", "of Scourge of Humans", "of Scourge of Lizardfolk", "of Scourge of Magical Beasts", "of Scourge of Monsterous Humanoids", "of Scourge of Oozes", "of Scourge of Orcs", "of Scourge of Plants", "of Scourge of Tabaxi", "of Scourge of Tieflings", "of Scourge of Triton", "of Scourge of Undead", "of Scourge of Vermin"], name:["Bane (Aberrations)", "Bane (Arakocra)", "Bane (Beasts)", "Bane (Constructs)", "Bane (Dwarves)", "Bane (Elementals)", "Bane (Elves)", "Bane (Fey)", "Bane (Fiends)", "Bane (Giants)", "Bane (Gnolls)", "Bane (Gnomess)", "Bane (Goblinoids)", "Bane (Halflings)", "Bane (Humans)", "Bane (Lizardfolk)", "Bane (Magical Beasts)", "Bane (Monsterous Humanoids)", "Bane (Oozes)", "Bane (Orcs)", "Bane (Plants)", "Bane (Tabaxi)", "Bane (Tieflings)", "Bane (Triton)", "Bane (Undead)", "Bane (Vermin)", "Ruin (Aberrations)", "Ruin (Arakocra)", "Ruin (Beasts)", "Ruin (Constructs)", "Ruin (Dwarves)", "Ruin (Elementals)", "Ruin (Elves)", "Ruin (Fey)", "Ruin (Fiends)", "Ruin (Giants)", "Ruin (Gnolls)", "Ruin (Gnomess)", "Ruin (Goblinoids)", "Ruin (Halflings)", "Ruin (Humans)", "Ruin (Lizardfolk)", "Ruin (Magical Beasts)", "Ruin (Monsterous Humanoids)", "Ruin (Oozes)", "Ruin (Orcs)", "Ruin (Plants)", "Ruin (Tabaxi)", "Ruin (Tieflings)", "Ruin (Triton)", "Ruin (Undead)", "Ruin (Vermin)", "Scourge (Aberrations)", "Scourge (Arakocra)", "Scourge (Beasts)", "Scourge (Constructs)", "Scourge (Dwarves)", "Scourge (Elementals)", "Scourge (Elves)", "Scourge (Fey)", "Scourge (Fiends)", "Scourge (Giants)", "Scourge (Gnolls)", "Scourge (Gnomess)", "Scourge (Goblinoids)", "Scourge (Halflings)", "Scourge (Humans)", "Scourge (Lizardfolk)", "Scourge (Magical Beasts)", "Scourge (Monsterous Humanoids)", "Scourge (Oozes)", "Scourge (Orcs)", "Scourge (Plants)", "Scourge (Tabaxi)", "Scourge (Tieflings)", "Scourge (Triton)", "Scourge (Undead)", "Scourge (Vermin)"], effect:["When attacking an aberration with this weapon add 1 to hit and damage rolls.", "When attacking an arakocra with this weapon add 1 to hit and damage rolls.", "When attacking a beast with this weapon add 1 to hit and damage rolls.", "When attacking a construct with this weapon add 1 to hit and damage rolls.", "When attacking a dwarf with this weapon add 1 to hit and damage rolls.", "When attacking an elemental with this weapon add 1 to hit and damage rolls.", "When attacking an elf with this weapon add 1 to hit and damage rolls.", "When attacking a fey with this weapon add 1 to hit and damage rolls.", "When attacking a fiend with this weapon add 1 to hit and damage rolls.", "When attacking a giant with this weapon add 1 to hit and damage rolls.", "When attacking a gnoll with this weapon add 1 to hit and damage rolls.", "When attacking a gnome with this weapon add 1 to hit and damage rolls.", "When attacking a goblinoid with this weapon add 1 to hit and damage rolls.", "When attacking a halfling with this weapon add 1 to hit and damage rolls.", "When attacking a human with this weapon add 1 to hit and damage rolls.", "When attacking a lizardfolk with this weapon add 1 to hit and damage rolls.", "When attacking a magical beast with this weapon add 1 to hit and damage rolls.", "When attacking a monsterous humanoid with this weapon add 1 to hit and damage rolls.", "When attacking an ooze with this weapon add 1 to hit and damage rolls.", "When attacking an orc with this weapon add 1 to hit and damage rolls.", "When attacking a plant with this weapon add 1 to hit and damage rolls.", "When attacking a tabaxi with this weapon add 1 to hit and damage rolls.", "When attacking a tiefling with this weapon add 1 to hit and damage rolls.", "When attacking a triton with this weapon add 1 to hit and damage rolls.", "When attacking an undead with this weapon add 1 to hit and damage rolls.", "When attacking a vermin with this weapon add 1 to hit and damage rolls.", "When attacking an aberration with this weapon add 2 to hit and damage rolls.", "When attacking an arakocra with this weapon add 2 to hit and damage rolls.", "When attacking a beast with this weapon add 2 to hit and damage rolls.", "When attacking a construct with this weapon add 2 to hit and damage rolls.", "When attacking a dwarf with this weapon add 2 to hit and damage rolls.", "When attacking an elemental with this weapon add 2 to hit and damage rolls.", "When attacking an elf with this weapon add 2 to hit and damage rolls.", "When attacking a fey with this weapon add 2 to hit and damage rolls.", "When attacking a fiend with this weapon add 2 to hit and damage rolls.", "When attacking a giant with this weapon add 2 to hit and damage rolls.", "When attacking a gnoll with this weapon add 2 to hit and damage rolls.", "When attacking a gnome with this weapon add 2 to hit and damage rolls.", "When attacking a goblinoid with this weapon add 2 to hit and damage rolls.", "When attacking a halfling with this weapon add 2 to hit and damage rolls.", "When attacking a human with this weapon add 2 to hit and damage rolls.", "When attacking a lizardfolk with this weapon add 2 to hit and damage rolls.", "When attacking a magical beast with this weapon add 2 to hit and damage rolls.", "When attacking a monsterous humanoid with this weapon add 2 to hit and damage rolls.", "When attacking an ooze with this weapon add 2 to hit and damage rolls.", "When attacking an orc with this weapon add 2 to hit and damage rolls.", "When attacking a plant with this weapon add 2 to hit and damage rolls.", "When attacking a tabaxi with this weapon add 2 to hit and damage rolls.", "When attacking a tiefling with this weapon add 2 to hit and damage rolls.", "When attacking a triton with this weapon add 2 to hit and damage rolls.", "When attacking an undead with this weapon add 2 to hit and damage rolls.", "When attacking a vermin with this weapon add 2 to hit and damage rolls.", "When attacking an aberration with this weapon add 3 to hit and damage rolls.", "When attacking an arakocra with this weapon add 3 to hit and damage rolls.", "When attacking a beast with this weapon add 3 to hit and damage rolls.", "When attacking a construct with this weapon add 3 to hit and damage rolls.", "When attacking a dwarf with this weapon add 3 to hit and damage rolls.", "When attacking an elemental with this weapon add 3 to hit and damage rolls.", "When attacking an elf with this weapon add 3 to hit and damage rolls.", "When attacking a fey with this weapon add 3 to hit and damage rolls.", "When attacking a fiend with this weapon add 3 to hit and damage rolls.", "When attacking a giant with this weapon add 3 to hit and damage rolls.", "When attacking a gnoll with this weapon add 3 to hit and damage rolls.", "When attacking a gnome with this weapon add 3 to hit and damage rolls.", "When attacking a goblinoid with this weapon add 3 to hit and damage rolls.", "When attacking a halfling with this weapon add 3 to hit and damage rolls.", "When attacking a human with this weapon add 3 to hit and damage rolls.", "When attacking a lizardfolk with this weapon add 3 to hit and damage rolls.", "When attacking a magical beast with this weapon add 3 to hit and damage rolls.", "When attacking a monsterous humanoid with this weapon add 3 to hit and damage rolls.", "When attacking an ooze with this weapon add 3 to hit and damage rolls.", "When attacking an orc with this weapon add 3 to hit and damage rolls.", "When attacking a plant with this weapon add 3 to hit and damage rolls.", "When attacking a tabaxi with this weapon add 3 to hit and damage rolls.", "When attacking a tiefling with this weapon add 3 to hit and damage rolls.", "When attacking a triton with this weapon add 3 to hit and damage rolls.", "When attacking an undead with this weapon add 3 to hit and damage rolls.", "When attacking a vermin with this weapon add 3 to hit and damage rolls."], addsDamage:false, damageDice:[""], damageType:[""], value:[750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 3750, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500, 7500]},
		    {prefix:["Luminant"], suffix:[""], name:["Luminant"], effect:["This weapon emmits a bright light that illuminates a 10ft. area and sheds dim light for an additional 15ft. beyond that."], addsDamage:false, damageDice:[""], damageType:[""], value:[200]},
		    {prefix:["High Powered"], suffix:[""], name:["High Powered"], effect:["Increases the effective range of a ranged weapon by 30ft."], addsDamage:false, damageDice:[""], damageType:[""], value:[200]},
		    {prefix:["Disguised"], suffix:[""], name:["Disguise"], effect:["This weapon appears to be an unthreatening object until it is drawn and ready for combat."], addsDamage:false, damageDice:[""], damageType:[""], value:[300]},
		    {prefix:["Dancing"], suffix:[""], name:["Dancing"], effect:["Gives melee weapons the same benefits and effects as a Dancing Sword."], addsDamage:false, damageDice:[""], damageType:[""], value:[2000]},
		    {prefix:[""], suffix:["of Momentum"], name:["Momentum"], effect:["If you move at least 20ft in the direction of your opponent before attacking with this melee weapon, add 1d8 to the damage roll."], addsDamage:false, damageDice:[""], damageType:[""], value:[3000]},
		    {prefix:[""], suffix:["of Warning"], name:["Warning"], effect:["This weapon alerts the owner to danger by glowing or by making a noise"], addsDamage:false, damageDice:[""], damageType:[""], value:[5000]},
		    {prefix:["Returning"], suffix:[""], name:["Returning"], effect:["This weapon always retuns to the person attuned to it within 1d4 rounds after being thrown or lost."], addsDamage:false, damageDice:[""], damageType:[""], value:[3000]},
		    {prefix:[""], suffix:["of Spell Absorbing"], name:["Spell Absorbing"], effect:["As a reaction you can use this weapon to absorb one single target, damage dealing spell every 24 hours."], addsDamage:false, damageDice:[""], damageType:[""], value:[3000]},
		    {prefix:["Elemental"], suffix:[""], name:["Elemental"], effect:["This weapon can be attuned to any element by being exposed to that element and speaking the weapon's command word. Once attuned to a specific element the weapon will deal 1d6 additional damage of that type until it is attuned to a different element."], addsDamage:false, damageDice:[""], damageType:[""], value:[8000]},
		    {prefix:["Unbreaking"], suffix:[""], name:["Unbreaking"], effect:["This object is unable to be destroyed by any ordinary circumstances."], addsDamage:false, damageDice:[""], damageType:[""], value:[20000]},
		    {prefix:["Broken"], suffix:[""], name:["Broken"], effect:["The weapon is damaged and cannot be used until it is repaired."], addsDamage:false, damageDice:[""], damageType:[""], value:[0]},
		    {prefix:["Clown's"], suffix:[""], name:["Clown"], effect:["When you draw this weapon the DM rolls a d12 and you roll a d20; if you roll equal or higher than the DM the weapon works as usual; if the DM rolls higher the weapon turns to rubber and deals no damage. Sheathing and drawing the weapon initiates another check."], addsDamage:false, damageDice:[""], damageType:[""], value:[500]},
		    {prefix:["Bound", "Bound", "Bound"], suffix:["", "", ""], name:["Curse of Binding (Bloodied)", "Curse of Binding (Lulaby)", "Curse of Binding (Self Inflicted Wounds)"], effect:["This weapon can only be sheathed if it has drawn blood.", "This weapon can only be sheathed after the user sings it a lulaby.", "This weapon can only be sheathed after doing harm to its user."], addsDamage:false, damageDice:[""], damageType:[""], value:[250, 250, 250]},
		    {prefix:["Frightening", "Dreadful"], suffix:["", ""], name:["Frightful", "Dreadful"], effect:["When this effect is activated everyone who can see the item must make a DC 10 saving throw or become afraid of the item and its bearer.", "When this effect is activated everyone who can see the item must make a DC 15 saving throw or become afraid of the item and its bearer."], addsDamage:false, damageDice:[""], damageType:[""], value:[3000, 7000]},
		    {prefix:["Cursed", "Cursed", "Cursed"], suffix:["", "", ""], name:["Cursed Speech (Baby Talk)", "Cursed Speech (Silence)", "Cursed Speech (Song)"], effect:["While wielding this weapon you are forced to talk like a baby.", "While wielding this weapon you cannot talk.", "While wielding this weapon you are forced to sing while talking."], addsDamage:false, damageDice:[""], damageType:[""], value:[250, 250, 250]},
		    {prefix:["Dull", "Rusty"], suffix:["", ""], name:["Dull", "Rust"], effect:["While attacking with this melee weapon your attacks deal 1d4 less damage. This effect can be fixed by having an appropriate artisan fix it.", "While attacking with this melee weapon your attacks deal 1d4 less damage. This effect can be fixed by having an appropriate artisan fix it."], addsDamage:true, damageDice:["-1d4", "-1d4"], damageType:["", ""], value:[0, 0]},
		    {prefix:["Entangled"], suffix:[""], name:["Entangled"], effect:["This weapon is constantly getting hung up on things."], addsDamage:false, damageDice:[""], damageType:[""], value:[100]},
		    {prefix:["Fast", "Quick", "Deft"], suffix:["", "", ""], name:["Fast", "Quick", "Deft"], effect:["When you attack with this weapon you may make two attacks that deal half as much damage instead of making one attack for normal damage.", "When you attack with this weapon you may make two attacks that deal half as much damage instead of making one attack for normal damage.", "When you attack with this weapon you may make two attacks that deal half as much damage instead of making one attack for normal damage."], addsDamage:false, damageDice:[""], damageType:[""], value:[2000, 2000, 2000]},
		    {prefix:["Fleeing"], suffix:[""], name:["Fleeing"], effect:["This weapon does not like to be held, and will move away from anyone who attempts to pick it up."], addsDamage:false, damageDice:[""], damageType:[""], value:[100]},
		    {prefix:["Feeble"], suffix:[""], name:["Feeble"], effect:["When you critically fail while attacking with this weapon, it shatters becoming worthless."], addsDamage:false, damageDice:[""], damageType:[""], value:[100]},
		    {prefix:["", "Sleepy"], suffix:["of Slumber", ""], name:["Slumbering", "Slumbering"], effect:["Targets hit with this weapon must pass a DC 5 constitution save or fall asleep.", "Targets hit with this weapon must pass a DC 5 constitution save or fall asleep."], addsDamage:false, damageDice:[""], damageType:[""], value:[1500]},
		    {prefix:["Sweeping"], suffix:[""], name:["Sweeping"], effect:["This melee weapon allows you to hit multiple enemies standing near you with a single attack as long as your hit roll meets or exceeds their armor class, all enemies in range will take the damage rolled for that attack."], addsDamage:false, damageDice:[""], damageType:[""], value:[30000]},
		    {prefix:["Toy"], suffix:[""], name:["Toy"], effect:["This isn't actually a weapon, it is a very convincing squeeky toy shaped like a weapon! This weapon deals at most 1 damage to its target."], addsDamage:false, damageDice:[""], damageType:[""], value:[0]}
];

var materials = [{names:[""], addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:1},
                 {names:["Adamantium"], addsDamage:true, damageDice:"1d4", damageType:"Force", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:3},
                 {names:["Deadwood"], addsDamage:true, damageDice:"1d4", damageType:"Necrotic", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:3},
                 {names:["Duranium", "Dura Steele"], addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"Spell Storing", inateEnchantment:"This weapon can have a spell stored inside of it as per the rules of the Ring of Spell Storing.", valueMultiplier:10},
                 {names:["Katchin", "Iron Wood", "Iron Bark"], addsDamage:true, damageDice:"1d4", damageType:"Poison", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:2},
                 {names:["Mythril"], addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"Light", inateEnchantment:"This weapon has the Light property or acts as a weapon one class size smaller. (dual wield longswords, wield greatsword with a shield, etc...)", valueMultiplier:4},
                 {names:["Obsidian", "Black Glass"], addsDamage:true, damageDice:"1d4", damageType:"Fire", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:3},
                 {names:["Orichalcum"], addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"Heavy", inateEnchantment:"Increase damage die by one class (d4 -> d6, d6 -> d8, etc...). Weapon gains the heavy property.", valueMultiplier:3},
                 {names:["Permafrost", "Tritanium"], addsDamage:true, damageDice:"1d4", damageType:"Cold", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:3},
                 {names:["Thorium", "Elder Stone"], addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"Anti-Magic", inateEnchantment:"Casts Dispel Magic on objects and creatures struck wih the weapon. Immune to magical effects such as Heat Metal, etc..", valueMultiplier:7},
                 {names:["Wind Glass", "Cat Glass", "Sheer Sand"], addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"True Reflection", inateEnchantment:"Illusions do not pass through or reflect off of this weapon, making it easy to spot and see through them.", valueMultiplier:3},
                 {names:["Coaching Xithricite", "Coaching Meteorite", "Bashful Xithricite", "Bashful Meteorite", "Dreary Xithricite", "Dreary Meteorite", "Cheerful Xithricite", "Cheerful Meteorite", "Boastful Xithricite", "Boastful Meteorite", "Pacifist Xithricite", "Pacifist Meteorite", "Bloodthirsty Xithricite", "Bloodthirsty Meteorite", "Motherly Xithricite", "Motherly Meteorite", "Opera Singer Xithricite", "Opera Singer Meteorite", "Lying Xithricite", "Lying Meteorite"], addsDamage:true, damageDice:"1d4", damageType:"Psychic", hasInateEnchantment:true, inateEnchantmentName:"Sentient", inateEnchantment:"This weapon contains a random alien (Xith/ian) personality. Regardless of its personality the object harbors a hatred toward both aboleths and mindflayers.", valueMultiplier:5},
		 {names:["Manticore Metal"], addsDamage:true, damageDice:"1", damageType:"", hasInateEnchantment:false, inateEnchantmentName:"", inateEnchantment:"", valueMultiplier:1.2},
		 {names:["Ethereal"], addsDamage:false, damageDice:"", damageType:"", hasInateEnchantment:true, inateEnchantmentName:"Ethereal", inateEnchantment:"Attacks ignore non-magical armor, reducing the target's AC to 10 unless their armor is magical. Damage type of this weapon is changed to psychic.", valueMultiplier:2}
];

var weaponInfoID;
var materialInfoID;
var materialSubClassID;
var enchantmentInfoID;
var enchantmentSubClassID;

function randomizeItem(){
  weaponInfoID = Math.floor(Math.random() * weaponTypes.length);
  materialInfoID = Math.floor(Math.random() * materials.length);
  materialSubClassID = Math.floor(Math.random() * materials[materialInfoID].names.length);
  enchantmentInfoID = Math.floor(Math.random() * enchantments.length);
  enchantmentSubClassID = Math.floor(Math.random() * enchantments[enchantmentInfoID].name.length);
}

function renderItem(){
  let weapon = weaponTypes[weaponInfoID].split("\t");
  let material = materials[materialInfoID];
  let materialName = material.names[materialSubClassID];
  let enchantment = enchantments[enchantmentInfoID];
  document.getElementById("weaponName").innerHTML = (enchantment.prefix[enchantmentSubClassID].length > 0 ? enchantment.prefix[enchantmentSubClassID] + " " : "") + (materialName.length > 0 ? materialName + " " : "") + weapon[0] + (enchantment.suffix[enchantmentSubClassID].length > 0 ? " " + enchantment.suffix[enchantmentSubClassID] : "");
  document.getElementById("weaponClass").innerHTML = weapon[6];
  document.getElementById("weaponDamage").innerHTML = weapon[3] + (material.addsDamage ? " + " + material.damageDice : "") + (enchantment.addsDamage ? " + " + enchantment.damageDice[enchantmentSubClassID] : "");
  document.getElementById("weaponDamageType").innerHTML = weapon[4] + (material.addsDamage ? ", " + material.damageType : "") + (enchantment.addsDamage ? ", " + enchantment.damageType[enchantmentSubClassID] : "");
  document.getElementById("weaponRange").innerHTML = weapon[7];
  document.getElementById("weaponProperties").innerHTML = weapon[8];
  document.getElementById("weaponWeight").innerHTML = weapon[5];
  document.getElementById("weaponValue").innerHTML = (Number(weapon[1]) * material.valueMultiplier + enchantment.value[enchantmentSubClassID]) + " " + weapon[2];
  document.getElementById("materialPropertyName").innerHTML = (material.hasInateEnchantment ? material.inateEnchantmentName : "");
  document.getElementById("materialPropertyEffect").innerHTML = (material.hasInateEnchantment ? material.inateEnchantment : "");
  document.getElementById("enchantmentName").innerHTML = enchantment.name[enchantmentSubClassID];
  document.getElementById("enchantmentEffect").innerHTML = enchantment.effect[enchantmentSubClassID];
}


function newItem(){
	randomizeItem();
	renderItem();
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

function weaponSelected(){
	weaponInfoID = document.getElementById("weaponTypeSelect").selectedIndex;
	renderItem();
}

function materialSelected(){
	let pick = document.getElementById("materialSelect").options[document.getElementByID("materialSelect").selectedIndex];
  	materialInfoID = pick.value;
 	materialSubclassID = pick.id;
	renderItem();
}

function enchantmentSelected(){
	let pick = document.getElementById("enchantmentSelect").options[document.getElementByID("enchantmentSelect").selectedIndex];
  	enchantmentInfoID = pick.value;
 	enchantmentSubclassID = pick.id;
	renderItem();
}

function loadItemData(){
//load weapon types
	let weaponSelect = document.getElementById("weaponTypeSelect");
	for(let i = 0; i < weaponTypes.length; ++i){
		let option = document.createElement("option");
		option.text = weaponTypes[i].split('\t')[0];
		weaponSelect.add(option);
	}
//load material types
	let materialSelect = document.getElementById("materialSelect");
	for(let i = 0; i < materials.length; ++i){
		for(let j = 0; j < materials[i].names.length; ++j){
			let option = document.createElement("option");
			option.text = materials[i].names[j];
			option.value = i;
			option.id = j;
			materialSelect.add(option);
		}
	}
//load enchantment types
	let enchantmentSelect = document.getElementById("enchantmentSelect");
	for(let i = 0; i < enchantments.length; ++i){
		for(let j = 0; j < enchantments[i].name.length; ++j){
			let option = document.createElement("option");
			option.text = enchantments[i].name[j];
			option.value = i;
			option.id = j;
			enchantmentSelect.add(option);
		}
	}
}
