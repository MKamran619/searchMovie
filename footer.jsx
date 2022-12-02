import React from 'react';


function footer(){

const date= new Date();
const currentYear= date.getFullYear();

return (<footer> <p>copy right {currentYear} </p> </footer>);
}

export default footer;
