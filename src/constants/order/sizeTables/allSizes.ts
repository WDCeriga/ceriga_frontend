import { ITableSizeRow } from "@interfaces/order/sizes.interface";

import { crewneckTableStore } from "./crewneck";
import { HoodieTableStore } from "./hoodie";
import { sweatpantsTableStore } from "./sweatpants";
import { tankTopTableStore } from "./tankTop";
import { tShirtTableStore } from "./tShirt";
import { UncuffedTableStore } from "./uncuffed";
import { zipUpTableStore } from "./zipUpHoodie";

export const listTableSizeStore: { [key in string]: ITableSizeRow[] } = {
  "T-shirt": tShirtTableStore,
  Hoodie: HoodieTableStore,
  "Sweat Pants": sweatpantsTableStore,
  Crewneck: crewneckTableStore,
  "Zip Up Hoodie": zipUpTableStore,
  "Tank Top": tankTopTableStore,
  Uncuffed: UncuffedTableStore,
};
