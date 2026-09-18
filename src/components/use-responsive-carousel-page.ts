"use client";

import { useEffect, useState } from "react";

export function useResponsiveCarouselPage(
  itemCount: number,
  activeIndex: number,
  desktopItemsPerPage = 3,
) {
  const [itemsPerPage, setItemsPerPage] = useState<number | null>(null);

  useEffect(() => {
    const tabletQuery = window.matchMedia("(min-width: 640px)");
    const desktopQuery = window.matchMedia("(min-width: 1280px)");

    const updateItemsPerPage = () => {
      setItemsPerPage(desktopQuery.matches ? desktopItemsPerPage : tabletQuery.matches ? 2 : 1);
    };

    updateItemsPerPage();
    tabletQuery.addEventListener("change", updateItemsPerPage);
    desktopQuery.addEventListener("change", updateItemsPerPage);

    return () => {
      tabletQuery.removeEventListener("change", updateItemsPerPage);
      desktopQuery.removeEventListener("change", updateItemsPerPage);
    };
  }, [desktopItemsPerPage]);

  const resolvedItemsPerPage = itemsPerPage ?? 1;
  const pageCount = Math.max(1, Math.ceil(itemCount / resolvedItemsPerPage));
  const activePage = Math.min(pageCount - 1, Math.floor(activeIndex / resolvedItemsPerPage));

  return {
    activePage,
    itemsPerPage: resolvedItemsPerPage,
    pageCount,
    isReady: itemsPerPage !== null,
    startIndexForPage: (page: number) =>
      Math.min(Math.max(0, page) * resolvedItemsPerPage, Math.max(0, itemCount - 1)),
  };
}
