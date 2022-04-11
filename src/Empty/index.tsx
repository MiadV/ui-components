import * as React from 'react'
import { Empty as AntEmpty, EmptyProps as AntEmptyProps } from 'antd'

import './style.css'
import {
  AddMoreSVG,
  CantFindAnythingSVG,
  NoBankAccountSVG,
  NoOutletSVG,
  NothingHereSVG,
  SeemsEmptySVG
} from '../assets/icons'

export type EmptyProps = AntEmptyProps & {
  emptyType?: 'nothing-here' | 'no-outlet' | 'no-bank-account' | 'cant-find-anything' | 'add-more' | 'seems-empty'
}

const emptyImage = (image: React.ReactNode, emptyType?: string) => {
  if (emptyType === 'nothing-here') return <NothingHereSVG />
  else if (emptyType === 'no-outlet') return <NoOutletSVG />
  else if (emptyType === 'no-bank-account') return <NoBankAccountSVG />
  else if (emptyType === 'cant-find-anything') return <CantFindAnythingSVG />
  else if (emptyType === 'add-more') return <AddMoreSVG />
  else if (emptyType === 'seems-empty') return <SeemsEmptySVG />
  else return image
}

const PresetParagraphs = ({ paragraphOne, paragraphTwo }: { paragraphOne: string; paragraphTwo: string }) => (
  <>
    <p className="preset-paragraph-1">{paragraphOne}</p>
    <p className="preset-paragraph-2">{paragraphTwo}</p>
  </>
)

const emptyDescription = (description: React.ReactNode, emptyType?: string) => {
  if (emptyType === 'nothing-here')
    return (
      <PresetParagraphs paragraphOne={`Nothing here yet, nada.`} paragraphTwo={`Check back later, it might appear.`} />
    )
  else if (emptyType === 'no-outlet')
    return (
      <PresetParagraphs paragraphOne={`Why no outlet eh?`} paragraphTwo={`Click on the plus button to add outlets.`} />
    )
  else if (emptyType === 'no-bank-account')
    return (
      <PresetParagraphs
        paragraphOne={`There's no bank account, how to get paid?`}
        paragraphTwo={`Click on the plus button to add bank accounts.`}
      />
    )
  else if (emptyType === 'cant-find-anything')
    return (
      <PresetParagraphs
        paragraphOne={`I've failed you, can't find anything :(`}
        paragraphTwo={`Try searching for something else.`}
      />
    )
  else if (emptyType === 'add-more')
    return (
      <PresetParagraphs
        paragraphOne={`Add more for more commission ;)`}
        paragraphTwo={`Click on the plus button to add Fave products.`}
      />
    )
  else if (emptyType === 'seems-empty')
    return (
      <PresetParagraphs
        paragraphOne={`It seems to be empty here.`}
        paragraphTwo={`Try again, I'm sure you'll find it eventually.`}
      />
    )
  else return description
}

const Empty: React.FC<EmptyProps> = ({ emptyType, image, description, ...props }) => {
  const imageProp = emptyImage(image, emptyType)
  const descriptionProp = emptyDescription(description, emptyType)

  return <AntEmpty image={imageProp} description={descriptionProp} {...props} />
}

export default Empty
