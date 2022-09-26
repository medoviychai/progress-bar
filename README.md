# ProgressBar Component

Input props: 
1. array like this:
  [
    {name: 'Sold', color: '#BD1FBE', value: 677},
    {name: 'Got free', color: '#FC64FF', value: 23},
    ...
  ]
2. height - number, bar line height
3. width - number, bar line width
Total is calculated by this data (as a sum of each value), and the bar line and its legend are built basing on fraction of value to total
0-value bars are not displayed, non-zero values always have not less than 1 bar (bars amount is an integer)

## Demo

https://user-images.githubusercontent.com/90955335/192301130-5370a9bb-3e22-46da-b441-51852a798134.mp4
