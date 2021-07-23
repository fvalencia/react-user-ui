import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Table from './Table/Table';

const useStyles = makeStyles(theme => ({}));

export default function UserPage(): FunctionComponent {
  const classes = useStyles();

  

  return (
    <div>
      <Table rows={[]} />
    </div>
  );
}
