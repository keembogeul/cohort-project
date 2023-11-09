import React, { useEffect, useState } from "react";
import { fetchData, setData } from "../slices/cohortSlice";
import { useAppSelector, useAppDispatch } from '../store/hooks'


export default function CohortChart() {
  const cohortData = useAppSelector((state) => state.cohort.data);
  const dispatch = useAppDispatch();


  const fetchDataFromAPI = async () => {
    try {
      const response = await dispatch(fetchData());

      console.log(response)

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, [dispatch]);

  return <></>
}