import type {
  Page,
  PageBlocks,
  PageBlocksGrid,
  PageBlocksGridBlocks,
} from '../.tina/__generated__/types'
import { Content } from './blocks/content'
import { Feature, Features } from './blocks/features'
import { Grid } from './blocks/grid'
import { Hero } from './blocks/hero'
import { Testimonial } from './blocks/testimonial'
import { tinaField } from 'tinacms/dist/react'

export const Blocks = (props: Omit<Page, 'id' | '_sys' | '_values'>) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            )
          })
        : null}
    </>
  )
}

const Block = (block: PageBlocks) => {
  console.log('block', block)
  switch (block.__typename) {
    case 'PageBlocksContent':
      return <Content data={block} />
    case 'PageBlocksHero':
      return <Hero data={block} />
    case 'PageBlocksFeatures':
      return <Features data={block} />
    case 'PageBlocksTestimonial':
      return <Testimonial data={block} />
    case 'PageBlocksGrid':
      return <Grid data={block} />
    default:
      return null
  }
}

export const GridBlocks = (
  props: Omit<PageBlocksGrid, 'id' | '_sys' | '_values'>
) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <GridBlock {...block} />
              </div>
            )
          })
        : null}
    </>
  )
}

const GridBlock = (block: PageBlocksGridBlocks) => {
  console.log('GridBlock', block)
  switch (block.__typename) {
    case 'PageBlocksGridBlocksFeature':
      return <Feature data={block} />
    default:
      return null
  }
}
