// свои кастомные хуки типа useAppDispatch, useAppSelector

import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;