// import { createSelector } from "@reduxjs/toolkit";

export const selectCatalog = state => state.catalog.items;

export const selectIsLoading = state => state.catalog.isLoading;

export const selectError = state => state.catalog.error;

export const selectFilter = state => state.filters.filter;

export const selectParams = state => {
    const param = new URLSearchParams(state.params);
    return param.toString();
}

export const selectFavorites = state => state.favorits.favorits;

