export enum Categories {
  aluminum = 'aluminio',
  paper = 'papelycarton',
  organic = 'organico',
  plastic = 'plastico'
}

export class Garbage {

  private garbageCategories: any = {
    aluminum: [
      {
        category: Categories.aluminum,
        image: '1_lata_soda.png',
        selected_image: 'whatever'
      },
      {
        category: Categories.aluminum,
        image: '2_lata_vegetales.png',
        selected_image: 'whatever'
      },
      {
        category: Categories.aluminum,
        image: '3_lata_atun.png',
        selected_image: 'whatever'
      },
      {
        category: Categories.aluminum,
        image: '4_lata_sardinas.png',
        selected_image: 'whatever'
      }
    ],
    organic: [
      {
        category: Categories.organic,
        image: '1_zanahoria.png',
        selected_image: 'whatever'
      },
      {
        category: Categories.organic,
        image: '2_platano.png',
        selected_image: 'whatever'
      },
      {
        category: Categories.organic,
        image: '3_pescado.png',
        selected_image: 'whatever'
      },
      {
        category: Categories.organic,
        image: '4_sandia.png',
        selected_image: 'whatever'
      }
    ],
    paper: [
      {
        category: Categories.paper,
        image: '1_cartonDeHuevos.png',
        selected_image: 'whatever'
      },
      {
        category: Categories.paper,
        image: '2_rolloPapel.png',
        selected_image: 'whatever'
      },
      {
        category: Categories.paper,
        image: '3_periodico.png',
        selected_image: 'whatever'
      },
      {
        category: Categories.paper,
        image: '4_cereal.png',
        selected_image: 'whatever'
      }
    ],
    plastic: [
      {
        category: Categories.plastic,
        image: '1_jabonManos.png',
        selected_image: 'whatever'
      },
      {
        category: Categories.plastic,
        image: '2_botella.png',
        selected_image: 'whatever'
      },
      {
        category: Categories.plastic,
        image: '3_galonLeche.png',
        selected_image: 'whatever'
      },
      {
        category: Categories.plastic,
        image: '4_galonJabon.png',
        selected_image: 'whatever'
      }
    ]
  };

  private generateRandomIndex() {
    const myNumber: Number = Math.floor((Math.random() * 4));
    return myNumber;
  }

  getAluminumRandomItem(): any {
    const aluminumItem: any = this.garbageCategories.aluminum[this.generateRandomIndex().toString()];
    return aluminumItem;
  }

  getOrganicRandomItem(): any {
    const organicItem: any = this.garbageCategories.organic[this.generateRandomIndex().toString()];
    return organicItem;
  }

  getPaperRandomItem(): any {
    const paperItem: any = this.garbageCategories.paper[this.generateRandomIndex().toString()];
    return paperItem;
  }

  getPlasticRandomItem(): any {
    const plasticItem: any = this.garbageCategories.plastic[this.generateRandomIndex().toString()];
    return plasticItem;
  }
}
