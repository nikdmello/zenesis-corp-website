"use client";

import { useEffect, useState } from "react";

export function useResponsiveCarouselPage(itemCount: number, activeIndex: number) {
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const tabletQuery = window.matchMedia("(min-width: 640px)");
    const desktopQuery = window.matchMedia("(min-width: 1280px)");

    const updateItemsPerPage = () => {
      setItemsPerPage(desktopQuery.matches ? 3 : tabletQuery.matches ? 2 : 1);
    };

    updateItemsPerPage();
    tabletQuery.addEventListener("change", updateItemsPerPage);
    desktopQuery.addEventListener("change", updateItemsPerPage);

    return () => {
      tabletQuery.removeEventListener("change", updateItemsPerPage);
      desktopQuery.removeEventListener("change", updateItemsPerPage);
    };
  }, []);

  const pageCount = Math.max(1, Math.ceil(itemCount / itemsPerPage));
  const activePage = Math.min(pageCount - 1, Math.floor(activeIndex / itemsPerPage));

  return {
    activePage,
    itemsPerPage,
    pageCount,
    startIndexForPage: (page: number) =>
      Math.min(Math.max(0, page) * itemsPerPage, Math.max(0, itemCount - 1)),
  };
}
