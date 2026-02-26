export type ProteinNeed = {
  goal: string;
  min: number;
  max: number;
  unit: string;
};




export type proteinNeedsKeys = keyof typeof proteinNeeds;


export const proteinNeeds = {

  "Sédentaire":{
    goal: "Sédentaire",
    min: 0.8,
    max: 1.0,
    unit: "g/kg/jour",
  },
  "Endurance":{
    goal: "Endurance",
    min: 1.2,
    max: 1.6,
    unit: "g/kg/jour",
  },
  "Conservation de la masse musculaire":{
    goal: "Conservation de la masse musculaire",
    min: 1.6,
    max: 1.8,
    unit: "g/kg/jour",
  },
  "Prise de masse musculaire":{
    goal: "Prise de masse musculaire",
    min: 1.8,
    max: 2.2,
    unit: "g/kg/jour",
  },
};

export const proteinNeedsKeys= Object.keys(proteinNeeds)  as (keyof typeof proteinNeeds)[];