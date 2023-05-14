import { useEffect, useState } from "react";
import cache from "../../../cache";

export default function PredicadorImage(props) {
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function fetchImage() {
      let data = cache.get("predicadores");
      if (!data) {
        const res = await fetch("/api/predicadores");
        data = await res.json();
        cache.set("predicadores", data);
      }
      setImage(data[props.nombre]);
    }
    fetchImage();
  }, []);

  return (
    <>
      {image && (
        <div className="PredicadorContainer">
          <div className="ImageContainer">
            <img src={image.image} alt={image.name} />
          </div>
        </div>
      )}
      <style jsx>{`
        .PredicadorContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
        }
        .ImageContainer {
          display: flex;
          width: 100%;
          height: 100px;
          background-color: var(--light-grey);
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        }
        .ImageContainer img {
          display: flex;
          width: 150px;
          height: 100px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          justify-self: center;
          align-self: center;
        }
      `}</style>
    </>
  );
}
