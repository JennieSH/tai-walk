import { useLocation, useHistory } from "react-router-dom";

type Query = { [key: string]: string | null };

const filterNilFromObj = (queryObj: Query) => {
  const tempObj: { [key: string]: string } = {};
  for (const [key, value] of Object.entries(queryObj)) {
    if (value) tempObj[key] = value;
  }
  return tempObj;
};

const combineQuery = (queryObj: Query) => {
  const newQueryObj = filterNilFromObj(queryObj);
  const newQueryStr = new URLSearchParams(newQueryObj).toString();
  return newQueryStr;
};

const useQuery = (key: string | string[]) => {
  const query: Query = {};
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  if (Array.isArray(key)) {
    key.forEach(k => {
      query[k] = searchParams.get(k);
    });
  } else {
    query[key] = searchParams.get(key);
  }

  const routerPush = (queryObj: Query, path?: string) => {
    const targetPath = path || location.pathname;
    const queryStr = combineQuery(queryObj);

    history.push(`${targetPath}?${queryStr}`);
  };

  return { query, routerPush };
};

export default useQuery;
