import React from "react"
import ContentLoader from "react-content-loader"

export const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={280}
    height={412}
    viewBox="0 0 280 412"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="280" height="200" /> 
    <rect x="0" y="286" rx="3" ry="3" width="280" height="25" /> 
    <rect x="0" y="221" rx="1" ry="1" width="280" height="46" /> 
    <rect x="130" y="339" rx="8" ry="8" width="146" height="46" /> 
    <rect x="0" y="339" rx="8" ry="8" width="46" height="46" />
  </ContentLoader>
)


export const MyLoaderCart = (props) => (
  <ContentLoader 
    speed={0}
    width={570}
    height={400}
    viewBox="0 0 570 400"
    backgroundColor="#dedede"
    foregroundColor="#ecebed"
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="200" height="200" /> 
    <rect x="230" y="0" rx="8" ry="8" width="334" height="54" /> 
    <rect x="180" y="134" rx="0" ry="0" width="0" height="1" /> 
    <rect x="228" y="105" rx="8" ry="8" width="333" height="93" />
  </ContentLoader>
)

