import React from 'react';
import { ThemeProvider } from '@flare/primitives/core-ui';
import { SquarePhotoCard } from "@flare/primitives/content-card";
import ReactAdapterProvider from './ReactAdapterProvider';

const MyContentCard = () => (
  <ThemeProvider>
    <SquarePhotoCard
      isLoading={false}
      keyword="Design"
      linkComponent={({ children, ...rest }) => <a {...rest}>{children}</a>}
      metadataLabel="2 min read"
      photo="https://www.wallpaperup.com/uploads/wallpapers/2015/04/02/652984/aca9dba08768390fdd6968580f94e93d.jpg"
      primaryAction="_blank"
      provider={{
        name: "Cornerstone OnDemand",
        icon:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwqBlFi0OWMHZn23KVegl-Lh6c_Z7r86N6WEINACGl3eMB1UqG&usqp=CAU",
      }}
      secondaryActions={[]}
      size="medium"
      supportingImage={{
        name: "Cornerstone OnDemand",
        icon:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwqBlFi0OWMHZn23KVegl-Lh6c_Z7r86N6WEINACGl3eMB1UqG&usqp=CAU",
      }}
      title="A reasonable length for a content title"
      url="https://www.cornerstoneondemand.com/learning"
    />
     {/* <SquarePhotoCard
      isLoading={true}
      keyword="Design"
      linkComponent={({ children, ...rest }) => <a {...rest}>{children}</a>}
      metadataLabel="2 min read"
      photo="https://www.wallpaperup.com/uploads/wallpapers/2015/04/02/652984/aca9dba08768390fdd6968580f94e93d.jpg"
      primaryAction="_blank"
      provider={{
        name: "Cornerstone OnDemand",
        icon:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwqBlFi0OWMHZn23KVegl-Lh6c_Z7r86N6WEINACGl3eMB1UqG&usqp=CAU",
      }}
      secondaryActions={secondaryActions}
      size="medium"
      supportingImage={{
        name: "Cornerstone OnDemand",
        icon:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwqBlFi0OWMHZn23KVegl-Lh6c_Z7r86N6WEINACGl3eMB1UqG&usqp=CAU",
      }}
      title="A reasonable length for a content title"
      url="https://www.cornerstoneondemand.com/learning"
    /> */}
  </ThemeProvider>
);

export const Adapted = React.forwardRef((props, ref) => {
  return <ReactAdapterProvider {...props} component={MyContentCard} ref={ref} />;
});

export default MyContentCard;