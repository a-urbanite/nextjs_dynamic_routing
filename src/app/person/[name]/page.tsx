"use client";
import React from "react";
import { swapiRes, swapiItem } from "@/app/home/page";
import Link from "next/link";

const DetailPage = () => {
  const [data, setData] = React.useState(null as unknown as swapiRes);

  const getPersonName = (pathname: string) => {
    console.log(window.location.pathname)
    const elements = pathname.split("/");
    const name = elements[2];
    const cleanName = name.replace("_", " ");
    return cleanName;
  };

  const dataFetch = async (name: string) => {
    const res = await fetch(`https://swapi.dev/api/people/?search=${name}`);
    const data = await res.json();
    setData(data);
  };

  React.useEffect(() => {
    const name = getPersonName(window.location.pathname);
    dataFetch(name);
  }, []);

  // React.useEffect(() => {
  //   console.log(data);
  // }, [data]);

  if (!data) {
    return <>Loading....</>;
  }

  return (
    <div>
      <h1>Detailpage</h1>
      {/* {data.results && data.results.length > 0 ? (
        <p>{data.results[0].name}</p>
      ) : (
        <p>none</p>
      )} */}
      {data ? <p>{data.results![0].name}</p> : <p>none</p>}
      <ul>
        <li>Eye Color: {data.results![0].eye_color}</li>
        <li>gender: {data.results![0].gender}</li>
        <li>Weight: {data.results![0].mass}kg</li>
        <li>Height: {data.results![0].height}cm</li>
      </ul>
      <Link href="/home">
        <button>back</button>
      </Link>
    </div>
  );
};

export default DetailPage;
