### Notes

* using `lodash` and `axois` packages

* two state & three arrays
1. SortedBy recent : (CURRENT, CAPITALIZED) = (true, false)
2. SortedBy alltime : (CURRENT, CAPITALIZED) = (false, false)
3. SortedBy arrangeByName : (CURRENT, CAPITALIZED) = (false, true)

```js
  state = {
    recent: [],
    alltime: [],
    arrangeByName: [],
    CURRENT: true,
    CAPITALIZED: false
  };
```
```js
<div>
{!CURRENT && !CAPITALIZED && (then map the `alltime` and render the tr.td.td.td.td) }
</div>
```
