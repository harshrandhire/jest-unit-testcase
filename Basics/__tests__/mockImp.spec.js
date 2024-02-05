test("mockImplementation", () => {
  const mockFn = jest
    .fn(() => "default")
    .mockImplementation(() => "First call")
    .mockImplementation(() => "Second call");
  const res1 = mockFn();

//   console.log("res1 :>> ", res1);
});
test("mockImplementation", () => {
  const mockFn = jest
    .fn(() => "default")
    .mockImplementationOnce(() => "First call")
    .mockImplementationOnce(() => "Second call");
  const res1 = mockFn();
  const res2 = mockFn();

  console.log(res1);
  console.log(res2);
//   console.log("res3 :>> ", res1);
});
