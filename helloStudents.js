'use strict'

// 1. Read the JSON file into a variable called students
let students = require('./students.json')

// 2. Iterate over the students array and print Hello with their full names to the console
students.forEach((student) => {
    console.log(`Hello ${student.firstName} ${student.lastName}`)
})
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D

const counter = students.filter(student => {
    return student.lastName.charAt(0) === 'D'
}) 
console.log(`People with last names starting with D: ${counter.length}`)
// e.g. Count of last names starting with D is 1