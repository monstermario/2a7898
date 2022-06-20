# Improvements

## Question:
```
Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?
```
### Answer:
To get the data from api, we have to use `fetch` or `axios` to call api. The request of api should includes `currentPage` and `pageSize` and response should be includes `data` and `totalPage`.
We can use useEffect or useMemo to fetch the data when `currentPage` or `pageSize` are updated. It is better to use `useMemo` to improve the performance by reducing api calls.
I think, we have to consider about the failed case in api calling, so we have to add the error component/page.

## Question:
```
Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?
```

### Answer:
Nanoid is good to generate `key` props to uniquely identify children in some lists, but the values are not stable. It means this hurts performance because it prevents React to avoid re-rendering more than it needs do.
So we should be using stable keys for item in the lists for optimal render performance.
