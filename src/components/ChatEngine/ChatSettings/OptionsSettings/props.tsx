import { OptionsSettingsStyles } from './styles';

import { ChatProps } from '../../../../interfaces';

export interface Props extends OptionsSettingsStyles {
  chat?: ChatProps;
  // Hooks
  onDeleteChat?: (chat: ChatProps) => void;
  // Render Functions
  renderOptionsSettings?: (props: Props) => React.FC<Props>;
}
