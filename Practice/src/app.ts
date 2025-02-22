// let inp1 = document.getElementById("inp1") ! as HTMLInputElement
// let inp2 = document.getElementById("inp2") ! as HTMLInputElement
// let addBtn = document.getElementById("addBtn") !

// function sumOffTwo(firtsNumber :number , secondNumber : number){
//     return firtsNumber + secondNumber
// }

// addBtn.addEventListener("click" , function(){
//     console.log(sumOffTwo(+inp1.value , +inp2.value))
// })

// var userName : number | string
// userName = "ali"
// userName = 50
// console.log(userName)

// let cities: string[] = []
// cities.push("20")
// console.log(cities)

// var userName: any
// userName = 'ali'
// userName = 70
// userName = false

// var randomData : [string , number , number ] ; // tuples fix length array with it's types

// randomData = ['John' , 0  , 1]      // two index kee jaga num 0  upd kia
// randomData[2] = 0
// console.log(randomData)

// js object

// let customerData:{

// } = {
//     userName : 'ali',
//     position: 1,
//     skills:["HTML" , "CSS"],
//     pakistani: true
// }

// customerData.email = "saad@gmail.com"

// let customerData = {
//     user:"john"
// }
// console.log(customerData.data.class)  //wrong
// console.log(customerData?.data?.class)

// type customerInfo ={
//     name: string
//     position: number
//     skill:[string,string]
//     pakistani:boolean
// }
// let customerData:customerInfo=
// {
//         name : 'ali',
//         position: 1,
//         skill:["HTML" , "CSS"],
//         pakistani: true
//     }

// console.log(customerData)
// type dummyInfo={ 
//     userName:string
// }
// let dummyObj:dummyInfo = {
//     userName:"ali"
// }
// let customerArray : customerInfo[]=[]
// customerArray.push(dummyObj)    //error here  yeh keh rha ismay customer kee type kee things bee honi chaiyh
// customerArray.push(customerData)
// console.log(customerArray)

// class studentInfo {
//    private name: string
//     position: number

//     constructor (n:string, p:number){
//         this.name = n
//         this.position = p
//     }
//     getName(){
//         return this.name
//     }
//     setName(userName:string){
//         this.name = userName
//     }
// }


// let newStd = new studentInfo ("ali" , 2) 

// newStd.name = "john"   // error , because name property is private 
// newStd.setName("john")
// console.log(newStd)

// class newBatch{
//     constructor(public stdLength:number){

//     }
// }

// let strength = new newBatch(30)  //it will put the number in class obj
// console.log(strength)

// let userName: string
// userName = "ali"
// console.log(typeof(userName))

// let fruits : string[] = []
// fruits.push("apple" , "mango" , "banana")
// console.log(fruits)


// let fruits: string[] = []

// fruits.push('Apple')
// fruits.push(true)
// fruits.push(false)

// let rollNo = 123                            //default behaviour type string
// rollNo = 123

// type student = {
//     name: string
//     skills: string[]
//     class: string
//     rollNo: number
// }


// let newStudent: student = {
//     name: 'Ali',
//     skills: ['HTML' , 'CSS' , 'HTML' , 'CSS'] ,
//     class: 'Matric',
//     rollNo: 123
// }
// console.log(newStudent)

// type studentSkills = [string , boolean]
// let mySkills: studentSkills = ['HTML' , true ]
// console.log(mySkills)

