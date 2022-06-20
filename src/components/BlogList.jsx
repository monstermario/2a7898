import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useEffect, useState } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPaginationData, setCurrentPaginationData] = useState(blogs.posts.slice(0, Math.min(15, blogs.posts.length)));
  const [currentPageSize, setCurrentPageSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPaginationData(
      blogs.posts.slice(
        (currentPage - 1) * currentPageSize,
        Math.min(blogs.posts.length, currentPage * currentPageSize)
      )
    );
  }, [currentPage, currentPageSize]);

  const updateRowsPerPage = (val) => {
    setCurrentPage(1);
    setCurrentPageSize(Number(val));
  };
  const updatePage = (val) => {
    setCurrentPage(val);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={currentPageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
