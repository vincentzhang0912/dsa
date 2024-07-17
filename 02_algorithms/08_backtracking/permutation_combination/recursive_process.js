function recursion(a) {
  console.log('a ===',a,'start');

  for (let i = a; i < 2; i++) {
      console.log('i ===',i)
      recursion(i + 1);
  }
  console.log('a ===',a,"end");
}
recursion(0)