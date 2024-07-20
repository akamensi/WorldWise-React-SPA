import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h2>
        position: {lat}, {lng}
      </h2>
    </div>
  );
}

export default Map;
