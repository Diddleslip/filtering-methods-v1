
# Record Table Solo Project 
### A repo made to test out Material UI's Table components and features.

### Things learned:
* After searching 7+ NPM's with Table components, Material UI has the features required
* Expandable forms were one hell of a journey to learn!
* React-table despite it's usefulness, was not able to get working


### Overall, a productive project which allowed for better understanding of Material-UI'S Table component.

## Preview of work done:
### Image of a Table component displaying dynamic content
![image](https://user-images.githubusercontent.com/52723004/94143214-853c4080-fe3d-11ea-806d-e34654cf86e9.png)

### Image of the Table rendering additional info in a sub-table component!
![image](https://user-images.githubusercontent.com/52723004/94143287-9c7b2e00-fe3d-11ea-9a2c-0573050d32b8.png)

## KEY NOTES: 
* React-table seems like a fine alternative, if we can get their makeData's functionality working.

## Steps to recreate:

### In console:
`
npm install @material-ui/core
`

`
npm i @material-ui/icons
`

`
npm i react-style-comp
`

### Add these lines to the App.js file:
```
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
```

### Choose any example code from the Docs here and adjust to the best fit.
`
https://material-ui.com/components/tables/`

`
https://www.npmjs.com/package/react-alice-carousel
`
