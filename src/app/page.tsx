'use client'
import jsonData from '../../config.json'
import Search from './components/search';
import { SetStateAction, useState } from 'react';
import ItemRow from './components/item-row';
import Filter from './components/filter';

export default function Home() {
  const [data, setData] = useState(jsonData);
  const [categories, setCategory] = useState(Array.from(new Set(jsonData.map((x) => x.categoria))));

  const handleChangeSearchBox = (e: { target: { value: SetStateAction<string>; }; }) => {
    filterBySearchBox(e.target.value.toString())
  }

  const handleChangeFilterBox = (e: { target: { value: SetStateAction<string>; }; }) => {
    filterByCategory(e.target.value.toString())
  }

  const filterBySearchBox = (filter: string) => {
    // Access input value
    const query = filter;
    // Create copy of original item list
    var updatedList = [...jsonData];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.titulo.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setData(updatedList);
  };

  const filterByCategory = (filter: string) => {
    if(filter === 'All'){
      var updatedList = [...jsonData];
       // Trigger render with updated values
      setData(updatedList);
      return;
    }
    // Access input value
    const query = filter;
    // Create copy of original item list
    var updatedList = [...jsonData];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.categoria.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setData(updatedList);
  };

  return (
    <div className="relative flex min-h-screen flex-col p-1">
      <Search onChange={handleChangeSearchBox}></Search>
      <Filter onChange={handleChangeFilterBox} categories={categories}></Filter>
      {
      data.map((registro: any, id: number) =>
        <>
          <ItemRow registro={registro} key="number"></ItemRow>
        </>)
      }
    </div >
  )
}
