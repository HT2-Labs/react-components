import * as React from 'react';
import styled from '../../node_modules/styled-components';

interface TabMenuProps {
    readonly children: React.ReactNode;
  }

  export default ({ children }: TabMenuProps) => {
    const Table = styled.td`
      border-bottom: solid 1px #ddd;
      border-collapse: collapse;
      padding: 8px 4px;
    `;

    return (
      <Table>
        {children}
      </Table>
    );
  };