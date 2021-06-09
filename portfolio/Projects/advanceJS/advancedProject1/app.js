// 40 is highest grade
let correctAnswer = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b']

// one blank answer and one wrong answer
let studentAnswer = ['a', 'b', 'c', '', 'a', 'c', 'c', 'd', 'a', 'b']

// check if wrong answers will have a score of 0 with line below
// let studentAnswer = ['n','n','n','n','n','n','n','n','n','n']

let rightAnswer = []

let wrongAnswer = []

for(i = 0; i < correctAnswer.length; i++){
    if(studentAnswer[i] === correctAnswer[i]){
        rightAnswer.push(1)
        console.log(`${(i + 1)}: correct answer`)
    } else if(studentAnswer[i] == ''){
        console.log(`${(i + 1)}: Blank answer`)
    } else{
        wrongAnswer.push(1)
        console.log(`${(i + 1)}: wrong answer`)
    }
}

let right = rightAnswer.length * 4
let wrong = wrongAnswer.length * (-1)

let score = right + wrong

let grade = score/(correctAnswer.length * 0.04)

if(score < 0){
    let score = 0
    let grade = 0
    console.log(`score is: ${score}/40 points`)
    console.log(`grade is: ${grade}%`)
} else{
    console.log(`score is: ${score}/40 points`)
    console.log(`grade is: ${grade}%`)
}
