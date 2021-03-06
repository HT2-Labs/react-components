import * as React from 'react';
import styled from 'styled-components';

interface TabMenuProps {
    readonly children: React.ReactNode;
  }

  export default ({ children }: TabMenuProps) => {
    const Table = styled.tr`

    `;

    return (
      <Table>
        {children}
      </Table>
    );
  };
