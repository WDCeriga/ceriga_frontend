import { boxyCrewneckTable } from "./crewneck/boxy";
import { oversizedCrewneckTable } from "./crewneck/oversized";
import { slimCrewneckTable } from "./crewneck/slim";
import { boxyHoodieTable } from "./hoodie/boxy";
import { oversizedHoodieTable } from "./hoodie/oversized";
import { slimHoodieTable } from "./hoodie/slim";
import { baggyCuffedSweatPantsTable } from "./sweatpants/baggy";
import { regularCuffedSweatPantsTable } from "./sweatpants/regular";
import { straightLeggedCuffedSweatPantsTable } from "./sweatpants/straightLegged";
import { boxyTshirtTable } from "./t-shirt/boxy";
import { oversizedTshirtTable } from "./t-shirt/oversized";
import { slimTshirtTable } from "./t-shirt/slim";
import { regularTankTopTable } from "./tankTop/regular";
import { baggyUncuffedSweatPantsTable } from "./uncuffed/baggy";
import { regularUncuffedSweatPantsTable } from "./uncuffed/regular";
import { straightLeggedUncuffedSweatPantsTable } from "./uncuffed/straightLegged";
import { boxyZipUpHoodieTable } from "./zipUp/boxy";
import { oversizedZipUpHoodieTable } from "./zipUp/oversized";
import { slimZipUpHoodieTable } from "./zipUp/slim";

export const tableSizes = {
  "T-shirt": {
    boxy: { text: "Boxy t-shirt", table: boxyTshirtTable },
    oversized: { text: "Oversized t-shirt", table: oversizedTshirtTable },
    slim: { text: "Slim t-shirt", table: slimTshirtTable },
    list: ["boxy", "oversized", "slim"],
  },
  Hoodie: {
    boxy: { text: "Boxy hoodie", table: boxyHoodieTable },
    oversized: { text: "Oversized hoodie", table: oversizedHoodieTable },
    slim: { text: "Slim hoodie", table: slimHoodieTable },
    list: ["boxy", "oversized", "slim"],
  },
  "Sweat Pants": {
    baggy: {
      text: "Baggy cuffed sweat pants",
      table: baggyCuffedSweatPantsTable,
    },
    regular: {
      text: "Regular cuffed sweat pants",
      table: regularCuffedSweatPantsTable,
    },
    straightLegged: {
      text: "Straight legged cuffed sweat pants",
      table: straightLeggedCuffedSweatPantsTable,
    },
    list: ["baggy", "regular", "straightLegged"],
  },
  Crewneck: {
    boxy: { text: "Boxy crewneck", table: boxyCrewneckTable },
    oversized: { text: "Oversized crewneck", table: oversizedCrewneckTable },
    slim: { text: "Slim crewneck", table: slimCrewneckTable },
    list: ["boxy", "oversized", "slim"],
  },
  "Zip Up Hoodie": {
    boxy: { text: "Boxy zip up Hoodie", table: boxyZipUpHoodieTable },
    oversized: {
      text: "Oversized zip up Hoodie",
      table: oversizedZipUpHoodieTable,
    },
    slim: { text: "Slim zip up Hoodie", table: slimZipUpHoodieTable },
    list: ["boxy", "oversized", "slim"],
  },
  "Tank Top": {
    regular: { text: "Regular tank top", table: regularTankTopTable },
    list: ["regular"],
  },
  Uncuffed: {
    baggy: {
      text: "Baggy uncuffed sweat pants",
      table: baggyUncuffedSweatPantsTable,
    },
    regular: {
      text: "Regular uncuffed sweat pants",
      table: regularUncuffedSweatPantsTable,
    },
    straightLegged: {
      text: "Straight legged uncuffed sweat pants",
      table: straightLeggedUncuffedSweatPantsTable,
    },
    list: ["baggy", "regular", "straightLegged"],
  },
};
