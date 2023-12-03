import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Libraries,
} from '@react-google-maps/api';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { BsDot } from 'react-icons/bs';
import {
  IoHeartOutline,
  IoInformationCircleOutline,
  IoLocationOutline,
  IoShareOutline,
  IoTimeOutline,
} from 'react-icons/io5';
import {
  LiaCarAltSolid,
  LiaDoorOpenSolid,
  LiaFireExtinguisherSolid,
  LiaHotTubSolid,
  LiaSnowflakeSolid,
  LiaTreeSolid,
  LiaUtensilsSolid,
  LiaVideoSolid,
  LiaWifiSolid,
} from 'react-icons/lia';
import { PiCurrencyDollar } from 'react-icons/pi';

const attributeIcons = {
  'Water Heater': <LiaHotTubSolid />,
  'Air Conditioning': <LiaSnowflakeSolid />,
  'Fire Extinguisher': <LiaFireExtinguisherSolid />,
  Wifi: <LiaWifiSolid />,
  Kitchen: <LiaUtensilsSolid />,
  Balcony: <LiaDoorOpenSolid />,
  Backyard: <LiaTreeSolid />,
  Parking: <LiaCarAltSolid />,
  'Security Cameras': <LiaVideoSolid />,
} as const;

const libraries: Libraries = ['places'];

const ROOM = {
  pictures: ['/images/rental.jpg'], // put multiple image urls
  name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  address: '456 Oak Avenue, Unit 2B',
  availableFrom: 'June', // put only name of months, use enums
  rent: 10000,
  summary: {
    person: 5,
    bed: 3,
    bath: 3,
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam voluptates ex sapiente explicabo facilis, dicta itaque modi similique dolores nesciunt dolore cupiditate fuga culpa nulla et ipsam excepturi voluptatum quis, vitae illum obcaecati. Atque, iure sapiente recusandae consequuntur expedita ducimus! Harum laudantium laboriosam quos voluptate rem optio incidunt quis voluptatem!',
  attributes: [
    'Water Heater',
    'Air Conditioning',
    'Fire Extinguisher',
    'Wifi',
    'Kitchen',
    'Balcony',
    'Backyard',
    'Parking',
    'Security Cameras',
  ], // only these values will be valid, also use enum
  geoLocation: {
    lat: 22.36179837477274,
    lng: 91.80339833637557,
  },
  landLord: {
    name: 'Upal Barua',
    experience: 4,
    picture: 'https://github.com/shadcn.png',
  }, // this is going use ref
} as const;

const RoomDetails = () => {
  const [visitDate, setVisitDate] = useState<Date | undefined>(new Date());
  const [visitTime, setVisitTime] = useState('');

  const {
    address,
    attributes,
    availableFrom,
    description,
    geoLocation,
    name,
    pictures,
    rent,
    summary,
    landLord,
  } = ROOM;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  const center = useMemo(
    () => ({ lat: geoLocation.lat, lng: geoLocation.lng }),
    [geoLocation]
  );

  return (
    <main className="max-w-5xl mx-auto space-y-10 min-h-[300vh]">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="relative h-56 sm:h-auto">
          <Image
            className="rounded-md shadow-sm object-center object-cover"
            alt="rental property"
            src={pictures[0]}
            fill
          />
        </div>
        <div className="space-y-2.5 sm:space-y-3">
          <h2 className="font-medium capitalize text-xl pb-2 sm:pb-3 md:text-2xl sm:max-w-[90%]">
            {name}
          </h2>
          <div className="flex items-center gap-x-1.5">
            <IoInformationCircleOutline className="text-xl text-primary-900/80 dark:text-primary-50/80" />
            <div className="flex items-center">
              <span>{summary.person} Person</span>
              <BsDot className="text-sm" />
              <span>{summary.bed} Bed</span>
              <BsDot className="text-sm" />
              <span>{summary.bath} Bath</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1.5">
            <IoLocationOutline className="text-xl text-primary-900/80 dark:text-primary-50/80" />
            <div>{address}</div>
          </div>
          <div className="flex items-center gap-x-1.5">
            <IoTimeOutline className="text-xl text-primary-900/80 dark:text-primary-50/80" />
            <div>
              Available from{' '}
              <span className="font-medium">{availableFrom}</span>
            </div>
          </div>
          <div className="flex items-center gap-x-1.5 pb-2 sm:pb-3">
            <PiCurrencyDollar className="text-xl text-primary-900/80 dark:text-primary-50/80" />
            <div>
              <span className="font-medium"> {rent} </span>
              <span className="text-sm">BDT/month</span>
            </div>
          </div>
          <div className="flex items-center gap-x-3 pb-3">
            <Avatar>
              <AvatarImage src={landLord.picture} />
              <AvatarFallback>{landLord.name}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Listed by {landLord.name}</p>
              <p className="text-sm">listing for {landLord.experience} years</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <Button variant="outline" className="w-full gap-x-2">
              <IoShareOutline className="text-lg text-primary-900/80 dark:text-primary-50/80" />
              <span>Share</span>
            </Button>
            <Button variant="outline" className="w-full gap-x-2">
              <IoHeartOutline className="text-lg text-primary-900/80 dark:text-primary-50/80" />
              <span>Save</span>
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col sm:flex-row gap-x-6">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium tracking-tight capitalize pb-3">
              About This Place
            </h3>
            <p className="leading-relaxed">{description}</p>
          </div>
          <div>
            <h3 className="text-xl font-medium tracking-tight capitalize pb-3">
              What This Place Offers
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 py-3">
              {attributes.map((attribute) => (
                <div key={attribute} className="flex items-center gap-x-2">
                  <span className="text-xl text-primary-50/80">
                    {attributeIcons[attribute]}
                  </span>
                  <span>{attribute}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium tracking-tight capitalize pb-4">
              Location of This Place
            </h3>
            {isLoaded && (
              <GoogleMap
                mapContainerClassName="w-full h-[25rem] rounded-xl"
                center={center}
                zoom={90}>
                <Marker position={center} />
              </GoogleMap>
            )}
          </div>
        </div>
        <form className="w-full rounded-xl shadow border border-primary-800 p-4 sticky top-0 mt-24 space-y-2 bg-primary-950 h-max">
          <h3 className="text-xl font-medium tracking-tight capitalize">
            Book A Visit
          </h3>
          <p className="text-sm text-primary-400 pb-3">
            Pick a date and time to visit this place
          </p>
          <Calendar
            mode="single"
            selected={visitDate}
            onSelect={setVisitDate}
            className="rounded-md border border-none px-0"
          />
          <Input
            type="time"
            value={visitTime}
            onChange={(event) => setVisitTime(event.target.value)}
          />
          <div className="pt-5">
            <Button className="w-full">Book Visit</Button>
          </div>
        </form>
      </section>
      <section>
        <h3 className="text-xl font-medium tracking-tight capitalize pb-4">
          Other Places From Same Area
        </h3>
      </section>
    </main>
  );
};

export default RoomDetails;
