mod guessing_game;

// fn lit_ops(){
//   println!("1 + 2 = {}", 1u32 + 2);
//   println!("1 - 2 = {}", 1i32 - 2);

//   println!("true AND false is {}", true && false);
//   println!("true OR false is {}", true || false);
//   println!("NOT true is {}", !true);

//   println!("0011 AND 0101 is {:04b}", 0b0011u32 & 0b0101);
//   println!("0011 OR 0101 is {:04b}", 0b0011u32 | 0b0101);
//   println!("0011 XOR 0101 is {:04b}", 0b0011u32 ^ 0b0101);
//   println!("1 << 5 is {}", 1u32 << 5);
//   println!("0x80 >> 2 is 0x{:x}", 0x80u32 >> 2);

//   println!("One million is written as {}", 1_000_000u32);
// }

fn tuples(){
  #[derive(Debug)]
  struct Matrix(f32, f32, f32, f32);
  let long_tuple = (1u8, 2u16, 3u32, 4u64,
                      -1i8, -2i16, -3i32, -4i64,
                      0.1f32, 0.2f64,
                      'a', true);

  println!("long tuple first value: {}", long_tuple.0);
  println!("long tuple second value: {}", long_tuple.1);

  let tuple_of_tuples = ((1u8, 2u16, 2u32), (4u64, -1i8), -2i16);
  println!("tuple of tuples: {:?}", tuple_of_tuples);

  println!("one element tuple: {:?}", (5u32,));
  println!("just an integer: {:?}", (5u32));

  let tuple = (1, "hello", 4.5, true);

  let (a, b, c, d) = tuple;
    println!("{:?}, {:?}, {:?}, {:?}", a, b, c, d);

    let matrix = Matrix(1.1, 1.2, 2.1, 2.2);
    println!("{:?}", matrix);
}

fn main(){
  // println!("Hello world!")
  // lit_ops()
  // tuples()
  guessing_game::main()
}