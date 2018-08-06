import * as React from 'react';
import styled from '../../node_modules/styled-components';

interface TabMenuProps {
    readonly children: React.ReactNode;
  }

  export default ({ children }: TabMenuProps) => {
    const Table = styled.th`
      text-align: left;
      border-bottom: solid 3px #ddd;
      border-collapse: collapse;
      padding: 4px;
    `;

    return (
      <Table>
        {children}
      </Table>
    );
  };
