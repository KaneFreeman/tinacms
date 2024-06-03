import type { TinaTemplate } from 'tinacms'
import { tinaField } from 'tinacms/dist/react'
import {
  PageBlocksGrid,
  PageBlocksGridBlocksFeature,
} from '../../.tina/__generated__/types'
import { Container } from '../util/container'
import { Section } from '../util/section'
import { defaultFeature, featureBlockSchema } from './features'
import { GridBlocks } from '../blocks-renderer'

export const Grid = ({ data }: { data: PageBlocksGrid }) => {
  return (
    <Section>
      <Container size="large" className="grid" tinaField={tinaField(data)}>
        <GridBlocks {...data} />
      </Container>
    </Section>
  )
}

const defaultFeatureTemplate = {
  __typename: 'PageBlocksGridBlocksFeature',
  _template: 'feature',
  ...defaultFeature,
}

export const gridBlockSchema: TinaTemplate = {
  name: 'grid',
  label: 'Grid',
  ui: {
    defaultItem: {
      columns: 2,
      blocks: [
        defaultFeatureTemplate,
        defaultFeatureTemplate,
        defaultFeatureTemplate,
        defaultFeatureTemplate,
      ],
    },
  },
  fields: [
    {
      type: 'number',
      label: 'Columns',
      name: 'columns',
      ui: {
        defaultValue: 2,
      },
      required: true,
    },
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Sections',
      ui: {
        visualSelector: true,
      },
      templates: [featureBlockSchema],
    },
  ],
}
