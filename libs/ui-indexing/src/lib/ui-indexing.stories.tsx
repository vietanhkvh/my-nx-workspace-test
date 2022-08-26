import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiIndexing, alphabet } from './ui-indexing';

export default {
  component: UiIndexing,
  title: 'UiIndexing',
} as ComponentMeta<typeof UiIndexing>;

const Template: ComponentStory<typeof UiIndexing> = (args) => (
  <UiIndexing {...args} />
);
export const contentData = [
  {
    id: 1,
    character: 'A',
    member: [
      'April Skin',
      'Artis',
      'Avène',
      "Angel's Liquid",
      'AHC',
      'ANNA&EVE',
      'AquaStar',
      'Alltimes Care',
      'AXIS-Y',
      'Astalift',
      "A BONNE'",
      'ALTRUIST',
    ],
  },
  {
    id: 2,
    character: 'B',
    member: [
      'Bpril Skin',
      'Brtis',
      'Bvène',
      "Bngel's Liquid",
      'BHC',
      'BNNA&EVE',
      'BquaStar',
      'Blltimes Care',
      'BXIS-Y',
      'Bstalift',
      "B BONNE'",
      'BLTRUIST',
    ],
  },
  {
    id: 3,
    character: 'C',
    member: [
      'Cpril Skin',
      'Crtis',
      'Cvène',
      "Cngel's Liquid",
      'CHC',
      'CNNA&EVE',
      'CquaStar',
      'Clltimes Care',
      'CXIS-Y',
      'Cstalift',
      "C BONNE'",
      'CLTRUIST',
    ],
  },
  {
    id: 4,
    character: 'D',
    member: [
      'Dpril Skin',
      'Drtis',
      'Dvène',
      "Dngel's Liquid",
      'DHC',
      'DNNA&EVE',
      'DquaStar',
      'Dlltimes Care',
      'DXIS-Y',
      'Dstalift',
      "D BONNE'",
      'DLTRUIST',
    ],
  },
  {
    id: 5,
    character: 'E',
    member: [
      'Epril Skin',
      'Ertis',
      'Evène',
      "Engel's Liquid",
      'EHC',
      'ENNA&EVE',
      'EquaStar',
      'Elltimes Care',
      'EXIS-Y',
      'Estalift',
      "E BONNE'",
      'ELTRUIST',
    ],
  },
  {
    id: 6,
    character: 'F',
    member: [
      'Fpril Skin',
      'Frtis',
      'Fvène',
      "Fngel's Liquid",
      'FHC',
      'FNNF&EVE',
      'FquFStFr',
      'Flltimes CFre',
      'FXIS-Y',
      'FstFliFt',
      "F BONNE'",
      'FLTRUIST',
    ],
  },
  {
    id: 7,
    character: 'G',
    member: [
      'Gpril Skin',
      'Grtis',
      'Gvène',
      "Gngel's Liquid",
      'GHC',
      'GNNG&EVE',
      'GquGStGr',
      'Glltimes CGre',
      'GXIS-Y',
      'GstGlift',
      "G BONNE'",
      'GLTRUIST',
    ],
  },
];
export const Primary = Template.bind({});
Primary.args = {
  arrLetter: alphabet,
  content: contentData,
};
