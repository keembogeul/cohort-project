import React, { useEffect, useState } from "react";
import { fetchData } from "../slices/cohortSlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export default function CohortChart() {
  const cohortData = useAppSelector((state) => state.cohort.data);
  const dispatch = useAppDispatch();

  const fetchDataFromAPI = async () => {
    try {
      await dispatch(fetchData());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, [dispatch]);

  return <></>;
}
