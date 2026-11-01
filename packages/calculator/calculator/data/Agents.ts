import { EvoNodes } from '../data';
import { AttackModeEnum, ClassEnum, CupSizeEnum, EffectTypeEnum, OrganizationEnum, RarityEnum } from '../enums';
import {
  EffectParams,
  NewAgent,
  NewEffect,
  NewEffectAOA,
  NewEffectDamage,
  NewEffectDOT,
  NewSkill,
  NewStats,
  Effect
} from '../model';

export const Yuki = {
  index: 1,
  name: 'Yuki',
  title: 'Valkyrie',
  bio: `
  Despite her warm and youthful beauty, Yuki is actually a very cold individual. She takes her job at the WIO very seriously and refuses to let social interactions interfere with her duties, which she will bluntly tell you.
  `,
  rarity: RarityEnum.ONE,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 975,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 927,
    baseSkillDamage: 927
  } as NewStats,
  skill: {
    name: 'Precision Assault',
    description: `
    This skill increases damage by 1500% and attack speed by 220% for 4 seconds.
    It has a cooldown of 8 seconds.
    `,
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 2.2;
          agent.stats.normalAttack *= 15;
          agent.stats.skillDamage *= 15;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 2.2;
          agent.stats.normalAttack /= 15;
          agent.stats.skillDamage /= 15;
        },
        duration: 4
      } as NewEffect
    ],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const Neve = {
  index: 2,
  name: 'Neve',
  title: 'Frostbite',
  bio: `
  Neve is often referred to as an 'ice queen' due to her impatience and cruelty, even towards her commanding officer. Her desire to end the war quickly is evident, but she has made few friends and many enemies along the way. Although she is undeniably beautiful, her sharp tongue and toxic attitude make people wary of getting to know her.
  `,
  rarity: RarityEnum.ONE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 601,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 569,
    baseSkillDamage: 569
  } as NewStats,
  skill: {
    name: 'Absolute Zero',
    description: `
    Summons an iceberg, dealing 26296.9 damage and slowing down enemies to 50% for 5 seconds.
    It has a cooldown of 17 seconds.
    `,
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 26296.9 } as NewEffectDamage],
    cooldown: 17
  } as NewSkill
} as NewAgent;

export const Ayu = {
  index: 3,
  name: 'Ayu',
  title: 'Spectre',
  bio: `
  Ayu has received advanced training in weaponry, which should make her a tough and skilled individual. However, she can be incredibly naive and impressionable, sometimes failing to grasp the gravity of a situation without guidance from her peers.
  `,
  rarity: RarityEnum.ONE,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 461,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 379,
    baseSkillDamage: 379
  } as NewStats,
  skill: {
    name: 'Raining Bullets',
    description: `
    Shoots a piercing laser beam, dealing 45535.8 damage.
    It has a cooldown of 9 seconds.
    `,
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 45535.8 } as NewEffectDamage],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Mika = {
  index: 4,
  name: 'Mika',
  title: 'Maelstrom',
  bio: `
  Mika is naturally a kind and cheerful individual who hasn't let the horrors of war affect her personality. Despite being a member of the SF alliance, she remains one of the happiest and most positive members. Soldiers love being on her team because of her bubbly personality and positive attitude.
  `,
  rarity: RarityEnum.ONE,
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 487,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 463,
    baseSkillDamage: 463
  } as NewStats,
  skill: {
    name: "Ocean's Torrent",
    description: `
    Smashes the ground and creates 4 sword-quakes, each dealing 10010.1 damage. Cooldown: 11.
    It has a cooldown of 11 seconds.
    `,
    effects: [{ type: EffectTypeEnum.DAMAGE, numberOfHits: 4, damage: () => 10010.1 } as NewEffectDamage],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Sora = {
  index: 5,
  name: 'Sora',
  title: 'Harpy',
  bio: `
  Sora was initially rejected by the SF for being too young, but after demonstrating her exceptional skills, they were eager to recruit her for Earth's defense. Though she is naturally timid and indecisive, she looks up to the Commander for validation and guidance. However, she remains committed to doing whatever it takes to ensure the safety of her fellow humans.
  `,
  rarity: RarityEnum.ONE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 461,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 379,
    baseSkillDamage: 379,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: 'Death From Above',
    description: `
    Shoots two electric bullets, each dealing 27890.7 damage.
    It has a cooldown of 8 seconds.
    `,
    effects: [{ type: EffectTypeEnum.DAMAGE, numberOfHits: 2, damage: () => 27890.7 } as NewEffectDamage],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const Ember = {
  index: 6,
  name: 'Ember',
  title: 'The Maniac',
  bio: `
  Ember is a destructive force, and most people try to avoid crossing her path. She takes pleasure in obliterating her enemies and seems to enjoy it a little too much at times. While her enthusiasm for destruction may be alarming, she channels it in the right direction by targeting the enemy during the war.
  `,
  rarity: RarityEnum.ONE,
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 399,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 362,
    baseSkillDamage: 362,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: 'Dance of Death',
    description: `
    Shoots 4 enhanced bullets, each dealing 13990.6 damage.
    It has a cooldown of 8 seconds.
    `,
    effects: [{ type: EffectTypeEnum.DAMAGE, numberOfHits: 4, damage: () => 13990.6 } as NewEffectDamage],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const Chiharu = {
  index: 7,
  name: 'Chiharu',
  title: 'Corsair',
  bio: `
  Under normal circumstances, the military would not consider hiring space pirates or outlaws to fight alongside their drafted soldiers. However, in this dire situation, they had no choice but to enlist anyone who could help. Chiharu is one of the most renowned pirates in Human space, and while soldiers are wary of trusting someone who should technically be their enemy, she has an undeniable charm and wit that makes her very likable.
  `,
  rarity: RarityEnum.TWO,
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.J,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1.1,
    normalAttack: 1248,
    criticalRate: 0.59,
    criticalDamage: 2.018,
    skillDamage: 1131,
    baseSkillDamage: 1131
  } as NewStats,
  skill: {
    name: "Dead Man's Curse",
    description: `
    Shoots a powerful bullet at the monster with the highest health, dealing 65165 damage.
    It has a cooldown of 9 seconds.
    `,
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 65164.8 } as NewEffectDamage],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Irina = {
  index: 8,
  name: 'Irina',
  title: 'Honeybee',
  bio: `
  Irina wasn't originally part of the war effort until someone had the brilliant idea of equipping a girl on roller skates with a missile launcher. Now, she's the fastest unit on the force, and her giant weaponry makes her one of the most deadly soldiers.
  `,
  rarity: RarityEnum.TWO,
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 627,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 569,
    baseSkillDamage: 569
  } as NewStats,
  skill: {
    name: 'Rocket Ricochet',
    description: `
    Fires 4 missiles at the target, each dealing 14230 damage.
    It has a cooldown of 6 seconds.
    `,
    effects: [{ type: EffectTypeEnum.DAMAGE, numberOfHits: 4, damage: () => 14229.9 } as NewEffectDamage],
    cooldown: 6
  } as NewSkill
} as NewAgent;

export const Yuuha = {
  index: 9,
  name: 'Yuuha',
  title: 'Lotus',
  bio: `
  War is not a suitable place for a pacifist, yet Yuuha remains in the SF alliance nonetheless. Fighting goes against everything she believes in, but unlike others, she understands that sometimes there is no logical alternative.
  `,
  rarity: RarityEnum.TWO,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 733,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 604,
    baseSkillDamage: 604,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: 'Dance of the Lotus',
    description: `
    Deals 26562.5 damage and knocks back all enemies by 1.6 units.
    It has a cooldown of 16 seconds.
    `,
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 26562.5 } as NewEffectDamage],
    cooldown: 16
  } as NewSkill
} as NewAgent;

export const Uzu = {
  index: 10,
  name: 'Uzu',
  title: 'Abyss',
  bio: `
  Previously employed in aquatic biological and technological research, Uzu saw the SF Alliance as an opportunity to expand her skills. Although she is more interested in the benefits of war than the war effort itself, most soldiers do not respect her that much. However, she couldn't care less about other people's opinions.
  `,
  rarity: RarityEnum.TWO,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.J,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1865,
    criticalRate: 0.59,
    criticalDamage: 2.018,
    skillDamage: 1766,
    baseSkillDamage: 1766
  } as NewStats,
  skill: {
    name: 'Crushing Embrace',
    description: `
    Releases her tentacles and deals 57204.3 damage to surrounding units, knocking back enemies by 1 unit and applying a 1-second mini-stun.
    It has a cooldown of 16 seconds.
    `,
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 57204.3 } as NewEffectDamage],
    cooldown: 16
  } as NewSkill
} as NewAgent;

export const Denka = {
  index: 11,
  name: 'Denka',
  title: 'Groundhog',
  bio: `
  Coming from a family of wealthy investors, Denka pleaded with her parents to allow her to join the SF. While she is equipped with the finest weapons and armor money can buy, her excessive confidence often works against her. Despite her genuine intentions, people are wary that she is merely using the SF to enhance her family's reputation.
  `,
  rarity: RarityEnum.TWO,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 760,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 723,
    baseSkillDamage: 723
  } as NewStats,
  skill: {
    name: 'Devastating Pincer Strike',
    description: 'shoots 3 electric drills, each dealing 24213.7 damage. cooldown: 9',
    effects: [{ type: EffectTypeEnum.DAMAGE, numberOfHits: 3, damage: () => 24213.7 } as NewEffectDamage],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Reika = {
  index: 12,
  name: 'Reika',
  title: 'Iris',
  bio: `
  As the Commander's secretary, Reika holds a highly stressful and crucial position. Being the right-hand woman of one of the most prominent military figures in the war is no small feat. Though she may occasionally become flustered and is naturally shy, when it comes to her duties, she sets aside her own insecurities to protect those she cherishes.
  `,
  rarity: RarityEnum.TWO,
  organization: OrganizationEnum.NDS,
  cupSize: CupSizeEnum.I,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 733,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 604,
    baseSkillDamage: 604
  } as NewStats,
  skill: {
    name: 'Might of the Alliance',
    description: 'launches a rocket towards the target, dealing 86932 damage. cooldown: 9',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 86932 } as NewEffectDamage],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Noa = {
  index: 13,
  name: 'Noa',
  title: 'The Professor',
  bio: `
  A brilliant student in the tech industry, Noa seems to require a dozen cups of coffee or energy drinks just to function. Despite appearing somewhat sleepy at all times, she maintains an unexpected level of alertness and readiness for action. People find it hard to believe that she can create such innovative and efficient technologies for the war effort, yet she somehow manages to do so.
  `,
  rarity: RarityEnum.TWO,
  organization: OrganizationEnum.NDS,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 929,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 880,
    baseSkillDamage: 880
  } as NewStats,
  skill: {
    name: 'Enhanced Plasma Cannon',
    description:
      'releases a drone dealing 50922 damage to the target area and slow down to 60% for 6 seconds. cooldown: 15',
    effects: [{ type: EffectTypeEnum.DOT, duration: 6, interval: 0.24, damage: () => 50922 / 25 } as NewEffectDOT],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Neugena = {
  index: 14,
  name: 'Neugena',
  title: 'Bucktail',
  bio: `
  No one is really certain of Neugena's origins, nor do they have a clear understanding of how she acquired her exceptional hunting skills. Nevertheless, no one dares to inquire further, particularly when she frequently discusses her enjoyment of killing for sport. No one wishes to become her next target.
  `,
  rarity: RarityEnum.TWO,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 4.4,
    normalAttack: 356,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 293,
    baseSkillDamage: 293
  } as NewStats,
  skill: {
    name: "Hunter's Sense",
    description:
      'releases a blasting arrow, dealing (default skill damage * 0.00020)% of enemies current hp in a small area (minimum damage = skill damage). cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.DAMAGE,
        damage: (params: EffectParams) => {
          const { agent, target } = params;
          let damage = agent.stats.baseSkillDamage * target.currentHealth * 0.0002;

          if (damage < agent.stats.baseSkillDamage) {
            damage = agent.stats.skillDamage;
          }

          return damage;
        }
      } as NewEffectDamage
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Larisa = {
  index: 15,
  name: 'Larisa',
  title: 'Katyusha',
  bio: `
  The establishment of the SF united soldiers from various backgrounds, including individuals like Larisa. Hailing from a country with its own unique customs and practices, she possesses a corresponding attitude. Unfazed by rules and regulations, it can sometimes prove challenging to ensure she follows orders and stays in line with the team's objectives.
  `,
  rarity: RarityEnum.THREE,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1.1,
    normalAttack: 1711,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1552,
    baseSkillDamage: 1552
  } as NewStats,
  skill: {
    name: 'Guardian of the Motherland',
    description: 'fires a high explosive missile at target locations dealing 69856 damage. cooldown: 11',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 69856 } as NewEffectDamage],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Rui = {
  index: 16,
  name: 'Rui',
  title: 'Femme Fatale',
  bio: `
  Rui adamantly refused to be equipped with a projectile weapon for the war, opting instead to wield her spiked mace, claiming it made things "a lot more fun." Her commanding officers were unsure of what exactly she meant by that, but as long as she was inflicting damage on the enemy, they had no complaints. Additionally, Rui's flirtatious personality has proven irresistible to many men in the force.
  `,
  rarity: RarityEnum.THREE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1014,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 964,
    baseSkillDamage: 964
  } as NewStats,
  skill: {
    name: "Devil's Contract",
    description:
      'enters demonic mode which increases her attack damage to 16382.6, attack range and area for 10 seconds. cooldown: 17',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack += 16382.8;
          agent.stats.skillDamage += 16382.8;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack -= 16382.8;
          agent.stats.skillDamage -= 16382.8;
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 17
  } as NewSkill
} as NewAgent;

export const Kotora = {
  index: 17,
  name: 'Kotora',
  title: 'Tiger',
  bio: `
  It is not uncommon for fellow soldiers to express concerns about Kotora's behavior. She has a mischievous and playful nature, often taking it to the extreme. However, beneath her carefree attitude, she relishes the excitement of the hunt. Fortunately for Earth, Kotora sees the invaders as the ideal prey to satisfy her thrill-seeking nature.
  `,
  rarity: RarityEnum.THREE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.J,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 832,
    criticalRate: 0.59,
    criticalDamage: 2.018,
    skillDamage: 754,
    baseSkillDamage: 754
  } as NewStats,
  skill: {
    name: 'Roar of the Beast',
    description:
      'launches an artillery shell towards the target location, which splits into 4 shells, each dealing 16404 damage. cooldown: 11',
    effects: [{ type: EffectTypeEnum.DAMAGE, numberOfHits: 4, damage: () => 16404 } as NewEffectDamage],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Vanessa = {
  index: 18,
  name: 'Vanessa',
  title: 'Belle',
  bio: `
  Vanessa hails from a deep underwater city that has yet to fully embrace the cultural advancements of the world above. Consequently, other soldiers tend to perceive her as old-fashioned and out of touch, though they generally regard her as a sweet individual. Adjusting to the widely accepted social norms can be challenging for her, even though she acknowledges that people mean well.
  `,
  rarity: RarityEnum.THREE,
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1267,
    criticalRate: 0.59,
    criticalDamage: 2.018,
    skillDamage: 1200,
    baseSkillDamage: 1200
  } as NewStats,
  skill: {
    name: 'Banishment of the Beast',
    description: 'creates an electric cage, stunning enemies for 8 seconds. cooldown: 34',
    effects: [],
    cooldown: 34
  } as NewSkill
} as NewAgent;

export const Aoi = {
  index: 19,
  name: 'Aoi',
  title: 'Astro',
  bio: `
  When it comes to Aoi, what you see is what you get. She possesses a cute and fun-loving nature, coupled with an insatiable curiosity. This particular trait proves advantageous in her role as an information gatherer. However, there are instances when her curiosity gets the better of her, leading her to delve into matters she should not pry into, such as the personal lives and secrets of her fellow soldiers.
  `,
  rarity: RarityEnum.THREE,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.B,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1275,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1207,
    baseSkillDamage: 1207
  } as NewStats,
  skill: {
    name: 'Gamma Blaster',
    description: 'randomly picks 6 agent(s), add 25% critical rate for 6 seconds. cooldown: 9',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team.forEach((agent) => (agent.stats.criticalRate += 0.25));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team.forEach((agent) => (agent.stats.criticalRate -= 0.25));
        },
        duration: 6
      } as NewEffect
    ],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Sara = {
  index: 20,
  name: 'Sara',
  title: 'Medusa',
  bio: `
  Sara has long believed in her ability to use her charm and beauty to manipulate others into doing her bidding. She has observed other women successfully employing such tactics, leading her to believe she could do the same. However, she struggles to acknowledge that her demeanor is more endearing and cute than overtly sexy. As a result, her attempts at flirtation often come across as humorous, which only serves to frustrate her further.
  `,
  rarity: RarityEnum.THREE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 3.1,
    normalAttack: 856,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 811,
    baseSkillDamage: 811
  } as NewStats,
  skill: {
    name: 'Paralyzing Stare',
    description: 'shoots a gigantic snake dealing 56213 damage. cooldown: 11',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 56213 } as NewEffectDamage],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Mai = {
  index: 21,
  name: 'Mai',
  title: 'White Lion',
  bio: `
  In the face of adversity, Mai maintains a composed demeanor. She remains rational and level-headed even in high-pressure situations, making her an invaluable asset to her unit. Many have recognized Mai as the linchpin that keeps the team united and focused on accomplishing the mission at hand. It doesn't hurt that she also possesses an endearing and charming appearance. Additionally, her trusty laser-shooting cat serves as a reliable companion, further enhancing her capabilities.
  `,
  rarity: RarityEnum.THREE,
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.B,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 984,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 811,
    baseSkillDamage: 811
  } as NewStats,
  skill: {
    name: "Soldier's Will",
    description: 'shoots bullets rapidly. enemies that were hit wil take 85121 damage once. cooldown: 13',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 85121 } as NewEffectDamage],
    cooldown: 13
  } as NewSkill
} as NewAgent;

export const Tsukiko = {
  index: 22,
  name: 'Tsukiko',
  title: 'Arsenal',
  bio: `
  SF embarked on an experiment to determine the threshold at which the attachment of weaponry to a soldier becomes a liability rather than an asset. Tsukiko emerged as the embodiment of their findings. Adorned with an array of knives, guns, and various weapons, she is prepared for any situation the war presents. However, the experiment can only be deemed partially successful, as Tsukiko stands as the sole soldier within the force capable of effectively handling such an immense arsenal simultaneously.
  `,
  rarity: RarityEnum.THREE,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.F,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1.1,
    normalAttack: 1711,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1552,
    baseSkillDamage: 1552
  } as NewStats,
  skill: {
    name: 'Bulletstorm',
    description:
      'shoots out a devastating sound wave dealing 23285 damage and increases the damage enemies receive by 35% for 9 seconds. cooldown: 38',
    effects: [
      {
        type: EffectTypeEnum.DEBUFF,
        apply: (params: EffectParams) => {
          const { target } = params;
          target.damageTakenMultiplier *= 1.35;
        },
        remove: (params: EffectParams) => {
          const { target } = params;
          target.damageTakenMultiplier /= 1.35;
        },
        duration: 9
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 4, interval: 1 / 4, damage: () => 1450 } as NewEffectDOT
    ],
    cooldown: 38
  } as NewSkill
} as NewAgent;

export const Yukako = {
  index: 23,
  name: 'Yukako',
  title: 'The Ghost',
  bio: `
  Primarily responsible for managing the technology provided by the Department of Orbital Defense, Yukako is accustomed to working independently. Her sharp intellect and expertise in electronics have propelled her success in solo endeavors. Consequently, collaborating with a team like yours occasionally catches her off guard, as she is more accustomed to working alone.
  `,
  rarity: RarityEnum.THREE,
  organization: OrganizationEnum.NDS,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 984,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 811,
    baseSkillDamage: 811
  } as NewStats,
  skill: {
    name: "Spirit's Lethal Kiss",
    description: 'increases the damage of all gunner agents to 150% for 12 seconds. cooldown: 25',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.normalAttack *= 1.5;
              agent.stats.skillDamage *= 1.5;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.normalAttack /= 1.5;
              agent.stats.skillDamage /= 1.5;
            });
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 25
  } as NewSkill
} as NewAgent;

export const Coco = {
  index: 24,
  name: 'Coco',
  title: 'Bearclaw',
  bio: `
  Coco wants nothing to do with this war business. She prefers to spend her time indulging in tea and cookies, enjoying a peaceful and carefree existence. However, when Zeth destroyed her favorite bakery, Coco's peaceful demeanor shifted. She couldn't bear to witness the loss of her beloved bakery and decided to take action. Determined to seek justice and ensure the bakery's restoration, Coco is now resolute in her pursuit, vowing to avenge her cherished establishment and contributing financially to its rebuilding efforts.
  `,
  rarity: RarityEnum.THREE,
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.B,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2531,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 2398,
    baseSkillDamage: 2398,
    projectileNumber: 3
  } as NewStats,
  skill: {
    name: 'Thrashing Paws',
    description:
      'she will encourage enemies run 200% faster for 1.5 seconds. and if coco is the only support in the team, she will increases 433% damage of all friendly agents in the team for 7 seconds. cooldown: 6',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          const not_valid = team.filter((agent) => agent.class === ClassEnum.SUPPORT).length > 1;

          if (not_valid) {
            return;
          }

          team.forEach((agent) => {
            agent.stats.normalAttack *= 4.33;
            agent.stats.skillDamage *= 4.33;
          });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          const not_valid = team.filter((agent) => agent.class === ClassEnum.SUPPORT).length > 1;

          if (not_valid) {
            return;
          }

          team.forEach((agent) => {
            agent.stats.normalAttack /= 4.33;
            agent.stats.skillDamage /= 4.33;
          });
        },
        duration: 7
      } as NewEffect
    ],
    cooldown: 6
  } as NewSkill
} as NewAgent;

export const Pan = {
  index: 25,
  name: 'Pan',
  title: 'Liberty',
  bio: `
  Pan, once a dedicated cop, finds herself without a sense of purpose. Her precinct removed her from a crucial case due to escalating tensions, leaving her feeling adrift. However, she has now made the decision to assist in the war effort alongside you.
  `,
  rarity: RarityEnum.THREE,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 4.4,
    normalAttack: 503,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 414,
    baseSkillDamage: 414
  } as NewStats,
  skill: {
    name: 'Triple-Tap',
    description:
      'cast a non-isStackable buff on all friendly gunner agents. increases critical rate to 20% and critical damage to 120% for 12 seconds. cooldown: 25',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.criticalRate += 0.2;
              agent.stats.criticalDamage += 1.2;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.criticalRate -= 0.2;
              agent.stats.criticalDamage -= 1.2;
            });
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 25
  } as NewSkill
} as NewAgent;

export const Hitomi = {
  index: 26,
  name: 'Hitomi',
  title: 'Kairos',
  bio: `
  Hitomi, a native of Sohle, joined the SF with a strong desire to safeguard the world's inhabitants in whatever capacity possible. Despite experiencing the tragic loss of her mother and sister during the initial attack, she exhibits remarkable positivity, employing her uplifting nature to uplift the spirits of her fellow soldiers. Her ability to maintain high morale is truly commendable.
  `,
  rarity: RarityEnum.FOUR,
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1603,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1518,
    baseSkillDamage: 1518
  } as NewStats,
  skill: {
    name: 'Cycle of Eternal Pain',
    description: 'increases the attack speed of all agents to 220% for 7 seconds. cooldown: 19',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team.forEach((agent) => (agent.stats.attackSpeed *= 2.2));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team.forEach((agent) => (agent.stats.attackSpeed /= 2.2));
        },
        duration: 7
      } as NewEffect
    ],
    cooldown: 19
  } as NewSkill
} as NewAgent;

export const Cadence = {
  index: 27,
  name: 'Cadence',
  title: 'Cerberus',
  bio: `
  Cadence, with her extensive military experience, upholds the rules and traditions that accompany it with great seriousness. Like many seasoned soldiers, she may appear excessively formal, and her strong personality can be overwhelming at times. Nevertheless, in the midst of war, she is reliable and consistently delivers exceptional results.
  `,
  rarity: RarityEnum.FOUR,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 1084,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 983,
    baseSkillDamage: 983
  } as NewStats,
  skill: {
    name: 'Armament Strike',
    description: 'calls in laser barrage and deals 68821 damage to all monsters. cooldown: 10',
    effects: [{ type: EffectTypeEnum.DOT, duration: 1, interval: 0.125, damage: () => 8603 } as NewEffectDOT],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Uni = {
  index: 28,
  name: 'Uni',
  title: 'Cupid',
  bio: `
  Behind Uni's angelic and virtuous appearance, hides an unexpected arrogance. However, her unrivaled long-range combat skills prevent anyone from openly challenging her. Though no one dares to voice it aloud, a common rumor circulates that Uni joined SF solely to flaunt her superiority.
  `,
  rarity: RarityEnum.FOUR,
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 4,
    normalAttack: 797,
    criticalRate: 0.59,
    criticalDamage: 2.018,
    skillDamage: 754,
    baseSkillDamage: 754
  } as NewStats,
  skill: {
    name: "Archer's Judgement",
    description: 'casts an arrow barrage to deal 86411 damage and stuns for 6 seconds. cooldown: 20',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 86411 } as NewEffectDamage],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Sizuko = {
  index: 29,
  name: 'Sizuko',
  title: 'Reaper',
  bio: `
  Before joining SF, Sizuko primarily worked in solitude at the city's morgue, tending to the deceased. Now, surrounded by fellow soldiers who are very much alive, her demeanor can occasionally appear macabre and morbid. Although unintentional, her peculiarities have led others to perceive her as somewhat strange.
  `,
  rarity: RarityEnum.FOUR,
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 636,
    criticalRate: 0.59,
    criticalDamage: 2.018,
    skillDamage: 604,
    baseSkillDamage: 604
  } as NewStats,
  skill: {
    name: "Mortician's Touch",
    description:
      'throws a soul-scythe, after it attach on the enemy will split into 4 souls, each dealing 36228.1 damage and inducing fear to the enemy for 4 seconds. cooldown: 18',
    effects: [{ type: EffectTypeEnum.DAMAGE, numberOfHits: 4, damage: () => 36228.1 } as NewEffectDamage], // 126,980
    cooldown: 18
  } as NewSkill
} as NewAgent;

export const Chihiro = {
  index: 30,
  name: 'Chihiro',
  title: 'Thresher',
  bio: `
  At first glance, Chihiro may appear as a sweet little girl, but she possesses a vocabulary and personality that matches someone rugged, resilient, and audacious. She serves as a compelling reminder not to judge a book by its cover, as even young girls can possess the capacity to unleash chaos and havoc to an extreme degree.
  `,
  rarity: RarityEnum.FOUR,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 4297,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 3898,
    baseSkillDamage: 3898,
    projectileNumber: 4
  } as NewStats,
  skill: {
    name: 'Shark Bite',
    description:
      'bullets will now penetrate targets. increases attack speed to 715% and modifies damage to 114% for 5 seconds. cooldown: 8',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 7.15;
          agent.stats.normalAttack *= 1.14;
          agent.stats.skillDamage *= 1.14;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 7.15;
          agent.stats.normalAttack /= 1.14;
          agent.stats.skillDamage /= 1.14;
        },
        duration: 5
      } as NewEffect
    ],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const Mei = {
  index: 31,
  name: 'Mei',
  title: 'Amethyst',
  bio: `
  One of the newest cadets in the program, Mei is incredibly enthusiastic about earning the approval of her superiors. She often pushes herself beyond her comfort zone in her eagerness to please. Fearful of failure, she goes to great lengths to ensure she does everything correctly. In the event that your team is labeled as traitors by the government, Mei willingly takes on the task of apprehending you, seemingly delighted by the opportunity.
  `,
  rarity: RarityEnum.FOUR,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1.5,
    normalAttack: 858,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 815,
    baseSkillDamage: 815
  } as NewStats,
  skill: {
    name: 'Ringlets of Death',
    description: 'throws out a chakram, ricocheting onto 4 enemies, dealing 24463 damage to each enemy. cooldown: 12',
    effects: [{ type: EffectTypeEnum.DOT, duration: 0.4, interval: 0.1, damage: () => 24463 } as NewEffectDOT],
    cooldown: 12
  } as NewSkill
} as NewAgent;

export const Riho = {
  index: 32,
  name: 'Riho',
  title: 'Artemis',
  bio: `
  Riho had been training for the Global Soldier Reserve (GSR) even before the alien invasion. Initially, she had concerns that it might turn out to be a mundane occupation, but now she has a compelling reason to put her skills to use against real adversaries. She is determined to demonstrate her capabilities to the world, as well as to the aliens, regardless of her diminutive stature.
  `,
  rarity: RarityEnum.FOUR,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.2,
    normalAttack: 1235,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1018,
    baseSkillDamage: 1018
  } as NewStats,
  skill: {
    name: 'Furious Flurry',
    description:
      'summons a group of giant redhounds at the target location, dealing 76324 damage over 2 seconds. cooldown: 9',
    effects: [{ type: EffectTypeEnum.DOT, duration: 2, interval: 1 / 4, damage: () => 9541 } as NewEffectDOT],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Mitsu = {
  index: 33,
  name: 'Mitsu',
  title: 'Delta',
  bio: `
  Mitsu has long held Sky Fleet in high regard and nurtured a dream of becoming part of the program. Through diligent studying and maintaining impeccable physical condition, she eventually secured a position in the Airspace Defense Bureau. Now living her dream, she is determined to be recognized as a hero by everyone in her hometown and goes to great lengths to raise her profile and make a name for herself.
  `,
  rarity: RarityEnum.FOUR,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1.1,
    normalAttack: 2149,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1949,
    baseSkillDamage: 1949,
    projectileNumber: 4
  } as NewStats,
  skill: {
    name: 'Soaring Strike',
    description: 'shoots mega laser beams dealing 77963 damage. cooldown: 14',
    effects: [{ type: EffectTypeEnum.DOT, duration: 2, interval: 1 / 8, damage: () => 4873 } as NewEffectDOT],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Akina = {
  index: 34,
  name: 'Akina',
  title: 'The Dragon',
  bio: `
  From the very instant her pyrotechnic temple was destroyed, Akina harbored an intense hatred for the aliens. Determined to eradicate any and all foreign lifeforms she encounters, she is driven by an unwavering desire for their destruction. Empowered with formidable firepower, this deity will stop at nothing until every last one of them is annihilated or driven away.
  `,
  rarity: RarityEnum.FOUR,
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.H,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1287,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1223,
    baseSkillDamage: 1223
  } as NewStats,
  skill: {
    name: 'Vengeance of the Sun',
    description:
      'punches out a fire-fist dealing 80727 damage to an area and ignites the enemy for 5 seconds, dealing 1903 damage every seconds. cooldown 9',
    effects: [
      { type: EffectTypeEnum.DAMAGE, damage: () => 80727 } as NewEffectDamage,
      { type: EffectTypeEnum.DOT, duration: 5, interval: 1, damage: () => 1903 } as NewEffectDOT
    ],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Akari = {
  index: 35,
  name: 'Akari',
  title: 'Tinker',
  bio: `
  Akari is a petite girl with a boisterous and brash demeanor. She may come across as crude and lacking in refinement, but her skills as a mechanic are unparalleled. She is one of the most indispensable assets that Starfleet possesses, making it difficult to consider parting ways with her.
  `,
  rarity: RarityEnum.FOUR,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2710,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 2697,
    baseSkillDamage: 2697
  } as NewStats,
  skill: {
    name: 'Riposte',
    description:
      'Summons a damaging circle beneath her feet that inflicts a total of "x" damage in a single second. Afterward, the circle transforms into a healing circle that restores the health of friendly units for an amount equivalent to the default skill damage multiplied by 7000% over a period of three seconds. This skill has a cooldown time of seven seconds. Note that the damage and cooldown time may vary depending on the agent\'s level.',
    effects: [{ type: EffectTypeEnum.DOT, duration: 1, interval: 1 / 8, damage: () => 6776 } as NewEffectDOT],
    cooldown: 7
  } as NewSkill
} as NewAgent;

export const Sayaka = {
  index: 36,
  name: 'Sayaka',
  title: 'Crow',
  bio: `
  Sayaka never had a desire to engage in combat. The mere thought of others getting hurt caused her great anxiety, particularly when it involved her closest friends and loved ones. However, when the call to arms was issued, she felt a profound obligation to utilize her skills in order to protect the Earth from imminent annihilation.
  `,
  rarity: RarityEnum.FOUR,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.H,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1.8,
    normalAttack: 721,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 686,
    baseSkillDamage: 686
  } as NewStats,
  skill: {
    name: 'Omen of Dread',
    description: 'summons 4 lightning birds, each dealing 30682 damage. cooldown: 11',
    effects: [{ type: EffectTypeEnum.DAMAGE, numberOfHits: 4, damage: () => 30682 } as NewEffectDamage],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const Momoko = {
  index: 37,
  name: 'Momoko',
  title: 'Mouse',
  bio: `
  Despite her youthful appearance, Momoko is a highly trained fighter and pilot. She joined the military at a young age and eagerly seized the opportunity to become a member of SF. Above all, she cherishes the sense of belonging and camaraderie that comes with being part of a team.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2160,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2160,
    baseSkillDamage: 2160,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: 'Piercing Bullet',
    description:
      'increases self attack speed to 530% for 4 seconds. bullet adds a penetration and charming effect, which will scare enemy away for 2 seconds. cooldown: 15',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 5.3;
          agent.attackMode = AttackModeEnum.NONE;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 5.3;
          agent.attackMode = AttackModeEnum.NORMAL;
        },
        duration: 4
      } as NewEffect,
      // TODO:
      { type: EffectTypeEnum.DOT, duration: 4, interval: 0.04, damage: () => 432 } as NewEffectDOT
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Meteli = {
  index: 38,
  name: 'Meteli',
  title: 'Nebula',
  bio: `
  The military typically selects individuals with maturity for combat duty, but Meteli defies this norm. Despite her childish nature, she possesses exceptional skills in her field, making her an unexpected participant in the midst of war. Rather than allowing the intensity of the conflict to affect her, she copes by immersing herself in the world of cute and fluffy things, finding solace and distraction in them.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1359,
    baseSkillDamage: 1359
  } as NewStats,
  skill: {
    name: 'Meteorite Missile',
    description:
      'summons a choo-choo train to knock back and deal 78451 damage. having 70% chance reset the skill cooldown to 2 second(s) each time this skill casts. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.DAMAGE,
        damage: (params: EffectParams) => {
          const { agent } = params;

          if (Math.random() < 0.7) {
            agent.skill.cooldown = 2 * 1000; // seconds to ms
          } else {
            agent.skill.cooldown = 10 * 1000; // seconds to ms
          }

          return 86997;
        }
      } as NewEffectDamage
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Hoshiko = {
  index: 39,
  name: 'Hoshiko',
  title: 'Zircon',
  bio: `
  Hoshiko's father, a decorated general in the military, served as her inspiration to join the fight for Earth. However, living in her father's shadow poses a challenge for Hoshiko in establishing her own identity. She yearns for her fellow soldiers to acknowledge and respect her based on her personal achievements rather than simply attributing her success to her father's reputation.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.M,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1613,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 1613,
    baseSkillDamage: 1613
  } as NewStats,
  skill: {
    name: 'Crystalline Kaleidoscope Strike',
    description:
      'cast a isStackable buff on all striker agents, each buff increases attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => {
              agent.stats.attackSpeed *= 1.1;
              agent.stats.normalAttack *= 1.4;
              agent.stats.skillDamage *= 1.4;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => {
              agent.stats.attackSpeed /= 1.1;
              agent.stats.normalAttack /= 1.4;
              agent.stats.skillDamage /= 1.4;
            });
        },
        duration: 24,
        isStackable: true
      } as NewEffect
    ],
    cooldown: 5
  } as NewSkill
} as NewAgent;

export const Feme = {
  index: 40,
  name: 'Feme',
  title: 'Jackal',
  bio: `
  If there's any agent you should exercise caution around, it's Feme. She possesses a sadistic nature that she restrains, aiming to minimize harm to SF's own forces. Surprisingly, some troops even empathize with the aliens when witnessing her fierce battles against them. While war may be a harrowing experience for ordinary humans, Feme perceives it as the grandest of playgrounds, relishing the opportunities it presents.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099
  } as NewStats,
  skill: {
    name: 'Requiem of Pain',
    description:
      'shoot 2 energy bolts from the ancient sphinx cannon, deals normal attack damage with aoe. increases self damage to 460% and critical rate to 1160% for 12 seconds. cooldown: 15',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 4.6;
          agent.stats.skillDamage *= 4.6;
          agent.stats.criticalRate *= 11.6;
          agent.stats.projectileNumber = 2;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 4.6;
          agent.stats.skillDamage /= 4.6;
          agent.stats.criticalRate /= 11.6;
          agent.stats.projectileNumber = 1;
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const NeveX = {
  index: 41,
  name: 'Neve X',
  title: 'Frostbite: Alpha',
  bio: `
  Sky Fleet Medics attended to Neve following a severe battle injury. The procedure was successful, but there are secretive whispers that the encounter with the monsters had an irreversible impact on the agent. While Neve may have exhibited arrogance and coldness in the past, her current demeanor is described as ruthless and unforgiving, surpassing anything seen before. Speculation suggests that the creatures may have altered her DNA at a fundamental level, enhancing her power while distorting her personality.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.L,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 6467,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 6467,
    baseSkillDamage: 6467
  } as NewStats,
  skill: {
    name: 'Avalanche',
    description:
      'deal 10993 damage to all enemies, and slow down to 40% for 3 seconds. all artillery agents critical damage gains an additional 190% for 14 seconds. cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => (agent.stats.criticalDamage += 1.9));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => (agent.stats.criticalDamage -= 1.9));
        },
        duration: 14,
        isStackable: true
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 3, interval: 1 / 8, damage: () => 691 } as NewEffectDOT
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Eiko = {
  index: 42,
  name: 'Eiko',
  title: 'Cottontail',
  bio: `
  Though Eiko possesses skills that rival the best agents in Sky Fleet, she often finds herself plagued by feelings of jealousy towards others. She desires to be constantly in the spotlight and craves recognition for her actions. Some might label her as high maintenance, but to Eiko, it is crucial to be liked by everyone around her.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.F,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2160,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2160,
    baseSkillDamage: 2160,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: 'Volley of the Beast',
    description: 'summon an extraterrestrial attack, dealing 492584.7 damage over 1.5 seconds. cooldown: 9',
    effects: [{ type: EffectTypeEnum.DOT, duration: 1.5, interval: 1 / 8, damage: () => 164194.9 } as NewEffectDOT],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Goi = {
  index: 43,
  name: 'Goi',
  title: 'Ruiner',
  bio: `
  Goi has genuine good intentions, despite often facing unfavorable outcomes. During her training, she struggled with tests involving knowledge, but she excelled rapidly when it came to handling firearms and explosives. Strangely, her streak of bad luck seems to amplify her destructive abilities in combat. If placed on a path towards destruction, Goi becomes a force to be reckoned with, often causing collateral damage along the way.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1.5,
    normalAttack: 1394,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1394,
    baseSkillDamage: 1394,
    projectileNumber: 3
  } as NewStats,
  skill: {
    name: 'Napalm Massacre',
    description:
      'launch 3 grenades in a straight line each dealing 25098 damage and mini stuns for 0.2 seconds. cooldown: 10',
    effects: [{ type: EffectTypeEnum.DAMAGE, numberOfHits: 3, damage: () => 25098 } as NewEffectDamage],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const RihoX = {
  index: 44,
  name: 'Riho X',
  title: 'Artemis: Alpha',
  bio: `
  After a year of serving alongside the Commander, Riho has experienced significant personal growth and maturity. Their bond has strengthened over time, and although Riho continues to face teasing about her short stature, she has learned to embrace it without being bothered. Being a part of Sky Fleet and having comrades around her brings her immense joy. The transformed Riho now exudes kindness and compassion, reflecting the positive changes she has undergone.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1057,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1057,
    baseSkillDamage: 1057,
    projectileNumber: 5
  } as NewStats,
  skill: {
    name: "Hunter's Shot",
    description:
      'summons dozens of the giant redhounds, dealing 9515 damage to all enemies, and increases self attack damage to 189% and attack speed to 276% for 12 seconds. cooldown: 14',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        duration: 12,
        apply: (params: EffectParams) => {
          const { agent } = params;

          agent.stats.attackSpeed *= 2.76;
          agent.stats.normalAttack *= 1.89;
          agent.stats.skillDamage *= 1.89;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 2.76;
          agent.stats.normalAttack /= 1.89;
          agent.stats.skillDamage /= 1.89;
        }
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 2, interval: 1 / 8, damage: () => 315 } as NewEffectDOT
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Setsuna = {
  index: 45,
  name: 'Setsuna',
  title: 'Sabotage',
  bio: `
  The circumstances surrounding Setsuna's inclusion in the SF coalition remain a mystery. She mysteriously appeared one day, claiming to be a member of the Global Soldier Reserve, and her presence was accepted without much inquiry. Setsuna is a reserved individual who prefers to keep to herself and doesn't engage in extensive conversation. However, her combat skills are highly regarded, and she proves to be a valuable asset in direct confrontations. Rumor has it that she underwent training in a covert ninja facility located in another country.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1226,
    baseSkillDamage: 1226
  } as NewStats,
  skill: {
    name: "Blade's Whisper",
    description:
      'listen to the whisper in 7 seconds. self buff 1000% damage. consistently swing out 5 blade beams and ignite enemies for 3310 burn damage every seconds. cooldown: 9',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 10;
          agent.stats.skillDamage *= 10;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 10;
          agent.stats.skillDamage /= 10;
        },
        duration: 7
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 7, interval: 1, damage: () => 3310 } as NewEffectDOT
    ],
    cooldown: 9
  } as NewSkill
} as NewAgent;

export const Hami = {
  index: 46,
  name: 'Hami',
  title: 'Sting',
  bio: `
  Hami is known for her sweet and amiable demeanor, reminiscent of honey. However, she can swiftly transform into a formidable force when provoked. As long as you maintain a positive relationship with her, she will become your trusted and cherished companion. But if you betray her trust, be prepared to face the consequences, as she will stop at nothing to become your worst nightmare. When someone is labeled a traitor by their own people, Hami takes decisive action without hesitation and adds them to her list of targets, without bothering to inquire further.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 0.8,
    normalAttack: 2727,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2727,
    baseSkillDamage: 2727,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: "Hornet's Vengeance",
    description:
      'summon 2 giant bumblebees, each of them shoots out laser beam horizontally to the target dealing 55912 damage to any enemies it hits. cooldown: 8',
    effects: [{ type: EffectTypeEnum.DAMAGE, numberOfHits: 2, damage: () => 55912 } as NewEffectDamage],
    cooldown: 8
  } as NewSkill
} as NewAgent;

export const O = {
  index: 47,
  name: 'O',
  title: 'Andromeda',
  bio: `
  O worked as an assistant in a research facility before being chosen for a classified government experiment. After months of exposure to Alpha energy, she inexplicably gained the power to manipulate energy and particles using only her mind. Empowered by her newfound abilities and driven by a thirst for knowledge, O has taken it upon herself to aid people in their struggle against the monster threat. Additionally, she seeks justice for the prisoners who, like her, were subjected to the experiment.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099,
    projectileNumber: 4
  } as NewStats,
  skill: {
    name: 'Celestial Judgement',
    description:
      'blast out pure energy to any enemies in an area, dealing 79768 damage to any enemies it hits, and increases her critical chance to 16% and critical damage to 64% for 10 seconds. cooldown 11',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.criticalRate += 0.16;
          agent.stats.criticalDamage += 0.64;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.criticalRate -= 0.16;
          agent.stats.criticalDamage -= 0.64;
        },
        duration: 10
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 1, interval: 1 / 8, damage: () => 9971 } as NewEffectDOT
    ],
    cooldown: 11
  } as NewSkill
} as NewAgent;

export const GaiGai = {
  index: 48,
  name: 'Gai Gai',
  title: 'Panda',
  bio: `
  Fiercely independent and fiercely proud, Gai Gai is determined to pursue her own desires without allowing anyone to impede her path. She has developed a mindset where she prioritizes herself above all, even when it comes to dealing with her superiors. Gai Gai possesses unwavering confidence in her combat skills and capabilities, and she refuses to let anyone undermine her position within the Division of Orbital Defense. In her eyes, once someone is labeled a traitor, she believes she is more than capable of fulfilling the task independently.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1308,
    baseSkillDamage: 1308
  } as NewStats,
  skill: {
    name: 'Banishing Blade',
    description: 'cross slash in large area, dealing 147095 damage to any enemies nearby. cooldown: 10',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 147095 } as NewEffectDamage],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Rosalie = {
  index: 49,
  name: 'Rosalie',
  title: 'Lust',
  bio: `
  Rosalie is best described as a hopeless romantic, fervently seeking her soulmate even amidst the chaos of war. She carries a deep fear that if she doesn't find her perfect match soon, she will perish in combat without ever having the chance to meet her one true love. However, her relentless pursuit often makes male agents uncomfortable, as they find her advances to be overly assertive and off-putting.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 3264,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 3264,
    baseSkillDamage: 3264
  } as NewStats,
  skill: {
    name: 'Wrath of the Rose',
    description:
      'cast a stackable buff on all artillery agents. each buff increases the attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => {
              agent.stats.attackSpeed *= 1.1;
              agent.stats.normalAttack *= 1.4;
              agent.stats.skillDamage *= 1.4;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => {
              agent.stats.attackSpeed /= 1.1;
              agent.stats.normalAttack /= 1.4;
              agent.stats.skillDamage /= 1.4;
            });
        },
        duration: 24,
        isStackable: true
      } as NewEffect
    ],
    cooldown: 5
  } as NewSkill
} as NewAgent;

export const Toki = {
  index: 50,
  name: 'Toki',
  title: 'The Witch',
  bio: `
  Interacting with Toki can be challenging, not due to her lack of intelligence, but because she consistently employs sarcasm and insincerity. It becomes a constant guessing game to discern whether she is expressing her true emotions or simply engaging in playful banter. While her physical appearance may be appealing, many agents are hesitant to engage in her word games and perplexing statements. Nevertheless, her undeniable combat prowess is widely recognized.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1624,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1624,
    baseSkillDamage: 1624
  } as NewStats,
  skill: {
    name: "Witch's Curse",
    description:
      'cast a stackable buff on all gunner agents. each buff increases the attack speed to 110% and damage to 140% for 24 seconds. cooldown: 5',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.attackSpeed *= 1.1;
              agent.stats.normalAttack *= 1.4;
              agent.stats.skillDamage *= 1.4;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.attackSpeed /= 1.1;
              agent.stats.normalAttack /= 1.4;
              agent.stats.skillDamage /= 1.4;
            });
        },
        duration: 24,
        isStackable: true
      } as NewEffect
    ],
    cooldown: 5
  } as NewSkill
} as NewAgent;

export const Wu = {
  index: 51,
  name: 'Wu',
  title: 'Emperor',
  bio: `
  Wu spent her formative years on the outskirts of Sohle, honing her survival skills in the rough back alleys and streets of the city. However, what surprises many is that beneath her tough exterior, she possesses an extremely unconventional and provocative personality. This facet of her character often makes others feel uneasy, especially when coupled with her intimate and direct approach to interactions.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 613,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 613,
    baseSkillDamage: 613
  } as NewStats,
  skill: {
    name: 'Jungle Drums',
    description:
      'release the jungle emperor power, attack will explode with 5 small aoe and increases self normal attack damage to 1035% for 11 seconds. also all striker agents critical rate gains an additional 30% for 4 seconds. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 10.35;
          agent.stats.projectileNumber = 5;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 10.35;
          agent.stats.projectileNumber = 1;
        },
        duration: 11
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => (agent.stats.criticalRate += 0.3));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => (agent.stats.criticalRate -= 0.3));
        },
        duration: 4
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const ZiLong = {
  index: 52,
  name: 'Zi Long',
  title: 'Leviathan',
  bio: `
  Zi Long doesn't necessarily come across as rude, but rather she is assertive in pursuing what she desires and refuses to let anything obstruct her path. Whether it involves formulating a battle strategy or securing a seat in the ship's mess hall, she is determined to assert her entitlement. Those who dare to oppose her or deny her requests should brace themselves, as Zi Long shows no mercy in dealing with such resistance. Furthermore, if the government designates someone as a threat, they can expect to become the next target on Zi Long's list.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.I,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 2.1,
    normalAttack: 1149,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1088,
    baseSkillDamage: 1088,
    projectileNumber: 4
  } as NewStats,
  skill: {
    name: "Dragon's Claw",
    description:
      'enters true dragon form which increases self attack speed to 520% for 11 seconds. also increases normal damage to 133% for all gunner agents in the team for 15 seconds. cooldown: 14',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 5.2;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 5.2;
        },
        duration: 11
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => (agent.stats.normalAttack *= 1.33));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => (agent.stats.normalAttack /= 1.33));
        },
        duration: 15
      } as NewEffect
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Ari = {
  index: 53,
  name: 'Ari',
  title: 'Blood Lizard',
  bio: `
  Ari harbors an intense hatred towards Shiko, considering it the most abhorrent thing in the world. Once closely aligned as allies during the genetic enhancement program in the Sohle laboratories, their relationship turned sour, prompting them to vow vengeance against one another. In the context of working together in Zeth, Ari reluctantly tolerates their cooperation, but her primary motivation lies in indulging her penchant for violence and combat. With exceptional proficiency in these areas, Ari relishes in deviating from conventional approaches, displaying a fearlessness towards the chaotic and messy outcomes that may ensue.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.ZETH,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1050,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 1050,
    baseSkillDamage: 1050
  } as NewStats,
  skill: {
    name: 'Song of the Demon',
    description:
      'Throw out 4 of her lizard swords, each deals 4724 damage to the enemy increases self damage to (1 + any agents on the battlefield, except support) * 34% for 15 seconds. cooldown: 14',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent, team } = params;
          const non_support_num = team.filter((agent) => agent.class !== ClassEnum.SUPPORT).length;
          agent.stats.normalAttack *= 1 + non_support_num * 0.34;
          agent.stats.skillDamage *= 1 + non_support_num * 0.34;
        },
        remove: (params: EffectParams) => {
          const { agent, team } = params;
          const non_support_num = team.filter((agent) => agent.class !== ClassEnum.SUPPORT).length;
          agent.stats.normalAttack /= 1 + non_support_num * 0.34;
          agent.stats.skillDamage /= 1 + non_support_num * 0.34;
        },
        duration: 15
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 1, interval: 1 / 4, damage: () => 4724 } as NewEffectDOT
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Chia = {
  index: 54,
  name: 'Chia',
  title: 'Nora Kun',
  bio: `
  In the early 21st century, there was an ordinary feral cat that became infected with a plague. Surprisingly, this virus had no adverse effects on the cat's species. However, when the virus mutated into a strain called "chi," some individuals within the species began to exhibit increased intelligence and grew to enormous sizes. They even started giving each other names.
  Among them, there was a colossal cat named Chia, who possessed a unique ability to fish from the void, providing sustenance for the entire species. Chia's emergence marked the end of the virus's influence.
  After many years had passed, Chia was discovered residing in the remnants of the old world. Curiously, the SF team expressed a strong desire to recruit her, despite the absence of a clear reason for doing so.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.MEOW,
  cupSize: CupSizeEnum.H, // healthy?
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2236,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2160,
    baseSkillDamage: 2160
  } as NewStats,
  skill: {
    name: 'Fishing of the void',
    description:
      'concentrate on fishing for 10 seconds, continuously catching whales and smash that to the enemies face in small area that deals skill damage. increases self damage to 750%, increases gunner attack rate to 130% and damage to 170%. cooldown: 13',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.SKILL;
          agent.stats.normalAttack *= 7.5;
          agent.stats.skillDamage *= 7.5;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NORMAL;
          agent.stats.normalAttack /= 7.5;
          agent.stats.skillDamage /= 7.5;
        },
        duration: 10
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.attackSpeed *= 1.3;
              agent.stats.normalAttack *= 1.7;
              agent.stats.skillDamage *= 1.7;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.attackSpeed /= 1.3;
              agent.stats.normalAttack /= 1.7;
              agent.stats.skillDamage /= 1.7;
            });
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 13
  } as NewSkill
} as NewAgent;

export const Shiko = {
  index: 55,
  name: 'Shiko',
  title: 'Dragonfly',
  bio: `
  Shiko emerged as one of the accomplished products of the Sohle laboratories, meticulously designed to embody the epitome of an agent. With unmatched intelligence and strategic prowess, she confidently showcases her exceptional abilities. Initially, Ari was intended to be her combat partner, but unforeseen circumstances led them to part ways, each harboring a determination to bring an end to the other. However, their paths converged once again within Zeth, as Shiko perceived herself as too intellectually superior to be embraced by the human race.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.ZETH,
  cupSize: CupSizeEnum.L,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 2434,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 2434,
    baseSkillDamage: 2434
  } as NewStats,
  skill: {
    name: 'Atomic Prowess: Sword Strike',
    description: 'increases self attack speed to 450% and damage to 230% for 11 seconds. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 4.5;
          agent.stats.normalAttack *= 2.3;
          agent.stats.skillDamage *= 2.3;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 4.5;
          agent.stats.normalAttack /= 2.3;
          agent.stats.skillDamage /= 2.3;
        },
        duration: 11
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Kaja = {
  index: 56,
  name: 'Kaja',
  title: 'Shepherd',
  bio: `
  When it comes to infiltration and intelligence gathering, Kaja is unmatched in her effectiveness. Despite her youthful appearance, she skillfully utilizes her innocent and youthful demeanor to deceive adversaries, often tricking them into perceiving her as an ordinary civilian. While she can exude an endearing sweetness that matches her looks, there is a prevailing sense of wariness among others, recognizing her proficiency as a skilled and adept liar.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 3264,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 3264,
    baseSkillDamage: 3264,
    projectileNumber: 2
  } as NewStats,
  skill: {
    name: "Shepherd's Call",
    description:
      'summon all of her 16 little lambs, the lambs will charge forward as triangulate formation, deals 82354 damage and stun the enemies for 3 seconds. cooldown: 15',
    effects: [{ type: EffectTypeEnum.DOT, duration: 0.48, interval: 0.03, damage: () => 14613 } as NewEffectDOT],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Bia = {
  index: 57,
  name: 'Bia',
  title: 'Halo',
  bio: `
  Bia's upbringing within a devoutly religious family instilled in her a profound adherence to a strict moral code. Throughout her life, she remained dedicated to these values. Upon joining Sky Fleet, her unwavering principles remained intact, rendering her a highly disciplined agent who adamantly refuses to comply with orders that conflict with her beliefs. Commanding officers face challenges in collaborating with her, as she possesses a stoic demeanor and exhibits resistance to change. However, due to her exceptional strength and prowess, it becomes arduous to dismiss her from service.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.DOD,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1160,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 1160,
    baseSkillDamage: 1160
  } as NewStats,
  skill: {
    name: "Fate's Hand: Retribution",
    description:
      "trigger the fate's hand for 6 seconds, increases self skill damage to 2400% and eject all of her daggers. cooldown: 10",
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.skillDamage *= 24;
          agent.attackMode = AttackModeEnum.NONE;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.skillDamage /= 24;
          agent.attackMode = AttackModeEnum.NORMAL;
        },
        duration: 6
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 6, interval: 1 / 8, damage: () => 155.2 } as NewEffectDOT
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Eri = {
  index: 58,
  name: 'Eri',
  title: 'Phaze',
  bio: `
  There is no doubt about Eri's exceptional intellect. Even at a young age, she exhibited prodigious technological aptitude, surpassing the IQ scores of professors at esteemed universities worldwide. However, in the current war setting, Eri finds herself compelled to share her knowledge with her fellow agents. Regrettably, a significant portion of the time, her advanced explanations and concepts are met with limited comprehension, leaving her frustrated by the communication gap.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.F,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1.5,
    normalAttack: 1440,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1440,
    baseSkillDamage: 1440
  } as NewStats,
  skill: {
    name: "It's all in the science",
    description: 'fire a total of 9 piercing bullets in a wide arc, each dealing 10298 damage. cooldown: 14',
    effects: [{ type: EffectTypeEnum.DAMAGE, numberOfHits: 9, damage: () => 10298 } as NewEffectDamage],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Kiyomi = {
  index: 59,
  name: 'Kiyomi',
  title: 'Shimmer',
  bio: `
  If you ever seek a direct and unfiltered response or opinion, Kiyomi is the person to approach. She possesses a straightforward nature, offering transparency and an honesty that surpasses the comfort zone of many individuals. Kiyomi firmly believes that it is futile to feel ashamed or hesitant about expressing her opinions. As a result, she will readily share her thoughts with you at any given moment, sparing you the need to speculate or question what might be going through her mind.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1226,
    baseSkillDamage: 1226
  } as NewStats,
  skill: {
    name: 'Transparency: Crystal Lance',
    description:
      'summon a self buff for 12 seconds, increases self attack speed by 580% and self critical rate by 210%, also apply knockback and slow effect on normal attack. cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 5.8;
          agent.stats.criticalRate *= 2.1;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 5.8;
          agent.stats.criticalRate /= 2.1;
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Musuna = {
  index: 60,
  name: 'Musuna',
  title: 'Ruby',
  bio: `
  Musuna isn't accustomed to engaging directly in battlefield confrontations. Her primary role has been focused on infiltration and carrying out stealth missions. However, as the war escalates and spreads throughout the entire planet, she finds herself thrust into a situation where engaging in combat becomes unavoidable. Despite being regarded by many as skittish and lacking value in combat, Musuna demonstrates remarkable resilience and determination when pushed into a corner. When faced with no alternative, she fights fiercely for her life, utilizing every ounce of her strength and abilities.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2236,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2160,
    baseSkillDamage: 2160
  } as NewStats,
  skill: {
    name: 'Shuriken Strike',
    description:
      'increases self attack speed to 635% and attack damage to 260% for 3 seconds. bullet adds a penetration, slow and burn effect, slow enemy to 80% and ignite the enemy for 4 seconds, dealing 4537 burn damage every seconds. cooldown: 15',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 6.35;
          agent.stats.normalAttack *= 2.6;
          agent.stats.skillDamage *= 2.6;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 6.35;
          agent.stats.normalAttack /= 2.6;
          agent.stats.skillDamage /= 2.6;
        },
        duration: 3
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 4, interval: 1, damage: () => 4537 } as NewEffectDOT
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Windy = {
  index: 61,
  name: 'Windy',
  title: 'Death Wing',
  bio: `
  Nothing frightens a woman like Windy. She has endured countless hardships that no longer affect her in the slightest. In times of war, there is no room for concern about delicate and adorable matters. Even a momentary lapse in vigilance can result in death, and Windy is acutely aware of this. You will never catch her taking breaks; she remains focused on her responsibilities at all times.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2085,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 2085,
    baseSkillDamage: 2085
  } as NewStats,
  skill: {
    name: 'Shuriken Strike',
    description:
      'bullets will now penetrate targets and deals skill damage. increases attack speed to 200% and increases damage to 380% for 12 seconds. cooldown: 14',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.SKILL;
          agent.stats.attackSpeed *= 2;
          agent.stats.normalAttack *= 3.8;
          agent.stats.skillDamage *= 3.8;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NORMAL;
          agent.stats.attackSpeed /= 2;
          agent.stats.normalAttack /= 3.8;
          agent.stats.skillDamage /= 3.8;
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Kotaru = {
  index: 62,
  name: 'Kotaru',
  title: 'Fire Fly',
  bio: `
  Coming from a poor family, Kotaru strongly disapproves of the idea of squandering money. Additionally, she refuses to tolerate being exploited or undervalued in her work. While she acknowledges the impending peril that threatens the world and the potential loss of countless lives, she questions the compensation that accompanies such a perilous task. Not only does she prioritize financial matters, but her personal enjoyment holds significant importance to her as well. In fact, one might argue that it occupies an excessively prominent place in her priorities.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.I,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2160,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2160,
    baseSkillDamage: 2160
  } as NewStats,
  skill: {
    name: 'Blistering Heat Wave',
    description:
      'enter request pay raise mode, doing more kick than usual. increase self normal attack damage to 480% and critical rate to 1160% for 13 seconds. cooldown: 23',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 4.8;
          agent.stats.criticalRate *= 11.6;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 4.8;
          agent.stats.criticalRate /= 11.6;
        },
        duration: 13
      } as NewEffect
    ],
    cooldown: 23
  } as NewSkill
} as NewAgent;

export const Karry = {
  index: 63,
  name: 'Karry',
  title: 'Stardust',
  bio: `
  Karry, hailing from Phobo, a distant planet visited by the Sky Fleet, possesses a deep affection for nature but harbors a strong dislike for humans. Utilizing her magical abilities, she dedicates herself to preserving and safeguarding the environment. When Zeth's plan to unleash a substantial amount of Alpha energy onto her planet is revealed, it sparks an intense fury within her. Determined to prevent this calamity, she is willing to go to any lengths necessary to thwart their efforts.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.NONE,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 3264,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 3264,
    baseSkillDamage: 3264
  } as NewStats,
  skill: {
    name: "Nature's Call",
    description:
      'increase skill damage to all agents with D cup breast size or smaller to 120% for 4 seconds. also flings out 16 penetrating meteor hearts in anti-clockwise pattern, each deal 2144.6 damage. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team.filter((agent) => agent.cupSize <= CupSizeEnum.D).forEach((agent) => (agent.stats.skillDamage *= 1.2));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team.filter((agent) => agent.cupSize <= CupSizeEnum.D).forEach((agent) => (agent.stats.skillDamage /= 1.2));
        },
        duration: 4
      } as NewEffect,
      { type: EffectTypeEnum.DAMAGE, numberOfHits: 16, damage: () => 6120 } as NewEffectDamage
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Sato = {
  index: 64,
  name: 'Sato',
  title: 'Chimera',
  bio: `
  Unlike many of her fellow team members, Sato was not specifically created to be a monster. She was born with an extraordinary level of strength that exceeded that of an average human. However, when people failed to acknowledge her superiority, it greatly angered her. In response, she made a solemn vow to ensure that anyone who belittled her would face consequences and pay for their actions in whatever manner she deemed fit.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.ZETH,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1226,
    baseSkillDamage: 1226
  } as NewStats,
  skill: {
    name: 'Heretic Shredder',
    description:
      'each Zeth member give 33% of damage to every Zeth member for 6 seconds. her heretic shoots out 9 lazer beams, each beam deals 25107 damage. cooldown: 12',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          const zeth_member = team.filter((agent) => agent.organization === OrganizationEnum.ZETH);
          const zeth_member_num = zeth_member.length;
          zeth_member.forEach((agent) => {
            agent.stats.normalAttack *= 1 + 0.33 * zeth_member_num;
            agent.stats.skillDamage *= 1 + 0.33 * zeth_member_num;
          });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          const zeth_member = team.filter((agent) => agent.organization === OrganizationEnum.ZETH);
          const zeth_member_num = zeth_member.length;
          zeth_member.forEach((agent) => {
            agent.stats.normalAttack /= 1 + 0.33 * zeth_member_num;
            agent.stats.skillDamage /= 1 + 0.33 * zeth_member_num;
          });
        },
        duration: 6
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 3, interval: 1, damage: () => 3 * 18877.5 } as NewEffectDOT
    ],
    cooldown: 12
  } as NewSkill
} as NewAgent;

export const Victoria = {
  index: 65,
  name: 'Victoria',
  title: 'Vampire',
  bio: `
  During her early years, Victoria endured a childhood marred by cruel scientists who subjected her to inhumane experiments in their quest to create a superhuman. However, their efforts ended in failure when the mutations performed on her proved unsuccessful and resulted in the death of all the researchers. Consumed by anger towards the world that had shaped her in such a way, Victoria decided to join Kura's team with the intent of inflicting harm on as many people as possible.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.ZETH,
  cupSize: CupSizeEnum.H,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 613,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 613,
    baseSkillDamage: 613
  } as NewStats,
  skill: {
    name: "Dracula's Wrath",
    description:
      'swing a cross scythe that deals 98063 damage on the target area for 16 seconds. increase the damage of all striker agents to 15% (+5% for each support on the battlefield) for 7 seconds. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          const support_num = team.filter((agent) => agent.class === ClassEnum.SUPPORT).length;
          const damage_buff = 1.15 + support_num * 0.05;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => {
              agent.stats.normalAttack *= damage_buff;
              agent.stats.skillDamage *= damage_buff;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          const support_num = team.filter((agent) => agent.class === ClassEnum.SUPPORT).length;
          const damage_buff = 1.15 + support_num * 0.05;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => {
              agent.stats.normalAttack /= damage_buff;
              agent.stats.skillDamage /= damage_buff;
            });
        },
        duration: 7,
        isStackable: true
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 16, interval: 0.38, damage: () => 2451.3 } as NewEffectDOT
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Laura = {
  index: 66,
  name: 'Laura',
  title: 'Tempest',
  bio: `
  Laura was discovered in a severely injured state and promptly transported to the hospital. The circumstances surrounding her condition remain unknown, leaving everyone astonished at her ability to endure such a traumatic experience.
  In addition to her astounding physical resilience, Laura possesses captivating qualities and an air of enigma. As a result, many individuals find themselves drawn to her, intrigued by both her remarkable attributes and the mysteries that surround her life.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.ADB,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 613,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 680,
    baseSkillDamage: 680
  } as NewStats,
  skill: {
    name: 'Defensive Anchor: Ultimate Shielding',
    description:
      'enter the ultimate mode, increases self skill damage to 1200% for 11 seconds. everytime Laura enter the ultimate mode, she will cast a global stackable protection to the team which block normal attack for (base skill damage * 13%) times. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.SKILL;
          agent.stats.skillDamage *= 12;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NORMAL;
          agent.stats.skillDamage /= 12;
        },
        duration: 11
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Kura = {
  index: 67,
  name: 'Kura',
  title: 'Imp',
  bio: `
  Fed up with the constant disappointments of being an ordinary agent, Kura took matters into her own hands and assembled a team comprising of powerful and discontented warriors. Their primary objective is to seize the Alpha Stone, intending to use its power to elevate themselves to the status of gods. Alternatively, if their plan fails, they are willing to resort to destroying the world and annihilating all its inhabitants. Kura's sole concern revolves around her own interests, displaying a complete disregard for the well-being of her teammates, whom she considers expendable.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.ZETH,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099
  } as NewStats,
  skill: {
    name: "Hell's Gate: Alpha Enhanced",
    description: 'summons three thunder beams from her trident for 8 seconds, total dealing 25190 damage. cooldown: 3',
    effects: [{ type: EffectTypeEnum.DOT, duration: 8, interval: 1, damage: () => 25190 / 8 } as NewEffectDOT],
    cooldown: 3
  } as NewSkill
} as NewAgent;

export const Ne = {
  index: 68,
  name: 'Ne',
  title: 'Berserk',
  bio: `
  Ne grew up in a secluded region of the world that adhered to age-old customs and occupations. While she may give off an impression of being gentle and amiable, the moment she enters combat, she transforms into an unrecognizable force of fury.
  Both adversaries and comrades would be wise to steer clear of her path, as anyone who crosses her will experience the full destructive force of her mighty battle axe.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1226,
    baseSkillDamage: 1226
  } as NewStats,
  skill: {
    name: "Berserker's Fury",
    description:
      'release all of the fury, dive into the berserker mode and throw out all of her axe to deal skill damage. increase self attack speed to 200%, damage to 900% and enlarger her attack range 2.5 for 10 seconds. cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.SKILL;
          agent.stats.attackSpeed *= 2;
          agent.stats.normalAttack *= 9;
          agent.stats.skillDamage *= 9;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NORMAL;
          agent.stats.attackSpeed /= 2;
          agent.stats.normalAttack /= 9;
          agent.stats.skillDamage /= 9;
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Uta = {
  index: 69,
  name: 'Uta',
  title: 'Cathedral',
  bio: `
  Uta asserts that she has never experienced emotions throughout her entire life. However, many people harbor doubts about her claim for various reasons. The only emotion she outwardly displays is anger, which she channels to bolster her strength during battles. Due to her consistently negative demeanor, many agents within the organization prefer to keep their distance from her. Nevertheless, it is reasonable to believe that deep down, Uta possesses a compassionate heart.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 2452,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2452,
    baseSkillDamage: 2452
  } as NewStats,
  skill: {
    name: 'Aura of Light',
    description:
      'go into holy light mode for 10 seconds, increase self attack rate to 500% and critical damage to 1000%. begin to smash the ground around herself with skill damage. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.SKILL;
          agent.stats.attackSpeed *= 5;
          agent.stats.criticalDamage *= 10;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NORMAL;
          agent.stats.attackSpeed /= 5;
          agent.stats.criticalDamage /= 10;
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Midori = {
  index: 70,
  name: 'Midori',
  title: 'Hopper',
  bio: `
  Midori's life has been characterized by constant turbulence and indecisiveness. She frequently changes her mind and mood, making it challenging to discern her true emotions. In one moment, she may seem content and joyful, but in the next, even a minor misstep could provoke a fierce and unpredictable reaction.
  Despite her unpredictable nature, there's no denying that Midori is an imposing warrior. Her formidable skills and prowess in battle are undeniable, earning her respect in that regard.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.J,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2145,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 2145,
    baseSkillDamage: 2145
  } as NewStats,
  skill: {
    name: 'Lashing Tongue',
    description:
      'shift her phase from electron world and release all of her electron to enemy that deals skill damage. increase self attack speed to 200%, damage to 500% for 7 seconds. cooldown: 15',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 2;
          agent.stats.normalAttack *= 5;
          agent.stats.skillDamage *= 5;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 2;
          agent.stats.normalAttack /= 5;
          agent.stats.skillDamage /= 5;
        },
        duration: 7
      } as NewEffect
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Sera = {
  index: 71,
  name: 'Sera',
  title: 'Zephyr',
  bio: `
  Sera, known for her fondness for pranks and tricks, is often regarded as a mischievous troublemaker by the residents of Celestis. However, despite this reputation, she genuinely cares about the well-being of those in her city. She extends her concern even to humans, who face prejudice on her planet. Sera is resolute in her determination to protect her planet from the threats posed by Kura and Zeth.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.NONE,
  cupSize: CupSizeEnum.D,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 3264,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 3264,
    baseSkillDamage: 3264
  } as NewStats,
  skill: {
    name: 'Breath of the Wind',
    description:
      'cast a non-stackable buff on all friendly agents. add (Sera skill damage * 25%) damage on each hits for 14 seconds. cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { agent: Sera, team } = params;
          team
            .filter((agent) => agent.name !== 'Sera')
            .forEach((agent) => {
              agent.stats.normalAttack += Sera.stats.skillDamage * 0.25;
              agent.stats.skillDamage += Sera.stats.skillDamage * 0.25;
            });
        },
        remove: (params: EffectParams) => {
          const { agent: Sera, team } = params;
          team
            .filter((agent) => agent.name !== 'Sera')
            .forEach((agent) => {
              agent.stats.normalAttack -= Sera.stats.skillDamage * 0.25;
              agent.stats.skillDamage -= Sera.stats.skillDamage * 0.25;
            });
        },
        duration: 14
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Livia = {
  index: 72,
  name: 'Livia',
  title: 'Majesty',
  bio: `
  Regardless of the fact that Livia is a whale, her exceptional abilities as a strategist and combat veteran make her indispensable to the war effort. While it may seem unusual, she refuses to allow the subtle discrimination against her species to hinder her commitment to protecting others. Livia gracefully handles the differing treatment and remains focused on the ultimate objective at hand.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.WIO,
  cupSize: CupSizeEnum.J,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2145,
    criticalRate: 0.69,
    criticalDamage: 2.018,
    skillDamage: 2145,
    baseSkillDamage: 2145
  } as NewStats,
  skill: {
    name: 'Call of the Whale',
    description:
      'shoot out a transonic tsunami wave towards to enemies dealing 85815 damage. having a 75% chance to reset the skill cooldown to 2 seconds everytime this skill casts. cooldown: 14',
    effects: [
      {
        type: EffectTypeEnum.DAMAGE,
        damage: (params: EffectParams) => {
          const { agent } = params;

          if (Math.random() < 0.75) {
            agent.skill.cooldown = 2 * 1000; // seconds to ms
          } else {
            agent.skill.cooldown = 14 * 1000; // seconds to ms
          }

          return 85815;
        }
      } as NewEffectDamage
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const ReiJK = {
  index: 73,
  name: 'Rei JK',
  title: 'Sabertooth: Beta',
  bio: `
  Rei, even in her youth, has always possessed intelligence and charm. Nothing seems to faze her, and she consistently commands respect from even her senior colleagues. Everyone is well aware not to underestimate her, as she consistently proves them wrong.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.I,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1057,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1057,
    baseSkillDamage: 1057
  } as NewStats,
  skill: {
    name: 'Vanquishing school bag',
    description:
      'enters jk rage mode, school bag will explode with small aeo and increases self normal attack damage to 660% for 12 seconds. also increases critical rate by 40% for all artillery agents in the team for 5 seconds. cooldown: 15',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 6.6;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 6.6;
        },
        duration: 12
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => (agent.stats.criticalRate += 0.4));
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => (agent.stats.criticalRate -= 0.4));
        },
        duration: 5
      } as NewEffect
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Rei = {
  index: 74,
  name: 'Rei',
  title: 'Sabertooth',
  bio: `
  Rei, an officer in the Global Soldier Reserve (GSR), embodies a serious and no-nonsense demeanor. She seldom shows any signs of a smile and possesses a strong impatience. She isn't particularly enthusiastic about your lack of experience as a Commander either. Her sole objective is to bring an end to the ongoing war, and she perceives you as more of a hindrance than a valuable asset.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.I,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 2,
    normalAttack: 1057,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1057,
    baseSkillDamage: 1057
  } as NewStats,
  skill: {
    name: 'Bite of the Sabertooth',
    description: 'shoots multiple laser beams dealing 25373.9 damage. cooldown: 10',
    effects: [{ type: EffectTypeEnum.DAMAGE, damage: () => 25374 } as NewEffectDamage],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Amikam = {
  index: 75,
  name: 'Amikam',
  title: 'Penance',
  bio: `
  Amikam was expelled from her convent due to her mischievous nature. Now, she seeks a worthwhile endeavor to devote her skills and services to. With her proficiency in handling firearms and her ability to deliver both compliments and punishments, she aims to bring justice to those she deems sinful.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099
  } as NewStats,
  skill: {
    name: 'Vanquish The Sinners',
    description:
      'attack rapidly, penetrate targets and disperse in a narrow angle. also increases self attack damage to 262%, attack speed to 200%  and critical rate to 37% for 12 seconds. cooldown: 14',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 2;
          agent.stats.criticalRate += 0.37;
          agent.stats.normalAttack *= 2.62;
          agent.stats.skillDamage *= 2.62;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 2;
          agent.stats.criticalRate -= 0.37;
          agent.stats.normalAttack /= 2.62;
          agent.stats.skillDamage /= 2.62;
        },
        duration: 12
      } as NewEffect
    ],
    cooldown: 14
  } as NewSkill
} as NewAgent;

export const Iizuna = {
  index: 76,
  name: 'Iizuna',
  title: 'Kitsune',
  bio: `
  Iizuna strives to be a dutiful Fujo, giving her best effort, although some days it proves to be challenging. The ongoing war serves as a convenient distraction for her. Perhaps indulging in activities unrelated to being a Fujo will help her become more proficient once the fighting comes to an end.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.F,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099
  } as NewStats,
  skill: {
    name: 'Fox Fire: Inferno',
    description:
      'cast jujutsu for 10 seconds, throw the knife quadruple than usual, deals with skill damage, increase critical rate and critical damage to 30% for all artillery agents in the team and increase self damage to 860%. cooldown: 15',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NONE;
          agent.stats.normalAttack *= 8.6;
          agent.stats.skillDamage *= 8.6;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.attackMode = AttackModeEnum.NORMAL;
          agent.stats.normalAttack /= 8.6;
          agent.stats.skillDamage /= 8.6;
        },
        duration: 10
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => {
              agent.stats.criticalRate += 0.3;
              agent.stats.criticalDamage += 0.3;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => {
              agent.stats.criticalRate -= 0.3;
              agent.stats.criticalDamage -= 0.3;
            });
        },
        duration: 10
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 9, interval: 1 / 8, damage: () => 524.7 } as NewEffectDOT // TODO: 10 seconds but 1 sec animation
    ],
    cooldown: 15
  } as NewSkill
} as NewAgent;

export const Tsurumi = {
  index: 77,
  name: 'Tsurumi',
  title: 'Bakoninnin',
  bio: `
  Tsurumi was raised and educated in a ninja village, where the rigorous training regimen molded her into a formidable assassin. However, she lacks any understanding of how to navigate the complexities of the modern world.
  Having never left the village since birth, Tsurumi's village elder insists that she venture out into the world accompanied by her ninja pet. This journey aims to expose her to different experiences and modern training methods, with the hope that she will acquire valuable knowledge and bring it back to the village.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.RSA,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 4336,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 4336,
    baseSkillDamage: 4336
  } as NewStats,
  skill: {
    name: 'Ninjutsu of crane: Thousand Scythe',
    description:
      'increases self attack speed to 400% and attack damage to 121% for 10 seconds. sickle will penetrate through enemy. cooldown: 13',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 4;
          agent.stats.normalAttack *= 1.21;
          agent.stats.skillDamage *= 1.21;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 4;
          agent.stats.normalAttack /= 1.21;
          agent.stats.skillDamage /= 1.21;
        },
        duration: 10
      } as NewEffect
    ],
    cooldown: 13
  } as NewSkill
} as NewAgent;

export const Mora = {
  index: 78,
  name: 'Mora',
  title: 'Eureka',
  bio: `
  Before New Dellum was built, Mora went by the alias Etsu Yakumora and served as an agent in Dellum Security. During that period, there was a project focused on dimensional jumping. However, before the project could be finalized, Mora mysteriously vanished.
  After a rupture occurred in the time-invariant transcendental space known as Y, Mora unexpectedly reappeared in the New Dellum Security. She revealed that she had been working for the Dimension Administration Bureau for several years. Having now found Noa, she made the decision to immediately join the SF team.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.DAB,
  cupSize: CupSizeEnum.F,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 3592,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 3264,
    baseSkillDamage: 3264
  } as NewStats,
  skill: {
    name: 'Nanobot Catalyst',
    description:
      'anything in contract with the nanobot catalyst will expose their weakness for 0.5 seconds. spread out nanobot catalyst around herself for 20 seconds. withing that first 7 seconds, Mora will throw nanobot catalyst more frequently and increase damage to 4200%. cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.DEBUFF,
        apply: (params: EffectParams) => {
          const { target } = params;
          target.weaknessMultiplier *= 1.75;
        },
        remove: (params: EffectParams) => {
          const { target } = params;
          target.weaknessMultiplier /= 1.75;
        },
        duration: 20
      } as NewEffect,
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 42;
          agent.stats.skillDamage *= 42;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 42;
          agent.stats.skillDamage /= 42;
        },
        duration: 7
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 20, interval: 1 / 2, damage: () => 1.5 } as NewEffectDOT,
      { type: EffectTypeEnum.DOT, duration: 20, interval: 1, damage: () => 86.5 } as NewEffectDOT
      // { type: EffectTypeEnum.DOT, duration: 7, interval: 1 / 4, damage: () => 909 } as NewEffectDOT
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Masamune = {
  index: 79,
  name: 'Masamune',
  title: 'Bontenmaru',
  bio: `
  Masamune was born into a historic samurai family and was a pure-blooded samurai. She possesses an open mind and exemplifies unwavering loyalty as a courtier. Her swordsmanship continues to evolve, and her utilization of state-of-the-art technology equipment has enabled her to become the strongest swordswoman. Very few individuals in the world can match her in combat.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.RSA,
  cupSize: CupSizeEnum.H,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1457,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1226,
    baseSkillDamage: 1226
  } as NewStats,
  skill: {
    name: 'Seven blades',
    description:
      'pull out all of her blades in a flash for 10 seconds. enlarge her attack range 2.5, increase her damage to 1800%. cooldown: 20',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        duration: 10,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 18;
          agent.stats.skillDamage *= 18;
          agent.stats.projectileNumber = 4;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 18;
          agent.stats.skillDamage /= 18;
          agent.stats.projectileNumber = 1;
        }
      } as NewEffect
    ],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Chloe = {
  index: 80,
  name: 'Chloe',
  title: 'Dunkel Segnen',
  bio: `
  Since her early years, Chloe has been recognized for her exceptional intelligence. She spent her entire childhood residing in an orphanage, until the House of Plantagenet took notice of her and provided training, transforming her into a proud warrior. Very little is known about her life before the orphanage, leading some to speculate that she might be a princess from a long-lost kingdom.
  Having faced numerous hardships and challenges during her formative years, Chloe developed a determined mindset that thrives on victory. She strives to excel in everything she does and always seeks to come out on top. Nevertheless, she remains committed to supporting the orphanage by regularly sending food and resources.
  While Chloe may sometimes appear frivolous and conceited, beneath her exterior lies a warm-hearted personality.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.RSA,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099
  } as NewStats,
  skill: {
    name: 'Abyssal Pilgrimage',
    description:
      'dive into darkness, bring it with the deepest power. cast a stackable buff, increase damage to 200% and increase all artillery agents damage to 110% for 24 seconds. cooldown: 10',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 2;
          agent.stats.skillDamage *= 2;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 2;
          agent.stats.skillDamage /= 2;
        },
        duration: 24,
        isStackable: true
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => {
              agent.stats.normalAttack *= 1.1;
              agent.stats.skillDamage *= 1.1;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.ARTILLERY)
            .forEach((agent) => {
              agent.stats.normalAttack /= 1.1;
              agent.stats.skillDamage /= 1.1;
            });
        },
        duration: 24,
        isStackable: true
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Tyrla = {
  index: 81,
  name: 'Tyrla',
  title: 'Armstrong',
  bio: `
  Tyrla spent her childhood in the Santriel Underground City (SUC), and life there was far from ideal. The living conditions in the SUC were unfavorable. To support herself and work towards curing her sister, she turned to dancing as her means of income.
  Through relentless dedication, Tyrla combined her dancing abilities with her combat skills, creating her own unique style of combat dance. Over the years, her combat dance evolved into a lethal yet elegant art form. Despite her success, Tyrla continues to perform in the SUC while also recently joining the Trajectory Academic Parliament. Her goal is to acquire more knowledge and save enough money to cure her sister's illness.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.TAP,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099,
    projectileNumber: 16
  } as NewStats,
  skill: {
    name: 'Kuchipudi',
    description:
      'Tyrla begin the kuchipudi dance, increase self damage to 530% and attack speed to 240% for 12 seconds. she bursts out whatever she got from her arm mech while dancing. cooldown: 16',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 2.4;
          agent.stats.normalAttack *= 5.3;
          agent.stats.skillDamage *= 5.3;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 2.4;
          agent.stats.normalAttack /= 5.3;
          agent.stats.skillDamage /= 5.3;
        },
        duration: 12
      } as NewEffect,
      { type: EffectTypeEnum.DOT, duration: 1, interval: 1 / 6, damage: () => 1391 } as NewEffectDOT
    ],
    cooldown: 16
  } as NewSkill
} as NewAgent;

export const Seina = {
  index: 82,
  name: 'Seina',
  title: 'Black Hawk',
  bio: `
  Seina's lifelong ambition was to become a pilot, so when the Airspace Defense Bureau extended an invitation for her to join their ranks in support of the war effort, she eagerly accepted.
  While Seina is undeniably skilled in her craft, she tends to have a slightly absent-minded nature. This characteristic often leaves her fellow agents uncertain about entrusting their lives to her in the heat of battle.
  Recognizing the need to enhance her abilities and gain trust, Seina decided to join the Trajectory Academic Parliament. Her primary focus within the parliament is to study flight safety and tactics for evading enemy fire, aiming to improve her skills and reliability as a pilot.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.TAP,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 2099,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2099,
    baseSkillDamage: 2099,
    projectileNumber: 8
  } as NewStats,
  skill: {
    name: 'Aerial Armageddon',
    description:
      'increase damage to 460 % for 8 seconds. launch out all type of her missiles, her aerosol missiles deals total 31487.5 over 6 seconds and her guided rockets each deals 7871.9. cooldown: 12',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 4.6;
          agent.stats.skillDamage *= 4.6;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 4.6;
          agent.stats.skillDamage /= 4.6;
        },
        duration: 8
      } as NewEffect,
      { type: EffectTypeEnum.DAMAGE, numberOfHits: 4, damage: () => 7871.9 } as NewEffectDamage,
      { type: EffectTypeEnum.DOT, duration: 6, interval: 0.05, damage: () => 31487.5 / 120 } as NewEffectDOT
    ],
    cooldown: 12
  } as NewSkill
} as NewAgent;

export const AphraClairmont = {
  index: 83,
  name: 'Aphra Clairmont',
  title: 'Knight',
  bio: `
  Originally hailing from the Cardelle Dukedom, she was the most talented and esteemed knight. However, she chose to resign from her position upon discovering the heartless and cruel nature of Lord Balan Emory. She decided to take up a post in the villages that were oppressed by the lord's army, assisting the villagers in their resistance against him. It was an impossible task to fight against a whole army with only villagers and a single knight.
  During her valiant efforts, she was eventually captured by the lord. It was at this moment that her world collided with the SF (Science Fiction) world. Coincidentally, she found herself in the midst of the commander's adventure, who happened to pass by the area.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.ECD,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1226,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 1226,
    baseSkillDamage: 1226
  } as NewStats,
  skill: {
    name: 'Strength Enhance',
    description:
      'knight leader skill. cast a stackable buff, increase damage to 260% and increase all striker agents damage to 110% for 24 seconds. cooldown: 10.0',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 2.6;
          agent.stats.skillDamage *= 2.6;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 2.6;
          agent.stats.skillDamage /= 2.6;
        },
        duration: 24,
        isStackable: true
      } as NewEffect,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => {
              agent.stats.normalAttack *= 1.1;
              agent.stats.skillDamage *= 1.1;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.STRIKER)
            .forEach((agent) => {
              agent.stats.normalAttack /= 1.1;
              agent.stats.skillDamage /= 1.1;
            });
        },
        duration: 24,
        isStackable: true
      } as NewEffect
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const KagawaMatsu = {
  index: 84,
  name: 'Kagawa Matsu',
  title: 'Muramatsu nechan',
  bio: `
  The intertwined fate of the Takeda, Sanada, and Date clans unfolds in a tumultuous manner. Matsu, who was raised as a samurai from a young age, finds herself caught in the midst of this chaotic destiny. Just as her tragic fate begins to unfold, her path unexpectedly crosses with the world of SF (Science Fiction). This convergence occurs during the commander's ongoing adventure, adding further complexity to the unfolding narrative.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.ECD,
  cupSize: CupSizeEnum.F,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 2452,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 2452,
    baseSkillDamage: 2452
  } as NewStats,
  skill: {
    name: 'Adieu',
    description:
      'cast a non-stackable self buff. damage x830%, range +5.00. cast another stackable self buff, attack speed x115%. all buff last for 16s. her bushido spirit awaken, only do single target attack, any damage deal to enemy within the buff duration, have 50% chance to reduce cooldown by 2.0s. cooldown: 10.',
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack *= 8.3;
          agent.stats.skillDamage *= 8.3;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.normalAttack /= 8.3;
          agent.stats.skillDamage /= 8.3;
        },
        duration: 16
      } as NewEffect,
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 1.15;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 1.15;
        },
        duration: 16,
        isStackable: true
      } as NewEffect,
      {
        type: EffectTypeEnum.AOA,
        apply: (params: EffectParams) => {
          const { agent } = params;

          if (Math.random() < 0.5) {
            agent.stats.lastCastTime += 2 * 1000; // seconds to ms
          }
        },
        duration: 16
      } as NewEffectAOA
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

// TODO: currently lvl 1 non evo
export const Sally = {
  index: 85,
  name: 'Sally',
  title: 'Sergeant',
  bio: `
  Living in a small village in the remote area of Santriel, Sally is the only daughter of an unnamed farm in Ponyvillage. Since childhood, she has had a fondness for taking care of animals and has been assisting her father on the farm. In Santriel, it's common to see firearms used in crops trading. With her proficiency in firearms, Sally joined the local self-defense organization as a teenager. However, despite her efforts, the local crime rate showed no signs of decreasing. Through her gradual investigation, she discovered the involvement of the local government in illicit activities.
  Motivated by her unwavering determination to fight corruption and evil, Sally joined the Santriel Inspection Bureau. With her exceptional marksmanship skills, she keeps a vigilant eye on the activities of the local government, ensuring they don't continue their illegal endeavors. Simultaneously, she monitors the transformation of the underground syndicate into another source of evil. Sally remains committed to upholding justice and safeguarding her community.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.SIB,
  cupSize: CupSizeEnum.E,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 747,
    criticalRate: 0.5,
    criticalDamage: 1.54,
    skillDamage: 747,
    baseSkillDamage: 747
  } as NewStats,
  skill: {
    name: 'Yeeeeeehaa',
    description: `
    Quickly fire twice with her shotgun, each deals 1494.2 skill damage. Then she dive into Yeehaa mode for 2 seconds, any attack withing Yeehaa will stack 101% damage buff to herself, each stack will last for 1 seconds.
    Cooldown: 33s.
    `,
    effects: [
      { type: EffectTypeEnum.DAMAGE, numberOfHits: 2, damage: () => 1494.2 } as NewEffectDamage,
      {
        type: EffectTypeEnum.AOA,
        apply: (params: EffectParams) => {
          const { agent, time } = params;
          const yeehaaEffect = new Effect({
            type: EffectTypeEnum.SELF_BUFF,
            duration: 1,
            begin: time,
            apply: (params: EffectParams) => {
              const { agent } = params;
              agent.stats.normalAttack *= 1.01;
              agent.stats.skillDamage *= 1.01;
            },
            remove: (params: EffectParams) => {
              const { agent } = params;
              agent.stats.normalAttack /= 1.01;
              agent.stats.skillDamage /= 1.01;
            },
            isStackable: true
          });
          agent.activeEffects.push(yeehaaEffect);
        },
        duration: 2
      } as NewEffectAOA
    ],
    cooldown: 33
  } as NewSkill
} as NewAgent;

export const SoraX = {
  index: 86,
  name: 'Sora X',
  title: 'Harpy Alpha',
  bio: `
  After experiencing numerous battles with the Sky Fleet, Sora transformed into Sora X. She evolved from being timid to becoming a professional, and from being indecisive to displaying bravery. This young talent has become a reliable instructor, and she is now a trusted elf elder who can single-handedly ensure the safety of her comrades.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GSR,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 3879,
    criticalRate: 0.94,
    criticalDamage: 2.038,
    skillDamage: 3264,
    baseSkillDamage: 3264
  } as NewStats,
  skill: {
    name: 'Salvation From Above',
    description: `
    Non-stackable self buff for damage x2700% and attack rate x110% for 7s. Heal for a tiny area close-by for total (skill damage x200%). Any successful attack under Salvation will create a stackable buff for attack speed x125% to all teammates, each stack last for 1.5s.
    Cooldown: 10s.
    `,
    effects: [
      {
        type: EffectTypeEnum.SELF_BUFF,
        apply: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed *= 1.1;
          agent.stats.normalAttack *= 27;
          agent.stats.skillDamage *= 27;
        },
        remove: (params: EffectParams) => {
          const { agent } = params;
          agent.stats.attackSpeed /= 1.1;
          agent.stats.normalAttack /= 27;
          agent.stats.skillDamage /= 27;
        },
        duration: 7
      } as NewEffect,
      {
        type: EffectTypeEnum.AOA,
        apply: (params: EffectParams) => {
          const { time } = params;
          const salvationEffect = new Effect({
            type: EffectTypeEnum.TEAM_BUFF,
            duration: 1.5,
            begin: time,
            apply: (params: EffectParams) => {
              const { team } = params;
              team.forEach((agent) => (agent.stats.attackSpeed *= 1.25));
            },
            remove: (params: EffectParams) => {
              const { team } = params;
              team.forEach((agent) => (agent.stats.attackSpeed /= 1.25));
            },
            isStackable: true
          });
          salvationEffect.add({ ...params });
        },
        duration: 7
      } as NewEffectAOA
    ],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const YukakoX = {
  index: 87,
  name: 'Yukako X',
  title: 'The Ghost: Alpha',
  bio: `
  Yukako wasn't accustomed to working in a team and temporarily left the group. However, she later returned and transferred from the Department of Orbital Defense under New Dellum Security to the Special Tactical Strategy team, taking on the role of a technical advisor. With this transition, Yukako experienced a significant increase in her knowledge of alien engineering and biotechnology.
  Interestingly, her physical appearance underwent some noticeable changes. There is speculation about whether it's a result of secondary growth or the effects of extraterrestrial biotechnology. While her figure has undergone significant alterations, her height remains unchanged.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.NDS,
  cupSize: CupSizeEnum.H,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 5914,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 5914,
    baseSkillDamage: 5914
  } as NewStats,
  skill: {
    name: 'Salvation From Above',
    description: `
    Deals 53170.9 damage to all enemies. All Gunner agents critical rate gains an additional 30% and critical damage gains an additional 190% for 14 seconds (stackable).
    Cooldown: 24s.
    `,
    effects: [
      { type: EffectTypeEnum.DAMAGE, damage: () => 53170.9 } as NewEffectDamage,
      {
        type: EffectTypeEnum.TEAM_BUFF,
        apply: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.criticalDamage += 1.9;
              agent.stats.criticalRate += 0.3;
            });
        },
        remove: (params: EffectParams) => {
          const { team } = params;
          team
            .filter((agent) => agent.class === ClassEnum.GUNNER)
            .forEach((agent) => {
              agent.stats.criticalDamage -= 1.9;
              agent.stats.criticalRate -= 0.3;
            });
        },
        duration: 14,
        isStackable: true
      } as NewEffect
    ],
    cooldown: 24
  } as NewSkill
} as NewAgent;

export const Astraea = {
  index: 88,
  name: 'Astraea',
  title: 'Star Night',
  bio: `
  No one knows where Astraea was born, but she spent her childhood in Santriel. Santriel—a city even worse than Sin City. Plague, turmoil, corruption, and unchecked desires had driven most of its inhabitants away.
  In response to what they saw as the shameful failure and incompetence of the local authorities, a group of residents united to take their destiny into their own hands. Astraea was one of them. Her philosophy was simple: all corruption must be burned away, for hope can only be reborn from the ashes of destruction.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.SUS,
  cupSize: CupSizeEnum.F,
  class: ClassEnum.ARTILLERY,
  nodes: EvoNodes.Artillery_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1,
    baseSkillDamage: 1
  } as NewStats,
  skill: {
    name: 'Chaos Flame',
    description: `Astraea ignites herself with her flames, increasing her attack speed by 200 % for 7 seconds. Additionally, her flames gain the ability to penetrate targets and ignite enemies for 5 seconds, dealing 109156.8 burn damage every second. When her stored flames overflow, she can launch the moon, causing 10495.8 skill damage upon impact with the ground.`,
    effects: [],
    cooldown: 10
  } as NewSkill
} as NewAgent;

export const Raphael = {
  index: 89,
  name: 'Raphael',
  title: 'Healer',
  bio: `
  As a doctor, her compassion is unmatched. Despite facing countless patients and casualties of war, her dedication to helping others remains unwavering. Physically and mentally exhausted, she is determined to join the revolution to save the country and its people.
  Raphael works at the Santriel Regional Hospital and also serves as a medical officer for the Santriel Underground Syndicate. While she utilizes the power of the Syndicate to eradicate the corrupt regime, she also works to save and rescue people from their suffering.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.SUS,
  cupSize: CupSizeEnum.K,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 1,
    normalAttack: 1,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 1,
    baseSkillDamage: 1
  } as NewStats,
  skill: {
    name: 'Gjallarhorn',
    description: `Cast an instant heal (Skill damage x9600%) for friendly unit closeby. Cast another H.O.T healing total (Skill damage x3200%) for 8s. During Ghallarhorn, all attack adds stun for 1.2 sec and (Normal damage x1200%) will heal all friendly units. Gjallarhorn last for 16s`,
    effects: [],
    cooldown: 19
  } as NewSkill
} as NewAgent;

export const EmberX = {
  index: 90,
  name: 'Ember X',
  title: '?',
  bio: `
  Ember, who has fought in numerous battles against alien monsters, has become increasingly unstable. Upon the commander's suggestion, she decides to explore non-combat pursuits. Joining the nameless circus, Ember's mental state starts to shift subtly. However, she soon uncovers the truth that the circus is actually a front for Revolution Strategic Consulting - The Dawn, and it is linked to the Santriel Underground Syndicate. There are countless hidden connections, even with powerful individuals in Santriel. Recognizing the malicious intent, Ember returns to the commander to share her findings.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.GAA,
  cupSize: CupSizeEnum.G,
  class: ClassEnum.GUNNER,
  nodes: EvoNodes.Gunner_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 5914,
    criticalRate: 0.84,
    criticalDamage: 2.038,
    skillDamage: 5914,
    baseSkillDamage: 5914
  } as NewStats,
  skill: {
    name: 'Chaos Flame',
    description: `Fully release her gattling, bullets will be penetrate targets and non-stackable self buff damage 150% for 19s. Non-stackable self buff attack speed 1080% for 10s. CD: 20s`,
    effects: [],
    cooldown: 20
  } as NewSkill
} as NewAgent;

export const Ora = {
  index: 91,
  name: 'Ora',
  title: '?',
  bio: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.NONE,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.STRIKER,
  nodes: EvoNodes.Striker_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 1,
    criticalRate: 0,
    criticalDamage: 1,
    skillDamage: 1,
    baseSkillDamage: 1
  } as NewStats,
  skill: {
    name: 'Unknown',
    description: `Unknown`,
    effects: [],
    cooldown: 100
  } as NewSkill
} as NewAgent;

export const AizawaMinami = {
  index: 92,
  name: 'Aizawa Minami',
  title: 'Kanae Naoe',
  bio: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.NONE,
  cupSize: CupSizeEnum.C,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 4548,
    criticalRate: 0.1,
    criticalDamage: 1.65,
    skillDamage: 4548,
    baseSkillDamage: 4548
  } as NewStats,
  skill: {
    name: '政宗への金的 (Blow to Masamune?)',
    description: `10秒間ガンナーの攻撃範囲2.5アップ、ダメージ140%になる。命中する場合、味方モンスターのHPが（相沢みなみのダメージ*4%）回復。CD24秒
    (For 10 seconds, the gunner's attack range increases by 2.5, and their damage increases to 140%.
    If the attack hits, the HP of allied monsters is restored by (Minami Aizawa's damage * 4%).
    Cooldown: 24 seconds.)`,
    effects: [],
    cooldown: 24
  } as NewSkill
} as NewAgent;

export const Choco = {
  index: 93,
  name: 'Choco',
  title: '?',
  bio: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.NONE,
  cupSize: CupSizeEnum.A,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 1,
    criticalRate: 0,
    criticalDamage: 1,
    skillDamage: 1,
    baseSkillDamage: 1
  } as NewStats,
  skill: {
    name: 'Skill Name',
    description: `Skill Description`,
    effects: [],
    cooldown: 100
  } as NewSkill
} as NewAgent;

export const Blancmange = {
  index: 94,
  name: 'Blancmange',
  title: '?',
  bio: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  rarity: RarityEnum.FIVE,
  organization: OrganizationEnum.NONE,
  cupSize: CupSizeEnum.B,
  class: ClassEnum.SUPPORT,
  nodes: EvoNodes.Support_Nodes,
  stats: {
    attackSpeed: 0.5,
    normalAttack: 1,
    criticalRate: 0,
    criticalDamage: 1,
    skillDamage: 1,
    baseSkillDamage: 1
  } as NewStats,
  skill: {
    name: 'Skill Name',
    description: `Skill Description`,
    effects: [],
    cooldown: 100
  } as NewSkill
} as NewAgent;

export const Agents = [
  Akari,
  Akina,
  AphraClairmont,
  Amikam,
  Aoi,
  Ari,
  Astraea,
  Ayu,
  Bia,
  Cadence,
  Chia,
  Chiharu,
  Chihiro,
  Chloe,
  Coco,
  Denka,
  Eiko,
  Ember,
  EmberX,
  Eri,
  Feme,
  GaiGai,
  Goi,
  Hami,
  Hitomi,
  Hoshiko,
  Iizuna,
  Irina,
  KagawaMatsu,
  Kaja,
  Karry,
  Kiyomi,
  Kotaru,
  Kotora,
  Kura,
  Larisa,
  Livia,
  Laura,
  Mai,
  Masamune,
  Mei,
  Meteli,
  Midori,
  Mika,
  Mitsu,
  Momoko,
  Mora,
  Musuna,
  Ne,
  Neugena,
  Neve,
  NeveX,
  Noa,
  O,
  Pan,
  Raphael,
  Rei,
  ReiJK,
  Reika,
  Riho,
  RihoX,
  Rosalie,
  Rui,
  Sally,
  Sara,
  Sato,
  Sayaka,
  Sera,
  Seina,
  Setsuna,
  Shiko,
  Sizuko,
  Sora,
  SoraX,
  Toki,
  Tsukiko,
  Tsurumi,
  Tyrla,
  Uni,
  Uta,
  Uzu,
  Vanessa,
  Victoria,
  Windy,
  Wu,
  Yukako,
  YukakoX,
  Yuki,
  Yuuha,
  ZiLong
  // Ora,
  // AizawaMinami,
  // Choco,
  // Blancmange
] as NewAgent[];
