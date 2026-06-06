

str = 'Raju'

str = "Raju"

str = `Vittal`

sentence = `I'm going with ${str}`

console.log(sentence)


console.log(6+"6")  // "66" , 66

// split

// join

str = "Javascript"
console.log(str.length)

str = "     Javascript     "
console.log(str)

str2 = "     Javascript      class   ".trim()
console.log(str2)

//trimStart()

//trimEnd()

str3 = "this IS Javascript class".toUpperCase()

console.log(str3)

str3 = "this IS Javascript class".toLowerCase()

console.log(str3)

// Strings Immutable 

arr = [2,6,87,9,34]

arr[2] = 23

console.log(arr)

str5 = "Anksri"

str5[2] = "u"

console.log(str5)

str6 = "Anksri".replace("k", "u")

console.log(str6)

str3 = "this IS Javascript class".replaceAll("a", "t")

console.log(str3)


str6 = "this IS Javascript class"

str6.includes("Raju")  // false


str6.includes("IS")   // true 

str7 = "Javascript"

console.log(str7[0])

console.log(str7.charAt(0))

stuname = "Naveen"

console.log(stuname.charAt(2))


str = Number("67") //67

console.log(str)

console.log(typeof(str))

num = String(89)  //"89"

console.log(num)

console.log(typeof(num))


str = "45.78"

num2 = parseInt(str)

console.log(num2)


num3 = parseFloat(str)

console.log(num3)

// slice 
// splice

// price1 = "120"

// price2 = "60"

// tottalprice = "180"


// Number(price1)+Number(price2) == Number(tottalprice)

// 180  == 180

str = "1".padStart(2,"0")  // 01

console.log(str)

///======================================