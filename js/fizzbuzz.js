var phoneBook = {
  "Abe": "111-111-1111",
  "Bob": "222-222-2222",
  "Cam": "333-333-3333",
  "Dan": "444-444-4444",
  "Ern": "555-555-5555",
  "Fry": "111-111-1111",
  "Gil": "222-222-2222",
  "Hal": "333-333-3333",
  "Ike": "444-444-4444",
  "Jim": "555-555-5555",
  "Kip": "111-111-1111",
  "Liv": "222-222-2222",
  "Mia": "333-333-3333",
  "Nik": "444-444-4444",
  "Oli": "555-555-5555",
  "Pam": "111-111-1111",
  "Qiq": "222-222-2222",
  "Rob": "333-333-3333",
  "Stu": "444-444-4444",
  "Tad": "555-555-5555",
  "Uwe": "111-111-1111",
  "Val": "222-222-2222",
  "Wil": "333-333-3333",
  "Xiu": "444-444-4444",
  "Yam": "555-555-5555",
  "Zed": "111-111-1111"
};

// for(i = 0; i <= 100; i++) {
  
//   if(i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizzbuzz");
//   } else if( i % 3) {
//     console.log("Fizz");
//   }
//     else if( i % 5) {
//       console.log("buzz");
//     }
//   else {
//     console.log(i);
//   }
// }

for (var key in phoneBook) { //for...in loop
  if(phoneBook[key] === "333-333-3333") {  //in order to reference the key in the key-value pair, you want to reference
    console.log(key);
  }
}