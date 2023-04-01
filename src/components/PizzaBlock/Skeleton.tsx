import { FC } from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: FC = (props): JSX.Element => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="135" cy="120" r="108" />
    <rect x="0" y="251" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="291" rx="0" ry="0" width="289" height="86" />
    <rect x="2" y="401" rx="10" ry="10" width="89" height="20" />
    <rect x="153" y="393" rx="15" ry="15" width="121" height="34" />
  </ContentLoader>
);
