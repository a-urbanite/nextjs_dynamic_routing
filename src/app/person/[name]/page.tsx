"use client";
import React from "react";
import { swapiRes, swapiItem } from "@/app/home/page";

const DetailPage = () => {
  const [data, setData] = React.useState(null as unknown as swapiRes);

  const getPersonName = (pathname: string) => {
    const elements = pathname.split("/");
    const name = elements[2];
    const cleanName = name.replace("_", " ");
    return cleanName;
  };

  const name = getPersonName(window.location.pathname);

  const dataFetch = async () => {
    const res = await fetch(`https://swapi.dev/api/people/?search=${name}`);
    const data = await res.json();
    setData(data);
  };

  React.useEffect(() => {
    dataFetch();
  }, []);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

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
    </div>
  );
};

export default DetailPage;
