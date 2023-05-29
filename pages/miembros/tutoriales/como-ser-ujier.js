import VideoIntern from "../../components/VideoIntern";
import withAuth from "daniel/utils/withAuth";

function Video() {
  return <VideoIntern nombre="Manantial" indice="0" />;
}

export default withAuth(Video);
