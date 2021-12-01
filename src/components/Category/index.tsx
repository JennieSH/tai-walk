import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledCategory } from "./styles";
import { CategoryProps } from "./types";
import useImage from "@/hooks/useImage";
import { CategoryContext } from "@/context/categoryContext";
import type { CategoryAction } from "@/types/category";

const Category = ({ category }: CategoryProps) => {
  const images = useImage();
  const { categoryState, categoryDispatch } = useContext(CategoryContext);
  const { title, list, categoryType } = categoryState;

  useEffect(() => {
    categoryDispatch({ type: category } as CategoryAction);
  }, [category]);

  return (
    <StyledCategory>
      <h2>{title}</h2>

      <div className="category-list">
        {list.map(subject => (
          <Link
            to={`/${category}?keyword=${subject.keyword}`}
            className="category-item"
            key={subject.text}
            style={{
              backgroundImage: `url(${images[categoryType][subject.path].default})`
            }}
          >
            <h3>{subject.text}</h3>
          </Link>
        ))}
      </div>
    </StyledCategory>
  );
};

export default Category;
