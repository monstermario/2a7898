export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  /*
    Get the labels of pagination.
    insert dots if the first page or the last page is not a sibling of the current page
    if total page is 3, don't show dots.
    if first page, show 3 pages before dots.
    if last page, show 3 pages after dots.
  */
  const lastPage = Math.ceil(totalCount / pageSize);
  if (lastPage < 4) {
    console.log(Math.ceil(totalCount / pageSize));
    return Array(lastPage)
      .fill(0)
      .map((u, i) => i + 1);
  }

  let pageNumbers = [1];
  if (currentPage > 2) {
    pageNumbers.push(DOTS);
    if (currentPage === lastPage) pageNumbers.push(currentPage - 2);
    pageNumbers = [...pageNumbers, currentPage - 1, currentPage];
  } else if (currentPage === 2) {
    pageNumbers.push(currentPage);
  }

  if (currentPage + 1 < lastPage) {
    pageNumbers.push(currentPage + 1);
    if (currentPage === 1) pageNumbers.push(currentPage + 2);
    pageNumbers = [...pageNumbers, DOTS, lastPage];
  } else if (currentPage < lastPage) {
    pageNumbers.push(lastPage);
  }

  return pageNumbers;
}

export default usePagination;
