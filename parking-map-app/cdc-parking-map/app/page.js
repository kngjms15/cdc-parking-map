import Image from "next/image";
import ParkingLot from '@/app/components/parkingLot';
import ParkingMap from './components/parkingMap';
import ParkingMapContent from "./components/parkingMapContent";

export default function Home() {
  return (
    <div>
      {/* <ParkingLot /> */}
      <ParkingMap />
      {/* <ParkingMapContent /> */}
    </div>

  );
}
