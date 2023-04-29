# NewClassroomJavascript





What works:
1. Count by Gender works and reports accurately
2. Count by Country works

Defects:
1: Action type CountPasswordComplexity appears to be returning the password as "name".
2. Action type CountPasswordComplexity is considering numberic characters towards complexity even though instructions state
Complexity will be considered the number of non-alphanumeric characters in the password.
Non-alphanumeric characters should only include ! @ # & ( ) – [ { } ] : ; ', ? / * ` ~ $ ^ + = < > “
3. When "–" is inserted in a password, it converts to "\u2013" in results. I ran across this when I copied non-alphanumeric characters
from a website and it should be noted that "-" is not the same as "–". My keyboards version of "-" does not suffer from this issue.