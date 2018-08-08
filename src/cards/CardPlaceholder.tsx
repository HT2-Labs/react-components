// tslint:disable:max-file-line-count
// tslint:disable:no-class
// tslint:disable:no-this
// tslint:disable:prefer-function-over-method
import * as React from 'react';
import styled from 'styled-components';
import { ButtonGroup, IconButtonInvisible } from '../buttons';
import { Size } from '../buttons/IconButtons/iconButtonProps';
import { IconEllipsisV, IconTimes } from '../Icon';
import { Align } from '../utils/AlignmentProps';
import CardProps from './CardProps';

export default class extends React.Component<CardProps> {
  public static readonly defaultProps = {
    active: false,
  };

  public readonly state = {
    showOverlay: false,
  };

  public render() {
    const {
      active,
      children,
      onClick,
      overlayContent,
    } = this.props;

    const Card = styled.div`
      border-bottom: ${active === true ? '8px solid rgba(0, 0, 0, 0.2)' : 'none'};
      border-radius: ${({ theme }) => theme.radius.Medium};
      box-sizing: border-box;
      color: ${({ theme }) => theme.color.BodyText};
      cursor: ${onClick !== undefined ? 'pointer' : 'initial'};
      overflow: hidden;
      position: relative;
      width: 100%;
      &:hover {
        ${onClick !== undefined ? 'box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12)' : ''} ;
        transform: ${onClick !== undefined ? 'scale(1.01)' : 'none'};
      }
    `;

    const InnerCard = styled.div`
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 16px 20px;
    `;

    const Overlay = styled.div`
      box-sizing: border-box;
      padding: 4px;
      position: absolute;
      right: 0;
      z-index: 20;
      ${this.state.showOverlay ? 'background-color: #fff' : ''};
      ${this.state.showOverlay ? 'height: 100%' : ''};
      ${this.state.showOverlay ? 'width: 100%' : ''};
    `;

    const OverlayContent = styled.div`
      Padding: 12px 16px;
    `;

    const PlaceholderCard = Card.extend`
      background-color: ${({ theme }) => theme.color.Disabled};
      color: ${({ theme }) => theme.color.DisabledText};
    `;

    const actionOpen = () => {
      this.setState({
        showOverlay: true,
      });
    };

    const actionClose = () => {
      this.setState({
        showOverlay: false,
      });
    };

    const renderOverlay = (
      <Overlay>
        <ButtonGroup alignment={Align.Right}>
          {this.state.showOverlay ?
            <IconButtonInvisible onClick={actionClose} size={Size.Small}>
              <IconTimes color={'#000'} />
            </IconButtonInvisible> :
            <IconButtonInvisible onClick={actionOpen} size={Size.Small}>
              <IconEllipsisV color={'#000'} />
            </IconButtonInvisible>}
        </ButtonGroup>
        {this.state.showOverlay ? <OverlayContent>{overlayContent}</OverlayContent> : null}
      </Overlay>
    );

    return (
      <PlaceholderCard
        role={onClick !== undefined ? 'button' : ''}
      >
        {overlayContent !== undefined ? renderOverlay : null}
        <InnerCard>{children}</InnerCard>
      </PlaceholderCard >
    );
  }
}