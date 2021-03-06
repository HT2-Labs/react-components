// tslint:disable:prefer-function-over-method
// tslint:disable:no-class
// tslint:disable:no-this
import * as React from 'react';
import styled from 'styled-components';
import { Label } from '../text';
import FormProps from './formProps';

const Input = styled.input`
  background-color: #fff;
  border: 2px solid #888;
  border-radius: ${({ theme }) => theme.radius.Small};
  padding: 8px 12px 9px;
  color: #000;
  font-size: 16px;
  &:hover {
    box-shadow: 0 0 0 1pt #888;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1pt ${({ theme }) => theme.color.Button};
    border: 2px solid ${({ theme }) => theme.color.Button};
  }
`;

class FormInput extends React.Component<FormProps> {
  public render() {
    return (
      <>
        {this.props.label !== undefined ? <Label margin>{this.props.label}</Label> : null}
        <Input {...this.props} />
      </>
    );
  }
}

export default FormInput;
