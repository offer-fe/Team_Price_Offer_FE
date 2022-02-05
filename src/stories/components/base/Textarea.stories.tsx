import Textarea from '@components/base/Textarea'
import type { TextareaProps } from '@base/Textarea/types'
import type { IStory } from '@data/models'
import { FONT_SIZE } from '@constants'

export default {
  title: 'Components/Base/Textarea',
  component: Textarea,
  argTypes: {
    children: { control: 'text' },
    width: { defaultValue: '100%', control: 'text' },
    height: { defaultValue: '350px', control: 'text' },
    fontSize: {
      defaultValue: 'SM',
      options: [...Object.keys(FONT_SIZE)],
      control: { type: 'inline-radio' }
    },
    placeholder: { defaultValue: '내용을 입력해 주세요.', control: 'text' },
    maxLength: { control: 'number' }
  }
}

export const Default: IStory<TextareaProps> = args => <Textarea {...args} />
