import Input from '@base/Input'
import type { InputProps } from '@base/Input/types'
import type { IStory } from '@data/models'
import type { ReactElement } from 'react'
import { FONT_SIZE } from '@constants'

export default {
  title: 'Components/Base/Input',
  component: Input,
  argTypes: {
    type: { defaultValue: 'text', control: 'inline-radio' },
    width: { defaultValue: '100%', control: 'text' },
    height: { defaultValue: '30px', control: 'text' },
    round: { defaultValue: false, controle: 'boolean' },
    fontSize: {
      defaultValue: 'SM',
      options: [...Object.keys(FONT_SIZE)],
      control: { type: 'inline-radio' }
    },
    maxLength: { control: 'number' }
  }
}

const Template = (args: InputProps): ReactElement => <Input {...args} />

export const Default = Template.bind({}) as IStory<InputProps>
Default.args = {
  type: 'text',
  maxLength: 50,
  height: 30,
  fontSize: 'SM',
  placeholder: '상품명으로 원하는 물건을 검색해보세요!'
}

export const Round = Template.bind({}) as IStory<InputProps>
Round.args = {
  type: 'text',
  height: 30,
  placeholder: '상품명으로 원하는 물건을 검색해보세요!',
  round: true
}
