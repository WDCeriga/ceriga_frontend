import { FC } from "react";

import { Pagination } from "@mui/material";

import PaginationButton from "./Button/Button";
import s from "./pagination.module.scss";

interface IPagination {
  count: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

const PaginationComponent: FC<IPagination> = ({
  count,
  onPageChange,
  currentPage,
}) => {
  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    onPageChange(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < count) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={s.container}>
      <PaginationButton
        onEvent={handlePrevPage}
        type="prev"
        disabled={currentPage === 1}
      />
      <Pagination
        count={count}
        page={currentPage}
        onChange={handleChangePage}
        hidePrevButton
        hideNextButton
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#303030",
          },
          "& .MuiPaginationItem-ellipsis": {
            color: "#303030",
          },
          "& .Mui-selected": {
            background: "#C80F0F !important",
            color: "white",
          },
        }}
      />
      <PaginationButton
        onEvent={handleNextPage}
        type="next"
        disabled={currentPage === count}
      />
    </div>
  );
};

export default PaginationComponent;
