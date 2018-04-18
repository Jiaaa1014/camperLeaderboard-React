# Notes
* using `lodash` and `axois` packages

## Status
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

## References
[axios全攻略](https://ykloveyxk.github.io/2017/02/25/axios%E5%85%A8%E6%94%BB%E7%95%A5/)

[Build a Camper Leaderboard in ReactJS : FreeCodeCamp React Projects](https://www.youtube.com/watch?v=D8KE3hZEYTk)

---
### lodash
[1](https://stackoverflow.com/questions/35250500/correct-way-to-import-lodash)
[2](https://stackoverflow.com/questions/43479464/how-to-import-single-lodash-function)
[3](https://jigsawye.com/2017/09/04/make-good-use-of-lodash/)
