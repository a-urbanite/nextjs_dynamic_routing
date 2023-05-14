"use client";
import React, { Suspense } from "react";
import styles from "./home.module.scss";
import Link from "next/link";
import axios from 'axios'
// import List from "./List";
// import { Json2Ts } from 'json2ts/src/json2ts';

export interface swapiRes {
  count: number;
  next: string;
  previous?: null;
  results?: swapiItem[] | null;
}
export interface swapiItem {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films?: string[] | null;
  species?: (string | null)[] | null;
  vehicles?: (string | null)[] | null;
  starships?: (string | null)[] | null;
  created: string;
  edited: string;
  url: string;
}

const Home = () => {
  // const List = React.lazy(() => import('./List'));
  const [data, setData] = React.useState(null as unknown as swapiRes);

  const dataFetch: () => void = async () => {
    // const res = await fetch("https://swapi.dev/api/people");
    // const data = await res.json();
    // setData(data);

    axios.get('https://swapi.dev/api/people')
      .then(function (response) {
        setData(response.data);
      })
  };

  React.useEffect(() => {
    dataFetch();
  }, []);

  // React.useEffect(() => {
  //   console.log(<pre>{JSON.stringify(data, null, "\t")}</pre>);
  // }, [data]);

  if (!data) {
    return <>Loading....</>;
  }

  return (
    <main className={styles.main}>
      <h1>Welcome to SWAPI consumer under Next.js 13.4</h1>
      {/* <Suspense fallback={<p>Loading...1111</p>}>
        <List data={data} />
      </Suspense> */}

        <ul>
          {data.results!.map((obj: swapiItem, index: number) => (
            <li key={index}>
              <Link href={`/person/${obj.name.replace(" ", "_")}`} >{obj.name}</Link>
            </li>
          ))}
        </ul>
      {/* <pre>{JSON.stringify(data, null, 5)}</pre> */}
    </main>
  );
};

export default Home;
