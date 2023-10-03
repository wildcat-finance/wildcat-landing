import { useWindowSize } from "usehooks-ts";

type ResponsiveVideoProps = {
  mobileVid: string;
  tabletVid: string;
  desktopVid: string;
  type: `video/${string}`;
} & React.MediaHTMLAttributes<HTMLVideoElement>;
export default function ResponsiveVideo(props: ResponsiveVideoProps) {
  const { width } = useWindowSize();
  const { mobileVid, tabletVid, desktopVid, type, ...rest } = props;
  return (
    <>
      <video {...rest}>
        {width <= 768 && <source src={props.mobileVid} type={props.type} />}
        {width > 768 && width < 1200 && (
          <source src={props.tabletVid} type={props.type} />
        )}
        {width >= 1200 && <source src={props.desktopVid} type={props.type} />}
      </video>
    </>
  );
}
