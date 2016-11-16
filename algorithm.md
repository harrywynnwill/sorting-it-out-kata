#Notes on sorting algorithms

#### Bubble Sort

1. compare first item with the second, if bigger swap them - so bigger one is in 2nd position (or index 1, not 0).
2. compare second with the third, if bigger swap else leave.
3. continue doing this for the entire array.

#### Selection Sort

1. iterate through the array swap the lowest element with the element at index 0
2. iterate throught the array bar index 0 and swap the lowest element index 1
3. continue the above until you reach the last element in the array.

#### Insertion Sort (like a deck of playing cards manual sort)

1. start with one element, first element.
2. if second element is lower you move first element to index 1 and place second element at index 0.
3. next element is in between the two others you move first element to index 2 and insert element 3 at index 1.

etc...

#### Merge Sort

break down array into smaller pieces then merge them together by comparing them
2 methods
1. divides array into two
2. merges array.




##### reference

http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/
