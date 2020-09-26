import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { OverflowSetPageProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/OverflowSet/OverflowSet.doc';

export const OverflowSetPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/api-docs/lib/pages/office-ui-fabric-react/OverflowSet.page.json')}
    {...{ ...OverflowSetPageProps, ...props }}
  />
);
