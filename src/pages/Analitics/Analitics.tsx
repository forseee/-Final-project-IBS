import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { FormAnalitics } from '../../components/FormAnalitic/FormAnalitic';
import { Chart } from '../../components/Chart/Chart';
import { StickyHeadTable } from '../../components/Table/Table';
import CircularProgress from '@material-ui/core/CircularProgress';

const Analitics = () => {
  const {
    data: { loader },
  } = useTypedSelector((state) => state);
  return (
    <>
      <FormAnalitics />
      {loader ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <>
          <Chart />
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '100px 30px' }}>
            <StickyHeadTable />
          </div>
        </>
      )}
    </>
  );
};

export default Analitics;
