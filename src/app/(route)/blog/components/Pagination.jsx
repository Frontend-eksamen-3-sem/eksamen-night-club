"use client";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";

const PaginationClient = ({ page, totalPages }) => {
  const router = useRouter();

  const handleChange = (newPage) => {
    router.push(`?page=${newPage}`);
  };

  return (
    <Stack spacing={2} className="my-10 flex justify-center">
      <Pagination count={totalPages} page={page} onChange={handleChange} color="primary" size="large" variant="outlined" shape="rounded" sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "white",
            color: "black",
          }
        }}
      />
    </Stack>
  );
};

export default PaginationClient;

