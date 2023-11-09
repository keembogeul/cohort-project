import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import { RootState, fetchData, setData } from "../slices/cohortSlice";
import { DataType } from '../store/type';

export default function CohortChart() {
  const cohortData = useSelector((state: RootState) => state.cohort.data);
  const dispatch = useAppDispatch();


  const fetchDataFromAPI = async () => {
    try {
      await dispatch(fetchData());

    } catch (error) {
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, [dispatch]);

  return <></>
}