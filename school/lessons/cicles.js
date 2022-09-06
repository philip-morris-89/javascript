let counter = 0;
while (counter < 10) {
  console.log('Valore di Counter (While)', counter);
  counter ++;
}

counter = 0;
do {
  console.log('Valore di Counter (Do While)', counter);
  counter++;
} while (counter === 0);

for (let counter = 0; counter < 10; counter++) {
  console.log('Valore di Counter (For)', counter);
}

counter = 0;
for (; counter < 10; ) {
  console.log('Valore di Counter (For simile a while)', counter);
  counter++;
}

for (let counter = 0; counter < 10; counter++) {
  if (counter === 5) break;
  console.log('Valore di Counter (Break)', counter);
}

for (let counter = 0; counter < 10; counter++) {
  if (counter === 5) continue;
  console.log('Valore di Counter (Continue)', counter);
}