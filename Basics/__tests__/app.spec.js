const crypto = require("crypto");

const { getData } = require("../app");

// jest.mock("crypto");

test("Fetch Data.", async () => {
  // crypto.randomBytes.mockResolvedValueOnce("bytes");

  //? to mock perticular method we an use spyOn(Object, methodName)
  jest.spyOn(crypto, "randomBytes").mockResolvedValueOnce("bytes");
  const res = await getData();
  console.log(res);
  expect(res).toBe("bytes")
});
