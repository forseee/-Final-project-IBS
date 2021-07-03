import React from 'react';
import { Button } from '@material-ui/core';

import {
  PDFDownloadLink,
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import { Chart } from '../Chart/Chart';

const MyDoc = () => (
  <Document>
    <Page></Page>
  </Document>
);

export const ToPDF = () => {
  return (
    <Button>
      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </Button>
  );
};
